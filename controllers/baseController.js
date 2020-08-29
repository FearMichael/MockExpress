const axios = require("axios");

class Data {

    baseLink = "";

    constructor(baseLink) {
        this.baseLink = baseLink;
    }

    getAll() {
        return axios.get(this.baseLink);
    }

    getById(id) {
        return axios.get(`${this.baseLink}/${id}`);
    }

    update(id, data) {
        return axios.put(`${this.baseLink}/${id}`, data);
    }

    create(data) {
        return axios.post(`${this.baseLink}`, data);
    }

    delete(id) {
        return axios.delete(`${this.baseLink}/${id}`);
    }

}

module.exports = Data;