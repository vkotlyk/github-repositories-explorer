import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import User from './User';

describe('User component', () => {
  const mockRepos = [
    {
      id: 1,
      name: 'repo1',
      description: 'description1',
      stars: 10,
    },
    {
      id: 2,
      name: 'repo2',
      description: 'description2',
      stars: 20,
    },
    {
      id: 3,
      name: 'repo3',
      description: 'description3',
      stars: 30,
    },
    {
      id: 4,
      name: 'repo4',
      description: 'description4',
      stars: 40,
    },
  ];

  test('renders the user login', () => {
    const { getByText } = render(<User login="testuser" repos={[]} />);
    expect(getByText('testuser')).toBeInTheDocument();
  });

  test('toggles the list of repos when the user header is clicked', () => {
    const { getByText, queryByText } = render(
      <User login="testuser" repos={mockRepos} />
    );
    expect(queryByText('repo1')).toBeNull();
    fireEvent.click(getByText('testuser'));
    expect(getByText('repo1')).toBeInTheDocument();
    expect(getByText('repo2')).toBeInTheDocument();
    expect(getByText('repo3')).toBeInTheDocument();
    expect(getByText('Show more')).toBeInTheDocument();
    fireEvent.click(getByText('testuser'));
    expect(queryByText('repo1')).toBeNull();
  });

  test('displays the list of repos', () => {
    const { getByText } = render(<User login="testuser" repos={mockRepos} />);
    fireEvent.click(getByText('testuser'));
    expect(getByText('repo1')).toBeInTheDocument();
    expect(getByText('repo2')).toBeInTheDocument();
    expect(getByText('repo3')).toBeInTheDocument();
    expect(getByText('Show more')).toBeInTheDocument();
  });

  test('displays only a limited number of repos by default', () => {
    const { getByText, queryByText } = render(
      <User login="testuser" repos={mockRepos} />
    );
    fireEvent.click(getByText('testuser'));
    expect(getByText('repo1')).toBeInTheDocument();
    expect(getByText('repo2')).toBeInTheDocument();
    expect(getByText('repo3')).toBeInTheDocument();
    expect(queryByText('repo4')).toBeNull();
    expect(getByText('Show more')).toBeInTheDocument();
  });

  test('displays more repos when "Show more" button is clicked', () => {
    const { getByText, queryByText } = render(
      <User login="testuser" repos={mockRepos} />
    );
    fireEvent.click(getByText('testuser'));
    expect(queryByText('repo4')).toBeNull();
    fireEvent.click(getByText('Show more'));
    expect(getByText('repo4')).toBeInTheDocument();
  });
});