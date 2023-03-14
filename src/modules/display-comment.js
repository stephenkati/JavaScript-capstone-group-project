import {involvementAPIURL, appId} from './setup-involvementAPi.js'

const addComment = async () => {
    const response = await fetch(`${involvementAPIURL}${appId}/comments`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item_id: '1',
            username: "mike",
            comment: "hello micronaut"
        }),
    });

    const data = await response.text()
    return data;
}
