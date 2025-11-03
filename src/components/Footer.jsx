const Footer = () => {
  return (
    <footer className="text-center py-1 mt-16 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
      <p>
        © {new Date().getFullYear()} All Rights Reserved. Coded by{" "}
        <a
          href="https://www.linkedin.com/in/bazifabdullah/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-gray-800 dark:text-gray-200 hover:underline"
        >
          Bazif Abdullah
        </a>
      </p>
    </footer>
  );
};

export default Footer;
