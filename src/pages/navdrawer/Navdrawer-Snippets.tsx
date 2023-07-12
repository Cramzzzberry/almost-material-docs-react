export const NavdrawerSnippets = {
  "Navigation Drawer": {
    preview: (
      <div className="navdrawer h-fit">
        <div className="navdrawer-content">
          {/* page content here */}
          <label htmlFor="sampleDrawer1" className="btn">drawer</label>
        </div>

        <input type="checkbox" className="navdrawer-toggle" id="sampleDrawer1"/>
        <div className="navdrawer-sidebar">
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
    ),
    htmlCode: "<div class=\"navdrawer\">\n  <div class=\"navdrawer-content\">\n    <!-- page content here -->\n    <label for=\"myDrawer\" class=\"btn\">drawer</label>\n  </div>\n\n  <input type=\"checkbox\" class=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div class=\"navdrawer-sidebar\">\n    <div class=\"navdrawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div>\n        <ul class=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label for=\"myDrawer\" class=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"navdrawer\">\n  <div className=\"navdrawer-content\">\n    {/* page content here */}\n    <label htmlFor=\"myDrawer\" className=\"btn\">drawer</label>\n  </div>\n\n  <input type=\"checkbox\" className=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div className=\"navdrawer-sidebar\">\n    <div className=\"navdrawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div>\n        <ul className=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label htmlFor=\"myDrawer\" className=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
  },
  "Card Navigation Drawer w/ Padding": {
    preview: (
      <div className="navdrawer h-fit">
        <div className="navdrawer-content">
          {/* page content here */}
          <label htmlFor="sampleDrawer2" className="btn">card drawer</label>
        </div>

        <input type="checkbox" className="navdrawer-toggle" id="sampleDrawer2"/>
        <div className="navdrawer-sidebar">
          <div className="navdrawer-sidebar-content p-4"> {/* add paddings here */}
            {/* sidebar content here */}
            <div className="card">
              <ul className="menu menu-primary">
                <li><a href="#">Item 1</a></li>
                <li><a href="#">Item 2</a></li>
                <li><a href="#">Item 3</a></li>
              </ul>
            </div>
          </div>

          <label htmlFor="sampleDrawer2" className="navdrawer-overlay"></label>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"navdrawer\">\n  <div class=\"navdrawer-content\">\n    <!-- page content here -->\n    <label for=\"myDrawer\" class=\"btn\">card drawer</label>\n  </div>\n\n  <input type=\"checkbox\" class=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div class=\"navdrawer-sidebar\">\n    <div class=\"navdrawer-sidebar-content\">\n      <!-- sidebar content here -->\n      <div class=\"\">\n        <ul class=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label for=\"myDrawer\" class=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
    jsxCode: "<div className=\"navdrawer\">\n  <div className=\"navdrawer-content\">\n    {/* page content here */}\n    <label htmlFor=\"myDrawer\" className=\"btn\">card drawer</label>\n  </div>\n\n  <input type=\"checkbox\" className=\"navdrawer-toggle\" id=\"myDrawer\"/>\n  <div className=\"navdrawer-sidebar\">\n    <div className=\"navdrawer-sidebar-content\">\n      {/* sidebar content here */}\n      <div className=\"\">\n        <ul className=\"menu menu-primary\">\n          <li><a href=\"#\">Item 1</a></li>\n          <li><a href=\"#\">Item 2</a></li>\n          <li><a href=\"#\">Item 3</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <label htmlFor=\"myDrawer\" className=\"navdrawer-overlay\"></label>\n  </div>\n</div>",
  },
}