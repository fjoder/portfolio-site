import React from 'react';

const PortfolioItemPage = (props) => {
  return (
    <div>
      <h1>A Thing I've Done</h1>
      This page is for the item with id of {props.match.params.id}
    </div>
  );
};

export default PortfolioItemPage;
