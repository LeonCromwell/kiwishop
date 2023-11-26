import * as httprequest from '../../Ultils/httpRequest';

export const register = (email, username, password) => {
    const res = httprequest.post('/auth/register', {
        email: email,
        username: username,
        password: password,
    });
    return res;
};
