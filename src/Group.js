import React, { Component } from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import Tag from './Tag.js';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.75rem;
  border-radius: 2px;
  &:first-child {
    width: 100%;
  }
  &:not(:first-child) {
    flex: 1;
  }
`;
const Title = styled.h3`
  font-size: 2rem;
  padding: 8px;
`;
const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: start;
  border: 1px solid #cbd5e0;
  border-radius: 5px;
  margin-top: 0.75rem;
  padding: 1.25rem;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'white')};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
`;
const Tip = styled.span`
  font-size: 1rem;
  color: #68D391;
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
              {this.props.tags.length > 0 ? (
                this.props.tags.map((tag, index) => (
                  <Tag key={tag.id} tag={tag} index={index} />
                ))
              ) : (
                <Tip>Empty dropzone, you can drop your content within this area!</Tip>
              )}
              {provided.placeholder}
            </TagList>
          )}
        </Droppable>
      </Container>
    );
  }
}

export default Group;
