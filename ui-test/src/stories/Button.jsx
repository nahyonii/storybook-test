import React from "react";
import PropTypes from "prop-types";
import "./button.css";
import styled from "styled-components";
/**
 * Primary UI component for user interaction
 */

const ButtonWrapper = styled.button`
  padding: ${(props) => props.padding};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border: ${(props) => props.borderWidth} solid ${(props) => props.borderColor};
  color: ${(props) => props.textColor};
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderRadius};
  line-height: ${(props) => props.lineHeight};
`;

export const Button = ({ primary, size, label, text, ...props }) => {
  return (
    <ButtonWrapper type="button" {...props}>
      {text}
    </ButtonWrapper>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  /**
   * What background color to use
   */
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  /**
   * Optional click handler
   */
};

Button.defaultProps = {
  primary: false,
  size: "medium",
  onClick: undefined,
};
