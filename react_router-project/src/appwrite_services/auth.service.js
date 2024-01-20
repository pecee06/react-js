import { Client, Account, ID } from "appwrite"
import {apiEndPoint, projectID} from "../envVariables"

class AuthService{
    client = new Client()
    account

    constructor(){
        this.client.setEndpoint(apiEndPoint)
        this.client.setProject(projectID)
        this.account = new Account(this.client)
    }

    async getCurrUser(){   // Get the currently logged-in user
        try {
            const user = await this.account.get()
            if (!user) throw new Error("Unable to get current user")
            return user
        } catch (err) {
            console.error(err.message);
            return null
        }
    }

    async createAccount({email, password, name=""}){
        try {
            const user = this.account.create(ID.unique(), email, password, name)
            if (!user) throw new Error("Unable to create account")
            return user
        } catch (err) {
            console.error(err.message);
            return null
        }
    }

    async loginToAccount({email, password}){
        try {
            const session = await this.account.createEmailSession(email, password)
            if (!session) throw new Error("Unable to login to this accout\nPlease try again later")
            return session
        } catch (err) {
            console.error(err.message);
            return null
        }
    }

    async logoutFromThisDevice(){
        try {
            const res = this.account.deleteSession("current")
            if (!res) throw new Error("Unable to log you out")
        } catch (err) {
            console.error(err.message);
        }
    }

    async globalLogout(){
        try {
            const res = this.account.deleteSessions()
            if (!res) throw new Error("Unable to log you out")
        } catch (err) {
            console.error(err.message);
        }
    }

    async changePassword({newPass}){
        try {
            const user = this.account.updatePassword(newPass)
            if (!user) throw new Error("Unable to change the password")
            return user
        } catch (err) {
            console.error(err.message);
            return null
        }
    }
}

export default new AuthService()