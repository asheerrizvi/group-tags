import React, { Component } from 'react';
import Group from './Group.js';

class App extends Component {
  state = this.props.data;

  render() {
    return this.state.groupOrder.map((groupId) => {
      const group = this.state.groups[groupId];
      const tags = group.tagIds.map((tagId) => this.state.tags[tagId]);

      return <Group key={group.id} group={group} tags={tags} />;
    });
  }
}

export default App;
