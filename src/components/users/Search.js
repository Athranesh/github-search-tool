import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const [text, setText] = useState('');
  const alertContext = useContext(AlertContext);
  const githubContext = useContext(GithubContext);

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please Enter Something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
      alertContext.removeAlert();
    }
  };

  const onChange = e => {
    setText(e.target.value);
  };

  return (
    <div>
      <form className='form' onSubmit={onSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Github Users...'
          value={text}
          onChange={onChange}
        />
        <input type='submit' className='btn btn-dark btn-block' />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn-light btn-block'
          onClick={githubContext.clearUsers}
        >
          Clear Users
        </button>
      )}
    </div>
  );
};

export default Search;
