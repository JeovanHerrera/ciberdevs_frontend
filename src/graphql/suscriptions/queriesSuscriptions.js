import { gql } from "@apollo/client";

const GET_SUBSCRIPTIONS = gql`
query subscriptions{
    subscriptions{    
      _id
      id_user
      id_project
      id_subscription
      status_subscription
      date_in_subs
      date_out_subs
    }
  }

`;

export {GET_SUBSCRIPTIONS};