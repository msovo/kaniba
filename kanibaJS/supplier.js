supplierList=`<div class="product-status mg-b-15">
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="product-status-wrap">
                <h4>Library List</h4>
                <div class="add-product">
                    <a href="#">Add Library</a>
                </div>
                <div class="asset-inner">
                    <table>
                        <tr>
                            <th>No</th>
                            <th>Image</th>
                            <th>Name of Asset</th>
                            <th>Status</th>
                            <th>Subject</th>
                            <th>Department</th>
                            <th>Type</th>
                            <th>Price</th>
                            <th>Setting</th>
                        </tr>
                       
                      
                        <tr>
                            <td>5</td>
                            <td><img src="img/product/book-1.jpg" alt="" /></td>
                            <td>Web Development Book</td>
                            <td>
                                <button class="pd-setting">Active</button>
                            </td>
                            <td>Wordpress</td>
                            <td>CSE</td>
                            <td>Book</td>
                            <td>$1800</td>
                            <td>
                                <button data-toggle="tooltip" title="Edit" class="pd-setting-ed"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></button>
                                <button data-toggle="tooltip" title="Trash" class="pd-setting-ed"><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                            </td>
                        </tr>
                      
                    </table>
                </div>
                <div class="custom-pagination">
                    <ul class="pagination">
                        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                        <li class="page-item"><a class="page-link" href="#">1</a></li>
                        <li class="page-item"><a class="page-link" href="#">2</a></li>
                        <li class="page-item"><a class="page-link" href="#">3</a></li>
                        <li class="page-item"><a class="page-link" href="#">Next</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`

add_supplier=`<div class="single-pro-review-area mt-t-30 mg-b-15">
<div class="container-fluid">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="product-payment-inner-st">
                <ul id="myTabedu1" class="tab-review-design">
                    <li class="active"><a href="#description">Library Assets</a></li>
                    <li><a href="#reviews"> Account Information</a></li>
                    <li><a href="#INFORMATION">Social Information</a></li>
                </ul>
                <div id="myTabContent" class="tab-content custom-product-edit">
                    <div class="product-tab-list tab-pane fade active in" id="description">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="review-content-section">
                                    <div id="dropzone1" class="pro-ad addcoursepro">
                                        <form action="/upload" class="dropzone dropzone-custom needsclick addlibrary" id="demo1-upload">
                                            <div class="row">
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <input name="nameasset" type="text" class="form-control" placeholder="Name of Asset">
                                                    </div>
                                                    <div class="form-group">
                                                        <input name="subject" type="text" class="form-control" placeholder="Subject">
                                                    </div>
                                                    <div class="form-group alert-up-pd">
                                                        <div class="dz-message needsclick download-custom">
                                                            <i class="fa fa-download edudropnone" aria-hidden="true"></i>
                                                            <h2 class="edudropnone">Drop image here or click to upload.</h2>
                                                            <p class="edudropnone"><span class="note needsclick">(This is just a demo dropzone. Selected image is <strong>not</strong> actually uploaded.)</span>
                                                            </p>
                                                            <input name="imageico" class="hd-pro-img" type="text" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                                    <div class="form-group">
                                                        <input name="department" type="number" class="form-control" placeholder="Department">
                                                    </div>
                                                    <div class="form-group res-mg-t-15">
                                                        <input name="type" type="text" class="form-control" placeholder="Type">
                                                    </div>
                                                    <div class="form-group">
                                                        <input name="price" type="text" class="form-control" placeholder="Price">
                                                    </div>
                                                    <div class="form-group">
                                                        <input name="year" type="number" class="form-control" placeholder="Year">
                                                    </div>
                                                    <div class="form-group">
                                                        <input name="status" type="text" class="form-control" placeholder="Status">
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="payment-adress">
                                                        <button type="submit" class="btn btn-primary waves-effect waves-light">Submit</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-tab-list tab-pane fade" id="reviews">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="review-content-section">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="devit-card-custom">
                                                <div class="form-group">
                                                    <input type="text" class="form-control" placeholder="Email">
                                                </div>
                                                <div class="form-group">
                                                    <input type="number" class="form-control" placeholder="Phone">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control" placeholder="Password">
                                                </div>
                                                <div class="form-group">
                                                    <input type="password" class="form-control" placeholder="Confirm Password">
                                                </div>
                                                <a href="#" class="btn btn-primary waves-effect waves-light">Submit</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="product-tab-list tab-pane fade" id="INFORMATION">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="review-content-section">
                                    <div class="row">
                                        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                            <div class="devit-card-custom">
                                                <div class="form-group">
                                                    <input type="url" class="form-control" placeholder="Facebook URL">
                                                </div>
                                                <div class="form-group">
                                                    <input type="url" class="form-control" placeholder="Twitter URL">
                                                </div>
                                                <div class="form-group">
                                                    <input type="url" class="form-control" placeholder="Google Plus">
                                                </div>
                                                <div class="form-group">
                                                    <input type="url" class="form-control" placeholder="Linkedin URL">
                                                </div>
                                                <button type="submit" class="btn btn-primary waves-effect waves-light">Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`

