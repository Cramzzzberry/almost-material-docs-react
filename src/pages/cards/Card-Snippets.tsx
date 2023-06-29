import thumbnailSample from "../../assets/thumbnailSample.jpg"

export const CardSnippets = {
  "A card w/ text and action block": {
    preview: (
      <div className="card card-primary w-[440px]">
        <div className="card-textblock">
          <h3 className="font-semibold">Play Japanese songs</h3>
          <span>From your recent favorites</span>
        </div>
        <div className="card-actionblock justify-end">
          <button className="btn btn-ghost">Cancel</button>
          <button className="btn btn-warning">Get Started</button>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card-default w-[440px]\">\n  <div class=\"card-textblock\">\n    <h3 class=\"font-semibold\">Play Japanese songs</h3>\n    <span>From your recent favorites</span>\n  </div>\n  <div class=\"card-actionblock justify-end\">\n    <button class=\"btn-primary btn-ghost\">Cancel</button>\n    <button class=\"btn-primary\">Get Started</button>\n  </div>\n</div>",
    jsxCode: "<div className=\"card-default w-[440px]\">\n  <div className=\"card-textblock\">\n    <h3 className=\"font-semibold\">Play Japanese songs</h3>\n    <span>From your recent favorites</span>\n  </div>\n  <div className=\"card-actionblock justify-end\">\n    <button className=\"btn-primary btn-ghost\">Cancel</button>\n    <button className=\"btn-primary\">Get Started</button>\n  </div>\n</div>",
  },
  "Thumbnail Card": {
    preview: (
      <div className="card card-success w-[300px]">
        <div className="card-thumbnail" style={{backgroundImage: `url(${thumbnailSample})`}}></div>
        <div className="card-textblock">
          <h5 className="font-semibold">Your Playlist</h5>
          <span>3hrs 27mins</span>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card-success w-[300px]\">\n  <div class=\"card-thumbnail\" style=\"background-image: <!-- image here -->\"></div>\n  <div class=\"card-textblock\">\n    <h5 class=\"font-semibold\">Your Playlist</h5>\n  </div>\n</div>",
    jsxCode: "<div className=\"card-success w-[300px]\">\n  <div className=\"card-thumbnail\" style={{backgroundImage: {/* image here */}}}></div>\n  <div className=\"card-textblock\">\n    <h5 className=\"font-semibold\">Your Playlist</h5>\n  </div>\n</div>",
  },
  "Card w/ collapsible container": {
    preview: (
      <div className="card card-primary w-[256px]">
        <div className="card-textblock flex flex-row justify-between items-center">
          <h4 className="font-semibold">Open...</h4>
          <label className="btn btn-warning btn-circle" htmlFor="myCardCollapse">
            <span className="material-icons">
              expand_more
            </span>
          </label>
        </div>

        <input type="checkbox" id="myCardCollapse" />
        <div className="card-collapse">
          <div className="card-container">
            <span className="divider px-5"></span>
            <div className="p-5">
              <h6 className="font-semibold text-center">Sesame!</h6>
            </div>
          </div>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card-success w-[300px]\">\n  <div class=\"card-thumbnail\" style=\"background-image: <!-- image here -->\"></div>\n  <div class=\"card-textblock\">\n    <h5 class=\"font-semibold\">Your Playlist</h5>\n  </div>\n</div>",
    jsxCode: "<div className=\"card-success w-[300px]\">\n  <div className=\"card-thumbnail\" style={{backgroundImage: {/* image here */}}}></div>\n  <div className=\"card-textblock\">\n    <h5 className=\"font-semibold\">Your Playlist</h5>\n  </div>\n</div>",
  },
}