import React from 'react';
function FieldFile() {
  return <div className='NameDetails'>
    <section className='hero'>
      <h2>Handcrafted, home-made masterpieces</h2>
      <form id="form" action="https://www.freecodecamp.com/email-submit">
        <input
          name="email"
          id="email"
          type="email"
          placeholder="Enter your email address"
          required
        />
        <input id="submit" type="submit" value="Get Started" class="btn" />
      </form>
    </section>
    <li><a className="nav-link" href="#features">Features</a></li>
    <section id="features">
      <div class="grid">
        <div class="icon"><i class="fa fa-3x fa-fire"></i></div>
        <div class="content">
          <h2>Premium Materials</h2>
          <p>
            Our trombones use the shiniest brass which is sourced locally.
            This will increase the longevity of your purchase.
          </p>
        </div>
      </div>
      <div class="grid">
        <div class="icon"><i class="fa fa-3x fa-truck"></i></div>
        <div class="desc">
          <h2>Fast Shipping</h2>
          <p>
            We make sure you recieve your trombone as soon as we have
            finished making it. We also provide free returns if you are not
            satisfied.
          </p>
        </div>
      </div>
      <div class="grid">
        <div class="icon">
          <i class="fa fa-3x fa-battery-full" aria-hidden="true"></i>
        </div>
        <div class="desc">
          <h2>Quality Assurance</h2>
          <p>
            For every purchase you make, we will ensure there are no damages
            or faults and we will check and test the pitch of your
            instrument.
          </p>
        </div>
      </div>
    </section>
    <li><a className="nav-link" href="#how-it-works">How It Works</a></li>
    <section id="how-it-works">
      <iframe id="video"
        height="315"
        src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allowfullscreen=""></iframe>

      <li><a className="nav-link" href="#pricing">Pricing</a></li>
    </section>
    <section className='pricing' id="pricing">
      <div className="product"
        id="tenor">
        <div class="level">Tenor Trombone</div>
        <h2>$600</h2>
        <ol>
          <li>Lorem ipsum.</li>
          <li>Lorem ipsum.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum.</li>
        </ol>
        <button class="btn">Select</button>
      </div>
      <div className="product" id="bass">
        <div class="level">Bass Trombone</div>
        <h2>$900</h2>
        <ol>
          <li>Lorem ipsum.</li>
          <li>Lorem ipsum.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum.</li>
        </ol>
        <button class="btn">Select</button>
      </div>
      <div className="product" id="valve">
        <div class="level">Valve Trombone</div>
        <h2>$1200</h2>
        <ol>
          <li>Plays similar to a Trumpet</li>
          <li>Great for Jazz Bands</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum.</li>
        </ol>
        <button class="btn">Select</button>
      </div>
    </section>

  </div>



}




export default FieldFile