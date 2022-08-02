const API_DOMAIN = "http://localhost:8080";

const login = async (username, password)=>{
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    try {
        const response = await fetch(`${API_DOMAIN}/api/auth/signin`, {
            method: 'POST',
            headers: myHeaders,
            body: JSON.stringify({
                username,
                password
            }),
        });
        const jsonResponse = await response.json();
        console.log(jsonResponse);
        return jsonResponse;
    } catch (error) {
        return console.log('error', error);
    }
}



module.exports = {
    login
};
