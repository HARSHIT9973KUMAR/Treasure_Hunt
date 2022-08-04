import React from 'react'
// import './Quizzard.css';
export default function Quizzard() {
    return (
        <div>
            {/* <div id="header" data-bs-spy="scroll" data-bs-target="#navbar" data-bs-offset={75}>
                <nav className="navbar navbar-expand-lg fixed-top navbar-dark" id="navbar">
                    <div className="container">
                        <a className="navbar-brand logo-text" style={{ color: '#eadbdd' }} href="#home">Ambient Event</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample" aria-expanded="false" aria-label="Toggle navigation">
                            <span  className="bi bi-caret-left" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto ">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#about">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="Categories">Categories</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Schedule">Schedule</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#Prizes">Rewards</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                

                <div className="offcanvas offcanvas-start" tabIndex={-1} id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title fs-2" id="offcanvasExampleLabel">Ambient Event</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
                    </div>
                    <div className="offcanvas-body " id="navbarNav">
                        <ul className="navbar-nav ms-auto p-5 fs-4">
                            <li className="nav-item">
                                <a className="nav-link" href="#home">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#categories">categories</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Schedule">Schedule</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#Prizes">Rewards</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div> */}

            {/* end offcanvas */}

            {/* header */}
            <section id="home" className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-12 mx-auto">
                            <h6 className="text-white ">WELCOME To Our Event</h6>
                            <h1 className="text-white display-1 my-4 fw-bold ">Quizzard<br />Of OZ</h1>
                            <a href="#" className=" glow">
                                <span />
                                <span />
                                <span />
                                <span />
                                Register Now
                            </a>
                        </div>
                    </div>
                </div>
            </section>
            {/* About */}
            <section id="about" className="bg-light text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 intro text-center">
                            <h2 className="fw-bold">About This Quiz</h2>
                            <div className="divider" />
                            <p className="fs-3">Show your knowledge about all the things literature, movie, Animals and many more at
                                Quizzard of OZ
                            </p>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-6 col-sm-6 logo">
                            <div>
                                <img height="300px" src="/image/pngegg.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 p-5">
                            <h3 className="fw-bold">Sharp your brain</h3>
                            <p className="fs-4">One way to keep your brain sharp is to exercise it with trivia . Build your own soft skills
                            </p>
                        </div>
                        <div className="col-lg-6 col-sm-6">
                            <h3 className="fw-bold">Think Out of The Box</h3>
                            <p className="fs-4">This enables us to think from different angles or simply to think out of the box</p>
                        </div>
                        <div className="col-lg-6 col-sm-6 logo">
                            <div>
                                <img height="300px" src="/image/pngegg (1).png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 logo">
                            <div>
                                <img height="250px" src="/image/knowledge.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-sm-6 p-5">
                            <h3 className="fw-bold">Fun way to gain knowledge</h3>
                            <p className="fs-4">Quizzes improve or expand one's knowledge either general or in specific things, it promote
                                fun way
                                to learn
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* categories */}
            <section id="categories">
                <div className="container">
                    <div className="row">
                        <div className="col-12 intro text-center">
                            <h2 className="fw-bold">Categories
                            </h2>
                            <div className="divider" />
                            <p className="fs-3">Unique and fun Trivia categories</p>
                        </div>
                    </div>
                    <div className="row row-cols-1 row-cols-md-3 g-4">
                        <div className="col">
                            <div className="card h-100">
                                <img height="500px" src="/image/UCd78vfC8vU.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Time for Nature</h5>
                                    <p className="card-text">Let's get deep into Planet Earth, The green giants, Animal species</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img height="500px" src="/image/pexels-joy-anne-pura-1186116.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Art &amp; Culture</h5>
                                    <p className="card-text">One thing is common in us that is culture</p>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card h-100">
                                <img height="500px" src="/image/pexels-suzy-hazelwood-1130980.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">The world of Book</h5>
                                    <p className="card-text">Poetry magic, Fiction Books, Historic speeches</p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-5">
                            <div className="card h-100">
                                <img height="500px" src="/image/pexels-david-henry-6436372.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">Political Recap</h5>
                                    <p className="card-text">Test your knowledge on all of your politics, law , Fundamental rights</p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-5">
                            <div className="card h-100">
                                <img height="500px" src="/image/pexels-furknsaglam-3131406.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">It's just TV ; It's just Entertainment </h5>
                                    <p className="card-text">How well do you know about movies, Music trivia, Sports &amp; News?</p>
                                </div>
                            </div>
                        </div>
                        <div className="col pt-5">
                            <div className="card h-100">
                                <img height="500px" src="/image/pexels-alesia-kozik-6772103.jpg" className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title fw-bold">The Marketing Environment</h5>
                                    <p className="card-text">The demographic, economic, natural, technological,political and cultural factors
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div></section>
            {/* Quotes */}
            <div className="container">
                <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active  text-center text-white box1">
                            <h1>“Faith is more than getting a theological quiz right. Faith is to know, to assent,
                                to put your trust in, and to cherish what is true.” ~ Kevin DeYoung</h1>
                        </div>
                        <div className="carousel-item active text-center text-white box2">
                            <h1>“You can tell James Duthie to shove that quiz. I have a few other words
                                I can tell you about the quiz.” ~ John Tortorella</h1>
                        </div>
                        <div className="carousel-item active text-white box3">
                            <h1>“There is no cramming for a test of character. It always comes as a pop quiz.” ~ Andy Stanley</h1>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true" />
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true" />
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
            {/* Schedule */}
            <section id="Schedule">
                <div className="container">
                    <div className="row">
                        <div className="col-12 intro text-center">
                            <h2 className="fw-bold text-white">Schedule of the event</h2>
                            <div className="divider" />
                        </div>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="main-timeline-4 text-white">
                        <div className="timeline-4 left-4">
                            <div className="card gradient-custom">
                                <div className="card-body p-4">
                                    <i className="fas fa-brain fa-2x mb-3" />
                                    <h4>7:45PM</h4>
                                    <p className="small text-white-50 mb-4">May 21</p>
                                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                        mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                                        dignissim
                                        per, habeo iusto primis ea eam.
                                    </p>
                                    <h6 className="badge bg-light text-black mb-0">New</h6>
                                    <h6 className="badge bg-light text-black mb-0">Admin</h6>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-4 right-4">
                            <div className="card gradient-custom-4">
                                <div className="card-body p-4">
                                    <i className="fas fa-camera fa-2x mb-3" />
                                    <h4>8:00 AM</h4>
                                    <p className="small text-white-50 mb-4">May 18</p>
                                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                        mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                                        dignissim
                                        per, habeo iusto primis ea eam.
                                    </p>
                                    <h6 className="badge bg-light text-black mb-0">New</h6>
                                    <h6 className="badge bg-light text-black mb-0">Admin</h6>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-4 left-4">
                            <div className="card gradient-custom">
                                <div className="card-body p-4">
                                    <i className="fas fa-campground fa-2x mb-3" />
                                    <h4>7:25 PM</h4>
                                    <p className="small text-white-50 mb-4">May 6</p>
                                    <p>Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto
                                        mnesarchum, vim ea mazim fierent detracto. Ea quis iuvaret expetendis his, te elit voluptua
                                        dignissim
                                        per, habeo iusto primis ea eam.
                                    </p>
                                    <h6 className="badge bg-light text-black mb-0">New</h6>
                                    <h6 className="badge bg-light text-black mb-0">Admin</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Rewards */}
            <section id="Prizes" className="text-center">
                <div className="container">
                    <div className="row">
                        <div className="col-12 intro text-center">
                            <h2 className="pb-5 fw-bold">Rewards</h2>
                            <div className="divider" />
                        </div>
                    </div>
                    <div className="row text-center">
                        <div className="col-lg-6 text-white">
                            <div className="pricing-table active">
                                <h1 className="mt-4">Winner</h1>
                                <h4>Cash Rewards of 10,000 for the winner.</h4>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="pricing-table">
                                <h1 className="mt-4">Runner Up </h1>
                                <h4>Online Shopping coupons for the runner up worth 5000</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
