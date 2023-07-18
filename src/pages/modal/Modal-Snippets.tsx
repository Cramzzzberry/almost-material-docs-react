export const ModalSnippets = {
  "Modal": {
    preview: (
      <>
      {/* button for opening the modal */}
      <label htmlFor="myModal" className="btn">Click Me</label>

      <input className="_modal-toggle" type="checkbox" id="myModal" />
      <div className="modal">
        <div className="_modal-content">
          <div className="card w-96 text-center">
            <div className="_card-body">
              <h4 className="font-bold">This is an opened modal!</h4>

              <div className="_card-actions justify-center">
                {/* button for closing modal */}
                <label htmlFor="myModal" className="btn btn-error">Close</label>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    ),
    htmlCode: "<!-- button for opening the modal -->\n<label for=\"myModal\" class=\"btn\">Click Me</label>\n\n<input class=\"_modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div class=\"modal\">\n  <div class=\"_modal-content\">\n    <div class=\"card w-96 text-center\">\n      <div class=\"_card-body\">\n        <h4 class=\"font-bold\">This is an opened modal!</h4>\n\n        <div class=\"_card-actions justify-center\">\n          <!-- button for closing modal -->\n          <label for=\"myModal\" class=\"btn btn-error\">Close</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
    jsxCode: "{/* button for opening the modal */}\n<label htmlFor=\"myModal\" className=\"btn\">Click Me</label>\n\n<input className=\"_modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div className=\"modal\">\n  <div className=\"_modal-content\">\n    <div className=\"card w-96 text-center\">\n      <div className=\"_card-body\">\n        <h4 className=\"font-bold\">This is an opened modal!</h4>\n\n        <div className=\"_card-actions justify-center\">\n          {/* button for closing modal */}\n          <label htmlFor=\"myModal\" className=\"btn btn-error\">Close</label>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>",
  },
  "Modal that Closes Outside": {
    preview: (
      <>
      {/* button for opening the modal */}
      <label htmlFor="myModal1" className="btn">Click Me</label>

      <input className="_modal-toggle" type="checkbox" id="myModal1" />
      <div className="modal">
        <div className="_modal-content">
          <div className="card w-96 text-center">
            <div className="_card-body">
              <h3 className="_card-title">Modal Sample</h3>
              <span>Click outside!</span>
            </div>
          </div>
          
          {/* label for closing modal */}
          <label htmlFor="myModal1" className="_modal-backdrop"></label>
        </div>
      </div>
      </>
    ),
    htmlCode: "<!-- button for opening the modal -->\n<label for=\"myModal\" class=\"btn\">Click Me</label>\n\n<input class=\"_modal-toggle\" type=\"checkbox\" id=\"myModal\" />\n<div class=\"modal\">\n  <div class=\"_modal-content\">\n    <div class=\"card w-96 text-center\">\n      <div class=\"_card-body\">\n        <h3 class=\"_card-title\">Modal Sample</h3>\n        <span>Click outside!</span>\n      </div>\n    </div>\n    \n    <!-- label for closing modal -->\n    <label for=\"myModal\" class=\"modal-backdrop\"></label>\n  </div>\n</div>",
    jsxCode: "{/* button for opening the modal */}\n<label htmlFor=\"myModal1\" className=\"btn\">Click Me</label>\n\n<input className=\"_modal-toggle\" type=\"checkbox\" id=\"myModal1\" />\n<div className=\"modal\">\n  <div className=\"_modal-content\">\n    <div className=\"card w-96 text-center\">\n      <div className=\"_card-body\">\n        <h3 className=\"_card-title\">Modal Sample</h3>\n        <span>Click outside!</span>\n      </div>\n    </div>\n    \n    {/* label for closing modal */}\n    <label htmlFor=\"myModal1\" className=\"modal-backdrop\"></label>\n  </div>\n</div>",
  },
}
