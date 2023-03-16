const involvementAPIURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/';

const createApp = async () => {
  const response = await fetch(involvementAPIURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'HomeFinder',
    }),
  });

  const data = await response.text();
  return data;
};
createApp();
const appId = '4eLu84EDG8YaXWuL7mOL';

export { involvementAPIURL, appId };