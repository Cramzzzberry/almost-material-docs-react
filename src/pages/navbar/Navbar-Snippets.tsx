export const NavbarSnippets = {
  "Navigation Bar": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="navbar static bg-white p-1 w-full"> {/*didnt use the class so that the navbar stays on the card*/}
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
    htmlCode: "",
    jsxCode: "",
  },
  "Navigation Bar w/ Icon": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="navbar static bg-white p-1 w-full">
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
    htmlCode: "",
    jsxCode: "",
  },
  "Navigation Bar w/ Collapsible Menus": {
    preview: (
      <div className="card card-primary-80 h-[280px] p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static bg-white p-1 w-full">
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
    htmlCode: "",
    jsxCode: "",
  },
  "Navigation Bar w/ Dropdown": {
    preview: (
      <div className="card card-primary-80 h-[280px] p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static bg-white p-1 w-full">
          <div className="navbar-start">
            <ul className="menu menu-horizontal">
              <li><a>Meals</a></li>
              <li><a>Mix & Match</a></li>
              <li>
                <div className="dropdown">
                  <button tabIndex="0" className="btn btn-ghost">More</button>
                  <div tabIndex="0" className="dropdown-content z-[1] card">
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
    htmlCode: "",
    jsxCode: "",
  },
  "Navbar static start, center and end": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="navbar static bg-white p-1 w-full">
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
    htmlCode: "",
    jsxCode: "",
  },
}