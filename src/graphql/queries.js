import { gql } from "@apollo/client";


export const GET_ALL_COMPTES = gql`
  query {
    allComptes {
      id
      solde
      dateCreation
      type
    }
  }
`;
