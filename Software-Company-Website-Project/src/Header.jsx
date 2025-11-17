import React, { useEffect, useRef, useState } from "react";
import "./index.css";
import logo from "./assets/logo.png";
import ServiceHead from "./components/service/ServiceHead";
import ServiceItem from "./components/service/ServiceItem";
import menu from "./assets/menu.png";
import { NavLink } from "react-router-dom";
import { useBlogData } from './context/Context';

const Header = () => {
  // Service categories data
  const serviceCategories = [
    {
      title: "Mobile Development",
      icon: "ri-smartphone-fill",
      items: [
        { name: "iOS", icon: "ri-apple-fill" },
        { name: "Android", icon: "ri-android-fill" },
        { name: "Cross-Platform", icon: "ri-device-line" }
      ]
    },
    {
      title: "Web Development",
      icon: "ri-computer-line",
      items: [
        { name: "Fullstack JS", icon: "ri-javascript-fill" },
        { name: "Ecommerce&CMS", icon: "ri-shopping-cart-2-line" },
        { name: "Magneto", icon: "ri-magnet-line" },
        { name: "Wordpress", icon: "ri-wordpress-fill" },
        { name: "Progressive Web App", icon: "ri-global-line" }
      ]
    },
    {
      title: "Animation Services",
      icon: "ri-movie-2-line",
      items: [
        { name: "Animation Services", icon: "ri-film-line" },
        { name: "Explainer Video", icon: "ri-video-line" }
      ]
    },
    {
      title: "BlockChain",
      icon: "ri-links-line",
      items: [
        { name: "Smart Contract", icon: "ri-file-list-3-line" },
        { name: "dApps", icon: "ri-apps-2-line" },
        { name: "Crypto Currency", icon: "ri-coin-line" }
      ]
    },
    {
      title: "Digital Marketing",
      icon: "ri-megaphone-line",
      items: [
        { name: "App Store Optimization", icon: "ri-store-2-line" },
        { name: "Social Media Optimization", icon: "ri-share-line" },
        { name: "Search Engine Optimization", icon: "ri-search-2-line" }
      ]
    }
  ];

  // Process items data
  const processItems = [
    { name: "Fixed Cost Project", icon: "ri-price-tag-3-line" },
    { name: "Talent On Demand", icon: "ri-team-line" },
    { name: "Product Engineering", icon: "ri-tools-line" }
  ];

  let service = useRef();
  let items = useRef();
  let outerDiv = useRef();
  let [toggle, setToggle] = useState(false);

  let serviceClick = () => {
    let dupToggle = !toggle;
    setToggle(dupToggle);

    // Close process menu when service opens
    if (dupToggle && toggle2) {
      setToggle2(false);
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }

    if (dupToggle) {
      service.current.style.borderBottom = "2px solid #58a6ff";
      items.current.style.height = "fit-content";
      outerDiv.current.style.height = "70vh";
    } else {
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }
  };

  let [toggle2, setToggle2] = useState(false);
  let process = useRef();
  let proItems = useRef();

  let processClick = () => {
    let dupli2Toggle = !toggle2;
    setToggle2(dupli2Toggle);

    // Close service menu when process opens
    if (dupli2Toggle && toggle) {
      setToggle(false);
      service.current.style.borderBottom = "2px solid transparent";
      items.current.style.height = "0px";
      outerDiv.current.style.height = "0px";
    }

    if (dupli2Toggle) {
      process.current.style.borderBottom = "2px solid #58a6ff";
      proItems.current.style.height = "fit-content";
      proItems.current.style.paddingBottom = "5px";
    } else {
      process.current.style.borderBottom = "2px solid transparent";
      proItems.current.style.height = "0px";
      proItems.current.style.paddingBottom = "0px";
    }
  };

  let slideMenu = useRef();
  let [menuToggle, setMenuToggle] = useState(false);

  let menuClick = () => {
    let dupli3Toggle = !menuToggle;
    setMenuToggle(dupli3Toggle);
    if (dupli3Toggle) {
      slideMenu.current.style.height = "fit-content";
    } else {
      slideMenu.current.style.height = "0px";
    }
  };

  const [isServiceOpen, setIsServiceOpen] = useState(false);
  const [isProcessOpen, setIsProcessOpen] = useState(false);

  // Close process when service opens and vice versa
  const handleServiceToggle = () => {
    setIsServiceOpen(prev => !prev);
    if (!isServiceOpen) {
      setIsProcessOpen(false);
    }
  };

  const handleProcessToggle = () => {
    setIsProcessOpen(prev => !prev);
    if (!isProcessOpen) {
      setIsServiceOpen(false);
    }
  };

  const blogList = useRef();
  const [blogToggle, setblogToggle] = useState(false);

  let blogClick = ()=>{
    let blog = !blogToggle;
    setblogToggle(blog)
    if (blog) {
      blogList.current.style.height = "fit-content";
    } else {
      blogList.current.style.height = "0px";
    }
  }

  let deskBlog = useRef();
  let [DeskBlogToggle, setDeskBlogToggle] = useState(false);

  let deskBlogHandler = ()=>{
    let deskToggle = !DeskBlogToggle;
    setDeskBlogToggle(deskToggle);
    if(deskToggle){
      deskBlog.current.style.display = "inline";
      deskBlog.current.style.height = "fit-content";
      deskBlog.current.style.border = '1px solid #30363d';
    }
    else{
      deskBlog.current.style.display = "none";
      deskBlog.current.style.height = "0px";
      deskBlog.current.style.border = 'transparent';
    }
  }

  let mobBlogList = useRef();
  let [MobBlogToggle, setMobkBlogToggle] = useState(false);

  let mobBlogHandler = ()=>{
    let switchToggle = !MobBlogToggle;
    setMobkBlogToggle(switchToggle);
    if(switchToggle){
      mobBlogList.current.style.height = "fit-content";
    }
    else{
      mobBlogList.current.style.height = "0px";
    }
  }

  const blogs = useBlogData();

  return (
    <div className="fixed z-[999] top-0 left-0 right-0 w-full bg-transparent">
      <div className="absolute top-0 left-0 right-0 bg-[#0d1117]/90 backdrop-blur-md border-b border-[#30363d]/50">
        <div className="max-w-[1700px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <NavLink to='/' className="flex-shrink-0">
              <img
                className="h-12 sm:h-16 lg:h-20 xl:h-24 w-auto"
                src={logo}
                alt="Logo Image"
              />
            </NavLink>

            <i
              className={`lg:hidden text-xl cursor-pointer transition-all duration-300 ${
                menuToggle ? 'ri-close-line' : 'ri-menu-line'
              }`}
              onClick={menuClick}
            ></i>

            <div className="hidden lg:flex items-center space-x-8">
              {/* Services Dropdown */}
              <div className="relative group">
                <button
                  onClick={handleServiceToggle}
                  className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#58a6ff] transition-colors duration-300 rounded-lg hover:bg-[#161b22]/50 font-medium"
                >
                  <i className="ri-tools-fill text-lg"></i>
                  <span>Services</span>
                  <i className={`ri-arrow-down-s-fill transition-transform duration-300 ${isServiceOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isServiceOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-[600px] bg-[#161b22]/98 backdrop-blur-md border border-[#30363d] rounded-2xl shadow-2xl p-6 z-[1000] animate-in slide-in-from-top-2 duration-300">
                    <div className="grid grid-cols-3 gap-6">
                      {serviceCategories.map((category, index) => (
                        <div key={index} className="space-y-3">
                          <h3 className="text-sm font-bold text-[#58a6ff] uppercase tracking-wider flex items-center gap-2">
                            <i className={`${category.icon} text-base`}></i>
                            {category.title}
                          </h3>
                          <ul className="space-y-2">
                            {category.items.map((item, idx) => (
                              <li key={idx}>
                                <a href="#" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:bg-[#30363d]/50 px-2 py-1 rounded-md transition-all duration-200">
                                  <i className={`${item.icon} text-xs`}></i>
                                  {item.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-center mt-6 pt-4 border-t border-[#30363d]">
                      <img className="h-16 opacity-80" src={menu} alt="Menu Illustration" />
                    </div>
                  </div>
                )}
              </div>

              {/* Process Dropdown */}
              <div className="relative group">
                <button
                  onClick={handleProcessToggle}
                  className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#58a6ff] transition-colors duration-300 rounded-lg hover:bg-[#161b22]/50 font-medium"
                >
                  <i className="ri-settings-3-line text-lg"></i>
                  <span>Process</span>
                  <i className={`ri-arrow-down-s-fill transition-transform duration-300 ${isProcessOpen ? 'rotate-180' : ''}`}></i>
                </button>

                {isProcessOpen && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-80 bg-[#161b22]/98 backdrop-blur-md border border-[#30363d] rounded-2xl shadow-2xl p-4 z-[1000] animate-in slide-in-from-top-2 duration-300">
                    <div className="space-y-2">
                      {processItems.map((item, index) => (
                        <a
                          key={index}
                          href="#"
                          className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-[#30363d]/50 rounded-lg transition-all duration-200 group/item"
                        >
                          <i className={`${item.icon} text-lg text-[#58a6ff] group-hover/item:scale-110 transition-transform duration-200`}></i>
                          <span className="font-medium">{item.name}</span>
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Regular Nav Links */}
              <NavLink
                to="/about"
                className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#58a6ff] transition-colors duration-300 rounded-lg hover:bg-[#161b22]/50 font-medium"
              >
                <i className="ri-information-line text-lg"></i>
                <span>About Us</span>
              </NavLink>

              <button className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#58a6ff] transition-colors duration-300 rounded-lg hover:bg-[#161b22]/50 font-medium">
                <i className="ri-question-line text-lg"></i>
                <span>Enquire Now</span>
              </button>

              {/* Blogs Dropdown */}
              <div className="relative group">
                <button
                  onClick={deskBlogHandler}
                  className="flex items-center gap-2 px-3 py-2 text-white hover:text-[#58a6ff] transition-colors duration-300 rounded-lg hover:bg-[#161b22]/50 font-medium"
                >
                  <i className="ri-article-line text-lg"></i>
                  <span>Blogs</span>
                  <i className={`ri-arrow-down-s-fill transition-transform duration-300 ${DeskBlogToggle ? 'rotate-180' : ''}`}></i>
                </button>

                {DeskBlogToggle && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-[#161b22]/98 backdrop-blur-md border border-[#30363d] rounded-2xl shadow-2xl p-4 z-[1000] animate-in slide-in-from-top-2 duration-300">
                    <div className="space-y-2 max-h-64 overflow-y-auto">
                      {blogs.map((blog, index) => (
                        <NavLink
                          key={index}
                          to={`/blogs/${blog.name.toLowerCase().replace(" ", "-")}`}
                          className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-[#30363d]/50 rounded-lg transition-all duration-200 group/blog"
                          onClick={() => setDeskBlogToggle(false)}
                        >
                          <i className="ri-book-marked-fill text-[#58a6ff] group-hover/blog:scale-110 transition-transform duration-200"></i>
                          <span className="font-medium truncate">{blog.name}</span>
                        </NavLink>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <button className="ml-4 px-6 py-2 bg-gradient-to-r from-[#58a6ff] to-[#238636] hover:from-[#4a90ff] hover:to-[#1e7e34] text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Get Free Quote
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0d1117]/95 backdrop-blur-md border-t border-[#30363d]/50 overflow-hidden transition-all duration-300" ref={slideMenu}>
          <div className="px-4 py-6 space-y-4 max-h-[70vh] overflow-y-auto">
            {/* Services Mobile Dropdown */}
            <div className="space-y-2">
              <button
                onClick={serviceClick}
                className="w-full flex items-center justify-between p-3 bg-[#161b22]/50 hover:bg-[#161b22] rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <i className="ri-tools-fill text-lg text-[#58a6ff]"></i>
                  <span className="font-medium text-white">Services</span>
                </div>
                <i className={`ri-arrow-down-s-fill transition-transform duration-300 ${toggle ? 'rotate-180' : ''}`}></i>
              </button>

              {toggle && (
                <div className="bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] rounded-xl p-4 space-y-4">
                  {serviceCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                      <h3 className="text-sm font-bold text-[#58a6ff] uppercase tracking-wider flex items-center gap-2">
                        <i className={`${category.icon} text-base`}></i>
                        {category.title}
                      </h3>
                      <div className="space-y-1 ml-6">
                        {category.items.map((item, idx) => (
                          <a key={idx} href="#" className="flex items-center gap-2 text-sm text-gray-300 hover:text-white hover:bg-[#30363d]/50 px-2 py-1 rounded-md transition-all duration-200">
                            <i className={`${item.icon} text-xs`}></i>
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Process Mobile Dropdown */}
            <div className="space-y-2">
              <button
                onClick={processClick}
                className="w-full flex items-center justify-between p-3 bg-[#161b22]/50 hover:bg-[#161b22] rounded-xl transition-all duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <i className="ri-settings-3-line text-lg text-[#58a6ff]"></i>
                  <span className="font-medium text-white">Process</span>
                </div>
                <i className={`ri-arrow-down-s-fill transition-transform duration-300 ${toggle2 ? 'rotate-180' : ''}`}></i>
              </button>

              {toggle2 && (
                <div className="bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] rounded-xl p-4 space-y-2">
                  {processItems.map((item, index) => (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-3 px-4 py-3 text-gray-300 hover:text-white hover:bg-[#30363d]/50 rounded-lg transition-all duration-200 group/item"
                    >
                      <i className={`${item.icon} text-lg text-[#58a6ff] group-hover/item:scale-110 transition-transform duration-200`}></i>
                      <span className="font-medium">{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-2">
              <NavLink
                to="/about"
                className="flex items-center gap-3 p-3 bg-[#161b22]/50 hover:bg-[#161b22] rounded-xl transition-all duration-200"
              >
                <i className="ri-information-line text-lg text-[#58a6ff]"></i>
                <span className="font-medium text-white">About Us</span>
              </NavLink>

              <button className="w-full flex items-center gap-3 p-3 bg-[#161b22]/50 hover:bg-[#161b22] rounded-xl transition-all duration-200 text-left">
                <i className="ri-question-line text-lg text-[#58a6ff]"></i>
                <span className="font-medium text-white">Enquire Now</span>
              </button>

              {/* Blogs Mobile Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={mobBlogHandler}
                  className="w-full flex items-center justify-between p-3 bg-[#161b22]/50 hover:bg-[#161b22] rounded-xl transition-all duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <i className="ri-article-line text-lg text-[#58a6ff]"></i>
                    <span className="font-medium text-white">Blogs</span>
                  </div>
                  <i className={`ri-arrow-down-s-fill transition-transform duration-300 ${MobBlogToggle ? 'rotate-180' : ''}`}></i>
                </button>

                {MobBlogToggle && (
                  <div className="bg-[#161b22]/80 backdrop-blur-sm border border-[#30363d] rounded-xl p-4 space-y-2 max-h-64 overflow-y-auto">
                    {blogs.map((blog, index) => (
                      <NavLink
                        key={index}
                        to={`/blogs/${blog.name}`}
                        className="flex items-center gap-3 px-3 py-2 text-gray-300 hover:text-white hover:bg-[#30363d]/50 rounded-lg transition-all duration-200 group/blog"
                        onClick={() => setMobkBlogToggle(false)}
                      >
                        <i className="ri-book-marked-fill text-[#58a6ff] group-hover/blog:scale-110 transition-transform duration-200"></i>
                        <span className="font-medium">{blog.name}</span>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4 border-t border-[#30363d]">
              <button className="w-full bg-gradient-to-r from-[#58a6ff] to-[#238636] hover:from-[#4a90ff] hover:to-[#1e7e34] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                <i className="ri-quote-text mr-2"></i>Get Free Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
