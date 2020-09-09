import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Title = styled.h3``;
const TagList = styled.div``;

class Group extends Component {
  render() {
    return this.props.group.title;
  }
}

export default Group;
