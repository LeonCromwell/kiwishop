import * as httpRequest from '~/Ultils/httpRequest';

export const getListProduct = async () => {
    try {
        const res = httpRequest.get('/product/', {});
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const getListNewProduct = async (numberLimmit) => {
    try {
        const res = await httpRequest.get(`/product/newest/${numberLimmit}`, {});
        return res;
    } catch (error) {
        console.log(error);
    }
};
