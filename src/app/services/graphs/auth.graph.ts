import { gql } from "apollo-angular";

export class LOGIN{
    static EMAIL: any = gql`
        mutation 
            Login(
                $email: String!, 
                $password: String!
            ) 
            {
                logIn(
                    email: $email, 
                    password: $password
                )
            }
    `;
}
export class PASSWORD {
    static NEW_PASSWORD: any = gql`
        mutation 
            newPassword(
                $password: String!
            ) 
            {
                newPassword(
                    password: $password
                )
            }
    `;

    static HISTORY_PASSWORD: any = gql`
        query {
            getPasswordHistory {
            CreatedAt,
            Hash
            }
        }
    `;
}
export class REGISTRATION{
    static WITH_EMAIL: any = gql`
        mutation 
            registerWithEmail(
                $input: String!,
                $as: Int!
            ) 
            {
                registerWithEmail (
                    input: $input , 
                    as: $as
                )
            }
    `;

    static WITH_INFO: any = gql`
        mutation 
            updMyProfile(
                $Name: String!, 
                $FamilyName: String!,
                $NickName: String!,
                $BirthDate: DateTime!,
                $Sex:Int!,
                $Lang:Int!,
            ) 
            {
                updMyProfile(
                    input: {
                        Name: $Name, 
                        FamilyName: $FamilyName,
                        NickName: $NickName,
                        BirthDate: $BirthDate,
                        Sex:$Sex,
                        Lang:$Lang,
                    }
                )
            }
    `;
}

export class ACTIVATION{
    static ACTIVATE_USER: any = gql`
        query {
            activateUser{
                Name,
                FamilyName,
                Email
            }
        }
    `;
}

