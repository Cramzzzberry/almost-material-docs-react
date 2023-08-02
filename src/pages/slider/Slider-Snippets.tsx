export const SliderSnippets = {
  "Slider": {
    preview: (
      <>
      <input type="range" className="slider w-72" />
      </>
    ),
    htmlCode: "",
    jsxCode: "",
  },
  "Slider w/ Colors": {
    preview: (
      <div className="flex flex-col gap-2">
      <input type="range" className="slider slider-primary w-72" />
      <input type="range" className="slider slider-secondary w-72" />
      <input type="range" className="slider slider-tertiary w-72" />
      <input type="range" className="slider slider-info w-72" />
      <input type="range" className="slider slider-warning w-72" />
      <input type="range" className="slider slider-success w-72" />
      <input type="range" className="slider slider-error w-72" />
      </div>
    ),
    htmlCode: "",
    jsxCode: "",
  },
}