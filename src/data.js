const initialData = {
  tags: {
    'ryzen-5-3500X': {
      id: 'ryzen-5-3500X',
      content: 'Ryzen 5 3950X',
      group: 'parts',
    },
    'ryzen-7-3700X': {
      id: 'ryzen-7-3700X',
      content: 'Ryzen 7 3700X',
      group: 'parts',
    },
    'ryzen-9-3900X': {
      id: 'ryzen-9-3900X',
      content: 'Ryzen 9 3900X',
      group: 'parts',
    },
    'trident-z-16GB': {
      id: 'trident-z-16GB',
      content: 'Trident Z 16GB',
      group: 'parts',
    },
    'corsair-vengence-16GB': {
      id: 'corsair-vengence-16GB',
      content: 'Corsair Vengence 16GB',
      group: 'parts',
    },
    'rtx-3070': { id: 'rtx-3070', content: 'Nvidia RTX 3070', group: 'parts' },
    'rtx-3080': { id: 'rtx-3080', content: 'Nvidia RTX 3080', group: 'parts' },
    'rtx-3090': { id: 'rtx-3090', content: 'Nvidia RTX 3090', group: 'parts' },
  },
  groups: {
    cpu: {
      id: 'cpu',
      title: 'All CPUs',
      tagIds: [],
    },
    memory: {
      id: 'memory',
      title: 'All RAMs',
      tagIds: [],
    },
    gpu: {
      id: 'gpu',
      title: 'All GPUs',
      tagIds: [],
    },
    parts: {
      id: 'parts',
      title: 'All Parts',
      tagIds: [
        'ryzen-5-3500X',
        'ryzen-7-3700X',
        'ryzen-9-3900X',
        'trident-z-16GB',
        'corsair-vengence-16GB',
        'rtx-3070',
        'rtx-3080',
        'rtx-3090',
      ],
    },
  },
  groupOrder: ['parts', 'cpu', 'memory', 'gpu',],
};

export default initialData;
