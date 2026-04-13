const https = require('https');

https.get('https://forms.gle/h6GgraGsrs6rGXDX7', (res) => {
  if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
    https.get(res.headers.location, (res2) => {
      let data = '';
      res2.on('data', chunk => data += chunk);
      res2.on('end', () => {
        const actionMatch = data.match(/https:\/\/docs\.google\.com\/forms\/d\/e\/[a-zA-Z0-9_-]+\/formResponse/);
        console.log("Action URL:", actionMatch ? actionMatch[0] : "Not found");
        
        const fbPublicLoadDataMatch = data.match(/var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);/s);
        if (fbPublicLoadDataMatch) {
          try {
            const parsed = JSON.parse(fbPublicLoadDataMatch[1]);
            const fields = parsed[1][1];
            fields.forEach(f => {
              console.log(`Field: ${f[1]}, ID: entry.${f[4][0][0]}`);
            });
          } catch(e) {
            console.log("Error parsing JSON");
          }
        }
      });
    });
  }
});
