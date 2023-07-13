export const NavbarSnippets = {
  "Navigation Bar": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="bg-white p-1 flex flex-row justify-between items-center w-full z-0"> {/*didnt use the class so that the navbar stays on the card*/}
          <ul className="menu menu-horizontal">
            <li><a>Almost Material</a></li>
          </ul>

          <ul className="menu menu-horizontal">
            <li><a>Home</a></li>
            <li><a>About Us</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Navigation Bar w/ Icon": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="bg-white p-1 flex flex-row justify-between items-center w-full z-0">
          <ul className="menu menu-horizontal">
            <li>
              <a>
                <span className="material-icons-round">menu</span>
              </a>
            </li>
          </ul>

          <ul className="menu menu-horizontal">
            <li><a>Almost Material</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Navigation Bar w/ Dropdown": {
    preview: (
      <div className="card card-primary-80 h-[280px] p-5 flex gap-2 justify-center items-start flex-wrap">
        <div className="bg-white p-1 flex flex-row justify-between items-center w-full z-0">
          <ul className="menu menu-horizontal">
            <li>
              <div class="dropdown">
                <button tabIndex="0" class="btn btn-ghost">
                  expand more
                  <span class="material-icons-round">
                    expand_more
                  </span>
                </button>
                <div tabIndex="0" class="dropdown-content z-[1] card">
                  <ul class="menu w-56">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                    <li><a>Link 3</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <li><a>Item 2</a></li>
          </ul>

          <ul className="menu menu-horizontal">
            <li><a>Almost Material</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
}