editSupplier=`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<div class="product-payment-inner-st">
    <ul id="myTabedu1" class="tab-review-design">
        <li class="active"><a href="#description">Courses Details</a></li>
        <li><a href="#reviews"> Account Information</a></li>
        <li><a href="#INFORMATION">Social Information</a></li>
    </ul>
    <div id="myTabContent" class="tab-content custom-product-edit">
        <div class="product-tab-list tab-pane fade active in" id="description">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="review-content-section">
                        <div id="dropzone1" class="pro-ad addcoursepro">
                            <form action="#" class="dropzone dropzone-custom needsclick add-professors dz-clickable" id="demo1-upload">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group">
                                            <input name="number" type="text" class="form-control" placeholder="Course Name" value="Apps Development">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Course Start Date" value="12/10/2017">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Course Duration" value="6 Months">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Course Price" value="$400">
                                        </div>
                                        <div class="form-group alert-up-pd">
                                            <div class="dz-message needsclick download-custom">
                                                <i class="fa fa-download edudropnone" aria-hidden="true"></i>
                                                <h2 class="edudropnone">Drop image here or click to upload.</h2>
                                                <p class="edudropnone"><span class="note needsclick">(This is just a demo dropzone. Selected image is <strong>not</strong> actually uploaded.)</span>
                                                </p>
                                                <input name="imageico" class="hd-pro-img" type="text">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                                        <div class="form-group res-mg-t-15">
                                            <input type="text" class="form-control" placeholder="Department" value="CSE">
                                        </div>
                                        <div class="form-group edit-ta-resize">
                                            <textarea name="description">Lorem ipsum dolor sit amet of, consectetur adipiscing elitable. Vestibulum tincidunt est vitae ultrices accumsan.</textarea>
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Course Professor" value="Selima sha">
                                        </div>
                                        <div class="form-group">
                                            <input type="text" class="form-control" placeholder="Year" value="1 Year">
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="payment-adress">
                                            <button type="submit" class="btn btn-primary waves-effect waves-light">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-tab-list tab-pane fade" id="reviews">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="review-content-section">
                        <div class="row">
                            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <div class="devit-card-custom">
                                    <div class="form-group">
                                        <input type="text" class="form-control" placeholder="Email">
                                    </div>
                                    <div class="form-group">
                                        <input type="number" class="form-control" placeholder="Phone">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Password">
                                    </div>
                                    <div class="form-group">
                                        <input type="password" class="form-control" placeholder="Confirm Password">
                                    </div>
                                    <a href="#!" class="btn btn-primary waves-effect waves-light">Submit</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-tab-list tab-pane fade" id="INFORMATION">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="review-content-section">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="devit-card-custom">
                                    <div class="form-group">
                                        <input type="url" class="form-control" placeholder="Facebook URL">
                                    </div>
                                    <div class="form-group">
                                        <input type="url" class="form-control" placeholder="Twitter URL">
                                    </div>
                                    <div class="form-group">
                                        <input type="url" class="form-control" placeholder="Google Plus">
                                    </div>
                                    <div class="form-group">
                                        <input type="url" class="form-control" placeholder="Linkedin URL">
                                    </div>
                                    <button type="submit" class="btn btn-primary waves-effect waves-light">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`

