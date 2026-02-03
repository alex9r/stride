// Mock data for demonstration purposes

export const programs = [
  'Computer Science',
  'Software Engineering',
  'Computer Engineering',
  'Electrical Engineering',
  'Mechanical Engineering',
  'Civil Engineering',
  'Systems Design Engineering',
  'Mechatronics Engineering',
  'Mathematics',
  'Business',
  'Accounting and Financial Management',
  'Economics',
  'Biology',
  'Chemistry',
  'Physics',
  'Health Studies',
  'Kinesiology',
  'Environment',
  'Arts',
  'Other'
];

// Generate mock user data for rankings
export const generateMockUsers = (currentUser) => {
  const names = [
    'Alex Chen', 'Jordan Smith', 'Taylor Brown', 'Casey Williams', 'Morgan Davis',
    'Riley Johnson', 'Cameron Lee', 'Avery Martinez', 'Quinn Anderson', 'Dakota White',
    'Skylar Thompson', 'Parker Garcia', 'Reese Rodriguez', 'Sage Wilson', 'River Moore'
  ];

  const mockUsers = names.map((name, index) => ({
    id: index + 1,
    name,
    program: programs[Math.floor(Math.random() * programs.length)],
    steps: Math.floor(Math.random() * 15000) + 3000,
    isCurrentUser: false
  }));

  // Add current user
  if (currentUser) {
    mockUsers.push({
      id: mockUsers.length + 1,
      name: currentUser.name,
      program: currentUser.program,
      steps: currentUser.steps,
      isCurrentUser: true
    });
  }

  // Sort by steps descending
  return mockUsers.sort((a, b) => b.steps - a.steps);
};

// Filter users by program/faculty
export const filterByProgram = (users, program) => {
  return users.filter(user => user.program === program);
};

// Get friends (mock - in reality this would come from a friends list)
export const getFriends = (users, currentUserId) => {
  // For demo, just return a random subset
  return users.slice(0, 5);
};

// Calculate daily step goal
export const DAILY_STEP_GOAL = 10000;

// Calculate percentage of goal achieved
export const calculateProgress = (steps) => {
  return Math.min(Math.round((steps / DAILY_STEP_GOAL) * 100), 100);
};
