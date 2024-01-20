import config from "../conf/conf.js"
import { Client, ID, Storage } from "appwrite";

class StorageService{
    client = new Client();
    storage;
    
    constructor(){
        this.client.setEndpoint(config.apiEndpoint);
        this.client.setProject(config.projectID);
        this.storage = new Storage(this.client);
    }

    async uploadFile(FILE){
        try {
            const promise = await this.storage.createFile(config.bucketID, ID.unique(), FILE);

            if (! promise) throw new Error("Unable to upload file to server");

            return promise;
        } catch (err) {
            console.error(err.message);
        }
    }

    async deleteFile(id){
        try {
            const promise = await this.storage.deleteFile(config.bucketID, id);

            if (! promise) throw new Error("Unable to delete the file");
        } catch (err) {
            console.error(err.message);
        }
    }

    filePreview(id){
        return this.storage.getFilePreview(config.bucketID, id);
    }
};

export default new StorageService();