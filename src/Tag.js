import React, { Component } from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin: 8px 4px 8px 4px;
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
            {this.props.tag.content}
          </Container>
        )}
      </Draggable>
    );
  }
}

export default Tag;
