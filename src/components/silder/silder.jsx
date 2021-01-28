import React, { Component } from "react";
import '../silder/silde.css';
import HtmlToReact from "react-html-parser";
import moment from 'moment';
export default class CenterMode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: "",
      pages:"",
     

    };
  }


  componentDidMount(){
       

    fetch('http://wpdemo.devsdrop.studio/wp-json/wp/v2/pages', {
      method: "GET",
    })
      .then((result) => {
        return result.json();
      })
      .then((data) => {
        if ((data)) {
        
          this.setState({pages:data})

       

      
        

        }


      });

  }
  render() {
  
    return (
<div className="product-slider">
  <div id="carousel" className="carousel slide" data-ride="carousel">
    <div className="carousel-inner">
      <div className="item active"> 
      
      {/* <video autoplay src="https://www.thefrasier.com/wp-content/uploads/2014/12/0_final_reel_home.webm" />  */}
      
      {/* <video title="1" id="bgvid" autoplay poster="http://www.thefrasier.com/wp-content/themes/frasier/images/Frasier_Home_120314.jpg" />
        <source src="http://www.thefrasier.com/wp-content/uploads/2014/12/0_final_reel_home.webm" type="video/webm" /> */}
    {this.state.pages&&this.state.pages.map((item)=>{
        return(   
       <video playsInline="playsinline" muted="muted" preload="yes" autoPlay="autoplay"  loop="loop" id="vjs_video_739_html5_api" className="video-js" data-setup="{&quot;autoplay&quot;:&quot;any&quot;}">
  <source  src={HtmlToReact(item.content.rendered)} type="video/mp4" />
</video>
  )
})}
      </div>
      <div className="item"> 
      <video playsInline="playsinline" muted="muted" preload="yes" autoPlay="autoplay" loop="loop" id="vjs_video_739_html5_api" className="video-js" data-setup="{&quot;autoplay&quot;:&quot;any&quot;}">
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
</video>
      
       </div>
      <div className="item">
      <video playsInline="playsinline" muted="muted" preload="yes" autoPlay="autoplay" loop="loop" id="vjs_video_739_html5_api" className="video-js" data-setup="{&quot;autoplay&quot;:&quot;any&quot;}">
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" type="video/mp4" />
</video>
         
         </div>
      <div className="item">
        
      <video playsInline="playsinline" muted="muted" preload="yes" autoPlay="autoplay" loop="loop" id="vjs_video_739_html5_api" className="video-js" data-setup="{&quot;autoplay&quot;:&quot;any&quot;}">
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
</video>
         
         
         </div>
      <div className="item">
        
      <video playsInline="playsinline" muted="muted" preload="yes" autoPlay="autoplay" loop="loop" id="vjs_video_739_html5_api" className="video-js" data-setup="{&quot;autoplay&quot;:&quot;any&quot;}">
  <source src="https://cdn2.hubspot.net/hubfs/294010/HomepageVideos/FHCheerloop_Color_Optimized.mp4?t=1536086660446" type="video/mp4" />
</video>
         
         
         </div>
      <div className="item">
        
      <video playsInline="playsinline" muted="muted" preload="yes" autoPlay="autoplay" loop="loop" id="vjs_video_739_html5_api" className="video-js" data-setup="{&quot;autoplay&quot;:&quot;any&quot;}">
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4" type="video/mp4" />
</video>
         
         </div>
      <div className="item">
      <video playsInline="playsinline" muted="muted" preload="yes" autoPlay="autoplay" loop="loop" id="vjs_video_739_html5_api" className="video-js" data-setup="{&quot;autoplay&quot;:&quot;any&quot;}">
  <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
</video>
         
         </div>
    
    </div>
  </div>
  <div className="clearfix">
    <div id="thumbcarousel" className="carousel slide" data-interval="false">
      <div className="carousel-inner">
        <div className="item active">
          <div data-target="#carousel" data-slide-to={0} className="thumb"><img src="http://placehold.it/100x80?text=Thumb+01" /></div>
          <div data-target="#carousel" data-slide-to={1} className="thumb"><img src="http://placehold.it/100x80?text=Thumb+02" /></div>
          <div data-target="#carousel" data-slide-to={2} className="thumb"><img src="http://placehold.it/100x80?text=Thumb+03" /></div>
          <div data-target="#carousel" data-slide-to={3} className="thumb"><img src="http://placehold.it/100x80?text=Thumb+04" /></div>
          <div data-target="#carousel" data-slide-to={4} className="thumb"><img src="http://placehold.it/100x80?text=Thumb+05" /></div>
        </div>
        <div className="item">
          <div data-target="#carousel" data-slide-to={5} className="thumb"><img src="http://placehold.it/100x80?text=Thumb+06" /></div>
          <div data-target="#carousel" data-slide-to={6} className="thumb"><img src="http://placehold.it/100x80?text=Thumb+07" /></div>
          
        </div>
      </div>
      {/* /carousel-inner */} 
      <a className="left carousel-control" href="#thumbcarousel" role="button" data-slide="prev"> <i className="fa fa-angle-left" aria-hidden="true" /> </a> <a className="right carousel-control" href="#thumbcarousel" role="button" data-slide="next"><i className="fa fa-angle-right" aria-hidden="true" /> </a> </div>
    {/* /thumbcarousel */} 
  </div>
</div>

    );
  }
}