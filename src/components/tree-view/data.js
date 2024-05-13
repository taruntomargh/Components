const treeView = [
  {
    name: "Home",
    to: "/",
    children: {
      name: "Profile",
      to: "/profile",
      children: [
        {
          name: "User1",
          to: "/user1",
        },
        {
          name: "User2",
          to: "/user2",
        },
      ],
    },
  },
  {
    name: "Settings",
    to: "/settings",
    children: {
      name: "Account",
      to: "/account",
    },
  },
];

export default treeView;
