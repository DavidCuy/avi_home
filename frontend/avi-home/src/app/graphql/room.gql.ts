import gql from 'graphql-tag';
export const ROOM_QUERYS = {
  getOnlyRooms: gql`
    query GetRooms ($homeId: String!){
      Rooms(name: $homeId){
        id
        name
        createdAt
        home {
          id
          name
        }
        devices {
          id
          name
          value
        }
      }
    }
    `
};

export const HOME_MUTATORS = {
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
