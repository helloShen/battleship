/**
 * Mock a Grid factory function.
 * Does nothing but return directly the input row and column index.
 */
export default (inRow, inColumn) => {
  function row() {
    return inRow;
  }

  function column() {
    return inColumn;
  }

  return {
    row,
    column,
  };
};
