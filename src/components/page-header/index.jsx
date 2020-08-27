import React from "react";
import { Link } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import PropTypes from "prop-types";

import StyledPageHeader from "./style";

const PageHeader = ({ goBack, children }) => {
  return (
    <StyledPageHeader>
      {!!goBack && (
        <Link to={goBack}>
          <MdChevronLeft />
        </Link>
      )}

      <h3>{children}</h3>
    </StyledPageHeader>
  );
};

PageHeader.defaultProps = {
  goBack: undefined,
  children: undefined
};

if (process.env.NODE_ENV === "development") {
  PageHeader.propTypes = {
    goBack: PropTypes.string,
    children: PropTypes.string.isRequired
  };
}

export default PageHeader;
