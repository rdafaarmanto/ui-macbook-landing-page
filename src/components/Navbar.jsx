const navItems = [
  { label: "Store", href: "/store" },
  { label: "Mac", href: "/mac" },
  { label: "iPhone", href: "/iphone" },
  { label: "Watch", href: "/watch" },
  { label: "Vision", href: "/vision" },
  { label: "AirPods", href: "/airpods" },
];

const Navbar = () => {
  return (
    <header>
      <nav>
        <img src="/logo.svg" alt="Apple Logo" />
        <ul>
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>
        <div className="flex-center gap-3">
          <button>
            <img src="/search.svg" alt="Search" />
          </button>
          <button>
            <img src="/cart.svg" alt="Cart" />
          </button>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
