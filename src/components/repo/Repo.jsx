import React from "react";
import { number, string } from "prop-types";
import styled from "styled-components";

const RepoCard = styled.div`
  width: 100%;
  height: 100px;
  background-color: #e0e0e0;
  margin-bottom: 12px;
  padding: 12px 8px;

  display: grid;
  grid-template-columns: 1fr 1.4fr 0.6fr;
  grid-template-rows: 1fr 2fr;
  gap: 0px 0px;
  grid-template-areas:
    "title title stars"
    "description description description";
`;

const RepoCardTitle = styled.div`
  grid-area: title;
  font-weight: 700;
`;

const RepoCardDescription = styled.div`
  grid-area: description;
  margin-top: 8px;
  overflow: hidden;
`;

const RepoCardStars = styled.div`
  grid-area: stars;
  text-align: end;
  font-weight: 700;
`;

const Repo = ({ name, description, stars }) => {
  return (
    <RepoCard>
      <RepoCardTitle>{name}</RepoCardTitle>
      <RepoCardDescription>{description}</RepoCardDescription>
      <RepoCardStars>{stars} &#9733;</RepoCardStars>
    </RepoCard>
  );
};

Repo.propTypes = {
  name: string,
  description: string,
  stars: number,
};

export default Repo;
