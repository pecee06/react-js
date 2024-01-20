import config from "../conf/conf.js"
import { Client, Account, ID } from "appwrite";

class AuthService{
    client = new Client();
    account;

    constructor(){
        this.client.setEndpoint(config.apiEndpoint);
        this.client.setProject(config.projectID);
        this.account = new Account(this.client);
    }

    async signup({email, password, username}){
        try {
            const promise = await this.account.create(ID.unique(), email, password, username);

            if (! promise)
                throw new Error("Unable to create your account");

            this.login({email,password});

            return promise;
        } catch (err) {
            console.error(err.message);
        }
    }

    async login({email, password}){
        try {
            const promise = await this.account.createEmailSession(email, password);

            if (! promise)
                throw new Error("Unable to log into your account");
        } catch (err) {
            console.error(err.message);
        }
    }

    async logout(){
        try {
            const promise = await this.account.deleteSessions();

            if (! promise) throw new Error("Unable to delete the post");
        } catch (err) {
            console.error(err.message);
        }
    }

    async getCurrUser(){
        try {
            const promise = await this.account.get();

            if (! promise)
                throw new Error("Unable to fetch current user");

                return promise;
        } catch (err) {
            console.error(err.message);
        }
    }
};

export default new AuthService();