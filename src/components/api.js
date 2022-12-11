import PropTypes from 'prop-types';

export function addImages(query, page) {
  return fetch(`https://pixabay.com/api/?q=${query}&page=${page}&key=30416408-c6842ca729ef5a51b1af270dd&image_type=photo&orientation=horizontal&per_page=12
`).then(response => {
    if (response.ok) {
      return response.json();
    }
    return Promise.reject(new Error('Something went wrong! Please retry'));
  });
}

addImages.propTypes = {
  query: PropTypes.string.isRequired,
  page: PropTypes.number.isRequired,
};
