import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchTerm from '../redux/actions/searchTermAction';

export const SearchForm = ({ setSearchTerm, RawProfiles }) => {
  const searchValue = React.useRef('');
  React.useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleChange = () =>
    setSearchTerm(RawProfiles, searchValue.current.value);

  const handleSubmit = (e) => e.preventDefault();

  return (
    <section className="section search">
      <form className="search-form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            search patient FirstName
            <input
              type="text"
              name="name"
              id="name"
              ref={searchValue}
              onChange={handleChange}
            />
          </label>
        </div>
      </form>
    </section>
  );
};

SearchForm.defaultProps = {
  RawProfiles: null,
};

SearchForm.propTypes = {
  setSearchTerm: PropTypes.func.isRequired,
  RawProfiles: PropTypes.arrayOf(PropTypes.object) || null,
};

const mapStateToProps = ({ RawProfiles }) => ({ RawProfiles });

const mapDispatchToProps = (dispatch) => ({
  setSearchTerm: (rawProfiles, term) => dispatch(SearchTerm(rawProfiles, term)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
