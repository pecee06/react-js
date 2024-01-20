import config from "../conf/conf.js"
import { Client, Databases, ID, Query } from "appwrite";

class DbService{
    client = new Client();
    databases;

    constructor(){
        this.client = new Client();
        this.client.setEndpoint(config.apiEndpoint);
        this.client.setProject(config.projectID);
        this.databases = new Databases(this.client);
    }

    async createPost({title, content, featured_img, user_id, status}){
        try {
            const promise = await this.databases.createDocument(config.dbID, config.collectionID, ID.unique(), {title, content, featured_img, user_id, status});

            if (! promise) throw new Error("Unable to add post");

            return promise;
        } catch (err) {
            console.error(err.message);
        }
    }

    async updatePost(id, {title, content, featured_img, status}){
        try {
            const promise = await this.databases.updateDocument(config.dbID, config.collectionID, id, {title, content, featured_img, status});

            if (! promise) throw new Error("Unable to edit post");
        } catch (err) {
            console.error(err.message);
        }
    }

    async deletePost(id){
        try {
            const promise = await this.databases.deleteDocument(config.dbID, config.collectionID, id);

            if (! promise) throw new Error("Unable to delete post");
        } catch (err) {
            console.error(err.message);
        }
    }

    async getPost(id){
        try {
            const promise = await this.databases.getDocument(config.dbID, config.collectionID, id);

            if (! promise) throw new Error("Unable to fetch post");

            return promise;
        } catch (err) {
            console.error(err.message);
        }
    }

    async getPosts(queries = [Query.equal("status",true)]){
        try {
            const promise = await this.databases.listDocuments(config.dbID, config.collectionID, queries);

            if (! promise) throw new Error("Unable to fetch posts");

            return promise;
        } catch (err) {
            console.error(err.message);
        }
    }
};

export default new DbService();