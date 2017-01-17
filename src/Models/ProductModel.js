import Requester from '../utilities/requester';

let ProductModel={
    getAllProducts:function (uri) {
        let allProductsRequester=new Requester('Kinvey');
        return allProductsRequester.getRequest('appdata',uri);
    },
    getSingleProduct:function (uri,id) {
        let singleProductRequester=new Requester('Kinvey');
        return singleProductRequester.getRequest('appdata',uri,id);
    },
    addProduct:function (uri,data) {
      let requester=new Requester('Kinvey');
      return requester.postRequest('appdata',uri,data);
    },
    updateSingleProducts:function (uri,id,data) {
        let singleProductRequester=new Requester('Kinvey');
        return singleProductRequester.putRequest('appdata',uri,data,id);
    }
};

export default ProductModel;
