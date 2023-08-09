export const ImageSnippets = {
  "A Square Image": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        <div className="image" style={{"--image-url": "url('https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1691415133~exp=1691415733~hmac=8c0f40e6bc18926c38bf4a1b65b2f5740122592b25fbcc5241b9e17308598a00')",}}></div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "A Circle Image": {
    preview: (
      <div className="card min-h-[100px] my-2 p-5 flex flex-row gap-2 justify-center items-center flex-wrap">
        <div className="image image-circle" style={{"--image-url": "url('https://img.freepik.com/free-photo/tender-feminine-woman-with-blue-eyes-smiles-pleasantly-has-toothy-smile-wears-white-comfortable-sweater-looks-directly-camera-isolated-pink-background_273609-32160.jpg?w=1380&t=st=1691415624~exp=1691416224~hmac=e921c4b34daa6ddc37207208206926736d926925a89eb76b66d8ff249c4580ed')",}}></div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "An Image Container for a Standard Card Component": {
    preview: (
      <div className="flex justify-center my-2">
        <div className="card w-[26rem]">
          <div className="image image-card" style={{"--image-url": "url('https://img.freepik.com/free-photo/cappuccino-wood-espresso-coffee-latte_1150-1632.jpg?w=1380&t=st=1691421217~exp=1691421817~hmac=4ff7258b18ade2f12da7026c57a5159051a8e72cb3b39ace24a57a1861f481c2')",}}></div>
          
          <div className="card-body layout-spaced">
            <h5 className="card-title">How to create a coffee</h5>
            <span>Learn how to create the tastiest bevarage on the planet!</span>
          </div>

          <div className="card-actions justify-end">
            <button className="btn">visit page</button>
          </div>
        </div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Custom image size and radius": {
    preview: (
      <div className="card card-error my-2 p-8">
        <div className="image w-full h-[24rem] rounded-[0.5rem]" style={{"--image-url": "url('https://img.freepik.com/free-photo/sunset-silhouettes-trees-mountains-generative-ai_169016-29371.jpg?w=1380&t=st=1691420526~exp=1691421126~hmac=908944a9bc2e3b530371130687d2ec70fe0155b93d9b3aa3e081da01aff008c6')",}}></div>
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
}