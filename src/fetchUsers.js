const USERS_LIMIT = 5;

const fetchRepositories = async (reposUrl) => {
  const response = await fetch(reposUrl);
  const data = await response.json();

  return data.map(({ id, name, description, stargazers_count }) => ({
    id,
    name,
    description,
    stars: stargazers_count,
  }));
};

const fetchUsers = async (query) => {
  const response = await fetch(
    `https://api.github.com/search/users?q=${query}&per_page=${USERS_LIMIT}`
  );

  const data = await response.json();

  const users = await Promise.all(
    data.items.map(async (item) => {
      const repos = await fetchRepositories(item.repos_url);
      return {
        id: item.id,
        login: item.login,
        repos,
      };
    })
  );

  return users;
};

export default fetchUsers;
