export async function get() {
  return {
    body: JSON.stringify({
      page1: 'Home',
      page2: 'Demo',
      page3: 'Download',
      url1: '/',
      url2: 'demo',
      url3: 'download',
    }),
  };
}
