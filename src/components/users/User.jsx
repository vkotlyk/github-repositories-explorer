import React, { useState, useCallback } from "react";
import { string, number, arrayOf, shape } from "prop-types";
import styled, { css } from "styled-components";
import Repo from "../repo";

const UserCard = styled.div`
  border-radius: 5px;
  margin-top: 10px;
`;

const UserCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #f2f2f2;
  padding: 10px;
  cursor: pointer;
`;

const UserCardHeaderArrow = styled.span`
  border: solid black;
  border-width: 0 3px 3px 0;
  display: inline-block;
  padding: 3px;

  ${(props) =>
    props.isOpen
      ? css`
          transform: rotate(-135deg);
        `
      : css`
          transform: rotate(45deg);
        `}
`;

const UserCardContent = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  padding-left: 24px;
`;

const ShowMoreReposButton = styled.button`
  border: none;
  background: none;
  color: #03a9f4;
  text-align: center;
  cursor: pointer;
  width: 80px;
  align-self: flex-end;
`;

const REPOS_DISPLAY_LIMIT = 3;

function User({ login, repos }) {
  const [isOpen, setIsOpen] = useState(false);
  const [reposDisplayCount, setReposDisplayCount] =
    useState(REPOS_DISPLAY_LIMIT);

  const toggleAccordion = useCallback(() => {
    setIsOpen(!isOpen);
  }, [setIsOpen, isOpen]);

  const showMore = useCallback(() => {
    setReposDisplayCount(reposDisplayCount + REPOS_DISPLAY_LIMIT);
  }, [setReposDisplayCount, reposDisplayCount]);

  const displayedRepos = repos.slice(0, reposDisplayCount);

  return (
    <UserCard>
      <UserCardHeader onClick={toggleAccordion}>
        {login}
        <UserCardHeaderArrow isOpen={isOpen}></UserCardHeaderArrow>
      </UserCardHeader>
      {isOpen && (
        <UserCardContent>
          { !displayedRepos.length && <div>No repositories found</div> }
          {displayedRepos.map((repo) => (
            <Repo
              key={repo.id}
              name={repo.name}
              description={repo.description}
              stars={repo.stars}
            />
          ))}
          {repos.length > reposDisplayCount && (
            <ShowMoreReposButton onClick={showMore}>
              Show more
            </ShowMoreReposButton>
          )}
        </UserCardContent>
      )}
    </UserCard>
  );
}

User.propTypes = {
  login: string,
  repos: arrayOf(
    shape({
      id: number,
      name: string,
      description: string,
      stars: number,
    })
  ),
};

export default User;
