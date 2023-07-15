export const CardSnippets = {
  "Card": {
    preview: (
      <div className="card w-[440px]">
        <div className="card-body">
          <h3 className="card-title">Play Japanese songs</h3>
          <span>From your recent favorites</span>

          <div className="card-actions justify-end">
            <button className="btn btn-ghost">Cancel</button>
            <button className="btn btn-warning">Get Started</button>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card w-[440px]\">\n  <div class=\"card-body\">\n    <h3 class=\"card-title\">Play Japanese songs</h3>\n    <span>From your recent favorites</span>\n\n    <div class=\"card-actions justify-end\">\n      <button class=\"btn btn-ghost\">Cancel</button>\n      <button class=\"btn btn-warning\">Get Started</button>\n    </div>\n  </div>\n</div>",
    jsxCode: "<div className=\"card w-[440px]\">\n  <div className=\"card-body\">\n    <h3 className=\"card-title\">Play Japanese songs</h3>\n    <span>From your recent favorites</span>\n\n    <div className=\"card-actions justify-end\">\n      <button className=\"btn btn-ghost\">Cancel</button>\n      <button className=\"btn btn-warning\">Get Started</button>\n    </div>\n  </div>\n</div>",
  },
  "Card w/ image on top": {
    preview: (
      <div className="card w-[500px]">
        <figure className="max-h-[250px]"><img src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></figure>
        <div className="card-body">
          <h5 className="card-title">Mechanical Keyboards</h5>
          <span className="badge badge-warning">20% off</span>

          <div className="card-actions justify-end">
            <span className="badge badge-outlined">Tech</span>
            <span className="badge badge-outlined">Computer Accessories</span>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card w-[300px]\">\n  <figure class=\"max-h-[300px]\"><img src=\"\" /></figure>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Mechanical Keyboards</h5>\n    <span className=\"badge badge-error\">20% off</span>\n    <div className=\"card-actions justify-end\">\n      <span className=\"badge badge-outlined\">Tech</span>\n      <span className=\"badge badge-outlined\">Computer Accessories</span>\n    </div>\n  </div>\n</div>",
    jsxCode: "<div className=\"card w-[300px]\">\n  <figure className=\"max-h-[300px]\"><img src={/**/} /></figure>\n  <div className=\"card-body\">\n    <h5 className=\"card-title\">Mechanical Keyboards</h5>\n    <span className=\"badge badge-error\">20% off</span>\n    <div className=\"card-actions justify-end\">\n      <span className=\"badge badge-outlined\">Tech</span>\n      <span className=\"badge badge-outlined\">Computer Accessories</span>\n    </div>\n  </div>\n</div>",
  },
  "Card w/ image on bottom": {
    preview: (
      <div className="card w-[500px]">
        <div className="card-body">
          <h5 className="card-title">Mechanical Keyboards</h5>
          <p>- a computer keyboard that uses spring-activated switches</p>
        </div>
        <figure className="max-h-[250px]"><img src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></figure>
      </div>
    ),
    htmlCode: "<div class=\"card w-[300px]\">\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Mechanical Keyboard</h5>\n    <p>- a computer keyboard that uses spring-activated switches</p>\n  </div>\n  <figure class=\"max-h-[300px]\"><img src=\"\" /></figure>\n</div>",
    jsxCode: "<div className=\"card w-[300px]\">\n  <div className=\"card-body\">\n    <h5 className=\"card-title\">Mechanical Keyboard</h5>\n    <p>- a computer keyboard that uses spring-activated switches</p>\n  </div>\n  <figure className=\"max-h-[300px]\"><img src={/**/} /></figure>\n</div>",
  },
  "Card w/ image padding": {
    preview: (
      <div className="card w-[500px]">
        <div className="card-body">
          <figure className="max-h-[250px] mb-3"><img src="https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" /></figure>
          <h5 className="card-title">Mechanical Keyboards</h5>
          <span className="badge badge-warning">20% off</span>

          <div className="card-actions justify-end">
            <span className="badge badge-outlined">Tech</span>
            <span className="badge badge-outlined">Computer Accessories</span>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card w-[500px]\">\n  <div class=\"card-body\">\n    <figure class=\"max-h-[250px] mb-3\"><img src=\"\" /></figure>\n    <h5 class=\"card-title\">Mechanical Keyboards</h5>\n    <span class=\"badge badge-warning\">20% off</span>\n\n    <div class=\"card-actions justify-end\">\n      <span class=\"badge badge-outlined\">Tech</span>\n      <span class=\"badge badge-outlined\">Computer Accessories</span>\n    </div>\n  </div>\n</div>",
    jsxCode: "<div className=\"card w-[500px]\">\n  <div className=\"card-body\">\n    <figure className=\"max-h-[250px] mb-3\"><img src=\"\" /></figure>\n    <h5 className=\"card-title\">Mechanical Keyboards</h5>\n    <span className=\"badge badge-warning\">20% off</span>\n\n    <div className=\"card-actions justify-end\">\n      <span className=\"badge badge-outlined\">Tech</span>\n      <span className=\"badge badge-outlined\">Computer Accessories</span>\n    </div>\n  </div>\n</div>",
  },
}