// =============================================
//  DATA FILE - Dark Theme Version
// =============================================

const USERS_DATA = [
  {
    id: 1,
    name: "Verona Nov",
    avatar: "https://i.pravatar.cc/150?u=verona",
    coverColor: "#2d1f5e",      // dark purple
    status: "online",           // online | away | offline
    badges: [
      { label: "Writer", type: "writer" },
      { label: "Golden User", type: "golden" }
    ],
    bio: "I write short stories and fanfiction for the most popular fandoms.",
    stats: {
      followers: "12k",
      following: "450"
    }
  },
  {
    id: 2,
    name: "Alex River",
    avatar: "https://i.pravatar.cc/150?u=alex",
    coverColor: "#1a3050",      // dark blue
    status: "away",
    badges: [
      { label: "Editor", type: "editor" },
      { label: "Silver User", type: "silver" }
    ],
    bio: "World builder and coffee enthusiast. Currently working on a sci-fi trilogy.",
    stats: {
      followers: "8.5k",
      following: "1.2k"
    }
  },
  {
    id: 3,
    name: "Mila Kunis",
    avatar: "https://i.pravatar.cc/150?u=mila",
    coverColor: "#0f3d2e",      // dark green
    status: "online",
    badges: [
      { label: "Artist", type: "artist" },
      { label: "Golden User", type: "golden" }
    ],
    bio: "Digital illustrator focusing on character design and fantasy landscapes.",
    stats: {
      followers: "25k",
      following: "300"
    }
  }
];

export default USERS_DATA;
