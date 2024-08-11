type NavLink = {
  href: string;
  label: string;
};

export const links: NavLink[] = [
  { href: "/", label: "home" },
  { href: "/favorites ", label: "favorites" },
  { href: "/notification ", label: "notification" },
  { href: "/posts/create ", label: "create post" },
  { href: "/posts", label: "posts" },
  { href: "/profile ", label: "profile" },
  { href: "/search", label: "search" },
  { href: "/setting", label: "setting" },
];
