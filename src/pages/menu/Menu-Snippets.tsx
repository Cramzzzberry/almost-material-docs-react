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
          <li><a><span className="material-icons">home</span>Home</a></li>
          <li><a><span className="material-icons">info</span>Info</a></li>
          <li><a><span className="material-icons">watch_later</span>Watch Later</a></li>
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
          <li><a><span className="material-icons">home</span></a></li>
          <li><a><span className="material-icons">info</span></a></li>
          <li><a><span className="material-icons">watch_later</span></a></li>
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
          <li><a><span className="material-icons">home</span>Home</a></li>
          <li><a><span className="material-icons">info</span>Info</a></li>
          <li><a><span className="material-icons">watch_later</span>Watch Later</a></li>
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
          <li><a><span className="material-icons">home</span></a></li>
          <li><a><span className="material-icons">info</span></a></li>
          <li><a><span className="material-icons">watch_later</span></a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n  </ul>\n</div>",
  },
  "Menu with different colors": {
    preview: (
      <>
      <div className="card">
        <ul className="menu menu-primary">
          <li><a className="menu-active">Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      <div className="card">
        <ul className="menu menu-secondary">
          <li><a className="menu-active">Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      <div className="card">
        <ul className="menu menu-surface">
          <li><a className="menu-active">Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      <div className="card">
        <ul className="menu menu-info">
          <li><a className="menu-active">Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      <div className="card">
        <ul className="menu menu-success">
          <li><a className="menu-active">Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      <div className="card">
        <ul className="menu menu-warning">
          <li><a className="menu-active">Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      <div className="card">
        <ul className="menu menu-error">
          <li><a className="menu-active">Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
      </>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-primary\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-secondary\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-surface\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-info\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-success\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-warning\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-error\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-primary\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-secondary\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-surface\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-info\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-success\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-warning\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-error\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Menu w/ title": {
    preview: (
      <div className="card">
        <ul className="menu w-56">
          <li className="menu-title">Title</li>
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Menu w/ title as a parent": {
    preview: (
      <div className="card">
        <ul className="menu w-56">
          <li>
            <span className="menu-title">Parent</span>
            <ul>
              <li><a>Link 1</a></li>
              <li><a>Link 2</a></li>
              <li><a>Link 3</a></li>
            </ul>
          </li>
        </ul>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
}