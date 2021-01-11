import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Profile from './Profile';

function ProfileList({ Profiles, Loading }) {
  const [page, setPage] = useState(0);
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    if (Loading) return;
    setProfiles(Profiles[page]);
  }, [Loading, page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > Profiles.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = Profiles.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };

  return (
    <>
      <div className="section-title">
        <h1>{Loading ? 'loading...' : 'Paginated Profiles'}</h1>
        <div className="underline"></div>
      </div>
      <section className="followers">
        <div className="container">
          {profiles.map((profile) => {
            return <Profile key={profile.UserName} {...profile} />;
          })}
        </div>
        {!Loading && (
          <div className="btn-container">
            <button className="prev-btn" onClick={prevPage}>
              prev
            </button>
            {Profiles.map((item, index) => {
              return (
                <button
                  key={index}
                  className={`page-btn ${index === page ? 'active-btn' : null}`}
                  onClick={() => handlePage(index)}
                >
                  {index + 1}
                </button>
              );
            })}
            <button className="next-btn" onClick={nextPage}>
              next
            </button>
          </div>
        )}
      </section>
    </>
  );
}

ProfileList.defaultProps = {
  Profiles: null,
};

ProfileList.propTypes = {
  Profiles: PropTypes.arrayOf(PropTypes.array) || null,
  Loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ Profiles, Loading }) => ({
  Profiles,
  Loading,
});

export default connect(mapStateToProps)(ProfileList);
