export const MenuSnippets = {
  "Menu": {
    preview: (
    <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
      <div className="card">
        <ul className="menu w-56">
          <li><a>Link 1</a></li>
          <li><a>Link 2</a></li>
          <li><a>Link 3</a></li>
        </ul>
      </div>
    </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Menu w/ Icons and Badge": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu w-72">
            <li><a><span className="material-icons">home</span>Home</a></li>
            <li><a><span className="material-icons">info</span>Info</a></li>
            <li>
              <a>
                <span className="material-icons">watch_later</span>
                Watch Later
                <span className="badge badge-error">+999</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-72\">\n    <li><a><span class=\"material-icons\">home</span>Home</a></li>\n    <li><a><span class=\"material-icons\">info</span>Info</a></li>\n    <li>\n      <a>\n        <!-- icon here -->\n        Watch Later\n        <span class=\"badge badge-error\">+999</span>\n      </a>\n    </li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-72\">\n    <li><a><span className=\"material-icons\">home</span>Home</a></li>\n    <li><a><span className=\"material-icons\">info</span>Info</a></li>\n    <li>\n      <a>\n        {/* icon here */}\n        Watch Later\n        <span className=\"badge badge-error\">+999</span>\n      </a>\n    </li>\n  </ul>\n</div>",
  },
  "Menu w/ Icons Only": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu">
            <li><a><span className="material-icons">home</span></a></li>
            <li><a><span className="material-icons">info</span></a></li>
            <li><a><span className="material-icons">watch_later</span></a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu\">\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu\">\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n  </ul>\n</div>",
  },
  "Menu w/ Title": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu w-56">
            <li className="menu-title">Title</li>
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
            <li><a>Link 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li class=\"menu-title\">Title</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li className=\"menu-title\">Title</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Menu w/ Title as a Parent": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
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
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li>\n      <span class=\"menu-title\">Parent</span>\n      <ul>\n        <li><a>Link 1</a></li>\n        <li><a>Link 2</a></li>\n        <li><a>Link 3</a></li>\n      </ul>\n    </li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li>\n      <span className=\"menu-title\">Parent</span>\n      <ul>\n        <li><a>Link 1</a></li>\n        <li><a>Link 2</a></li>\n        <li><a>Link 3</a></li>\n      </ul>\n    </li>\n  </ul>\n</div>",
  },
  "Menu and Submenu": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu w-56">
            <li><a>Link 1</a></li>
            <li>
              <a>Parent</a>
              <ul>
                <li><a>Child 1</a></li>
                <li><a>Child 2</a></li>
                <li>
                  <a>Parent</a>
                  <ul>
                    <li><a>Child 1</a></li>
                    <li><a>Child 2</a></li>
                    <li><a>Child 3</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a>Link 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li>\n      <a>Parent</a>\n      <ul>\n        <li><a>Child 1</a></li>\n        <li><a>Child 2</a></li>\n        <li>\n          <a>Parent</a>\n          <ul>\n            <li><a>Child 1</a></li>\n            <li><a>Child 2</a></li>\n            <li><a>Child 3</a></li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li>\n      <a>Parent</a>\n      <ul>\n        <li><a>Child 1</a></li>\n        <li><a>Child 2</a></li>\n        <li>\n          <a>Parent</a>\n          <ul>\n            <li><a>Child 1</a></li>\n            <li><a>Child 2</a></li>\n            <li><a>Child 3</a></li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Collapsible Submenu using Details and Summary": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-start">
        <div className="card">
          <ul className="menu w-56">
            <li><a>Link 1</a></li>
            <li>
              <details open>
                <summary>opened</summary>
                <ul>
                  <li><a>Child Link 1</a></li>
                  <li><a>Child Link 2</a></li>
                  <li>
                    <details>
                      <summary>collapsed</summary>
                      <ul>
                        <li><a>Child Link 1</a></li>
                        <li><a>Child Link 2</a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li><a>Link 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n          <li>\n            <details>\n              <summary>collapsed</summary>\n              <ul>\n                <li><a>Child Link 1</a></li>\n                <li><a>Child Link 2</a></li>\n              </ul>\n            </details>\n          </li>\n        </ul>\n      </details>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu w-56\">\n    <li><a>Link 1</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n          <li>\n            <details>\n              <summary>collapsed</summary>\n              <ul>\n                <li><a>Child Link 1</a></li>\n                <li><a>Child Link 2</a></li>\n              </ul>\n            </details>\n          </li>\n        </ul>\n      </details>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu menu-horizontal">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
            <li><a>Link 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu w/ Icons": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu menu-horizontal">
            <li><a><span className="material-icons">home</span>home</a></li>
            <li><a><span className="material-icons">info</span>info</a></li>
            <li><a><span className="material-icons">watch_later</span>watch later</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a><!--icon here-->home</a></li>\n    <li><a><!--icon here-->info</a></li>\n    <li><a><!--icon here-->watch later</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>{/*icon here*/}home</a></li>\n    <li><a>{/*icon here*/}info</a></li>\n    <li><a>{/*icon here*/}watch later</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu w/ Icons Only": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu menu-horizontal">
            <li><a><span className="material-icons">home</span></a></li>
            <li><a><span className="material-icons">info</span></a></li>
            <li><a><span className="material-icons">watch_later</span></a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n    <li><a><!--icon here--></a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n    <li><a>{/*icon here*/}</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu and Submenu": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
        <div className="card">
          <ul className="menu menu-horizontal">
            <li><a>Link 1</a></li>
            <li>
              <a>Parent</a>
              <ul>
                <li><a>Child 1</a></li>
                <li><a>Child 2</a></li>
                <li>
                  <a>Parent</a>
                  <ul>
                    <li><a>Child 1</a></li>
                    <li><a>Child 2</a></li>
                    <li><a>Child 3</a></li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><a>Link 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li>\n      <a>Parent</a>\n      <ul>\n        <li><a>Child 1</a></li>\n        <li><a>Child 2</a></li>\n        <li>\n          <a>Parent</a>\n          <ul>\n            <li><a>Child 1</a></li>\n            <li><a>Child 2</a></li>\n            <li><a>Child 3</a></li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li>\n      <a>Parent</a>\n      <ul>\n        <li><a>Child 1</a></li>\n        <li><a>Child 2</a></li>\n        <li>\n          <a>Parent</a>\n          <ul>\n            <li><a>Child 1</a></li>\n            <li><a>Child 2</a></li>\n            <li><a>Child 3</a></li>\n          </ul>\n        </li>\n      </ul>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Horizontal Menu and Collapsible Submenu": {
    preview: (
      <div className="card card-primary-80 min-h-[392px] p-5 flex flex-row gap-2 justify-center items-start">
        <div className="card">
          <ul className="menu menu-horizontal">
            <li><a>Link 1</a></li>
            <li>
              <details open>
                <summary>opened</summary>
                <ul>
                  <li><a>Link 1</a></li>
                  <li><a>Link 2</a></li>
                  <li>
                    <details>
                      <summary>collapsed</summary>
                      <ul>
                        <li><a>Link 1</a></li>
                        <li><a>Link 2</a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
            <li><a>Link 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Link 1</a></li>\n          <li><a>Link 2</a></li>\n          <li>\n            <details>\n              <summary>collapsed</summary>\n              <ul>\n                <li><a>Link 1</a></li>\n                <li><a>Link 2</a></li>\n              </ul>\n            </details>\n          </li>\n        </ul>\n      </details>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-horizontal\">\n    <li><a>Link 1</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Link 1</a></li>\n          <li><a>Link 2</a></li>\n          <li>\n            <details>\n              <summary>collapsed</summary>\n              <ul>\n                <li><a>Link 1</a></li>\n                <li><a>Link 2</a></li>\n              </ul>\n            </details>\n          </li>\n        </ul>\n      </details>\n    </li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Menu with Colors": {
    preview: (
      <div className="card card-primary-80 min-h-[272px] p-5 flex flex-row gap-2 justify-center items-center">
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
          <ul className="menu menu-tertiary">
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
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-primary\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-secondary\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-tertiary\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-info\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-success\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-warning\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-error\">\n    <li><a class=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-primary\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-secondary\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-tertiary\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-info\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-success\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-warning\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-error\">\n    <li><a className=\"menu-active\">Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li><a>Link 3</a></li>\n  </ul>\n</div>",
  },
  "Menu Sizes": {
    preview: (
      <div className="card card-primary-80 min-h-[480px] p-5 flex flex-row gap-2 justify-center items-start">
        <div className="card">
          <ul className="menu menu-sm">
            <li className="menu-title">Smol</li>
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
            <li>
              <details open>
                <summary>opened</summary>
                <ul>
                  <li><a>Child Link 1</a></li>
                  <li><a>Child Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="card">
          <ul className="menu menu-md">
            <li className="menu-title">Defolt</li>
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
            <li>
              <details open>
                <summary>opened</summary>
                <ul>
                  <li><a>Child Link 1</a></li>
                  <li><a>Child Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="card">
          <ul className="menu menu-lg">
            <li className="menu-title">Large</li>
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
            <li>
              <details open>
                <summary>opened</summary>
                <ul>
                  <li><a>Child Link 1</a></li>
                  <li><a>Child Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
        <div className="card">
          <ul className="menu menu-xl">
            <li className="menu-title">RAWR!</li>
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
            <li>
              <details open>
                <summary>opened</summary>
                <ul>
                  <li><a>Child Link 1</a></li>
                  <li><a>Child Link 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card\">\n  <ul class=\"menu menu-sm\">\n    <li class=\"menu-title\">Smol</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-md\">\n    <li class=\"menu-title\">Defolt</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-lg\">\n    <li class=\"menu-title\">Large</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>\n<div class=\"card\">\n  <ul class=\"menu menu-xl\">\n    <li class=\"menu-title\">RAWR!</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>",
    jsxCode: "<div className=\"card\">\n  <ul className=\"menu menu-sm\">\n    <li className=\"menu-title\">Smol</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-md\">\n    <li className=\"menu-title\">Defolt</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-lg\">\n    <li className=\"menu-title\">Large</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>\n<div className=\"card\">\n  <ul className=\"menu menu-xl\">\n    <li className=\"menu-title\">RAWR!</li>\n    <li><a>Link 1</a></li>\n    <li><a>Link 2</a></li>\n    <li>\n      <details open>\n        <summary>opened</summary>\n        <ul>\n          <li><a>Child Link 1</a></li>\n          <li><a>Child Link 2</a></li>\n        </ul>\n      </details>\n    </li>\n  </ul>\n</div>",
  },
}