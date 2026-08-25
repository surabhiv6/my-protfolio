export const categories = ['all', 'web', 'arduino'];

export const projectsData = [
  {
    id: 1,
    title: 'Portfolio Website',
    description: 'Personal developer portfolio',
    longDesc: 'A multi-page React portfolio showcasing projects, skills, and experience with dark mode support and responsive design.',
    tech: ['React', 'CSS', 'JavaScript'],
    category: 'web',
    featured: true,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 2,
    title: 'Habit Tracker',
    description: 'Daily habit tracking app',
    longDesc: 'A MERN-based habit tracker allowing users to create habits, track daily progress, and visualize streaks over time.',
    tech: ['MongoDB', 'Express', 'React', 'Node.js'],
    category: 'web',
    featured: false,
    liveUrl: '#',
    githubUrl: '#'
  },
  {
    id: 3,
    title: 'Automatic road accident detection',
    description: 'Arduino based project and using IoT based also',
    longDesc: 'An IoT and Arduino-based safety system designed to automatically detect road accident and send alert notification.',
    tech: ['Arduino UNO', 'IoT', 'Sensors'],
    category: 'arduino',
    featured: false,
    liveUrl: '#',
    githubUrl: '#'
  }
];