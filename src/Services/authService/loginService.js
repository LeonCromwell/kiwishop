import * as httprequest from '../../Ultils/httpRequest';

export const login = async (username, password) => {
    try {
        const res = await httprequest.post('/auth/login', {
            username: username,
            password: password,
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
