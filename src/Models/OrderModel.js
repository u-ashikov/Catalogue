import Requester from '../utilities/requester';

let OrderModel={
    postOrder:function (data) {
        let requester=new Requester('Kinvey');
        return requester.postRequest('appdata','orders',data);
    },
    getAllOrders:function () {
        let requester=new Requester('Kinvey');
        return requester.getRequest('appdata','orders');
    }
};

export default OrderModel;
