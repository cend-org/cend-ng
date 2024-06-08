import { gql } from 'apollo-angular';

export const NEW_STUDENT_REGISTRATION: any = gql`
  mutation NewStudent($email: String!) {
    NewStudent(email: $email) {
      T
    }
  }
`;
