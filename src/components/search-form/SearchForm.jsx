import React, { useState } from "react";
import { func } from "prop-types";
import styled from 'styled-components';

const Input = styled.input`
  height: 36px;
  padding: 4px 8px;
  box-sizing: border-box;
  background-color: #F5F5F5;;
  border: 1px solid #EEEEEE;
  border-radius: 2px;

  &:focus {
    outline: none;
  }
`;

const SearchButton = styled.button`
  height: 36px;
  margin-top: 16px;
  text-align: center; 
  color: #FFF;
  background-color: #03A9F4;
  border: none;
  border-radius: 2px;
  cursor: pointer;

  &:hover {
    background-color: #4FC3F7;
  }

  &:active {
    background-color: #0277BD;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const SearchForm = ({ onSubmit }) => {
  const [username, setUsername] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(username);
  };

  return (
    <Form onSubmit={onFormSubmit}>
      <Input
        placeholder="Enter username"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      />
      <SearchButton type="submit">Search</SearchButton>
    </Form>
  );
};

SearchForm.propTypes = {
  onSubmit: func.isRequired,
};

export default SearchForm;
