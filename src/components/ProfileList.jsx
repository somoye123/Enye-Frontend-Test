import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CategoryFilter from './CategoryFilter';
import Profile from './Profile';
import CategoryFilterAction from '../redux/actions/filterAction';

function ProfileList({ Profiles, Loading, RawProfiles, categoryFilter }) {
  const [page, setPage] = useState(0);
  const [profiles, setProfiles] = useState([]);

  const handleFilterChange = (e) => categoryFilter(RawProfiles, e.target.value);

  useEffect(() => {
    if (Loading) return;
    setProfiles(Profiles[page]);
  }, [Loading, page, Profiles]);

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

  if (!profiles) {
    return (
      <h2 className="section-title">no patient matched your search criteria</h2>
    );
  }

  return (
    <>
      <div className="section-title">
        {Loading && <h1>loading...</h1>}
        {!Loading && <CategoryFilter handleFilterChange={handleFilterChange} />}
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
  categoryFilter: PropTypes.func.isRequired,
};

const mapStateToProps = ({ Profiles, Loading, RawProfiles }) => ({
  Profiles,
  Loading,
  RawProfiles,
});

const mapDispatchToProps = (dispatch) => ({
  categoryFilter: (RawProfile, category) =>
    dispatch(CategoryFilterAction(RawProfile, category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileList);
