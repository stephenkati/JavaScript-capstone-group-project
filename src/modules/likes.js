import {involvementAPIURL, appId} from './setup-involvementAPi.js'

const addLike = async (index) => {
    const response = await fetch(`${involvementAPIURL}${appId}/likes`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            item_id: `${index}`,
        }),
    });

    const data = await response.text()
    return data;
}


const getLike = async (index) => {
    const response = await fetch(`${involvementAPIURL}${appId}/likes`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const data = await response.json();

    data.forEach(element => {
        if(parseInt(element.item_id) === index){
            const likes = document.querySelector(`#likes-${index}`)
            likes.innerHTML = `${element.likes} likes`
        }
    });
}

export { addLike, getLike }