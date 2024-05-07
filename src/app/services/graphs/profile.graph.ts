import { gql } from "apollo-angular";

export class PROFILE{
    static GET: any = gql`
        query {
            MyProfile{
            Id
            Name
            NickName
            Profile
            Email
            Age
            }
        }
    `;
}