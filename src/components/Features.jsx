import React from 'react'

const Features = () => {
  return (
    <section class="section bg-light">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <h3 class="title text-center">Some more Features ...</h3>
                    </div>
                </div>
                <div class="row vertical-content">
                    <div class="col-lg-6 col-md-12 mr-auto">
                        <div>
                            <div class="text-left feauters-box feauters-box-right mt-2">
                                <i class="mbri-wifi"></i>
                                <div class="feauters-content">
                                    <h5 class="feauters-title">Live tracking</h5>
                                    <p class="feauters-subtitle text-muted pt-2">Track your items in real time.</p>
                                </div>
                            </div>
                            <div class="text-left feauters-box feauters-box-right mt-2">
                                <i class="mbri-key"></i>
                                <div class="feauters-content">
                                    <h5 class="feauters-title">Easy and secure checkout</h5>
                                    <p class="feauters-subtitle text-muted pt-2"> Pay safely and securely. </p>
                                </div>
                            </div>
                            <div class="text-left feauters-box feauters-box-right mt-2">
                                <i class="mbri-share"></i>
                                <div class="feauters-content">
                                    <h5 class="feauters-title"> Push notifications</h5>
                                    <p class="feauters-subtitle text-muted pt-2">We want to keep you updated so that we are always on the same page.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12 pl-0 pr-0">
                        {/* <img src="images/macbook.png" alt="" class="img-fluid m-l-auto" /> */}
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Features