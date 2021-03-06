import Requester from '../utilities/requester';

let UserModel={
    loginUser:function (data) {
        let loginRequester=new Requester('Basic');
        return loginRequester.postRequest('user','login',data);
    },
    logoutUser:function () {
        let logoutRequester=new Requester('Kinvey');
        return logoutRequester.postRequest('user','_logout');
    },
    registerUser:function (data) {
        let registerRequester=new Requester('Basic');
        return registerRequester.postRequest('user','',data);
    }
};

export default UserModel;
