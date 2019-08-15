import gql from 'graphql-tag';
export const USER_QUERYS = {
  login: `{
    Homes{
      id
      name
      location
      createdAt
      user {
        id
        name
        email
      }
    }`
};

export const USER_MUTATORS = {
  login: gql`
    mutation login($userData: inputLogin!) {
      login(data: $userData) {
        token
        message
      }
    }
  `
};
