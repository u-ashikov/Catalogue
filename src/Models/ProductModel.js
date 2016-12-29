import Requester from '../utilities/requester';

let ProductModel={
    getAllProducts:function (uri) {
        let allProductsRequester=new Requester('Kinvey');
        return allProductsRequester.getRequest('appdata',uri);
    },
    getSingleProduct:function (id,uri) {
        let singleProductRequester=new Requester('Kinvey');
        return singleProductRequester.getRequest('appdata',uri,id);
    }
};

export default ProductModel;
