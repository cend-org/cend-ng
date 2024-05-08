import { gql } from "apollo-angular";

export class EDUCATION_SCHOOL{
    static GET_SCHOOLS = gql`
        query {
            getSchools {
                Id
                Name
            }
        }
    `;

    static GET_SUBJECT: any = gql`
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