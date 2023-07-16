export const NavbarSnippets = {
  "Navigation Bar": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="navbar static bg-white z-[0]"> {/*didnt use the class so that the navbar stays on the card*/}
          <div className="navbar-start">
            <ul className="menu --horizontal">
              <li><a>News</a></li>
              <li><a>Blogs</a></li>
              <li><a>Contact Me</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu --horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar bg-white\"> \n  <div class=\"navbar-start\">\n    <ul class=\"menu --horizontal\">\n      <li><a>News</a></li>\n      <li><a>Blogs</a></li>\n      <li><a>Contact Me</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar bg-white\"> \n  <div className=\"navbar-start\">\n    <ul className=\"menu --horizontal\">\n      <li><a>News</a></li>\n      <li><a>Blogs</a></li>\n      <li><a>Contact Me</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navigation Bar w/ Icon": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="navbar static bg-white z-[0]">
          <div className="navbar-start">
            <ul className="menu --horizontal">
              <li>
                <a className="btn --circle --ghost">
                  <span className="material-icons-round">menu</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu --horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar bg-white\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu --horizontal\">\n      <li>\n        <a class=\"btn --circle --ghost\">\n          <!-- icon here -->\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar bg-white\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu --horizontal\">\n      <li>\n        <a className=\"btn --circle --ghost\">\n          {/* icon here */}\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navigation Bar w/ Collapsible Menus": {
    preview: (
      <div className="card card-primary-80 h-[280px] p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static bg-white z-[0]">
          <div className="navbar-start">
            <ul className="menu --horizontal">
              <li>
                <details open>
                  <summary>Projects</summary>
                  <ul className="w-56">
                    <li><a>Item 1</a></li>
                    <li><a>Item 2</a></li>
                  </ul>
                </details>
              </li>
              <li><a>Updates</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu --horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar bg-white\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu --horizontal\">\n      <li>\n        <details open>\n          <summary>Projects</summary>\n          <ul class=\"w-56\">\n            <li><a>Item 1</a></li>\n            <li><a>Item 2</a></li>\n          </ul>\n        </details>\n      </li>\n      <li><a>Updates</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar bg-white\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu --horizontal\">\n      <li>\n        <details open>\n          <summary>Projects</summary>\n          <ul className=\"w-56\">\n            <li><a>Item 1</a></li>\n            <li><a>Item 2</a></li>\n          </ul>\n        </details>\n      </li>\n      <li><a>Updates</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navigation Bar w/ Dropdown": {
    preview: (
      <div className="card card-primary-80 h-[280px] p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static bg-white z-[0]">
          <div className="navbar-start">
            <ul className="menu --horizontal">
              <li><a>Meals</a></li>
              <li><a>Mix & Match</a></li>
              <li>
                <div className="dropdown">
                  <button tabIndex="0" className="btn --ghost">More</button>
                  <div tabIndex="0" className="dropdown-content z-[0] card">
                    <ul className="menu w-56">
                      <li><a>Link 1</a></li>
                      <li><a>Link 2</a></li>
                      <li><a>Link 3</a></li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu --horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar bg-white\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu --horizontal\">\n      <li><a>Meals</a></li>\n      <li><a>Mix & Match</a></li>\n      <li>\n        <div class=\"dropdown\">\n          <button tabIndex=\"0\" class=\"btn --ghost\">More</button>\n          <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n            <ul class=\"menu w-56\">\n              <li><a>Link 1</a></li>\n              <li><a>Link 2</a></li>\n              <li><a>Link 3</a></li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar bg-white\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu --horizontal\">\n      <li><a>Meals</a></li>\n      <li><a>Mix & Match</a></li>\n      <li>\n        <div className=\"dropdown\">\n          <button tabIndex=\"0\" className=\"btn --ghost\">More</button>\n          <div tabIndex=\"0\" className=\"dropdown-content z-[1] card\">\n            <ul className=\"menu w-56\">\n              <li><a>Link 1</a></li>\n              <li><a>Link 2</a></li>\n              <li><a>Link 3</a></li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navbar static start, center and end": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static bg-white z-[0]">
          <div className="navbar-start">
            <ul className="menu --horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>

          <div className="navbar-center">
            <ul className="menu --horizontal">
              <li><a>On Sale</a></li>
              <li><a>Bundles</a></li>
              <li><a>Categories</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu --horizontal">
              <li><a className="btn">Shopping Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar bg-white\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-center\">\n    <ul class=\"menu --horizontal\">\n      <li><a>On Sale</a></li>\n      <li><a>Bundles</a></li>\n      <li><a>Categories</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu --horizontal\">\n      <li><a class=\"btn\">Shopping Cart</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar bg-white\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu --horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-center\">\n    <ul className=\"menu --horizontal\">\n      <li><a>On Sale</a></li>\n      <li><a>Bundles</a></li>\n      <li><a>Categories</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu --horizontal\">\n      <li><a className=\"btn\">Shopping Cart</a></li>\n    </ul>\n  </div>\n</div>",
  },
}