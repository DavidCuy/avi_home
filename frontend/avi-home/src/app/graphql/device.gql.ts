import gql from 'graphql-tag';
export const DEVICE_QUERYS = {
  getOnlyDevices: gql`
    query GetDevices ($roomId: String!){
      Devices(name: $roomId){
        id
        name
        createdAt
        value
        category {
          id
          name
        }
        room {
          id
          name
        }
      }
    }
    `
};

export const DEVICE_MUTATORS = {
  login: gql`
    query HomeQuery($userId: String!) {
      Homes(name: $userId) {
        id
        name
        location
      }
    }
  `
};
