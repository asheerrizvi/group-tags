import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Group from './Group.js';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 1.5rem 0;
  padding: 0 6rem;
`;

class App extends Component {
  state = this.props.data;

  componentDidMount() {
    const data = localStorage.getItem('data');
    if (data) {
      this.setState(JSON.parse(data));
    }
  }

  onDragEnd = (result) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.groups[source.droppableId];
    const finish = this.state.groups[destination.droppableId];
    const tag = this.state.tags[draggableId];

    if (start === finish) {
      const newTagIds = [...start.tagIds];
      newTagIds.splice(source.index, 1);
      newTagIds.splice(destination.index, 0, draggableId);

      const newGroup = {
        ...start,
        tagIds: newTagIds,
      };

      const newState = {
        ...this.state,
        groups: {
          ...this.state.groups,
          [newGroup.id]: newGroup,
        },
      };

      this.setState(newState);
      return;
    }

    // Moving from one group to another.
    const startTagIds = [...start.tagIds];
    startTagIds.splice(source.index, 1);
    const newStart = {
      ...start,
      tagIds: startTagIds,
    };

    const finishTagIds = [...finish.tagIds];
    finishTagIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      tagIds: finishTagIds,
    };

    const newTag = {
      ...tag,
      group: finish.id,
    };

    const newState = {
      ...this.state,
      tags: {
        ...this.state.tags,
        [newTag.id]: newTag,
      },
      groups: {
        ...this.state.groups,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    this.setState(newState);
    localStorage.setItem('data', JSON.stringify(newState));
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Container>
          {this.state.groupOrder.map((groupId) => {
            const group = this.state.groups[groupId];
            const tags = group.tagIds.map((tagId) => this.state.tags[tagId]);

            return <Group key={group.id} group={group} tags={tags} />;
          })}
        </Container>
      </DragDropContext>
    );
  }
}

export default App;
