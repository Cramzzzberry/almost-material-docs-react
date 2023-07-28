export const RailSnippets = {
  "Navigation Rail": {
    preview: (
      <div className="card card-primary-80 my-2 p-5 flex flex-row gap-2 items-center flex-wrap">
        <div className="rail h-[400px]">
          <div className="rail-middle">
            <ul className="menu">
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
  "Navigation Rail w/ Open Toggle": {
    preview: (
      <div className="card card-primary-80 my-2 p-5 flex flex-row gap-2 items-center flex-wrap">
        <input className="rail-toggle" type="checkbox" id="sampleRail" />
        <div className="rail h-[400px]">
          <div className="rail-top">
            <label className="btn btn-ghost" htmlFor="sampleRail"><span className="material-icons-round">menu</span>home</label>
          </div>
          <div className="rail-middle">
            <ul className="menu">
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
              <li><a><span className="material-icons-round">hexagon</span>label</a></li>
            </ul>
          </div>
          <div className="rail-bottom">
            <button className="btn btn-ghost"><span className="material-icons-round">home</span>home</button>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"rail rail-left\">\n  <div class=\"rail-top\">\n    <ul class=\"menu\">\n      <li><a><!-- icon here */-->a></li>\n    </ul>\n  </div>\n  <div class=\"rail-main\">\n    <ul class=\"menu menu-rail\">\n      <li><a><!-- icon here -->label</a></li>\n      <li><a><!-- icon here -->label</a></li>\n    </ul>\n  </div>\n  <div class=\"rail-bottom\">\n    <ul class=\"menu menu-rail\">\n      <li><a><!-- icon here -->label</a></li>\n    </ul>\n  </div>\n</div>",
    jsxCode: "<div className=\"rail rail-left\">\n  <div className=\"rail-top\">\n    <ul className=\"menu\">\n      <li><a>{/* icon here */}</a></li>\n    </ul>\n  </div>\n  <div className=\"rail-main\">\n    <ul className=\"menu menu-rail\">\n      <li><a>{/* icon here */}label</a></li>\n      <li><a>{/* icon here */}label</a></li>\n    </ul>\n  </div>\n  <div className=\"rail-bottom\">\n    <ul className=\"menu menu-rail\">\n      <li><a>{/* icon here */}label</a></li>\n    </ul>\n  </div>\n</div>",
  },
}