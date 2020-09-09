import React, { Component } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import Group from './Group.js';

class App extends Component {
  state = this.props.data;

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

    const group = this.state.groups[source.droppableId];
    const newTagIds = [...group.tagIds];
    newTagIds.splice(source.index, 1);
    newTagIds.splice(destination.index, 0, draggableId);

    const newGroup = {
      ...group,
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
  };

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        {this.state.groupOrder.map((groupId) => {
          const group = this.state.groups[groupId];
          const tags = group.tagIds.map((tagId) => this.state.tags[tagId]);

          return <Group key={group.id} group={group} tags={tags} />;
        })}
      </DragDropContext>
    );
  }
}

export default App;
