import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Container } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { Cart } from 'components';

const Category = (props) => {
  const { pages, onChangePage, nCol, nRow, data } = props;
  const sizePerPage = nCol * nRow;

  const [_pages, setPages] = React.useState(pages);
  const [_page, setPage] = React.useState(props.page);
  const [_data, setData] = React.useState(data);

  React.useEffect(() => {
    if (!props.isServerPaging) {
      setPages(Math.ceil(data.length/sizePerPage));
    }
  }, []);
  React.useEffect(() => {
    if (!props.isServerPaging) {
      setData(data.slice((_page - 1) * sizePerPage, _page * sizePerPage));
    }
  }, [_page]);

  /**
   * Handle change page
   * @param {Object} e event
   * @param {Number} page
   */
  const handleChangePage = (e, page) => {
    setPage(page);
    onChangePage(page);
  }

  return (
    <Container fixed>
      <Grid container spacing={1}>
        {_data.map((item, index) => (
          <Grid key={index} item xs={6} sm={12/nCol} >
            <Cart
              {...item}
            />
          </Grid>
        ))}
      </Grid>
      <Grid container justify="center">
        <Pagination
          count={_pages}
          page={_page}
          onChange={handleChangePage}
          showFirstButton
          showLastButton
          color="secondary"
        />
      </Grid>
    </Container>
  )
}

Category.propTypes = {
  data: PropTypes.instanceOf(Array),
  nCol: PropTypes.number,
  nRow: PropTypes.number,
  page: PropTypes.number,
  onChangePage: PropTypes.func,
  pages: PropTypes.number,
  isServerPaging: PropTypes.bool,
};

Category.defaultProps = {
  data: [],
  nCol: 4,
  nRow: 5,
  page: 1,
  pages: 13,
  onChangePage: () => {},
  isServerPaging: false,
};

export default Category;
