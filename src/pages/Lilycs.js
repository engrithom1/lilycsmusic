import React, { Component } from "react";
import axios from "axios";

export class Lilycs extends Component {
  state = {
    artist: [],
    songs: [],
  };
  componentDidMount = () => {
    this.getArtist();
  };
  getArtist = () => {
    var options = {
      method: "GET",
      url: "https://genius.p.rapidapi.com/artists/16775/songs",
      headers: {
        "x-rapidapi-host": "genius.p.rapidapi.com",
        "x-rapidapi-key": "c5c827b790mshd9e1c1e76902e40p1d1630jsn9effd34b928d",
      },
    };

    axios
      .request(options)
      .then((res) => {
        //console.log(res)
        var songs = res.data.response.songs;
        this.setState({ songs }, () => {
          console.log(this.state.songs);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  render() {
    var songs = this.state.songs;
    return (
      <div>
        <section className="miscellaneous-area section-padding-100-0">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4">
                <h2>adds or something</h2>
              </div>
              <div className="col-md-8 col-sm-12 new-hits-area mb-50 monitor">
                <h1>video/lilycs goes here</h1>
              </div>
              <div className="col-md-4 col-sm-12">
                <h2>adds or something</h2>
              </div>

              <div className="col-12 col-lg-5">
                <div className="new-hits-area mb-100">
                  <div
                    className="section-heading text-left mb-50 wow fadeInUp"
                    data-wow-delay="50ms"
                  >
                    <p>See what’s new</p>
                    <h2>New Hits</h2>
                  </div>

                  {songs &&
                    songs.map((song) => {
                      return (
                        <div key={song.id.toString()}>
                         <div className="w-100 mb-10">
                            <h1>video/lilycs goes here</h1>
                          </div>  
                        <div
                          className="single-new-item d-flex align-items-center justify-content-between wow fadeInUp"
                          data-wow-delay="100ms" 
                        >
                          <div className="first-part d-flex align-items-center">
                            <div className="thumbnail">
                              <img
                                src={song.header_image_thumbnail_url}
                                alt=""
                              />
                            </div>
                            <div className="content-">
                              <h6>{`${song.artist_names.substring(
                                0,
                                30
                              )}...`}</h6>
                              <p>{song.title}</p>
                            </div>
                          </div>
                          <button className="btn btn-success">pl</button>
                        </div>
                        </div>
                      );
                    })}
                </div>
              </div>

              <div className="col-12 col-lg-3">
                <div className="popular-artists-area mb-100">
                  <div
                    className="section-heading text-left mb-50 wow fadeInUp"
                    data-wow-delay="50ms"
                  >
                    <p>See what’s new</p>
                    <h2>Popular Artist</h2>
                  </div>

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="100ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa1.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>Sam Smith</p>
                    </div>
                  </div>

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="150ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa2.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>William Parker</p>
                    </div>
                  </div>

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="200ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa3.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>Jessica Walsh</p>
                    </div>
                  </div>

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="250ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa4.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>Tha Stoves</p>
                    </div>
                  </div>

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="300ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa5.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>DJ Ajay</p>
                    </div>
                  </div>

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="350ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa6.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>Radio Vibez</p>
                    </div>
                  </div>

                  <div
                    className="single-artists d-flex align-items-center wow fadeInUp"
                    data-wow-delay="400ms"
                  >
                    <div className="thumbnail">
                      <img src="img/bg-img/pa7.jpg" alt="" />
                    </div>
                    <div className="content-">
                      <p>Music 4u</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Lilycs;
