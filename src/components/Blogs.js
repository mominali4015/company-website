import React from 'react';
function Blogs() {
    return (
        <>
            <div className='container'>
                <h1 className="text-center mb-5">Here Are Our Latest Blogs</h1>
                <div className="row g-5">
                    <div className="col-12 col-md-6 col-lg-4">
                        <div className="card shadow">
                            <img src="" className="card-img-top" alt="Blog" />
                            <div className="card-body">
                                <h5 className="card-title text-center">Blog Title</h5>
                                <p className="card-text" style={{ textAlign: 'justify' }}>Blog Details</p>
                                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Read More
                                </button>
                            </div>
                            <div className="card-footer">
                                <small className="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="staticBackdropLabel">Blog Title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            Blog Full Details
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;