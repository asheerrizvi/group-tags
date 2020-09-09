const initialData = {
  tags: {
    'ryzen-5-3500X': {
      id: 'processor-1',
      content: 'Ryzen 5 3950X',
      group: 'parts',
    },
    'ryzen-7-3700X': {
      id: 'processor-2',
      content: 'Ryzen 7 3700X',
      group: 'parts',
    },
    'ryzen-9-3900X': {
      id: 'processor-3',
      content: 'Ryzen 9 3900X',
      group: 'parts',
    },
    'trident-z-16GB': {
      id: 'memory-1',
      content: 'Trident Z 16GB',
      group: 'parts',
    },
    'corsair-vengence-16GB': {
      id: 'memory-2',
      content: 'Corsair Vengence 16GB',
      group: 'parts',
    },
    'RTX 3070': { id: 'gpu-1', content: 'Nvidia RTX 3070', group: 'parts' },
    'RTX 3080': { id: 'gpu-2', content: 'Nvidia RTX 3080', group: 'parts' },
    'RTX 3090': { id: 'gpu-3', content: 'Nvidia RTX 3090', group: 'parts' },
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
      title: 'All Gpus',
      tagIds: [],
    },
    parts: {
      id: 'parts',
      title: 'All Computer Parts',
      tagIds: [
        'processor-1',
        'processor-2',
        'processor-3',
        'memory-1',
        'memory-2',
        'gpu-1',
        'gpu-2',
        'gpu-3',
      ],
    },
  },
  groupOrder: ['cpu', 'memory', 'gpu'],
};

export default initialData;
