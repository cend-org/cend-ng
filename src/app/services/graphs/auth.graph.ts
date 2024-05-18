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
            NewPassword(
                $password: PasswordInput!
            ) 
            {
                NewPassword(
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
        NewParent(
                $email: String!,
            ) 
            {
                NewParent (
                    email: $email ,
                ){
                    T
                }
            }
    `;

    static WITH_INFO: any = gql`
        mutation 
            mutation ($profile: UserInput!) {
                UpdateMyProfile(profile: $profile) {
                    Id
                    CreatedAt
                    UpdatedAt
                    DeletedAt
                    Name
                    FamilyName
                    NickName
                    Email
                    Matricule
                    Age
                    BirthDate
                    Sex
                    Lang
                    Status
                    ProfileImageXid
                    Description
                    CoverText
                    Profile
                    ExperienceDetail
                    AdditionalDescription
                    AddOnTitle
                }
            }
            
            
            
            
            `;

    static CHILD_NAME: any = gql`
        mutation 
         addStudentToLink(
                $Name: String!, 
                $FamilyName: String!,
            ) 
            {
                addStudentToLink(
                    input: {
                        Name: $Name, 
                        FamilyName: $FamilyName,
                    }
                ){
                    
                    FamilyName
                    Email
                }
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

