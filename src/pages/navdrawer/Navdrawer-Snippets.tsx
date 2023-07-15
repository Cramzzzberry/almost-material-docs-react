export const NavdrawerSnippets = {
  "Navigation Drawer": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        <div className="navdrawer h-fit">
          <input type="checkbox" className="navdrawer-toggle" id="sampleDrawer1"/>
          <div className="navdrawer-page-content">
            {/* page content here */}
            <label htmlFor="sampleDrawer1" className="btn">drawer</label>
          </div>

          <div className="navdrawer-sidebar z-[1]">
            <div className="navdrawer-sidebar-content">
              {/* sidebar content here */}
              <div>
                <ul className="menu menu-primary">
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
    htmlCode: "<div class=\"navdrawer\">\n  <div class=\"navdrawer-page-content\">\n    <!-- page content here -->\n    <label for=\"myDrawer\" class=\"btn\">drawer</label>\n  </div>\n\n  <input type=\"checkbox\" class=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div class=\"navdrawer-sidebar\">\n    <div class=\"navdrawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label for=\"myDrawer\" class=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"navdrawer\">\n  <div className=\"navdrawer-page-content\">\n    {/* page content here */}\n    <label htmlFor=\"myDrawer\" className=\"btn\">drawer</label>\n  </div>\n\n  <input type=\"checkbox\" className=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div className=\"navdrawer-sidebar\">\n    <div className=\"navdrawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label htmlFor=\"myDrawer\" className=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
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
    htmlCode: "<div class=\"navdrawer navdrawer-open\">\n  <div class=\"navdrawer-page-content\">\n    <!-- page content here -->\n    <label for=\"myDrawer\" class=\"btn\">drawer</label>\n  </div>\n\n  <input type=\"checkbox\" class=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div class=\"navdrawer-sidebar\">\n    <div class=\"navdrawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label for=\"myDrawer\" class=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"navdrawer navdrawer-open\">\n  <div className=\"navdrawer-page-content\">\n    {/* page content here */}\n    <label htmlFor=\"myDrawer\" className=\"btn\">drawer</label>\n  </div>\n\n  <input type=\"checkbox\" className=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div className=\"navdrawer-sidebar\">\n    <div className=\"navdrawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label htmlFor=\"myDrawer\" className=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
  },
}