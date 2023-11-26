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

export const createProduct = async (data) => {
    try {
        const res = await httpRequest.post('/product/create', {
            name: data.name,
            description: data.describe,
            price: parseInt(data.price, 10),
            quantity: data.weight,
            categoryId: '1',
            imageIds: [3],
            origin: data.origin,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const updateProduct = async (data) => {
    try {
        const res = await httpRequest.put(`/product/update/${parseInt(data.id, 10)}`, {
            name: data.name,
            description: data.describe,
            price: parseInt(data.price, 10),
            quantity: data.weight,
            categoryId: '1',
            imageIds: [3],
            origin: data.origin,
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export const deleteProduct = async (id) => {
    try {
        const res = await httpRequest.del(`/product/delete/${id}`, {});
        return res;
    } catch (error) {
        console.log(error);
    }
};
