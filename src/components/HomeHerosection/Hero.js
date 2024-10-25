import React from 'react';
import './Hero.css';
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";<TiTick />

const Hero = () => {
  return (
    <div>
      
      <div className='main-section'>
        <h3>Codiqa lets you do everything</h3>
        <div className='main-section-content'>
          <h2>
            Explore & express yourself the<br /> way you always wanted to 
          </h2>
          <button>View all features</button>
        </div>
        <hr />
      </div>

     
      <div className='features-option'>
        {[
          {
            imgSrc: 'https://thumbs.dreamstime.com/b/app-store-icons-laptop-over-white-background-30518542.jpg',
            title: 'Media & more',
            desc: 'Efficiently innovate open-source infrastructures via inexpensive materials.',
          },
          {
            imgSrc: 'https://png.pngtree.com/png-vector/20191130/ourmid/pngtree-connection-vector-icon-png-image_2054402.jpg',
            title: 'Get connected',
            desc: 'Collaboratively expedite quality manufactured products via client-focused results.',
          },
          {
            imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUu1afVmUGxomSR5Ua8n1VDG4njKLzKNYQMA&s',
            title: 'Like & endorse',
            desc: 'Globally revolutionize global sources through interoperable service users.',
          },
          {
            imgSrc: 'https://media.istockphoto.com/id/1453469746/vector/people-finder-logo-magnifying-glass-logo.jpg?s=612x612&w=0&k=20&c=yVfmhHTJOyQrEOHzyAq7laO7uqPo0FlyI0qPPvWNSFs=',
            title: 'Search people',
            desc: 'Globally network focused materials vis-a-vis cost effective manufactured product features.',
          }
        ].map((feature, index) => (
          <div key={index}>
            <img src={feature.imgSrc} alt={feature.title} />
            <h1>{feature.title}</h1>
            <p>{feature.desc}</p>
          </div>
        ))}
      </div>

     
      <div className='social-network'>
        <div className='social-img'>
          <img
            src='https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-benefits.png'
            alt='pic'
          />
        </div>
        <div className='social-netwok-content'>
          <h1>Not your regular</h1>
          <h2>Social network</h2>
          <h5>
            Credibly innovate granular internal or “organic” sources whereas high standards in web-readiness. Energistically scale future-proof core competencies.
          </h5>
          <div className='social-network-offered'>
            {[
              {
                title: 'Stay Connected',
                desc: 'Seamlessly empower fully researched growth strategies and interoperable internal or organic sources.'
              },
              {
                title: 'Make friendships',
                desc: 'Seamlessly underwhelm optimal testing procedures whereas bricks-and-clicks processes.'
              },
              {
                title: 'Stay online',
                desc: 'Interactively productize premium technologies whereas interdependent quality vector experiences.'
              },
              {
                title: 'Exchange experience',
                desc: 'Competently parallel task fully researched data and enterprise process improvement products.'
              }
            ].map((offer, index) => (
              <div key={index}>
                <h3>{offer.title}</h3>
                <p>{offer.desc}</p>
              </div>
            ))}
          </div>
          <br/>
          <hr />
          <div className='social-network-btn'>
            <h4>Want to try it out? Register and get started now!</h4>
            <button>Register</button>
          </div>
        </div>
      </div>

  
      <div className='companies-list'>
        <h5>Companies rely on us too</h5>
        <h1>Companies and their employees trust our application</h1>
        <hr />
        <div className='companies-logo'>
          {[
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-avantage.png',
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-urbanist.png',
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-celeste.png',
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-applauz.png',
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-primavera.png',
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-bello.png',
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-hotel-california.png',
            'https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/logo-estato.png',
          ].map((logo, index) => (
            <img key={index} src={logo} alt='company logo' />
          ))}
        </div>
      </div>

    
      <div className='growing-rate-section'>
        <div className='growing-rate-content'>
          <h1>Awesome & fun</h1>
          <h2>Constantly growing</h2>
          <p>
            Synergistically deliver performance-based methods of empowerment whereas distributed expertise. Efficiently innovate open-source infrastructures via inexpensive materials.
          </p>
          <div className='growing-number'>
            {[
              { number: '350', label: 'Million interactions monthly' },
              { number: '150', label: 'Languages and countries' },
              { number: '170', label: 'Percent yearly turnover increase' }
            ].map((stat, index) => (
              <div key={index}>
                <h3>{stat.number}</h3>
                <h5>{stat.label}</h5>
              </div>
            ))}
          </div>
        </div>
        <img
          src='https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-awesome-fun.png'
          alt='Growing rate'
        />
      </div>

     
      <div className='review-section'>
        <div className='review-content'>
        <h3>Why people really love Codiqa</h3>
        <h2>What our users have to say?</h2>
        <div className='user-review'>
          <div>
            <h1>Gotta love Codiqa!</h1>
            <p>Competently parallel task fully <br/>researched data and enterprise process<br/> improvements.</p>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <h5>Angela Jackson</h5>
          </div>
          <div>
            <h1>The features are the best!</h1>
            <p>Completely synthesize principle-centered <br/>information after ethical sustainable<br/> potential communities.</p>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <h5>Edward Dawson</h5>
          </div>
          <div>
          <h1>Getting better all the time</h1>
            <p>Competently parallel task fully<br/> researched data and enterprise process <br/>improvements.</p>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <h5>Emma Hewitt</h5>
          </div>
          <div>
          <h1>Fresh new place to be!</h1>
            <p>Synergistically deliver performance<br/> based methods of empowerment<br/> whereas distributed expertise.</p>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <FaStar style={{ color: '#df6981' }}/>
            <h5>Sarah Black</h5>
          </div>
        </div>
        <button>Read all Testimonials</button>
        </div>
      </div>

      <div className='pricing-section'>
        <h1>Advetiser Pricing</h1>
        <h2>Packages & Offers</h2>
        <div className='packages-section'>
          <div className='starting-package'>
            <h3>$199</h3>
            <h4>Codiqa Advanced</h4>
            <p>Taking seamless key performance<br/> indicators to maximise the long tail.</p>
            <h5><TiTick />Advanced Analytics</h5>
            <h5><TiTick />Export & Share Reports</h5>
            <h5><TiTick />Up to 50 Users available</h5>
            <button>Purchase now</button>
          </div>
          <div className='pro-package'>
            <h3>$399</h3>
            <h4>Codiqa Professional</h4>
            <p>Taking seamless key performance <br/>indicators to maximise the long tail.</p>
            <h5><TiTick />Full Analytics</h5>
            <h5><TiTick />Full Reports, API available</h5>
            <h5><TiTick />Unlimited Users</h5>
            <button>Purchase now</button>
          </div>
          <div className='starting-package'>
            <h3>$119</h3>
            <h4>Codiqa Starter</h4>
            <p>Taking seamless key performance<br/> indicators to maximise the long tail.</p>
            <h5><TiTick />Basic Analytics</h5>
            <h5><TiTick />Export Reports</h5>
            <h5><TiTick />Up to 10 Users available</h5>
            <button>Purchase now</button>
          </div>
        </div>
      </div>

      <div className='sign_up-section'>
        <img src="https://codiqa.bold-themes.com/social/wp-content/uploads/sites/4/2019/09/img-newsletter.png" alt="img" />
        <div className='sign_up-part'>
          <h1>Sign up for</h1>
          <h2>Trial Version</h2>
          <p>Podcasting operational change management inside of workflows to establish <br/>a framework. Taking seamless key performance indicators offline to maximise <br/>the long tail.</p>
            <input type="text" placeholder="Enter your email address" />
            <button>Sign up now</button>
        </div>
      </div>

      <div className='codiaq-services'>
        <h3>Safe network, awesome content</h3>
        <h1>Codiqa makes it great for you</h1>
        <div className='codiaq-services-lists'>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/6733/6733466.png" alt="" />
            <h4>User Protection</h4>
            <p>Innovative and open <br/>source protection</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/2245/2245148.png" alt="" />
            <h4>Data Backup</h4>
            <p>Utilizing enterprise via<br/> 24/7 markets.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.freepik.com/512/9321/9321325.png" alt="" />
            <h4>Great Ideas</h4>
            <p>Open-source via<br/> inexpensive materials.</p>
          </div>
          <div>
            <img src="https://img.freepik.com/premium-vector/trophy-award-winner-icon-logo-design-vector-template-illustration-eps-10_929446-410.jpg" alt="" />
            <h4>Award Winning</h4>
            <p>Delivering performance <br/>based method.</p>
          </div>
          <div>
            <img src="https://cdn.icon-icons.com/icons2/3492/PNG/512/computer_protection_security_shield_antivirus_software_icon_220413.png" alt="" />
            <h4>Virus Protection</h4>
            <p>Implement visionary e-<br/>services strategic.</p>
          </div>
          <div>
            <img src="https://cdn-icons-png.flaticon.com/512/3995/3995353.png" alt="" />
            <h4>Virtual Reality</h4>
            <p>Global sources through<br/> interoperable services.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
