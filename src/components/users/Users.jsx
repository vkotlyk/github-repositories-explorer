import React from "react";
import { string, number, arrayOf, shape } from "prop-types";
import styled from "styled-components";

import User from "./User";

const ResultsHeader = styled.div`
  margin-top: 16px;
  color: #616161;
`;

const UsersContainer = styled.div`
  margin-top: 16px;
`;

const NoUsersMessage = styled.div`
  margin-top: 16px;
`;

const Users = ({ users, query }) => {
  return (
    <>
      {query && <ResultsHeader>Showing results for: "{query}"</ResultsHeader>}
      {query && !users.length && (
        <NoUsersMessage>No users match the query</NoUsersMessage>
      )}
      <UsersContainer>
        {users.map((user) => (
          <User key={user.id} login={user.login} repos={user.repos} />
        ))}
      </UsersContainer>
    </>
  );
};

Users.propTypes = {
  users: arrayOf(
    shape({
      id: number,
      login: string,
      repos: arrayOf(
        shape({
          id: number,
          name: string,
          description: string,
          stars: number,
        })
      ),
    })
  ),
};

export default Users;
