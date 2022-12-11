import { Component } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { GrSearch } from 'react-icons/gr';
import {
  SearchBox,
  SearchButton,
  SearchForm,
  SearchInput,
} from './Searchbar.styled';

export class Searchbar extends Component {
  state = {
    query: '',
  };

  handleQuery = e => {
    this.setState({ query: e.currentTarget.value.toLowerCase().trim() });
  };
  handleSubmit = event => {
    const { query } = this.state;
    event.preventDefault();
    if (query === '') {
      toast('Sorry, the search field is empty!');
      return;
    }
    if (this.props.query === query) {
      toast(
        'We have already found pictures for this request.'
      );
      return;
    }
    this.props.onSubmit(this.state.query);
    this.setState({ query: '' });
  };

  
  render() {
    return (
      <SearchBox>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchButton type="submit">
            <GrSearch />
          </SearchButton>
          <SearchInput
            type="text"
            placeholder="Search images"
            value={this.state.query}
            onChange={this.handleQuery}
          />
        </SearchForm>
      </SearchBox>
    );
  }
}

Searchbar.propTypes = {
  query: PropTypes.string.isRequired,
};
