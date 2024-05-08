import { gql } from "apollo-angular";
import { DocumentNode } from "graphql";


export class EDUCATION_LEVEL{
    static SET_USER_EDUCATION_LEVEL: any = gql`
    mutation setUserEducationLevel($subjectId: Int!) {
        setUserEducationLevel(subjectId: $subjectId) {
          Id,
          Name
        }
    }
`;

    static UPDATE_USER_EDUCATION_LEVEL: any = gql`
        query {
            
            }
        }
    `;

    static GET_USER_EDUCATION_LEVEL: any = gql`
        query {
            
            }
        }
    `;

    static GET_USER_SUBJECT: any = gql`
        query {
            
            }
        }
    `;
}