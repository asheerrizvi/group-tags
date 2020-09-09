const initialData = {
  tags: {
    'ryzen-5-3500X': { id: 'processor-1', content: 'Ryzen 5 3950X', group: '' },
    'ryzen-7-3700X': { id: 'processor-2', content: 'Ryzen 7 3700X', group: '' },
    'ryzen-9-3900X': { id: 'processor-3', content: 'Ryzen 9 3900X', group: '' },
    'trident-z-16GB': { id: 'memory-1', content: 'Trident Z 16GB', group: '' },
    'corsair-vengence-16GB': {
      id: 'memory-2',
      content: 'Corsair Vengence 16GB',
      group: '',
    },
    'RTX 3070': { id: 'gpu-1', content: 'Nvidia RTX 3070', group: '' },
    'RTX 3080': { id: 'gpu-2', content: 'Nvidia RTX 3080', group: '' },
    'RTX 3090': { id: 'gpu-3', content: 'Nvidia RTX 3090', group: '' },
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
  },
};
