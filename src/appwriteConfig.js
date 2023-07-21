import { Client, Account, Databases} from 'appwrite';


export const PROJECT_ID='64ba3d69055f8cbacd4c'
export const DATABASE_ID='64ba440b1bbea56b7bf9'
export const COLLECTION_ID_MESSAGES='64ba441694ffb1fd1cd8'



const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('64ba3d69055f8cbacd4c');

export const databases = new Databases(client);
export const account = new Account(client);


export default client;