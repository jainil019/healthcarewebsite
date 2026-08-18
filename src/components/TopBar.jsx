function TopBar() {
  return (
    <div className="bg-health-white px-4 py-2 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 md:flex-row">
        {/* Contact Information */}
        <div className="flex flex-col items-center gap-1 text-xs sm:flex-row sm:gap-5 sm:text-sm">
          <span>
            ✉ rajeevready@gmail.com
          </span>
          <span>
            📞 +91 98765 43210
          </span>
        </div>
        {/* Social Links */}
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-gray-200">
            Facebook
          </a>
          <a href="#" className="hover:text-gray-200">
            Instagram
          </a>
          <a href="#" className="hover:text-gray-400">
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
export default TopBar;