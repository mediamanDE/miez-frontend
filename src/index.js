const countdown = require('./scripts/countdown');

const groups = [
  {
    location: 'Pizza',
    time: new Date('2020-01-28T12:00:00+02:00'),
    creator: 'Paul'
  },
  {
    location: 'Döner',
    time: new Date('2020-01-28T12:02:30+02:00'),
    creator: 'Lennard'
  },
  {
    location: 'Libanese',
    time: new Date('2020-01-28T12:05:00+02:00'),
    creator: 'Kai'
  }
];

const templateGroupList = require('./components/group-list/group-list.hbs');
document.getElementById('group-list').innerHTML = templateGroupList({ groups });

countdown();
