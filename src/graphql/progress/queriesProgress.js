import { gql } from "@apollo/client";

const GET_PROGRESS = gql`
query develops{
    develops{
      _id
      id_develop
      id_project
      description_develop
      date_develop
      comment_boss
    }
  
  }

`;

export {GET_PROGRESS};