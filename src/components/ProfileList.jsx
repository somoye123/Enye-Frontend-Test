import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import Profile from './Profile';
import CategoryFilterAction from '../redux/actions/filterAction';

function ProfileList({ Profiles, Loading }) {
  const [page, setPage] = useState(0);
  const [profiles, setProfiles] = useState([]);

  const handleFilterChange = (e) => categoryFilter(e.target.value);

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
        <CategoryFilter handleFilterChange={handleFilterChange} />
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
  RawProfiles: null,
};

ProfileList.propTypes = {
  Profiles: PropTypes.arrayOf(PropTypes.array) || null,
  RawProfiles: PropTypes.arrayOf(PropTypes.object) || null,
  Loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ Profiles, Loading, RawProfiles }) => ({
  Profiles,
  Loading,
  RawProfiles,
});

export default connect(mapStateToProps)(ProfileList);
