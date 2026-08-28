import posAction from "./assets/visuals/pos-action.png";
import aspire from "./assets/products/aspire_4k.png";
import mpos from "./assets/products/mpos_4k.png";
import pro from "./assets/products/pro_4k.png";
import { useState } from "react";
import products from "./data/products";
import "./App.css";


function App() {
  
  const [selectedReviewVideo, setSelectedReviewVideo] = useState(null);
  const [showVideo, setShowVideo] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const closeProductModal = () => {
  setSelectedProduct(null);
};
const handleQuoteSubmit = async (event) => {
  event.preventDefault();
  setIsSubmitting(true);
setSubmitSuccess(false);

const formData = new FormData(event.target);

const leadData = {
  name: formData.get("name"),
  phone: formData.get("phone"),
  email: formData.get("email"),
  businessName: formData.get("businessName"),
  city: formData.get("city"),
  state: formData.get("state"),
  businessType: formData.get("businessType"),
  product: formData.get("product"),
  message: formData.get("message"),
};

  try {
    const response = await fetch("https://sri-mahadev-enterprises-backend.onrender.com/api/leads", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(leadData),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Failed to submit request");
    }

    setSubmitSuccess(true);
event.target.reset();
  } catch (error) {
    console.error("Submission error:", error);

    alert(
      "Something went wrong. Please try again or contact us directly."
    );
  }
  finally {
  setIsSubmitting(false);
}
};

  return (
    <div className="website">

      {/* NAVBAR */}
      <header className="navbar">
  <div className="brand">
    <span>SRI MAHADEV ENTERPRISES</span>
    <small>AUTHORIZED DEALER</small>
    <div className="logo">
  <img
    src="/nukkadshops-logo.png"
    alt="NukkadShops"
    className="nukkadshops-logo"
  />
</div>
  </div>

  <nav className="nav-links">
    <a href="#home">Home</a>
    <a href="#solutions">Solutions</a>
    <a href="#products">Products</a>
    <a href="#about">About us</a>
    <a href="#contact">Contact</a>
  </nav>
  

  <div className="header-actions">
  <a href="tel:+919177228888" className="call-now-btn">
    Call Now 📞
  </a>

  
</div>

  <button
    className="menu-button"
    onClick={() => setMenuOpen(!menuOpen)}
  >
    ☰
  </button>

  {menuOpen && (
    <nav className="mobile-menu">
      <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
      <a href="#solutions" onClick={() => setMenuOpen(false)}>Solutions</a>
      <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
      <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
      <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
      <a href="#quote" onClick={() => setMenuOpen(false)}>
        Request Pricing
      </a>
    </nav>
  )}
      </header>


      {/* HERO */}
      <main id="home">

        <section className="hero">

          <div className="hero-content">

            <div className="eyebrow">
              SMART BUSINESS SOLUTIONS
            </div>

            <h1>
              Powering
              <br />
              <span>Smarter Businesses.</span>
            </h1>

            <p>
              Professional POS solutions designed to simplify
              billing, manage inventory and help businesses
              operate smarter.
            </p>

            <div className="hero-actions">

              <a href="#products" className="primary-btn">
                Explore Products →
              </a>

              <a href="#quote" className="secondary-btn">
                Request Pricing
              </a>

            </div>

            <div className="hero-contact">
              <span>📞 9177228888</span>
              <span>📍 Vijayawada, Andhra Pradesh</span>
            </div>

          </div>


          <div className="hero-visual">

            <div className="product-showcase">

              <div className="showcase-glow"></div>

              <div
  className="product-placeholder video-preview"
  onClick={() => setShowVideo(true)}
>
  <img
    src={posAction}
    alt="POS Solutions"
  />

  <div className="video-play-button">
    ▶
  </div>
</div>

              <div className="showcase-label">
                <span>POS SOLUTIONS</span>
                <strong>Built for Business</strong>
              </div>

            </div>

          </div>

        </section>


        {/* TRUST BAR */}

        <section className="trust-bar">

          <div>
            <strong>POS</strong>
            <span>Billing Solutions</span>
          </div>

          <div>
            <strong>GST</strong>
            <span>Ready Billing</span>
          </div>

          <div>
            <strong>24/7</strong>
            <span>Business Support</span>
          </div>

          <div>
            <strong>100%</strong>
            <span>Business Focused</span>
          </div>

        </section>


        {/* SOLUTIONS */}

        <section id="solutions" className="section solutions">

          <div className="solution-grid">

  <article className="solution-card">
    <span className="card-number">01</span>

    <div className="solution-image">
      <img src={aspire} alt="Retail POS" />
    </div>

    <h3>Retail POS</h3>

    <p>
      Fast and reliable billing solutions for
      retail stores and businesses.
    </p>

    <a href="#products">Explore →</a>
  </article>


  <article className="solution-card featured">
    <span className="card-number">02</span>

    <div className="solution-image">
      <img src={mpos} alt="F&B POS" />
    </div>

    <h3>F&B POS</h3>

    <p>
      Efficient ordering and billing solutions
      designed for restaurants and food businesses.
    </p>

    <a href="#products">Explore →</a>
  </article>


  <article className="solution-card">
    <span className="card-number">03</span>

    <div className="solution-image">
      <img src={pro} alt="POS Hardware" />
    </div>

    <h3>POS Hardware</h3>

    <p>
      Professional POS hardware built for
      everyday business operations.
    </p>

    <a href="#products">Explore →</a>
  </article>

</div>

        </section>


        {/* PRODUCTS */}

       <section className="section products" id="products">
  <div className="section-heading">
    <div className="eyebrow">OUR PRODUCTS</div>

    <h2>
      Hardware built for
      <span> real business.</span>
    </h2>

    <p>
      Reliable POS solutions designed for retailers,
      restaurants and growing businesses.
    </p>
  </div>

  <div className="product-grid">
    {products.map((product) => (
      <article className="product-card" key={product.id}>
        
        <div className="product-image">
          <img
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="product-info">
          <span>{product.category}</span>

          <h3>{product.name}</h3>

          <p>{product.description}</p>

          <div className="product-highlights">
            {product.highlights.map((item) => (
              <span key={item}>{item}</span>
            ))}
          </div>

          <button
            className="product-details-btn"
            onClick={() => setSelectedProduct(product)}
          >
            View Details →
          </button>
        </div>

      </article>
    ))}
  </div>
</section>


        {/* ABOUT */}

       <section id="about" className="section about">
  <div className="about-container">

    <div className="about-heading">
      <div className="section-label">
        <span></span>
        ABOUT US
      </div>

      <h2>
        Built for businesses.
        <br />
        Designed for growth.
      </h2>
    </div>

    <div className="about-content">

      <p className="about-intro">
        Sri Mahadev Enterprises is an authorized NukkadShops partner,
        helping businesses access reliable POS and retail technology
        solutions designed to simplify everyday operations.
      </p>

      <p>
        We provide professional POS solutions for kirana stores,
        supermarkets, pharmacies, restaurants, QSRs and other growing
        businesses. Our aim is to make billing, payments and daily
        business operations simpler, faster and more efficient.
      </p>

      <p>
        Through NukkadShops, businesses can manage billing, GST-compliant
        invoicing, inventory, payments, analytics, customer engagement
        and online operations through an integrated retail technology
        platform.
      </p>

      <p>
        NukkadShops was founded in 2017 and has grown into a retail
        technology platform serving thousands of retail counters across
        different business segments. Its solutions are designed for
        supermarkets, kirana stores, pharmacies, restaurants, QSRs,
        airports and other retail environments.
      </p>

    </div>

  </div>

  <div className="about-features">

    <div className="about-feature">
      <span>01</span>
      <h3>Business-focused solutions</h3>
      <p>
        POS solutions designed around the needs of modern retail and
        growing businesses.
      </p>
    </div>

    <div className="about-feature">
      <span>02</span>
      <h3>Professional POS products</h3>
      <p>
        Access to NukkadShops POS devices including Aspire, Pro2,
        Elite-A and NS MPOS.
      </p>
    </div>

    <div className="about-feature">
      <span>03</span>
      <h3>Dedicated customer support</h3>
      <p>
        Helping businesses choose the right solution and get the most
        from their POS system.
      </p>
    </div>

  </div>
</section>



{/* =========================
    BUSINESS STATS
========================= */}

<section className="business-stats">

  <div className="stat-item">
    <strong>15,000+</strong>
    <span>Active retail counters</span>
  </div>

  <div className="stat-item">
    <strong>4.8★</strong>
    <span>Average customer rating</span>
  </div>

  <div className="stat-item">
    <strong>3</strong>
    <span>International airports served</span>
  </div>

  <div className="stat-item">
    <strong>99.9%</strong>
    <span>Platform uptime</span>
  </div>

</section>


        {/* QUOTE CTA */}

        <section id="quote" className="quote-section">

  <div className="quote-intro">

    <div className="eyebrow">
      REQUEST PRICING
    </div>

    <h2>
      Let's find the right
      <br />
      <span>POS for your business.</span>
    </h2>

    <p>
      Tell us a little about your business and the
      solution you're looking for. Our team will
      contact you with pricing and product details.
    </p>

   <div className="quote-contact-info">
  <div>
    <strong>📞</strong>
    <a href="tel:+919177228888">
      +91 9177228888
    </a>
  </div>

  <div>
    <strong>✉</strong>
    <a href="mailto:ampol.eswar@gmail.com">
      ampol.eswar@gmail.com
    </a>
  </div>

  <div>
    <strong>💬</strong>
    <a
      href="https://wa.me/919177228888"
      target="_blank"
      rel="noreferrer"
    >
      WhatsApp Available
    </a>
  </div>
</div>

  </div>


<form
  className="quote-form"
  onSubmit={handleQuoteSubmit}
>
    <div className="form-row">

      <div className="form-group">
        <label>Full Name *</label>

        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          required
        />
      </div>

      <div className="form-group">
        <label>Phone Number *</label>

        <input
          type="tel"
          name="phone"
          placeholder="Enter mobile number"
          required
        />
      </div>

    </div>


    <div className="form-row">

      <div className="form-group">
        <label>Email Address *</label>

        <input
          type="email"
          name="email"
          placeholder="you@example.com"
          required
        />
      </div>

      <div className="form-group">
        <label>Business Name</label>

        <input
          type="text"
          name="businessName"
          placeholder="Your business name"
        />
      </div>

    </div>


    <div className="form-row">

      <div className="form-group">
        <label>Business Type *</label>

        <select name="businessType" required>
          <option value="">
            Select business type
          </option>

          <option>Retail Store</option>
          <option>Supermarket</option>
          <option>Kirana Store</option>
          <option>Pharmacy</option>
          <option>Restaurant</option>
          <option>Cafe</option>
          <option>Bakery</option>
          <option>Other</option>
        </select>
      </div>


      <div className="form-group">
  <label htmlFor="city">City *</label>

  <select id="city" name="city" required>
    <option value="">Select your city</option>
    <option value="Vijayawada">Vijayawada</option>
    <option value="Visakhapatnam">Visakhapatnam</option>
    <option value="Guntur">Guntur</option>
    <option value="Tirupati">Tirupati</option>
    <option value="Nellore">Nellore</option>
    <option value="Kurnool">Kurnool</option>
    <option value="Rajahmundry">Rajahmundry</option>
    <option value="Kakinada">Kakinada</option>
    <option value="Eluru">Eluru</option>
    <option value="Ongole">Ongole</option>
    <option value="Machilipatnam">Machilipatnam</option>
    <option value="Other">Other</option>
  </select>
</div>


       <div className="form-group">
  <label htmlFor="state">State / UT *</label>

  <select id="state" name="state" required>
    <option value="">Select State / UT</option>

    {/* States */}
    <option value="Andhra Pradesh">Andhra Pradesh</option>
    <option value="Arunachal Pradesh">Arunachal Pradesh</option>
    <option value="Assam">Assam</option>
    <option value="Bihar">Bihar</option>
    <option value="Chhattisgarh">Chhattisgarh</option>
    <option value="Goa">Goa</option>
    <option value="Gujarat">Gujarat</option>
    <option value="Haryana">Haryana</option>
    <option value="Himachal Pradesh">Himachal Pradesh</option>
    <option value="Jharkhand">Jharkhand</option>
    <option value="Karnataka">Karnataka</option>
    <option value="Kerala">Kerala</option>
    <option value="Madhya Pradesh">Madhya Pradesh</option>
    <option value="Maharashtra">Maharashtra</option>
    <option value="Manipur">Manipur</option>
    <option value="Meghalaya">Meghalaya</option>
    <option value="Mizoram">Mizoram</option>
    <option value="Nagaland">Nagaland</option>
    <option value="Odisha">Odisha</option>
    <option value="Punjab">Punjab</option>
    <option value="Rajasthan">Rajasthan</option>
    <option value="Sikkim">Sikkim</option>
    <option value="Tamil Nadu">Tamil Nadu</option>
    <option value="Telangana">Telangana</option>
    <option value="Tripura">Tripura</option>
    <option value="Uttar Pradesh">Uttar Pradesh</option>
    <option value="Uttarakhand">Uttarakhand</option>
    <option value="West Bengal">West Bengal</option>

    {/* Union Territories */}
    <option value="Andaman and Nicobar Islands">
      Andaman and Nicobar Islands
    </option>
    <option value="Chandigarh">Chandigarh</option>
    <option value="Dadra and Nagar Haveli and Daman and Diu">
      Dadra and Nagar Haveli and Daman and Diu
    </option>
    <option value="Delhi">Delhi</option>
    <option value="Jammu and Kashmir">Jammu and Kashmir</option>
    <option value="Ladakh">Ladakh</option>
    <option value="Lakshadweep">Lakshadweep</option>
    <option value="Puducherry">Puducherry</option>
  </select>
</div>


      <div className="form-group">
  <label>Interested Product *</label>

 <select
  name="product"
  required
>
  <option value="">
    Select product
  </option>

  <option value="Aspire">Aspire</option>
  <option value="Pro">Pro</option>
  <option value="Elite-A">Elite-A</option>
  <option value="MPOS">MPOS</option>
  <option value="Not Sure">Not Sure</option>
</select>
      </div>

    </div>


    <div className="form-group">

      <label>Message</label>

      <textarea
        name="message"
        rows="4"
        placeholder="Tell us about your requirements..."
      />

    </div>


    <button
  type="submit"
  className="submit-quote-btn"
  disabled={isSubmitting}
>
  {isSubmitting
    ? "Sending..."
    : "Send Pricing Request →"}
</button>
{submitSuccess && (
  <div className="form-success">
    <strong>✓ Request submitted successfully!</strong>
    <span>
      Thank you. Our team will contact you shortly.
    </span>
  </div>
)}


    <p className="form-note">
      By submitting this form, you agree to be contacted
      regarding your enquiry.
    </p>

  </form>

</section>


        {/* CONTACT */}

       <div className="contact-heading">

  <div className="eyebrow">
    CONTACT
  </div>

  <h2>
    Let's talk about
    <br />
    <span>your business.</span>
  </h2>

  <p>
    Have a question about our POS solutions?
    Get in touch with our team and we'll be happy
    to help you find the right solution.
  </p>

</div>
<section id="contact" className="section contact">



<div className="contact-grid">

  <div>
    <a
  href="tel:+919177228888"
  className="contact-card"
>
  <span>PHONE</span>
  <strong>+91 9177228888</strong>
</a>
  </div>

  <div>
    <a
  href="https://wa.me/919177228888"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>
  <span>WHATSAPP</span>
  <strong>Chat on WhatsApp</strong>
</a>
  </div>

  <div>
    <a
  href="mailto:ampol.eswar@gmail.com"
  className="contact-card"
>
  <span>EMAIL</span>
  <strong>ampol.eswar@gmail.com</strong>
</a>
  </div>

  <div>
    <a
  href="YOUR_INSTAGRAM_LINK"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>
  <span>INSTAGRAM</span>
  <strong>Follow us on Instagram</strong>
</a>
  </div>

  <div>
    <a
  href="YOUR_GOOGLE_MAPS_LINK"
  target="_blank"
  rel="noreferrer"
  className="contact-card"
>
  <span>LOCATION</span>
  <strong>
    Dwarakamai Rallapalli Nilayam,<br />
    Ramavarappadu, Vijayawada, Andhra Pradesh – 521108
  </strong>
</a>
  </div>

</div>
</section>
      </main>

     {/* YOUTUBE VIDEO MODAL */}

{showVideo && (
  <div
    className="video-modal-overlay"
    onClick={() => setShowVideo(false)}
  >
    <div
      className="video-modal"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="video-modal-close"
        onClick={() => setShowVideo(false)}
      >
        ×
      </button>

      <iframe
        src="https://www.youtube.com/embed/_YJvAx1K8FU?autoplay=1"
        title="POS Solutions Video"
        allow="autoplay; encrypted-media; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  </div>
)}

    {/* PRODUCT DETAILS MODAL */}

{selectedProduct && (
  <div
    className="product-modal-overlay"
    onClick={closeProductModal}
  >
    <div
      className="product-modal"
      onClick={(e) => e.stopPropagation()}
    >

      <button
        className="modal-close"
        onClick={closeProductModal}
        aria-label="Close"
      >
        ×
      </button>

      <div className="modal-product-image">
        <img
          src={selectedProduct.image}
          alt={selectedProduct.name}
        />
      </div>

      <div className="modal-product-content">

        <span className="modal-category">
          {selectedProduct.category}
        </span>

        <h2>{selectedProduct.name}</h2>

        <p className="modal-description">
          {selectedProduct.description}
        </p>

        <div className="modal-highlights">
  {(selectedProduct.highlights || []).map((item) => (
    <span key={item}>
      ✓ {item}
    </span>
  ))}
</div>
        {/* BEST FOR */}
<div className="modal-section">
  <h3>Best For</h3>

  <div className="modal-best-for">
    {selectedProduct.bestFor?.map((item) => (
      <span key={item}>{item}</span>
    ))}
  </div>
</div>


{/* WHY THIS DEVICE */}
<div className="modal-section">
  <h3>Why This Device?</h3>

  <p className="modal-why">
    {selectedProduct.whyThisDevice}
  </p>
</div>


{/* KEY BENEFITS */}
<div className="modal-section">
  <h3>Key Benefits</h3>

  <div className="modal-benefits">
    {(selectedProduct.highlights || []).map((item) => (
  <div key={item}>
    <span>✓</span>
    <p>{item}</p>
  </div>
))}
  </div>
</div>

{Object.keys(selectedProduct.specs || {}).length > 0 && (

          <div className="specifications">

            <h3>Specifications</h3>

            <div className="spec-grid">
{Object.entries(selectedProduct.specs || {}).map(
                  ([key, value]) => (
                  <div className="spec-row" key={key}>
                    <span>{key}</span>
                    <strong>{value}</strong>
                  </div>
                )
              )}
            </div>

          </div>
        )}

        <a
          href="#quote"
          className="modal-quote-btn"
          onClick={closeProductModal}
        >
          Request Pricing →
        </a>

      </div>

    </div>
  </div>
)}
{/* FLOATING WHATSAPP */}

<a
  href="https://wa.me/919177228888?text=Hi%2C%20I'm%20interested%20in%20NukkadShops%20POS%20solutions."
  className="whatsapp-float"
  target="_blank"
  rel="noreferrer"
  aria-label="Chat on WhatsApp"
>
<svg
    viewBox="0 0 24 24"
    width="28"
    height="28"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
  >
        <path d="M20.52 3.48A11.86 11.86 0 0 0 12.05 0C5.48 0 .13 5.35.13 11.92c0 2.1.55 4.15 1.6 5.96L.03 24l6.27-1.64a11.88 11.88 0 0 0 5.75 1.46h.01c6.57 0 11.92-5.35 11.92-11.92 0-3.18-1.24-6.17-3.46-8.42ZM12.06 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.97.99-3.63-.23-.37a9.86 9.86 0 0 1-1.51-5.26C2.19 6.48 6.61 2.06 12.05 2.06a9.82 9.82 0 0 1 6.99 2.9 9.82 9.82 0 0 1 2.9 7c0 5.44-4.42 9.84-9.88 9.84Zm5.4-7.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.2 5.09 4.49.71.31 1.27.49 1.7.63.71.23 1.35.2 1.86.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/>
 </svg>
  </a>

      {/* FOOTER */}


<footer className="footer">

  <div className="footer-main">

    <div className="footer-brand">
      <div className="brand">
        <span>SRI MAHADEV ENTERPRISES</span>
        <small>AUTHORIZED DEALER-NUKKAD SHOPS<sup>®</sup></small>
        
      </div>
       <div className="gstin">
    GSTIN: 37AUDPA3775B1Z0
  </div>

      <p>
        Smart POS solutions for modern retail,
        restaurants and growing businesses.
      </p>

      <div className="footer-socials">
        <a
          href="https://wa.me/919177228888"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>

        <a
          href="https://www.instagram.com/sri_mahadev_developers/"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
       
      </div>
      
    </div>


    <div className="footer-column">
      <h4>QUICK LINKS</h4>

      <a href="#home">Home</a>
      <a href="#solutions">Solutions</a>
      <a href="#products">Products</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>


    <div className="footer-column">
      <h4>PRODUCTS</h4>

      <a href="#products">Aspire</a>
      <a href="#products">Pro</a>
      <a href="#products">Elite-A</a>
      <a href="#products">MPOS</a>
    </div>


    <div className="footer-column">
      <h4>CONTACT</h4>

      <a href="tel:+919177228888">
        +91 9177228888
      </a>

      <a href="mailto:ampol.eswar@gmail.com">
        ampol.eswar@gmail.com
      </a>

      <p>
        Vijayawada,
        <br />
        Andhra Pradesh, India
      </p>
    </div>

  </div>


  <div className="footer-bottom">

  

  <span>
    © {new Date().getFullYear()} Sri Mahadev Enterprises.
    All rights reserved.
  </span>

</div>

</footer>

    </div>
  );
}

export default App;