export const RailSnippets = {
  " Bottom Navigation Rail": {
    preview: (
      <div className="card card-primary-80 min-h-[100px] py-5 flex flex-row gap-2 items-center justify-center flex-wrap">
        <div className="rail relative max-w-[384px]">
          <div className="rail-main">
            <ul className="menu menu-rail">
              <li><a className="menu-active"><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"rail\">\n  <div class=\"rail-main\">\n    <ul class=\"menu menu-rail\">\n      <li><a class=\"menu-active\"><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"rail\">\n  <div className=\"rail-main\">\n    <ul className=\"menu menu-rail\">\n      <li><a className=\"menu-active\">{/* icon here */}label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Left Navigation Rail": {
    preview: (
      <div className="card card-primary-80 p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="rail rail-left rail-sample">
          <div className="rail-main">
            <ul className="menu menu-rail">
              <li><a className="menu-active"><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"rail rail-left\">\n  <div class=\"rail-main\">\n    <ul class=\"menu menu-rail\">\n      <li><a class=\"menu-active\"><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"rail rail-left\">\n  <div className=\"rail-main\">\n    <ul className=\"menu menu-rail\">\n      <li><a className=\"menu-active\">{/* icon here */}hexagon</span>label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n    </ul>\n  </div>\n</div>",
  },
  "Left Navigation Rail w/ Top, Main and Bottom Sections": {
    preview: (
      <div className="card card-primary-80 p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="rail rail-left rail-sample">
          <div className="rail-top">
            <ul className="menu">
              <li><a><span className="material-icons-round">menu</span></a></li>
            </ul>
          </div>
          <div className="rail-main">
            <ul className="menu menu-rail">
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
            </ul>
          </div>
          <div className="rail-bottom">
            <ul className="menu menu-rail">
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
            </ul>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"rail rail-left\">\n  <div class=\"rail-top\">\n    <ul class=\"menu\">\n      <li><a><!-- icon here */-->a></li>\n    </ul>\n  </div>\n  <div class=\"rail-main\">\n    <ul class=\"menu menu-rail\">\n      <li><a><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n    </ul>\n  </div>\n  <div class=\"rail-bottom\">\n    <ul class=\"menu menu-rail\">\n      <li><a><!-- icon here -->label</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"rail rail-left\">\n  <div className=\"rail-top\">\n    <ul className=\"menu\">\n      <li><a>{/* icon here */}</a></li>\n    </ul>\n  </div>\n  <div className=\"rail-main\">\n    <ul className=\"menu menu-rail\">\n      <li><a>{/* icon here */}label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n    </ul>\n  </div>\n  <div className=\"rail-bottom\">\n    <ul className=\"menu menu-rail\">\n      <li><a>{/* icon here */}label</a></li>\n    </ul>\n  </div>\n</div>",
  },
}