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

    const data = await response.text()
}

// createApp();

appId = 'JIjFwoEkLZESIoGzrK2r';