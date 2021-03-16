// import PropTypes from 'prop-types';
import React from 'react';
import styled, { css } from 'styled-components';

export const StyledButton = styled.button.attrs((props) => ({
  ...props,
}))`
  font-family: HK Grotesk Pro;
  font-size: 17px;
  line-height: 26px;
  outline: none !important;
  border: none !important;
  background: #335eea;
  border-radius: 6px;
  padding: 12px 15px;
  width: fit-content;
  color: #ffffff;
  transition: all 300ms ease-in-out;
  margin-left: 10px;
  width: fit-content;
  height: fit-content;
  cursor: pointer;

  &:last-child {
    margin-right: 0;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
  }

  &:hover {
    box-shadow: 0px 8px 26px rgba(0, 0, 0, 0.23);
  }

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.sm &&
    css`
      padding: 10px 12px;
    `}

  ${(props) =>
    props.bgColor &&
    css`
      background: ${props.bgColor};
    `}

  ${(props) =>
    props.textColor &&
    css`
      color: ${props.textColor};
    `}
`;

export const Button = (props) => <StyledButton {...props} />;

// Button.propTypes = {
//   className: PropTypes.string,
//   type: PropTypes.oneOf(['button', 'submit', 'reset']),
//   bgColor: PropTypes.string,
//   textColor: PropTypes.string,
//   theme: PropTypes.string,
//   fullWidth: PropTypes.bool,
//   children: PropTypes.node,
//   onClick: PropTypes.func,
//   disabled: PropTypes.bool,
// };

// Button.defaultProps = {
//   fullWidth: false,
//   className: '',
//   type: 'button',
//   bgColor: '',
//   textColor: '',
//   theme: 'primary',
//   children: <Fragment />,
//   onClick: () => null,
//   disabled: false,
// };
