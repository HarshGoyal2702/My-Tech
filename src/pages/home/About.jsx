
import {FaStar} from "react-icons/fa"
const About = () => {
  return (
    <div className="section-conatiner">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2">
          <img src="/images/lady.png" alt="" />
        </div>
        <div className="md:w-1/2">
          <div className="text-left md:w-4/5">
            <p className="subtitle">About this Initiative</p>
            <h2 className="title">Participation In TechFusion</h2>
            <blockquote className="my-5 text-secondary leading-[30px]">
              <p>
                “TechFusion is a platform that provides opportunities for
                students to learn and grow with fun. where you can actively
                participate with your boundless mind and energetic body cum
                stamina." This Initiative from Vaish College of Engineering is
                aimed at encouraging students to participate in the field of
                technology and fostering the cultural and sports activities.{" "}
                <br />
                “Technology is not something that will save us, but rather it’s
                going to connect us.” – <i>Steve Jobs</i>
              </p>
              <p>
                {" "}
                Let's make a difference by working together in this ecosystem!
                and Join the EVENT of the year - <strong>TechFusion</strong>,
                organised by Student Development Cell
              </p>
              <p className="text-rose-800 uppercase tracking-wide font-medium mt-6 text-sm">
                For The Students ~ By The Students
              </p>
            </blockquote>
            {/* avatar */}
            <div className="flex items-center gap-4 flex-wrap">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse">
              <div className="avatar">
                <div className="w-12">
                  <img src="images/contact2.png" />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="images/cambg_2.jpg"  />
                </div>
              </div>
              <div className="avatar">
                <div className="w-12">
                  <img src="images/contact.webp"  />
                </div>
              </div>
              <div className="avatar placeholder">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+20</span>
                </div>
              </div>
            </div>
            <div className="space-y-1">
            <h5 className="text-lg font-semibold">Already Enrolled</h5>
            <div className="flex items-center gap-2">
                <FaStar className="text-yellow-400"/>
                <span className="font-medium">4.5</span><span className="text-[#807E7E]"> what you are waiting for?</span>
            </div>
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
