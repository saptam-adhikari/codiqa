import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div>
      <div className='main-section'>
        <h3>Codiqa lets you do everything</h3>
        <div className='main-section-content'>
            <h2>Explore & express yourself the<br/> way you always wanted to </h2>
            <button>View all features</button>
        </div>
        <hr/>
      </div>

      <div className='features-option'>
        <div>
          <img src="https://thumbs.dreamstime.com/b/app-store-icons-laptop-over-white-background-30518542.jpg" alt="logo" />
          <h1>Media & more</h1>
          <p>Efficiently innovate open-source<br/> infrastructures via inexpensive <br/>materials.</p>
        </div>
        <div>
          <img src="https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-connection-vector-icon-png-image_2054402.jpg" alt="logo" />
          <h1>Get connected</h1>
          <p>Collaboratively expedite quality<br/> manufactured products via client-<br/>focused results.</p>
        </div>
        <div>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUu1afVmUGxomSR5Ua8n1VDG4njKLzKNYQMA&s" alt="logo" />
          <h1>Like & endorse</h1>
          <p>Globally revolutionize global<br/> sources through interoperable <br/>service users.</p>
        </div>
        <div>
          <img src="https://media.istockphoto.com/id/1453469746/vector/people-finder-logo-magnifying-glass-logo.jpg?s=612x612&w=0&k=20&c=yVfmhHTJOyQrEOHzyAq7laO7uqPo0FlyI0qPPvWNSFs=" alt="logo" />
          <h1>Search people</h1>
          <p>Globally network focused materials<br/> vis-a-vis cost effective manufactured <br/>product features.</p>
        </div>
      </div>

      <div className='social-network'>
        <div className='social-img'>
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-benefits.png" alt="pic" />
        </div>
        <div className='social-netwok-content'>
          <h1>Not your regular</h1>
          <h2>Social network</h2>
          <h5>Credibly innovate granular internal or “organic” sources whereas high <br/>standards in web-readiness. Energistically scale future-proof core<br/> competencies.</h5>
          <div className='social-network-offered'>
            <div>
              <h3>Stay Connected</h3>
              <p>Seamlessly empower fully researched <br/>growth strategies and interoperable <br/>internal or organic sources.</p>
            </div>
            <div>
              <h3>Make friendships</h3>
              <p>Seamlessly underwhelm optimal testing<br/> procedures whereas bricks-and-clicks<br/> processes.</p>
            </div>
            <div>
              <h3>Stay online</h3>
              <p>Interactively productize premium <br/>technologies whereas interdependent<br/> quality vector experiences.</p>
            </div>
            <div>
              <h3>Exchange experience</h3>
              <p>Competently parallel task fully researched<br/> data and enterprise process improvement<br/> products.</p>
            </div>
          </div>
          <hr />
          <div className='social-network-btn'>
              <h4>Want to try it out? Register and get started now!</h4>
              <button>Register</button>
          </div>
        </div>
      </div>

      <div className='companies-list'>
        <h5>Companies rely on us too</h5>
        <h1>Companies and their employees<br/> trust our application</h1>
        <hr />
        <div className='companies-logo'>
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-avantage.png" alt="img" />
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-urbanist.png" alt="img" />
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-celeste.png" alt="img" />
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-applauz.png" alt="img" />
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-primavera.png" alt="img" />
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-bello.png" alt="img" />
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-hotel-california.png" alt="img" />
          <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-estato.png" alt="img" />
        </div>
      </div>

      <div className='growing-rate-section'>
        <div className='growing-rate-content'>
          <h1>Awesome & fun</h1>
          <h2>Constantly growing</h2>
          <p>Synergistically deliver performance based methods of empowerment<br/> whereas distributed expertise. Efficiently innovate open-source<br/> infrastructures via inexpensive materials.</p>
          <div className='growing-number'>
            <div>
              <h3>350</h3>
              <h5>Million interactions<br/>monthly</h5>
            </div>
            <div>
              <h3>150</h3>
              <h5>Languages and <br/>countries</h5>
            </div>
            <div>
              <h3>170</h3>
              <h5>Percent yearly<br/> turnover increase</h5>
            </div>
          </div>
        </div>
        <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-awesome-fun.png" alt="img" />
      </div>

    </div>
  )
}

export default Hero
