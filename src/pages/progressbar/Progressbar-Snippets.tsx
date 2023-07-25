export const ProgressbarSnippets = {
  "Progress Bar": {
    preview: (
      <>
        <span className="progress" style={{"--value": 5, "--max": 10,}}></span>
      </>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Progress Bar Sizes": {
    preview: (
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="progress progress-sm" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-md" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-lg" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-xl" style={{"--value": 5, "--max": 10,}}></span>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Progress Bar w/ Colors": {
    preview: (
      <div className="flex flex-col justify-center items-center gap-4">
        <span className="progress progress-primary" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-secondary" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-tertiary" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-info" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-success" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-warning" style={{"--value": 5, "--max": 10,}}></span>
        <span className="progress progress-error" style={{"--value": 5, "--max": 10,}}></span>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
}