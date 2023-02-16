import React, { useEffect } from "react";
import { bool, func, string } from "prop-types";
import styled from "styled-components";

import Loader from "../loader";
import SearchForm from "../search-form";
import Users from "../users";
import fetchUsers from "../../fetchUsers";

const Error = styled.div`
  margin-top: 16px;
`;

const AppContainer = styled.div`
  box-sizing: border-box;
  padding-right: 16px;
  display: flex;
  flex-direction: column;
`;

function App({
  query,
  error,
  loading,
  onUsersFetchSuccess,
  onUsersFetchFailure,
}) {
  useEffect(() => {
    if (query && loading) {
      fetchUsers(query).then(onUsersFetchSuccess).catch(onUsersFetchFailure);
    }
  }, [query, loading, onUsersFetchSuccess, onUsersFetchFailure]);

  return (
    <AppContainer>
      <SearchForm />
      {error && (
        <Error>Oops... Something went wrong! Please, try again later.</Error>
      )}
      {loading && <Loader />}
      {!error && !loading && <Users />}
    </AppContainer>
  );
}

App.propTypes = {
  query: string.isRequired,
  error: bool.isRequired,
  loading: bool.isRequired,
  onUsersFetchSuccess: func.isRequired,
  onUsersFetchFailure: func.isRequired,
};

export default App;
