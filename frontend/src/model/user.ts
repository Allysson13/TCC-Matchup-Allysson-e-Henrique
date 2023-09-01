import {Address} from "./address";
import {Friendship} from "./friendship";
import {Interest} from "./interest";
import {Message} from "./message";

export enum DefaultPrivacyLevel {
    public = "public",
    private = "private",
    contacts = "contacts",
}

export interface User {
    id: bigint;
    name: string;
    username: string;
    email: string;
    birthDate: Date;
    hashedPassword: string;
    cellphoneNumber: string;
    profilePicture: string;
    address: Address;
    friends: Friendship;
    interests: Interest;
    sentMessages: Array<Message>;
    receivedMessages: Array<Message>;
}

export type SignIn = Pick<User, "username" | "hashedPassword"> & {
    remember?: Boolean;
};
