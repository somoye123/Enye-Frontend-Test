import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ProfileList from './components/ProfileList';
import getProfiles from './redux/actions/profilesAction';
import SearchForm from './components/SearchForm';
function App({ getProfiles }) {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);

  return (
    <main>
      <SearchForm />
      <ProfileList />
    </main>
  );
}

App.propTypes = {
  getProfiles: PropTypes.func.isRequired,
};

const mapDispatchToProps = { getProfiles };

export default connect(null, mapDispatchToProps)(App);
