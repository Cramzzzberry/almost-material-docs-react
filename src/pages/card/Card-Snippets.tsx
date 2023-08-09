export const CardSnippets = {
  "Standard Card": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card w-[32rem]">
          <div className="image image-card" style={{"--image-url": "url('https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",}}></div>
          
          <div className="card-body layout-spaced">
            <h4 className="card-title">Mechanical Keyboards</h4>
            <p>Take a look at some of the clicky, thocky and weird mechanical keyboards only here on KBD!</p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Outline Card": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card card-outline w-[32rem]">
          <div className="image image-card" style={{"--image-url": "url('https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",}}></div>
          
          <div className="card-body layout-spaced">
            <h4 className="card-title">Mechanical Keyboards</h4>
            <p>Take a look at some of the clicky, thocky and weird mechanical keyboards only here on KBD!</p>
          </div>

          <div className="card-actions justify-end">
            <button className="btn">Shop Now</button>
          </div>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Horizontal Standard Card": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card card-horizontal w-[38rem] h-[16rem]">
          <div className="image image-card" style={{"--image-url": "url('https://img.freepik.com/free-photo/top-view-beautiful-music-concept_23-2148605827.jpg?w=826&t=st=1691481090~exp=1691481690~hmac=24227de354ba4da1cb13fce1e1981530adf63decc40bcd8fa94a9b0a5bc23186')",}}></div>
          
          <div className="flex flex-col justify-between">
            <div className="card-body layout-spaced">
              <h4 className="card-title">Mix Playlist</h4>
              <p>Play our recommended music based on what you play</p>
            </div>

            <div className="card-actions justify-end">
              <button className="btn">Shuffle</button>
            </div>
          </div>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Card for Modal Component": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card w-[26.25rem]">
          <div className="card-body">
            <h4 className="card-title">Move to Archive?</h4>
            <span>You can restore this back on Archives.</span>
          </div>

          <div className="card-actions justify-end">
            <button className="btn btn-ghost">No</button>
            <button className="btn">Yes</button>
          </div>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Card w/ a Menu Component": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card">
          <ul className="menu">
            <li><a href="#">Item 1</a></li>
            <li><a href="#">Item 2</a></li>
            <li><a href="#">Item 3</a></li>
          </ul>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
}