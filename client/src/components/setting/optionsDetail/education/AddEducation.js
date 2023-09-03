import React from 'react';

const AddEducation = () => {
  return (
    <React.Fragment>
      <form id="educationForm">
        <div className="my-2"></div>
        <div className="row">
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="form-group label-floating">
              <label className="control-label form-label text-danger">
                Title or Place
              </label>
              <input type="text" className="form-control" />
            </div>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="form-group label-floating">
              <label className="control-label form-label text-danger">
                Starting Year
              </label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="form-group label-floating">
              <label className="control-label form-label text-danger">
                Ending Year
              </label>
              <input type="date" className="form-control" />
            </div>
          </div>
          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="form-group label-floating">
              <label className="control-label form-label text-danger">
                Description
              </label>
              <textarea className="form-control" cols="30" rows="1"></textarea>
            </div>
          </div>

          <div className="col col-xl-12 col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="form-group">
              <button type="submit" className="form-control btn btn-dark p-2">
                Add
              </button>
            </div>
          </div>
        </div>
      </form>
    </React.Fragment>
  );
};
export default AddEducation;
