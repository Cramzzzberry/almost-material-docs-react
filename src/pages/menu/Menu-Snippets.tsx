export const MenuSnippets = {
  "Menu": {
    preview: (
      <div className="card">
        <ul className="menu w-56">
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu": {
    preview: (
      <div className="card">
        <ul className="menu menu-horizontal">
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Menu w/ Icons": {
    preview: (
      <div className="card">
        <ul className="menu w-56">
          <li><a><span class="material-icons">home</span>Home</a></li>
          <li><a><span class="material-icons">info</span>Info</a></li>
          <li><a><span class="material-icons">watch_later</span>Watch Later</a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li><a><!--icon here-->Home</a></li>\n    <li><a><!--icon here-->Info</a></li>\n    <li><a><!--icon here-->Watch Later</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li><a>{/*icon here*/}Home</a></li>\n    <li><a>{/*icon here*/}Info</a></li>\n    <li><a>{/*icon here*/}Watch Later</a></li>\n  </ul>\n</div>",
  },
  "Menu w/ Icons only": {
    preview: (
      <div className="card">
        <ul className="menu">
          <li><a><span class="material-icons">home</span></a></li>
          <li><a><span class="material-icons">info</span></a></li>
          <li><a><span class="material-icons">watch_later</span></a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu\">\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu\">\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu w/ Icons": {
    preview: (
      <div className="card">
        <ul className="menu menu-horizontal">
          <li><a><span class="material-icons">home</span>Home</a></li>
          <li><a><span class="material-icons">info</span>Info</a></li>
          <li><a><span class="material-icons">watch_later</span>Watch Later</a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>{/*icon here*/}Home</a></li>\n    <li><a>{/*icon here*/}Info</a></li>\n    <li><a>{/*icon here*/}Watch Later</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu w/ Icons only": {
    preview: (
      <div className="card">
        <ul className="menu menu-horizontal">
          <li><a><span class="material-icons">home</span></a></li>
          <li><a><span class="material-icons">info</span></a></li>
          <li><a><span class="material-icons">watch_later</span></a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n  </ul>\n</div>",
  },
}