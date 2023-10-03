import React from 'react';
import './About.scss'
const About = () => {
    return (
        <div className='mt-36'>
            <h1 className='font-bold text-slate-600 text-center'>Medical Degree</h1>
            <div className="timeline">
                <div className="timeline__event  animated fadeInUp delay-3s timeline__event--type1">
                    <div className="timeline__event__icon ">

                    </div>
                    <div className="timeline__event__date">
                        Jun 2000 - Apr 2005
                    </div>
                    <div className="timeline__event__content ">
                        <div className="timeline__event__title">
                            Bachelor of Medicine
                        </div>
                        <div className="timeline__event__description ">
                            <h5 className=''>(MBBS, BMBS, MBCHB, MBBCH)</h5>
                            <p>Grand Canyon University</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-2s timeline__event--type2">
                    <div className="timeline__event__icon">
                        <i className="lni-burger"></i>
                    </div>
                    <div className="timeline__event__date">
                        Aug 2005 - Feb 2007
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Master of Medicine
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''>(MM, MMED)</h5>
                            <p>Grand Canyon University</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp delay-1s timeline__event--type3">
                    <div className="timeline__event__icon">
                        <i className="lni-slim"></i>

                    </div>
                    <div className="timeline__event__date">
                        Nov 2007 - Feb 2010
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Master of Clinical Medicine
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''>(MCM)</h5>
                            <p>Grand Canyon University</p>
                        </div>

                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type1">
                    <div className="timeline__event__icon">
                        <i className="lni-cake"></i>

                    </div>
                    <div className="timeline__event__date">
                        Jan 2011 - Feb 2013
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Master of Medical Science
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''>(MMSC, MMEDSC)</h5>
                            <p>Grand Canyon University</p>
                        </div>
                    </div>
                </div>
                <div className="timeline__event animated fadeInUp timeline__event--type4">
                    <div className="timeline__event__icon">
                    </div>
                    <div className="timeline__event__date">
                        Sep 2013 - Dec 2016
                    </div>
                    <div className="timeline__event__content">
                        <div className="timeline__event__title">
                            Doctor of Medicine
                        </div>
                        <div className="timeline__event__description">
                            <h5 className=''>(MD, DM, DR.MUD, DR.MED)</h5>
                            <p>Grand Canyon University</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;