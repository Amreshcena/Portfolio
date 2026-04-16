const Footer = () => {
  return (
    <footer className="container mx-auto px-6 py-12 border-t border-border text-center">
      <p className="text-sm text-foreground">
        © {new Date().getFullYear()} Amresh M. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
