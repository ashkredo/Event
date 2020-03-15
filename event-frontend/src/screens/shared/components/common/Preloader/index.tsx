import React, { FC } from 'react';
import styled from 'styled-components';
import preloader from 'assets/images/preloader.svg';

const Img = styled.img`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
`;

const Preloader: FC = () => {
  return <Img src={preloader} />;
};

export default Preloader;
