export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 py-8 sm:py-10 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold bg-gradient-to-r from-[#c662e0] to-[#6a1b9a] bg-clip-text text-transparent">
            PureCodes
          </span>
          . All rights reserved.
        </p>

        <p className="text-sm text-gray-600 mt-4 sm:mt-0">
          Crafted with{" "}
          <span className="text-[#c662e0] animate-pulse">❤️</span> by{" "}
          <span className="font-medium bg-gradient-to-r from-[#c662e0] to-[#6a1b9a] bg-clip-text text-transparent">
            PureCodes Software Solutions
          </span>
        </p>
      </div>
    </footer>
  );
}
