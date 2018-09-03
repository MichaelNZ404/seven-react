import React, { Component } from 'react';
import styled from 'styled-components';
import LogoImage from './logo.png';
import TileImage from './tile.jpg';

const Title = styled.span`
  font-size: 1.5em;
  text-align: center;
  color: #FFF;
`;

const LogoImageWrapper = styled.img`
  height: 25px;
  margin-right: 5px;
`;

const TileImageWrapper = styled.img`
  height: 100%;
`;

const BannerContainer = styled.div`
  position: relative;
  top: -34px;
  background-color: rgba(0, 0, 0, 0.7);
`;

const TileContainer = styled.div`
  height: 350px;
  display: inline-block;
`;

class Banner extends React.Component {
  render() {
    return(
      <div Style="width:100%">
        <BannerContainer>
          <LogoImageWrapper src={`${LogoImage}`} />
          <Title>{this.props.showName}</Title>;
        </BannerContainer>
      </div>
    );
  }
}

export default class Tile extends React.Component {
    render() {
      return(
        <TileContainer>
          <TileImageWrapper src={`${TileImage}`} />
          <Banner showName="Home and Away" />
        </TileContainer>
      );
    }
  }