import { Formik } from 'formik';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { Header, Input, SearchForm, Button, ButtonIcon } from './styled';

const initialValues = {
  searchQuery: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = ({ searchQuery }, { resetForm }) => {
    if (searchQuery.trim() === '') {
      return toast.error('Type something');
    }
    onSubmit(searchQuery);
    resetForm();
  };
  return (
    <Header>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <SearchForm autoComplete="off">
          <Button type="submit" aria-label="search">
            <ButtonIcon size={18} />
          </Button>
          <Input
            type="text"
            name="searchQuery"
            placeholder="Search images and photos"
            autoFocus={true}
          />
        </SearchForm>
      </Formik>
    </Header>
  );
};

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
