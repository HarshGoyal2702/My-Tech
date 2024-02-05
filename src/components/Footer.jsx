import React from "react";

<script defer src="https://use.fontawesome.com/releases/v5.0.13/js/all.js"
    integrity="sha384-xymdQtn1n3lH2wcu0qhcdaOpQwyoarkgLVxC/wZ5q7h9gHtxICrpcaSUfygqZGOe"
    crossorigin="anonymous"></script>
const Footer = () => {
  return (
    <>
      <div>
      <footer className="footer relative flex p-10 bg-base-200 text-base-content">
        <nav>
          <h6 className="footer-title">Technical Events</h6>
          <a className="link link-hover">Technical Quiz</a>
          <a className="link link-hover">Technical Debate</a>
          <a className="link link-hover">Group Discussion</a>
          <a className="link link-hover">Ad Mad</a>
          <a className="link link-hover">Logo Designing</a>
          <a className="link link-hover">Exhibition of project</a>
          <a className="link link-hover">On the Spot Coding</a>
          <a className="link link-hover">Web Development</a>
        </nav>
        <nav>
          <h6 className="footer-title">Cultural Event</h6>
          <a className="link link-hover">Solo Dance</a>
          <a className="link link-hover">Duet Dance</a>
          <a className="link link-hover">Group Dance</a>
          <a className="link link-hover">Solo Song</a>
          <a className="link link-hover">Duet Song</a>
          <a className="link link-hover">Group Song</a>
          <a className="link link-hover">PhotoGraphy</a>
          <a className="link link-hover">Mimicry</a>
          <a className="link link-hover">Poster Making</a>
          <a className="link link-hover">Haloween Show</a>
          <a className="link link-hover">Rangoli</a>
          <a className="link link-hover">Best Out Of Waste</a>
          <a className="link link-hover">Mehndi</a>
          <a className="link link-hover">Poetry</a>
          <a className="link link-hover"></a>
        </nav>
        <nav>
          <h6 className="footer-title">Sports Events</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
        <form className="absolute right-12">
    <h6 className="footer-title">| We are Here to Solve Your Queries |</h6> 
    <fieldset className="form-control w-80">
      <label className="label">
        <span className="label-text">Ask Your Query</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="Is there any Celebrity?" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item">Ask</button>
      </div>
    </fieldset>
  </form>
      </footer>
      
      </div>
      <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
        <aside className="items-center grid-flow-col">
          <img className="w-20" src="/images/vaish.png" alt="" />
          <p className="text-center">
            Vaish College of Engineering <br />
            Student Development Cell
          </p>
          <img className="w-20" src="/images/nba.png" alt="" />
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
        <div className="col-lg-3 col-md-6">
      <div
        className="f_widget social-widget pl-70 wow fadeInLeft"
        data-wow-delay="0.8s"
        style={{ visibility: 'visible', animationDelay: '0.8s', animationName: 'fadeInLeft' }}
      >
        <h3>Team Solutions</h3>
        {/* Uncomment the image tag and replace the src attribute with the actual image path */}
        {/* <a href="#"><img src="./images/vaish.png" alt=""></a> */}
        <div className="rounded-social-buttons items-center text-center">
  <a
    className="social-button items-center facebook inline-block relative cursor-pointer w-10 h-10 border-solid border-transparent p-2 text-decoration-none text-center text-white text-lg font-normal leading-2em rounded-full transition-all duration-500 ease-in-out mr-1 mb-1 bg-blue-500 border-[2.25px] solid transparent hover:rotate-360 focus:rotate-360"
    href="#"
  >
    <i className="fab fa-facebook-f"></i>
  </a>
  <a
    className="social-button twitter inline-block relative cursor-pointer w-10 h-10 border-solid border-transparent p-2 text-decoration-none text-center text-white text-lg font-normal leading-2em rounded-full transition-all duration-500 ease-in-out mr-1 mb-1 bg-blue-400 border-[2.25px] solid transparent hover:rotate-360 focus:rotate-360"
    href="#"
  >
    <i className="fab fa-twitter"></i>
  </a>
  <a
    className="social-button linkedin inline-block relative cursor-pointer w-10 h-10 border-solid border-transparent p-2 text-decoration-none text-center text-white text-lg font-normal leading-2em rounded-full transition-all duration-500 ease-in-out mr-1 mb-1 bg-blue-600 border-[2.25px] solid transparent hover:rotate-360 focus:rotate-360"
    href="#"
  >
    <i className="fab fa-linkedin"></i>
  </a>
  {/* <a
    className="social-button youtube inline-block relative cursor-pointer w-10 h-10 border-solid border-transparent p-0 text-decoration-none text-center text-white text-lg font-normal leading-2em rounded-full transition-all duration-500 ease-in-out mr-1 mb-1 bg-red-700 border-1.25px solid transparent hover:rotate-360 focus:rotate-360"
    href="#"
  >
    <i className="fab fa-youtube"></i>
  </a> */}
  <a
    className="social-button instagram inline-block relative cursor-pointer w-10 h-10 border-solid border-transparent p-2 text-decoration-none text-center text-white text-lg font-normal leading-2em rounded-full transition-all duration-500 ease-in-out mr-1 mb-1 bg-purple-700 border-[2.25px] solid transparent hover:rotate-360 focus:rotate-360"
    href="#"
  >
    <i className="fab fa-instagram"></i>
  </a>
</div>

      </div>
    </div>
        </nav>
      </footer>
    </>
  );
};


export default Footer;
