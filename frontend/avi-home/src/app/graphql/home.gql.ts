import gql from 'graphql-tag';
export const HOME_QUERYS = {
  getHomes: gql`
    query HomeQuery($userId: String!) {
        Homes(name: $userId) {
          id
          name
          location
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
