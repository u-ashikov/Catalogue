import $ from 'jquery';
import errorHandler from '../utilities/errorHandler';

const appKey='kid_BkDGjk_Nx';
const appSecret='a577eecc6f16434cb7f0ef8d5f630c85';
const baseURL='https://baas.kinvey.com/';
const base64auth=btoa(appKey+":"+appSecret);

export default class Requester {
    constructor(authType) {
        switch (authType) {
            case 'Basic':
                this.authorization={'Authorization':'Basic '+base64auth};
                break;
            case 'Kinvey':
                this.authorization={'Authorization':'Kinvey '+sessionStorage.getItem('authToken')};
                break;
            default:console.log('Invalid authentication Type!');break;
        }
    }

    getRequest(module,uri,id) {
        if (id) {
            return $.ajax({
                method: 'GET',
                url: baseURL + module + "/" + appKey + '/' + uri + "/" + id,
                headers: this.authorization,
                contentType: 'application/json',
                error:errorHandler.handleAjaxError
            })
        } else {
            return $.ajax({
                method: 'GET',
                url: baseURL + module + "/" + appKey + '/' + uri,
                headers: this.authorization,
                contentType: 'application/json',
                error:errorHandler.handleAjaxError
            })
        }
    }

    postRequest(module,uri,data) {
        return $.ajax({
            method:'POST',
            url:baseURL+module+'/'+appKey+'/'+uri,
            headers:this.authorization,
            data:JSON.stringify(data),
            contentType:'application/json',
            error:errorHandler.handleAjaxError
        })
    }

    putRequest(module,uri,data,id) {
        return $.ajax({
            method:"PUT",
            url:baseURL+module+'/'+appKey+'/'+uri+"/"+id,
            headers:this.authorization,
            data:JSON.stringify(data),
            contentType:"application/json",
            error:errorHandler.handleAjaxError
        })
    }
}
