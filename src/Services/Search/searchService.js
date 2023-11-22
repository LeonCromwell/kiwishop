import * as httprequest from '../../Ultils/httpRequest';

export const search = async (keyword) => {
    try {
        const res = httprequest.get('/product/search', {
            params: {
                keyword: keyword,
            },
        });
        return (await res).data;
    } catch (error) {
        console.log(error);
    }
};
