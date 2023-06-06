import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://api.equitylab.io',
    withCredentials: false,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
})

export default {
    async getUser(email = "") {
        const user = await apiClient.get("/users/email/" + email)
        return user.data;
    },

    async postUser(user = {}) {
        let test = await this.getUser(user.email);
        if (test.email) throw new Error("A user with this email already exists!");
        apiClient.post("/users", user);
    },

    async updateUser(email = "", updates = {}) {
        apiClient.patch("/users/email/" + email, updates);
    },
    
    getLocalUser() {
        return JSON.parse(sessionStorage.getItem("user"));
    },
}