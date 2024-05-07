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
            ) 
            {
                registerWithEmail (
                    input: $input , 
                    as: 1
                )
            }
    `;

    static WITH_INFO: any = gql`
        mutation 
            register(
                $Name: String!, 
                $FamilyName: String!,
                $NickName: String!,
                $Email: String!,
                $BirthDate: DateTime!,
                $Sex:Int!,
                $Lang:Int!,
            ) 
            {
                register(
                    input: {
                        Name: $Name, 
                        FamilyName: $FamilyName,
                        NickName: $NickName,
                        Email: $Email,
                        BirthDate: $BirthDate,
                        Sex:$Sex,
                        Lang:$Lang,
                    }
                    as: 1
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

