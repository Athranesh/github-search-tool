import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import { Link } from 'react-router-dom';
import Repos from '../repos/Repos';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);

  const { getUser, loading, user, repos, getUserRepos } = githubContext;
  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    company,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable
  } = user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <Fragment>
        <Link to='' className='btn btn-light'>
          Back To Main Page
        </Link>
        <br />
        <br />
        <div className='card grid-2'>
          <div className='all-center'>
            <img
              src={avatar_url}
              alt='user-img'
              className='round-img'
              style={{ width: '200px' }}
            />
            <h1>{name}</h1>
            <p>Location: {location}</p>
            {hireable ? (
              <p>
                This user is <span className='text-success'>Hireable</span>{' '}
                <i className='fas fa-check text-success' />
              </p>
            ) : (
              <p>
                This user is <span className='text-danger'>Not Hireable</span>{' '}
                <i className='fas fa-times-circle text-danger' />
              </p>
            )}
            <a
              href={html_url}
              className='btn btn-dark my-1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Github Profile
            </a>
          </div>
          <div>
            {bio && (
              <Fragment>
                <h3>biography</h3>
                <p>{bio}</p>
              </Fragment>
            )}
            <ul>
              <li>
                {company && (
                  <Fragment>
                    <strong>Company: {company}</strong>
                  </Fragment>
                )}
              </li>

              <li>
                {blog && (
                  <Fragment>
                    <strong>
                      {' '}
                      Website/Blog:{' '}
                      <a
                        href={`https://${blog}`}
                        target='_blank'
                        rel='noopener noreferrer'
                      >
                        {blog}
                      </a>
                    </strong>
                  </Fragment>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className='card text-center'>
          <div className='badge badge-primary'>followers: {followers}</div>
          <div className='badge badge-success'>following: {following}</div>
          <div className='badge badge-light'>Public Repos: {public_repos}</div>
          <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>

        <Repos repos={repos} />
      </Fragment>
    );
  }
};

export default User;
