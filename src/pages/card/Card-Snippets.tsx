export const CardSnippets = {
  "Standard Card": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card w-[32rem]">
          <div className="image image-card" style={{"--image-url": "url('https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",}}></div>
          
          <div className="card-body">
            <h5 className="card-title mb-4">Mechanical Keyboards</h5>
            <span>Take a look at some of the clicky, thocky and weird mechanical keyboards only here on KBD!</span>

            <div className="card-actions mt-4 justify-end">
              <button className="btn btn-outline">Add to favorites</button>
            </div>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card w-96\">\n  <figure class=\"max-h-64\"><img src=\"https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\" /></figure>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Mechanical Keyboards</h5>\n    <span class=\"badge badge-warning\">20% off</span>\n\n    <div class=\"card-actions justify-end\">\n      <span class=\"badge badge-outline\">Tech</span>\n      <span class=\"badge badge-outline\">Computer Accessories</span>\n    </div>\n  </div>\n</div>",
    jsxCode: "<div className=\"card w-96\">\n  <figure className=\"max-h-64\"><img src=\"https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1\" /></figure>\n  <div className=\"card-body\">\n    <h5 className=\"card-title\">Mechanical Keyboards</h5>\n    <span className=\"badge badge-warning\">20% off</span>\n\n    <div className=\"card-actions justify-end\">\n      <span className=\"badge badge-outline\">Tech</span>\n      <span className=\"badge badge-outline\">Computer Accessories</span>\n    </div>\n  </div>\n</div>",
  },
  "Card for Modal Component": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card w-[26.25rem]">
          <div className="card-body">
            <h4 className="card-title">Move to Archive?</h4>
            <span>You can restore this back on Archives.</span>

            <div className="card-actions mt-2 justify-end">
              <button className="btn btn-ghost">No</button>
              <button className="btn">Yes</button>
            </div>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card w-96\">\n  <div class=\"card-body\">\n    <h3 class=\"card-title\">Play Songs</h3>\n    <span>From your recent favorites</span>\n\n    <div class=\"card-actions justify-end\">\n      <button class=\"btn btn-ghost\">Cancel</button>\n      <button class=\"btn btn-warning\">Get Started</button>\n    </div>\n  </div>\n</div>",
    jsxCode: "<div className=\"card w-96\">\n  <div className=\"card-body\">\n    <h3 className=\"card-title\">Play Songs</h3>\n    <span>From your recent favorites</span>\n\n    <div className=\"card-actions justify-end\">\n      <button className=\"btn btn-ghost\">Cancel</button>\n      <button className=\"btn btn-warning\">Get Started</button>\n    </div>\n  </div>\n</div>",
  },
}