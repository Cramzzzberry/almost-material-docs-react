export const ProgressbarSnippets = {
  "Progress Bar": {
    preview: (
      <>
        <span className="progress" style={{"--value": 5, "--max": 10,}}></span>
      </>
    ),
    htmlCode: "<span class=\"progress\" style=\"--value: 5; --max: 10;\"></span>",
    jsxCode: "<span className=\"progress\" style={{\"--value\": 5, \"--max\": 10,}}></span>",
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
    htmlCode: "<span class=\"progress progress-sm\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-md\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-lg\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-xl\" style=\"--value: 5; --max: 10;\"></span>",
    jsxCode: "<span className=\"progress progress-sm\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-md\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-lg\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-xl\" style={{\"--value\": 5, \"--max\": 10,}}></span>",
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
    htmlCode: "<span class=\"progress progress-primary\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-secondary\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-tertiary\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-info\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-success\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-warning\" style=\"--value: 5; --max: 10;\"></span>\n<span class=\"progress progress-error\" style=\"--value: 5; --max: 10;\"></span>",
    jsxCode: "<span className=\"progress progress-primary\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-secondary\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-tertiary\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-info\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-success\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-warning\" style={{\"--value\": 5, \"--max\": 10,}}></span>\n<span className=\"progress progress-error\" style={{\"--value\": 5, \"--max\": 10,}}></span>",
  },
}