export const DrawerSnippets = {
  "Navigation Drawer": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        <div className="drawer drawer-sample">
          <input className="drawer-toggle" type="checkbox" id="sampleDrawer1"/>
          <div className="drawer-page-content">
            {/* page content here */}
            <label htmlFor="sampleDrawer1" className="btn">drawer</label>
          </div>

          <div className="drawer-sidebar">
            <div className="drawer-sidebar-content">
              {/* sidebar content here */}
              <div>
                <ul className="menu">
                  <li><a href="#">Item 1</a></li>
                  <li><a href="#">Item 2</a></li>
                  <li><a href="#">Item 3</a></li>
                </ul>
              </div>
            </div>

            <label htmlFor="sampleDrawer1" className="drawer-overlay"></label>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"drawer\">\n  <input class=\"drawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div class=\"drawer-page-content\">\n    <!-- page content here -->\n  </div>\n\n  <div class=\"drawer-sidebar\">\n    <div class=\"drawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label class=\"drawer-overlay\" for=\"myDrawer\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"drawer\">\n  <input className=\"drawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div className=\"drawer-page-content\">\n    {/* page content here */}\n  </div>\n\n  <div className=\"drawer-sidebar\">\n    <div className=\"drawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label className=\"drawer-overlay\" htmlFor=\"myDrawer\"></label>\n  </div>\n</div>",
  },
  "Opened Navigation Drawer": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex flex-row gap-2 items-center flex-wrap">
        {/* sidebar content here */}
        <div className="w-[23rem]">
          <ul className="menu menu-primary">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"drawer drawer-open\">\n  <input class=\"drawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div class=\"drawer-page-content\">\n    <!-- page content here -->\n  </div>\n\n  <div class=\"drawer-sidebar\">\n    <div class=\"drawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label class=\"drawer-overlay\" for=\"myDrawer\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"drawer drawer-open\">\n  <input className=\"drawer-toggle\" type=\"checkbox\" id=\"myDrawer\"/>\n  <div className=\"drawer-page-content\">\n    {/* page content here */}\n  </div>\n\n  <div className=\"drawer-sidebar\">\n    <div className=\"drawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label className=\"drawer-overlay\" htmlFor=\"myDrawer\"></label>\n  </div>\n</div>",
  },
}