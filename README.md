# Stride - UW Step Tracker

Stride is a community-focused React app for University of Waterloo students that tracks daily steps, sparks friendly competition, and helps students see how they stack up against peers. Stay motivated by comparing your fitness progress with friends, faculty members, and the general school population!

## Features

### 🔐 User Sign-In
- Enter your name
- Select your program/faculty from a comprehensive list of UW programs
- Grant permission to access fitness data
- Secure local storage of user preferences

### 📊 Personal Dashboard
- **Real-time Step Tracking**: View your current daily step count
- **Progress Visualization**: See your progress toward the 10,000 daily step goal
- **Quick Stats**: Track average steps per day, total distance, and calories burned
- **Live Updates**: Step count updates automatically (simulated for demo)

### 🏆 Leaderboard & Comparisons
- **School-Wide Rankings**: Compare against all UW students
- **Faculty Rankings**: See how you rank within your program/faculty
- **Friends View**: Compare with your friend group
- **Current User Highlighting**: Easily spot your position in rankings
- **Detailed Stats**: View your rank, total participants, and top percentile

### 🎨 Modern UI/UX
- Beautiful gradient design with purple theme
- Responsive layout for mobile and desktop
- Smooth animations and transitions
- Intuitive navigation between pages

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/alex9r/stride.git
cd stride
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Building for Production

To create a production build:
```bash
npm run build
```

The optimized files will be in the `build` directory.

## Project Structure

```
stride/
├── public/
│   ├── index.html          # Main HTML template
│   └── favicon.ico         # App icon
├── src/
│   ├── components/         # React components
│   │   ├── Header.js       # Navigation header
│   │   ├── SignIn.js       # Sign-in/registration page
│   │   ├── Dashboard.js    # Main dashboard
│   │   └── Leaderboard.js  # Rankings and comparisons
│   ├── styles/
│   │   └── App.css         # Main stylesheet
│   ├── utils/
│   │   └── mockData.js     # Mock data and utilities
│   ├── App.js              # Main app component with routing
│   └── index.js            # App entry point
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Technologies Used

- **React 19.2**: Modern UI library
- **React Router Dom**: Client-side routing
- **CSS3**: Styling with gradients and animations
- **Local Storage**: User data persistence

## How It Works

### Demo Mode
The current implementation uses mock data and simulated step tracking for demonstration purposes. In a production environment, this would integrate with:
- Fitness APIs (e.g., Google Fit, Apple HealthKit, Fitbit)
- Backend server for user authentication and data storage
- Real-time database for leaderboard updates

### Data Persistence
User information is stored in the browser's local storage, allowing users to return to the app without signing in again.

## Available Programs

The app supports all major University of Waterloo programs including:
- Computer Science, Software Engineering, Computer Engineering
- All Engineering disciplines (Electrical, Mechanical, Civil, etc.)
- Mathematics, Business, Economics
- Sciences (Biology, Chemistry, Physics)
- Health Studies, Kinesiology
- Environment, Arts, and more

## Future Enhancements

- Integration with real fitness tracking APIs
- User authentication and profile management
- Friends system with social features
- Achievements and badges
- Weekly/monthly challenges
- Points system for local business rewards
- Push notifications for goal achievements
- Team competitions by faculty

## Screenshots

### Sign-In Page
![Sign-In](https://github.com/user-attachments/assets/0899ef86-9592-4914-98b8-a2226a7cc458)

### Dashboard
![Dashboard](https://github.com/user-attachments/assets/194061a6-907f-4b9c-8dc1-82e7e1688a4a)

### Leaderboard - School Wide
![Leaderboard School](https://github.com/user-attachments/assets/815b9ced-75fe-43f0-bf01-2aeec5123847)

### Leaderboard - Faculty View
![Leaderboard Faculty](https://github.com/user-attachments/assets/9a6c4dce-07cf-439d-b38f-03964d640030)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available for educational purposes.

## Contact

For questions or suggestions, please open an issue on GitHub.
