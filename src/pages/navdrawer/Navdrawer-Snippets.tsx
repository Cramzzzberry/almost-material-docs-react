export const NavdrawerSnippets = {
  "Navigation Drawer": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        <div className="navdrawer h-fit">
          <input className="navdrawer-toggle" type="checkbox" id="sampleDrawer1"/>
          <div className="navdrawer-page-content">
            {/* page content here */}
            <label htmlFor="sampleDrawer1" className="btn">drawer</label>
          </div>

          <div className="navdrawer-sidebar">
            <div className="navdrawer-sidebar-content">
              {/* sidebar content here */}
              <div>
                <ul className="menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </div>
            </div>

            <label htmlFor="sampleDrawer1" className="navdrawer-overlay"></label>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navdrawer\">\n  <input class=\"navdrawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\"/>\n  <div class=\"navdrawer-page-content\">\n    <!-- page content here -->\n    <label class=\"btn\" for=\"myDrawer\">drawer</label>\n  </div>\n\n  <div class=\"navdrawer-sidebar\">\n    <div class=\"navdrawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label class=\"navdrawer-overlay\" for=\"myDrawer\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"navdrawer\">\n  <input className=\"navdrawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\"/>\n  <div className=\"navdrawer-page-content\">\n    {/* page content here */}\n    <label className=\"btn\" htmlFor=\"myDrawer\">drawer</label>\n  </div>\n\n  <div className=\"navdrawer-sidebar\">\n    <div className=\"navdrawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label className=\"navdrawer-overlay\" htmlFor=\"myDrawer\"></label>\n  </div>\n</div>",
  },
  "Opened Navigation Drawer": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 items-center flex-wrap">
        {/* sidebar content here */}
        <div className="bg-white w-[23rem]">
          <ul className="menu menu-primary">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navdrawer --open\">\n  <input class=\"navdrawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div class=\"navdrawer-page-content\">\n    <!-- page content here -->\n    <label class=\"btn\" for=\"myDrawer\">drawer</label>\n  </div>\n\n  <div class=\"navdrawer-sidebar\">\n    <div class=\"navdrawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label class=\"navdrawer-overlay\" for=\"myDrawer\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"navdrawer --open\">\n  <input className=\"navdrawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div className=\"navdrawer-page-content\">\n    {/* page content here */}\n    <label className=\"btn\" htmlFor=\"myDrawer\">drawer</label>\n  </div>\n\n  <div className=\"navdrawer-sidebar\">\n    <div className=\"navdrawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label className=\"navdrawer-overlay\" htmlFor=\"myDrawer\"></label>\n  </div>\n</div>",
  },
}