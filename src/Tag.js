import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 9999px;
  padding: 0.5rem 0.75rem;
  margin: 0.5rem;
  font-size: 0.875rem;
  font-weight: 600;
  background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')};
`;

class Tag extends Component {
  render() {
    return (
      <Draggable draggableId={this.props.tag.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Container
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {this.props.tag.content}, Group: {this.props.tag.group.toUpperCase()}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Tag;
