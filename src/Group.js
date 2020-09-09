import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Tag from './Tag.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TagList = styled.div`
  display: flex;
  padding: 8px;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'white')};
  flex-grow: 1;
  min-height: 100px;
`;

class Group extends Component {
  render() {
    return (
      <Container>
        <Title>{this.props.group.title}</Title>
        <Droppable droppableId={this.props.group.id} direction="horizontal">
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
