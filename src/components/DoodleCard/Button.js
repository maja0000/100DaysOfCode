import React from 'react';
import './DoodleCard.css';
import styled, { css } from 'styled-components';

export const Label = styled('button')`
  color: white;
  font-size: 25px;
  margin: 10px;
  border-radius: 4px;
  padding: 12px 20px;
  border-style: none;
  line-height: 16px;
  font-weight: 500;
  outline: none;
  ${(props) => {
    if (props.variant === 'Vanilla js')
      return css`
        background-color: #eed739;
      `;
    if (props.variant === 'React')
      return css`
        background-color: #2edafd;
      `;
    if (props.variant === 'TypeScript')
      return css`
        background-color: #357ac4;
      `;
    if (props.variant === 'css')
      return css`
        background: rgb(238, 174, 202);
        background: radial-gradient(
          circle,
          rgba(238, 174, 202, 1) 0%,
          rgba(148, 187, 233, 1) 100%
        );
      `;
  }}
`;
export default function Button(props) {
  return <Label {...props}> {props.variant}</Label>;
}
