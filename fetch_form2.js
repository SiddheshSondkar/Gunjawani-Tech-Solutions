async function getForm() {
  try {
    const res = await fetch('https://forms.gle/h6GgraGsrs6rGXDX7', { redirect: 'follow' });
    const data = await res.text();
    
    const actionMatch = data.match(/https:\/\/docs\.google\.com\/forms\/d\/e\/[a-zA-Z0-9_-]+\/formResponse/);
    console.log("Action URL:", actionMatch ? actionMatch[0] : "Not found");
    
    const fbPublicLoadDataMatch = data.match(/var FB_PUBLIC_LOAD_DATA_ = (\[.*?\]);/s);
    if (fbPublicLoadDataMatch) {
      const parsed = JSON.parse(fbPublicLoadDataMatch[1]);
      const fields = parsed[1][1];
      fields.forEach(f => {
        console.log(`Field: ${f[1]}, ID: entry.${f[4][0][0]}`);
      });
    }
  } catch (e) {
    console.error(e);
  }
}
getForm();
