const API_DOMAIN = "https://localhost:8443";

const createSecuredHeaders = (session) => {
    var securedHeaders = createDefaultHeaders();
    console.log("accessToken",session?.user?.accessToken);
    const accessToken = session?.user?.accessToken;
    if(accessToken){
        securedHeaders?.append('x-access-token', accessToken);
    }
    return securedHeaders;
}

const createDefaultHeaders = () => {
    var defaultHeaders = new Headers();
    defaultHeaders.append("Content-Type", "application/json");
    return defaultHeaders;
}

const login = (username, password)=>{
    return fetch(`${API_DOMAIN}/api/auth/signin`, {
        method: 'POST',
        headers: createDefaultHeaders(),
        body: JSON.stringify({
            username,
            password
        }),
    }).then((response)=>{
        return response.json();
    });
}

const mpPayment = (feeIds, session)=>{
    return fetch(`${API_DOMAIN}/api/mercadopago/payment`, {
        method: 'POST',
        headers: createSecuredHeaders(session),
        body: JSON.stringify({
            feeIds: feeIds,
        }),
    }).then((response)=>{
        return response.json();
    });
}

const memberList = (session)=>{
    return fetch(`${API_DOMAIN}/api/member/list`, {
        method: 'GET',
        headers: createSecuredHeaders(session),
    }).then((response)=>{
        return response.json();
    });
}

const memberTypeList = (session)=>{
    return fetch(`${API_DOMAIN}/api/memberType/list`, {
        method: 'GET',
        headers: createSecuredHeaders(session),
    }).then((response)=>{
        return response.json();
    });
}

const createMemberType = (session, memberType)=>{
    return fetch(`${API_DOMAIN}/api/memberType/create`, {
        method: 'POST',
        headers: createSecuredHeaders(session),
        body: JSON.stringify({
            ...memberType
        }),
    }).then((response)=>{
        console.log("RESPONSE", response);
        return response.json();
    }).catch((error)=>{
        console.log(error)
        return null;
    });
}

const deleteMemberType = (session, memberType)=>{
    return fetch(`${API_DOMAIN}/api/memberType/delete`, {
        method: 'DELETE',
        headers: createSecuredHeaders(session),
        body: JSON.stringify({
            ...memberType
        }),
    }).then((response)=>{
        console.log("RESPONSE", response);
        return response.json();
    }).catch((error)=>{
        console.log(error)
        return null;
    });
}

const feeTypeList = (session)=>{
    return fetch(`${API_DOMAIN}/api/feeType/list`, {
        method: 'GET',
        headers: createSecuredHeaders(session),
    }).then((response)=>{
        return response.json();
    });
}

const usersList = (session)=>{
    return fetch(`${API_DOMAIN}/api/user/list`, {
        method: 'GET',
        headers: createSecuredHeaders(session),
    }).then((response)=>{
        return response.json();
    });
}

module.exports = {
    login,
    mpPayment,
    memberList,
    memberTypeList,
    createMemberType,
    deleteMemberType,
    feeTypeList,
    usersList
};