supplierInfomation=`<div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
<div class="blog-details-inner">
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="latest-blog-single blog-single-full-view">
                <div class="blog-image">
                    <a href="#"><img src="img/blog-details/1.jpg" alt="">
                        </a>
                    <div class="blog-date">
                        <p><span class="blog-day">20</span> May</p>
                    </div>
                </div>
                <div class="blog-details blog-sig-details">
                    <div class="details-blog-dt blog-sig-details-dt courses-info mobile-sm-d-n">
                        <span><a href="#"><i class="fa fa-user"></i> <b>Course Name:</b> Web Development</a></span>
                        <span><a href="#"><i class="fa fa-heart"></i> <b>Course Price:</b> $3000</a></span>
                        <span><a href="#"><i class="fa fa-comments-o"></i> <b>Professor Name:</b> Alva Adition</a></span>
                    </div>
                    <h1><a class="blog-ht" href="#">Courses Info Dummy Title</a></h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                    <p>Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad im veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip</p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="comment-head">
                <h3>Comments</h3>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="user-comment">
                <img src="img/contact/1.jpg" alt="">
                <div class="comment-details">
                    <h4>Jonathan Doe 2015 15 July <span class="comment-replay">Replay</span></h4>
                    <p>Shabby chic selfies pickled Tumblr letterpress iPhone. Wolf vegan retro selvage literally <span class="mobile-sm-d-n">Wes Anderson ethical four loko. Meggings blog chambray tofu pour-over. Pour-over Tumblr keffiyeh, cornhole whatever cardigan Tonx lomo.Shabby.</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="user-comment admin-comment">
                <img src="img/contact/2.jpg" alt="">
                <div class="comment-details">
                    <h4>Jonathan Doe 2015 15 July <span class="comment-replay">Replay</span></h4>
                    <p>Shabby chic selfies pickled Tumblr letterpress iPhone. Wolf vegan retro selvage literally <span class="mobile-sm-d-n">Wes Anderson ethical four loko. Meggings blog chambray tofu pour-over. Pour-over Tumblr keffiyeh, cornhole whatever cardigan
                        Tonx lomo.Shabby.</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="user-comment user-coment2">
                <img src="img/contact/3.jpg" alt="">
                <div class="comment-details">
                    <h4>Jonathan Doe 2015 15 July <span class="comment-replay">Replay</span></h4>
                    <p>Shabby chic selfies pickled Tumblr letterpress iPhone. Wolf vegan retro selvage literally Wes Anderson <span class="mobile-sm-d-n">ethical four loko. Meggings blog chambray tofu pour-over. Pour-over Tumblr keffiyeh, cornhole whatever cardigan Tonx lomo.Shabby.</span></p>
                </div>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="lead-head">
                <h3>Leave A Comment</h3>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="coment-area">
            <form id="comment" action="#" class="comment" novalidate="novalidate">
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12 blog-res-mg-bt">
                    <div class="form-group">
                        <input name="name" class="responsive-mg-b-10" type="text" placeholder="Name">
                    </div>
                </div>
                <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                    <div class="form-group">
                        <input name="email" type="text" placeholder="Email">
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <div class="form-group">
                        <textarea name="message" cols="30" rows="10" placeholder="Message"></textarea>
                    </div>
                    <div class="payment-adress comment-stn">
                        <button type="submit" class="btn btn-primary waves-effect waves-light">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</div>
</div>`

function listSupliers(){
    $("#calenderViewHtml").slideUp()

    $("#HTML_Loader").html('')
    $("#HTML_Loader").html(supplierList)
}

function addsupplier(){
    $("#calenderViewHtml").slideUp()

    $("#HTML_Loader").html('')
    $("#HTML_Loader").html(add_supplier)
    
}