export const DrawerSnippets = {
  "Navigation Drawer": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        <div className="drawer drawer-sample h-fit">
          <input className="_drawer-toggle" type="checkbox" id="sampleDrawer1"/>
          <div className="_drawer-page-content">
            {/* page content here */}
            <label htmlFor="sampleDrawer1" className="btn">drawer</label>
          </div>

          <div className="_drawer-sidebar">
            <div className="_drawer-sidebar-content">
              {/* sidebar content here */}
              <div className="bg-white">
                <ul className="menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </div>
            </div>

            <label htmlFor="sampleDrawer1" className="_drawer-overlay"></label>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"drawer\">\n  <input class=\"_drawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\"/>\n  <div class=\"_drawer-page-content\">\n    <!-- page content here -->\n    <label class=\"btn\" for=\"myDrawer\">drawer</label>\n  </div>\n\n  <div class=\"_drawer-sidebar\">\n    <div class=\"_drawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div className=\"bg-white\">\n        <ul class=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label class=\"_drawer-overlay\" for=\"myDrawer\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"drawer\">\n  <input className=\"_drawer-toggle\" type=\"checkbox\" id=\"sampleDrawer\"/>\n  <div className=\"_drawer-page-content\">\n    {/* page content here */}\n    <label className=\"btn\" htmlFor=\"myDrawer\">drawer</label>\n  </div>\n\n  <div className=\"_drawer-sidebar\">\n    <div className=\"_drawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div className=\"bg-white\">\n        <ul className=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label className=\"_drawer-overlay\" htmlFor=\"myDrawer\"></label>\n  </div>\n</div>",
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
    htmlCode: "<div class=\"drawer --open\">\n  <input class=\"_drawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div class=\"_drawer-page-content\">\n    <!-- page content here -->\n    <label class=\"btn\" for=\"myDrawer\">drawer</label>\n  </div>\n\n  <div class=\"_drawer-sidebar\">\n    <div class=\"_drawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div className=\"bg-white\">\n        <ul class=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label class=\"_drawer-overlay\" for=\"myDrawer\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"drawer --open\">\n  <input className=\"_drawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div className=\"_drawer-page-content\">\n    {/* page content here */}\n    <label className=\"btn\" htmlFor=\"myDrawer\">drawer</label>\n  </div>\n\n  <div className=\"_drawer-sidebar\">\n    <div className=\"_drawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div className=\"bg-white\">\n        <ul className=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label className=\"_drawer-overlay\" htmlFor=\"myDrawer\"></label>\n  </div>\n</div>",
  },
}