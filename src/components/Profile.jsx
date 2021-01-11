import React from 'react';

const Profile = ({ FirstName, LastName, Gender, PaymentMethod }) => {
  return (
    <article className="card">
      <h4>
        <span>{FirstName}</span> <span>{LastName}</span>
      </h4>
      <h4>{Gender}</h4>
      <h4>PaymentMethod: {PaymentMethod}</h4>
    </article>
  );
};

export default Profile;
