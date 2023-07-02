import thumbnailSample from "../../assets/thumbnailSample.jpg"

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
  "Card with image on top": {
    preview: (
      <div className="card w-[300px]">
        <figure className="max-h-[300px]"><img className="" src={thumbnailSample} /></figure>
        <div className="card-body">
          <h5 className="card-title">Your Playlist</h5>
          <p>3hrs 27mins</p>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card w-[300px]\">\n  <figure class=\"max-h-[300px]\"><img class=\"\" src={thumbnailSample} /></figure>\n  <div class=\"card-body\">\n    <h5 class=\"card-title\">Your Playlist</h5>\n    <p>3hrs 27mins</p>\n  </div>\n</div>",
    jsxCode: "<div className=\"card w-[300px]\">\n  <figure className=\"max-h-[300px]\"><img className=\"\" src={thumbnailSample} /></figure>\n  <div className=\"card-body\">\n    <h5 className=\"card-title\">Your Playlist</h5>\n    <p>3hrs 27mins</p>\n  </div>\n</div>",
  },
  "Card with image on bottom": {
    preview: (
      <div className="card w-[300px]">
        <div className="card-body">
          <h5 className="card-title">Your Playlist</h5>
          <p>3hrs 27mins</p>
        </div>
        <figure className="max-h-[300px]"><img className="" src={thumbnailSample} /></figure>
      </div>
    ),
    htmlCode: "<div class=\"card card-success w-[300px]\">\n  <div class=\"card-textblock\">\n    <h5 class=\"font-semibold\">Your Playlist</h5>\n  </div>\n  <figure className=\"max-h-[300px]\"><img className=\"\" src=\"<!-- image here -->\" /></figure>\n</div>",
    jsxCode: "<div className=\"card w-[300px]\">\n  <div className=\"card-body\">\n    <h5 className=\"card-title\">Your Playlist</h5>\n    <p>3hrs 27mins</p>\n  </div>\n  <figure className=\"max-h-[300px]\"><img className=\"\" src={thumbnailSample} /></figure>\n</div>",
  },
}