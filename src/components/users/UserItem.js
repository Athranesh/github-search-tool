import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const UserItem = ({ user }) => {
  return (
    <div className='card text-center'>
      <img
        src={user.avatar_url}
        alt=''
        className='round-img'
        style={{ width: '160px', margin: '20px', padding: '10px'}}
      />
      <h3>{user.login}</h3>
      <div>
        <Link to={`/user/${user.login}`} className='btn btn-dark btn-sm my-1'>
          User Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
