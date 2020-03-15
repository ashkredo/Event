import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import HomePageImage from 'assets/images/background-images/home-page.jpg';

const HomePage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${HomePageImage});
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  display: flex;
  align-items: center;
  justify-content: center;
  .btn {
    color: #010101;
    text-decoration: none;
    background: #dad9d8;
    cursor: pointer;
    border: 2px solid #3d3d3b;
    padding: 0.4rem 0.8rem;
  }
  .btn:hover {
    background: transparent;
    color: #dad9d8;
    border: 1px solid #3d3d3b;
  }
  .title {
    font-size: 2.5rem;
    color: #f7f7f6;
  }
  .content {
    letter-spacing: 3px;
    display: inline-block;
    text-align: center;
    background: rgba(0, 0, 0, 0.3);
    padding: 2rem 1rem;
  }
`;

type PropsType = {
  isRegistered: boolean;
};

export default (props: PropsType) => {
  return (
    <HomePage>
      <div className="content">
        {props.isRegistered ? (
          <h1 className="title">Thank you for registering to EVENT!</h1>
        ) : (
          <>
            <h1 className="title">Event Brainhub</h1>
            <Link to="/event" className="btn">
              REGISTER
            </Link>
          </>
        )}
      </div>
    </HomePage>
  );
};
