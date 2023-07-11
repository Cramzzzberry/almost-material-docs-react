export const ModalSnippets = {
  "Modal": {
    preview: (
      <>
      <label htmlFor="myModal" className="btn">Click Me</label>

      <input className="modal-toggle" type="checkbox" id="myModal" />
      <div className="modal">
        <div className="modal-content">
          <div className="card w-[440px]">
            <div className="card-body">
              <h3 className="card-title">Modal Sample</h3>
              <span>Im Open!</span>

              <div className="card-actions justify-end">
                <label htmlFor="myModal" class="btn btn-error">Close</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    ),
    htmlCode: "<label for=\"myModal\" class=\"btn\">Click Me</label> <!--Button for opening modal-->\n\n<input class=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div class=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"card w-[440px]\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">Modal Sample</h3>\n        <span>Im Open!</span>\n\n        <div class=\"card-actions justify-end\">\n          <label For=\"myModal\" class=\"btn btn-error\">Close</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    jsxCode: "<label htmlFor=\"myModal\" className=\"btn\">Click Me</label> {/*Button for opening modal*/}\n\n<input className=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div className=\"modal\">\n  <div className=\"modal-content\">\n    <div class=\"card w-[440px]\">\n      <div className=\"card-body\">\n        <h3 classname=\"card-title\">Modal Sample</h3>\n        <span>Im Open!</span>\n\n        <div className=\"card-actions justify-end\">\n          <label htmlFor=\"myModal\" className=\"btn btn-error\">Close</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
  },
  "Modal that closes outside": {
    preview: (
      <>
      <label htmlFor="myModal1" className="btn">Click Me</label>

      <input className="modal-toggle" type="checkbox" id="myModal1" />
      <div className="modal">
        <div className="modal-content">
          <div className="card w-[440px]">
            <div className="card-body">
              <h3 className="card-title">Modal Sample</h3>
              <span>Click outside!</span>
            </div>
          </div>
          
          <label htmlFor="myModal1" className="modal-backdrop"></label>
        </div>
      </div>
      </>
    ),
    htmlCode: "<label for=\"myModal1\" class=\"btn\">Click Me</label>\n\n<input class=\"modal-toggle\" type=\"checkbox\" id=\"myModal1\" />\n<div class=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"card w-[440px]\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">Modal Sample</h3>\n        <span>Click outside!</span>\n      </div>\n    </div>\n    \n    <label htmlFor=\"myModal1\" class=\"modal-backdrop\"></label>\n  </div>\n</div>",
    jsxCode: "<label htmlFor=\"myModal1\" className=\"btn\">Click Me</label>\n\n<input className=\"modal-toggle\" type=\"checkbox\" id=\"myModal1\" />\n<div className=\"modal\">\n  <div className=\"modal-content\">\n    <div className=\"card w-[440px]\">\n      <div className=\"card-body\">\n        <h3 className=\"card-title\">Modal Sample</h3>\n        <span>Click outside!</span>\n      </div>\n    </div>\n    \n    <label htmlFor=\"myModal1\" className=\"modal-backdrop\"></label>\n  </div>\n</div>",
  },
}
