export const CardSnippets = {
  "A card w/ text and action block": {
    preview: (
      <div className="card-warning w-[440px]">
        <div className="card-textblock">
          <h3 className="font-semibold">Play Japanese songs</h3>
          <span>From your recent favorites</span>
        </div>
        <div className="card-actionblock justify-end">
          <button className="btn-default btn-ghost">
            Cancel
          </button>
          <button className="btn-primary">
            Get Started
          </button>
        </div>
      </div>
    ),
    htmlCode: "<div class=\"card-warning w-[440px]\">\n  <div class=\"card-textblock\">\n    <h3 class=\"font-semibold\">Play Japanese songs</h3>\n    <span>From your recent favorites</span>\n  </div>\n  <div class=\"card-actionblock justify-end\">\n    <button class=\"btn-default btn-ghost\">\n      Cancel\n    </button>\n    <button class=\"btn-primary\">\n      Get Started\n    </button>\n  </div>\n</div>",
    jsxCode: "<div className=\"card-warning w-[440px]\">\n  <div className=\"card-textblock\">\n    <h3 className=\"font-semibold\">Play Japanese songs</h3>\n    <span>From your recent favorites</span>\n  </div>\n  <div className=\"card-actionblock justify-end\">\n    <button className=\"btn-default btn-ghost\">\n      Cancel\n    </button>\n    <button className=\"btn-primary\">\n      Get Started\n    </button>\n  </div>\n</div>",
  },
}