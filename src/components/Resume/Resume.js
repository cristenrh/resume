
import './Resume.css';
import Nilogo from "../../assets/ni-logo.jpg";
import SBlogo from "../../assets/sb-logo.png";
import CHlogo from "../../assets/ch-logo.png";


function Resume() {
return (
    <div className="App main">
        <div className="resume">
        <div className="site-banner-header">
            <h1 className="resume">
                My Resume
            </h1>
        </div>
        <div className="container px-6">
        <div className="columns mb-5">
            <div className="column ">
            <div className="columns">
            <div className="column is-one-third is-hidden-mobile">
                <img className="nilogo" src={Nilogo} />
            </div>
            <div className="column is-two-third has-text-left is-size-7">
               
                <span className="is-size-6">National Instruments</span><br/>
                Austin, TX

                <p className="mt-6"><strong>Senior FrontEnd Developer</strong><br/>
                June 2015 - Present</p>
            </div>
        </div>
                
            </div>
            <div className="column has-text-left content">
                <ul className="list is-size-7">
                    <li className="list-item">Lead Frontend Developer for building, troubleshooting and maintaining NI’s responsive wrapper platform using HTML, CSS, JavaScript, jQuery, jQueryUI, Bootstrap, AJAX, and Freemarker Templating Language while synching data from CMS.</li>

                    <li className="list-item">Continuously contribute to and maintain NI’s library of responsive front-end assets</li>

                    <li className="list-item">Redesigned and refactored site-wide survey to run on multiple platforms across ni.com as well as external SaaS applications</li>

                    <li className="list-item">Write documentation and guidelines for training and reference</li>

                    <li className="list-item">Collaborate with business analysts, programmer analysts, product managers, and UX designers using Agile methodology on various projects</li>

                    <li className="list-item">Supervised team of four remote developers in Costa Rica and Canada – conducted 1-1s, performance reviews, interviews for prospective candidates, and helped create developer test for candidates</li>

                    <li className="list-item">Maintain JIRA workspace for Frontend Operations</li>
                </ul>

            </div>
        </div>
    
        <div className="columns mb-5">
            <div className="column ">
            <div className="columns">
            <div className="column is-one-third">
            </div>
            <div className="column is-two-third has-text-left is-size-7">
                <p><strong>FrontEnd Developer</strong><br/>
                June 2012 - June 2015</p>
            </div>
        </div>
                
            </div>
            <div className="column has-text-left content">
                <ul className="list is-size-7">
                    <li className="list-item">Provided leadership in editing/creating localized static pages for the National Instruments website and branch sites.</li>

                    <li className="list-item">Managed project priorities, deadlines, and deliverables for a library of templates that content writers could browse to quickly reproduce pages. Developed dozens of reusable patterns using Freemarker Templating Language, CSS, HTML, and JavaScript to improve productivity, saving hours of time for the content team.</li>

                    <li className="list-item">Gained valuable technical experience that encompassed all aspects of dynamic frontend web development.</li>

                    <li className="list-item">Inherited a project with a wrapper that only covered about 30% of the website, resulting in an inconsistent look feel. With a focus on product quality and user experience, learned how the system worked (primarily outdated CMS) and implemented a new design. Increased the pages and apps by more than 30% that used the same "wrapper" for a more consistent look across the entire website (hundreds of thousands of pages).</li>
                </ul>
            </div>
        </div>
        <div className="columns mb-5">
            <div className="column ">
            <div className="columns">
            <div className="column is-one-third">
            </div>
            <div className="column is-two-third has-text-left is-size-7">
                <p><strong>Web Production Artist</strong><br/>
                June 2012 - June 2015</p>
            </div>
        </div>    
            </div>
            <div className="column has-text-left content">
                <ul className="list is-size-7">
                    <li className="list-item">Collaborated with key stakeholders to create and develop external banners for product launches and events.</li>

                    <li className="list-item">Localized and produced feature graphics, banners, and other graphics.</li>

                    <li className="list-item">
                    Decreased time required for building animations as well as creating cleaner looking assets at much smaller sizes by shifting from frame-based animation to writing reusable scripts. Led in completing a project that built hundreds of Flash-based animated feature graphics for external advertising with specific small file size requirements.
                    </li>
                </ul>
            </div>
        </div>
        <hr></hr>
        <div className="columns mb-5 mt-6">
            <div className="column ">
            <div className="columns">
            <div className="column is-one-third is-hidden-mobile">
            <img className="nilogo" src={CHlogo} />
            </div>
            <div className="column is-two-third has-text-left is-size-7">
                <p>
                <span className="is-size-6">Independent Contractor</span><br/>
               
                <strong>Flash Developer, Web Designer</strong><br/>
                Feb 2006 - Oct 2007</p>
            </div>
        </div> 
            </div>
            <div className="column has-text-left content">
                <ul className="list is-size-7">
                    <li className="list-item">Worked as a Web Developer for KingsIsle Entertainment to support launch of their new Wizard 101 game.</li>

                    <li className="list-item">Produced web graphics for business and non-profit websites (Bastrop ISD and Round Rock Chamber of Commerce).</li>

                    <li className="list-item">
                    Experienced in thinking strategically about projects and technical challenges. Collaborated with Project Manager and client by working in tandem with team resources.
                    </li>
                </ul>

            </div>
        </div>
        <hr></hr>
        <div className="columns mb-5 mt-6">
            <div className="column ">
            <div className="columns">
            <div className="column is-one-third is-hidden-mobile">
            <img className="nilogo" src={SBlogo} />
            </div>
            <div className="column is-two-third has-text-left is-size-7">
                <p>
                <span className="is-size-6">Springbox</span><br/>
               
                <strong>Flash Developer</strong><br/>
                Jan 2006 - Jan 2007</p>
            </div>
        </div>
                
            </div>
            <div className="column has-text-left content">
                <ul className="list is-size-7">
                    <li className="list-item">Gained technical and analytical skills for development while applying leadership skills to serve as a lead for creation of interactive modules, offering integrated development and setting up performance monitoring.</li>

                    <li className="list-item">Led a project to produce a large number of educational interactive modules for Harcourt Publishing. Worked closely with Project Manager to organize sound files and create a spreadsheet of bugs. Cataloged and edited audio files as needed. Launched over 300 interactive modules for an online math course (middle-school students).</li>
                </ul>

            </div>
        </div>


    </div>
   
</div>
    
    </div>

    

    );
  }
  
  export default Resume;
  