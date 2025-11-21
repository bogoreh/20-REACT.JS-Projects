export const users = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    bio: "Frontend Developer | React Enthusiast"
  },
  {
    id: 2,
    name: "Sarah Wilson",
    username: "sarahw",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    bio: "UX Designer & Photographer"
  },
  {
    id: 3,
    name: "Mike Chen",
    username: "mikec",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    bio: "Full Stack Developer"
  }
];

export const posts = [
  {
    id: 1,
    userId: 1,
    content: "Just learned about React hooks! They make functional components so powerful. #React #JavaScript",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
    timestamp: "2024-01-15T10:30:00Z",
    likes: 24,
    comments: [
      {
        id: 1,
        userId: 2,
        content: "Hooks are amazing! Which one is your favorite?",
        timestamp: "2024-01-15T11:00:00Z"
      },
      {
        id: 2,
        userId: 3,
        content: "Wait until you try custom hooks!",
        timestamp: "2024-01-15T11:30:00Z"
      }
    ]
  },
  {
    id: 2,
    userId: 2,
    content: "Beautiful sunset from my hike today. Nature always inspires my design work! 🌅",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=500&h=300&fit=crop",
    timestamp: "2024-01-14T18:45:00Z",
    likes: 42,
    comments: [
      {
        id: 3,
        userId: 1,
        content: "Stunning view! Where was this taken?",
        timestamp: "2024-01-14T19:00:00Z"
      }
    ]
  },
  {
    id: 3,
    userId: 3,
    content: "Just deployed my new portfolio website built with Vite and React! Super fast development experience.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=500&h=300&fit=crop",
    timestamp: "2024-01-13T14:20:00Z",
    likes: 18,
    comments: []
  }
];