import { connect } from 'react-redux';
import { USERNAME_FORM_SUBMITTED } from '../../actions';
import SearchForm from './SearchForm';

const mapDispatchToProps = (dispatch) => ({
    onSubmit: (username) => dispatch({ type: USERNAME_FORM_SUBMITTED, value: username }),
});

export default connect(null, mapDispatchToProps)(SearchForm);