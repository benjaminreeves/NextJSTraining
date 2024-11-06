export const SubmitForm = async (formData) => {
        const url = 'http://localhost:3001/forms';

        await fetch(url, {
            method: "POST",
            mode: "no-cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
        }).then(response => {
            console.log(`response: ${response.status}`)
            return true;
        }).catch((e) => {
            console.log(`Error occurred: ${e.message}`);
            return false;
        })
}

