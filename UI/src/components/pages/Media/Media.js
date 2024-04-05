import React from "react";
import "./Media.css";

const Media = () => {
  return (
    <div>
      <section>
        <div className="text">
          <h1>Enjoy on your TV</h1>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
          <div className="media section1">
            <img
              alt=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
              className="image"
            />
            <video
              autoPlay
              playsInline=""
              muted
              loop=""
              src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v"
              type="video/mp4"
              className="video"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="text">
          <h1>Download your shows to watch offline</h1>
          <p>Save your favourites easily and always have something to watch.</p>
          <div className="media">
            <div>
            <img alt="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" 
                        className='image'/>
                        <div className="download">
                        <img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" 
                            className="image3"/>
                            <span className='Content3Part1'>Stranger Things </span><br />
                            <span className='Content3Part2'>Downloading...</span>
                        </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text">
          <h1>Watch everywhere</h1>
          <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </p>
          <div className="media section3">
            <div><img alt="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" className="image"
                        />
                    <video autoPlay playsInline="" muted loop="" 
                        src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v"
                        type="video/mp4" className='video video4'/> </div>
          </div>
        </div>
      </section>
      <section>
        <div className="text">
          <h1>Create profiles for kids</h1>
          <p>
            Send children on adventures with their favourite characters in a
            space made just for them—free with your membership.
          </p>
          <div className="media">
          <img alt="hijo" 
                            src="https://occ-0-2040-2186.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" className="image"
                        /> 
          </div>
        </div>
      </section>
    </div>
  );
};

export default Media;
