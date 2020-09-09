import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Tag from './Tag.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  &:first-child {
    width: 100%;
    min-height: 300px;
  }
`;
const Title = styled.h3`
  padding: 8px;
`;
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  padding: 8px;
  min-height: 250px;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'white')};
`;

class Group extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.group.title}</Title>
        <Droppable droppableId={this.props.group.id} direction={'horizontal'}>
          {(provided, snapshot) => (
            <TagList
              ref={provided.innerRef}
              isDraggingOver={snapshot.isDraggingOver}
              {...provided.droppableProps}
            >
              {this.props.tags.map((tag, index) => (
                <Tag key={tag.id} tag={tag} index={index} />
              ))}
              {provided.placeholder}
            </TagList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Group;
