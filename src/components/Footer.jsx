export default function Footer() {
  return (
    <footer className="bg-gray-950 bg-opacity-100 py-6 mt-auto">
      <div className="container mx-auto text-center">
        <p>
          &copy; {new Date().getFullYear()} Afran Hossan Reaz. All rights
          reserved.
        </p>
        <div className="mt-2 text-gray-300 hover:text-blue-100 font-bold space-x-4">
          <a
            href="https://www.linkedin.com/in/afran-hossan-reaz-b58635287/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a href="https://github.com/AfranHossanReaz" target="_blank">
            GitHub
          </a>
          <a href="https://github.com/AfranHossanReaz" target="_blank">
            Facebook
          </a>
        </div>
      </div>
    </footer>
  );
}
