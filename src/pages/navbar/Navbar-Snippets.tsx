// note to self:
// top navbars needs to be placed inside the navdrawer-page-content class
// side and bottom navbars needs to be placed as a first child of navdrawer class

export const NavbarSnippets = {
  "Navigation Bar": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="navbar static z-[0]"> {/*didnt use the class so that the navbar stays on the card*/}
          <div className="navbar-start">
            <ul className="menu menu-horizontal">
              <li><a>News</a></li>
              <li><a>Blogs</a></li>
              <li><a>Contact Me</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu menu-horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar\"> \n  <div class=\"navbar-start\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>News</a></li>\n      <li><a>Blogs</a></li>\n      <li><a>Contact Me</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar\"> \n  <div className=\"navbar-start\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>News</a></li>\n      <li><a>Blogs</a></li>\n      <li><a>Contact Me</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navigation Bar w/ Icon": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="navbar static z-[0]">
          <div className="navbar-start">
            <ul className="menu menu-horizontal">
              <li>
                <a className="btn btn-circle btn-ghost">
                  <span className="material-icons-round">menu</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu menu-horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu menu-horizontal\">\n      <li>\n        <a class=\"btn btn-circle btn-ghost\">\n          <!-- icon here -->\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu menu-horizontal\">\n      <li>\n        <a className=\"btn btn-circle btn-ghost\">\n          {/* icon here */}\n        </a>\n      </li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navigation Bar w/ Collapsible Menus": {
    preview: (
      <div className="card h-[280px] my-2 p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static z-[0]">
          <div className="navbar-start">
            <ul className="menu menu-horizontal">
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
            <ul className="menu menu-horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu menu-horizontal\">\n      <li>\n        <details open>\n          <summary>Projects</summary>\n          <ul class=\"w-56\">\n            <li><a>Item 1</a></li>\n            <li><a>Item 2</a></li>\n          </ul>\n        </details>\n      </li>\n      <li><a>Updates</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu menu-horizontal\">\n      <li>\n        <details open>\n          <summary>Projects</summary>\n          <ul className=\"w-56\">\n            <li><a>Item 1</a></li>\n            <li><a>Item 2</a></li>\n          </ul>\n        </details>\n      </li>\n      <li><a>Updates</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navigation Bar w/ Dropdown": {
    preview: (
      <div className="card h-[280px] my-2 p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static z-[0]">
          <div className="navbar-start">
            <ul className="menu menu-horizontal">
              <li><a>Meals</a></li>
              <li><a>Mix & Match</a></li>
              <li>
                <div className="dropdown">
                  <button tabIndex="0" className="btn btn-ghost">More</button>
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
            <ul className="menu menu-horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>Meals</a></li>\n      <li><a>Mix & Match</a></li>\n      <li>\n        <div class=\"dropdown\">\n          <button tabIndex=\"0\" class=\"btn btn-ghost\">More</button>\n          <div tabIndex=\"0\" class=\"dropdown-content z-[1] card\">\n            <ul class=\"menu w-56\">\n              <li><a>Link 1</a></li>\n              <li><a>Link 2</a></li>\n              <li><a>Link 3</a></li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>Meals</a></li>\n      <li><a>Mix & Match</a></li>\n      <li>\n        <div className=\"dropdown\">\n          <button tabIndex=\"0\" className=\"btn btn-ghost\">More</button>\n          <div tabIndex=\"0\" className=\"dropdown-content z-[1] card\">\n            <ul className=\"menu w-56\">\n              <li><a>Link 1</a></li>\n              <li><a>Link 2</a></li>\n              <li><a>Link 3</a></li>\n            </ul>\n          </div>\n        </div>\n      </li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Navbar Start, Center and End": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static z-[0]">
          <div className="navbar-start">
            <ul className="menu menu-horizontal">
              <li><a>Almost Material</a></li>
            </ul>
          </div>

          <div className="navbar-center">
            <ul className="menu menu-horizontal">
              <li><a>On Sale</a></li>
              <li><a>Bundles</a></li>
              <li><a>Categories</a></li>
            </ul>
          </div>

          <div className="navbar-end">
            <ul className="menu menu-horizontal">
              <li><a className="btn">Shopping Cart</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-center\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>On Sale</a></li>\n      <li><a>Bundles</a></li>\n      <li><a>Categories</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a class=\"btn\">Shopping Cart</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-center\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>On Sale</a></li>\n      <li><a>Bundles</a></li>\n      <li><a>Categories</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a className=\"btn\">Shopping Cart</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Bottom Navigation Bar": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar navbar-bottom !static z-[0]">
          <ul className="menu">
            <li><a className="menu-active"><span className="material-icons-round">home</span>home</a></li>
            <li><a><span className="material-icons-round">library_books</span>library</a></li>
            <li><a><span className="material-icons-round">favorite</span>favorites</a></li>
            <li><a><span className="material-icons-round">update</span>update</a></li>
            <li><a><span className="material-icons-round">settings</span>settings</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navbar\">\n  <div class=\"navbar-start\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-center\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a>On Sale</a></li>\n      <li><a>Bundles</a></li>\n      <li><a>Categories</a></li>\n    </ul>\n  </div>\n\n  <div class=\"navbar-end\">\n    <ul class=\"menu menu-horizontal\">\n      <li><a class=\"btn\">Shopping Cart</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"navbar\">\n  <div className=\"navbar-start\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>Almost Material</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-center\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a>On Sale</a></li>\n      <li><a>Bundles</a></li>\n      <li><a>Categories</a></li>\n    </ul>\n  </div>\n\n  <div className=\"navbar-end\">\n    <ul className=\"menu menu-horizontal\">\n      <li><a className=\"btn\">Shopping Cart</a></li>\n    </ul>\n  </div>\n</div>",
  },
}