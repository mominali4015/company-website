import React from 'react';
import { Link } from 'react-router-dom';
function Blogs() {
    return (
        <>
            <div className='container'>
                <h1 class="text-center mb-5">Here Are Our Latest Blogs</h1>
                <div class="row g-5">
                    <div class="col-12 col-md-6 col-lg-4">
                        <div class="card shadow">
                            <img src="" class="card-img-top" alt="Blog" />
                            <div class="card-body">
                                <h5 class="card-title text-center">Blog Title</h5>
                                <p class="card-text" style={{ textAlign: 'justify' }}>Blog Details</p>
                                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                                    Read More
                                </button>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Blog Title</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Blog Full Details
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Blogs;