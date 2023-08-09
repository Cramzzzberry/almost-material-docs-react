export const ModalSnippets = {
  "Modal": {
    preview: (
      <>
      {/* button for opening the modal */}
      <label htmlFor="myModal" className="btn">Click Me</label>

      <input className="modal-toggle" type="checkbox" id="myModal" />
      <div className="modal">
        <div className="modal-content">
          <div className="card w-[26.25rem]">
            <div className="card-body">
              <h4 className="card-title">Woah a Dialog!</h4>
              <span>Put your own description here that gives more details about this dialog.</span>
            </div>

            <div className="card-actions justify-end">
              <label htmlFor="myModal" className="btn btn-ghost">Close</label>
              <label htmlFor="myModal" className="btn">Ok</label>
            </div>
          </div>
        </div>
      </div>
      </>
    ),
    htmlCode: "<!-- button for opening the modal -->\n<label for=\"myModal\" class=\"btn\">Click Me</label>\n\n<input class=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div class=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"card w-96 text-center\">\n      <div class=\"card-body\">\n        <h4 class=\"font-bold\">This is an opened modal!</h4>\n\n        <div class=\"card-actions justify-center\">\n          <!-- button for closing modal -->\n          <label for=\"myModal\" class=\"btn btn-error\">Close</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    jsxCode: "{/* button for opening the modal */}\n<label htmlFor=\"myModal\" className=\"btn\">Click Me</label>\n\n<input className=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div className=\"modal\">\n  <div className=\"modal-content\">\n    <div className=\"card w-96 text-center\">\n      <div className=\"card-body\">\n        <h4 className=\"font-bold\">This is an opened modal!</h4>\n\n        <div className=\"card-actions justify-center\">\n          {/* button for closing modal */}\n          <label htmlFor=\"myModal\" className=\"btn btn-error\">Close</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
  },
  "Modal that Closes Outside": {
    preview: (
      <>
      {/* button for opening the modal */}
      <label htmlFor="myModal1" className="btn">Click Me</label>

      <input className="modal-toggle" type="checkbox" id="myModal1" />
      <div className="modal">
        <div className="modal-content">
          <div className="card w-96 text-center">
            <div className="card-body">
              <h4 className="card-title">Done!</h4>
              <span>Click outside to close...</span>
            </div>
          </div>
          
          {/* label for closing modal */}
          <label htmlFor="myModal1" className="modal-backdrop"></label>
        </div>
      </div>
      </>
    ),
    htmlCode: "<!-- button for opening the modal -->\n<label for=\"myModal\" class=\"btn\">Click Me</label>\n\n<input class=\"modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div class=\"modal\">\n  <div class=\"modal-content\">\n    <div class=\"card w-96 text-center\">\n      <div class=\"card-body\">\n        <h3 class=\"card-title\">Modal Sample</h3>\n        <span>Click outside!</span>\n      </div>\n    </div>\n    \n    <!-- label for closing modal -->\n    <label for=\"myModal\" class=\"modal-backdrop\"></label>\n  </div>\n</div>",
    jsxCode: "{/* button for opening the modal */}\n<label htmlFor=\"myModal1\" className=\"btn\">Click Me</label>\n\n<input className=\"modal-toggle\" type=\"checkbox\" id=\"myModal1\" />\n<div className=\"modal\">\n  <div className=\"modal-content\">\n    <div className=\"card w-96 text-center\">\n      <div className=\"card-body\">\n        <h3 className=\"card-title\">Modal Sample</h3>\n        <span>Click outside!</span>\n      </div>\n    </div>\n    \n    {/* label for closing modal */}\n    <label htmlFor=\"myModal1\" className=\"modal-backdrop\"></label>\n  </div>\n</div>",
  },
}
