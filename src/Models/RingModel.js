import Requester from '../utilities/requester';

let RingModel={
    getAllRings:function () {
        let allRingsRequester=new Requester('Kinvey');
        return allRingsRequester.getRequest('appdata','rings');
    }
};

export default RingModel;
