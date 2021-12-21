import { gql } from "@apollo/client";

const CREATE_PROGRESS = gql`
mutation CreateDevelop(
    $id_develop:Int! $id_project:Int! $date_develop:String!
      $description_develop:String! $comment_boss:String!){
    createDevelop(
        develop: {    
        id_develop:$id_develop
        id_project:$id_project
        date_develop:$date_develop
        description_develop:$description_develop
        comment_boss:$comment_boss 
      }
    ) 
    {  
        id_develop
        id_project
        date_develop
        description_develop
        comment_boss
    }
  }
  
`;

const UPDATE_PROGRESS = gql`
mutation UpdateDevelop(
    $_id: ID! $id_develop:Int! $id_project:Int! $date_develop:String!
      $description_develop:String! $comment_boss:String!){
    updateDevelop(_id:$_id,
        develop: { 
        id_develop:$id_develop
        id_project:$id_project
        date_develop:$date_develop
        description_develop:$description_develop
        comment_boss:$comment_boss 
      }
    ) 
    {  
          id_develop
        id_project
        date_develop
        description_develop
        comment_boss
    }
  }
  `;
  const DELETE_PROGRESS = gql`
  mutation DeleteDevelop($_id:ID!){
    deleteDevelop(_id:$_id){
      _id
    }
    
  }
    `;

export {CREATE_PROGRESS, UPDATE_PROGRESS, DELETE_PROGRESS};