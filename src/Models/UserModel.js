import Requester from '../utilities/requester';

let UserModel={
    loginUser:function (data) {
        let loginRequester=new Requester('Basic');
        loginRequester.postRequest('user','login',data);
    },
    logoutUser:function (data) {
        let logoutRequester=new Requester('Kinvey');
        logoutRequester.postRequest('user','_logout',data);
    },
    registerUser:function (data) {
        let registerRequester=new Requester('Basic');
        registerRequester.postRequest('user','',data);
    }
};

export default UserModel;
