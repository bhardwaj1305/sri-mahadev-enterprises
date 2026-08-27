import airportImg from "./assets/industries/01_airports_travel_retail.jpg";
import supermarketImg from "./assets/industries/02_supermarkets_chains.jpg";
import fuelImg from "./assets/industries/03_fuel_convenience.jpg";
import restaurantImg from "./assets/industries/04_restaurants_fb.jpg";
import qsrImg from "./assets/industries/05_qsr_fast_food.jpg";
import kiranaImg from "./assets/industries/06_kirana_stores.jpg";
import pharmacyImg from "./assets/industries/07_pharmacies_medical.jpg";
import governmentImg from "./assets/industries/08_government_franchise.jpg";
import review1 from "./assets/videos/review1.mp4";
import review2 from "./assets/videos/review2.mp4";
import review3 from "./assets/videos/review3.mp4";
import review4 from "./assets/videos/review4.mp4";
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
    <span>SRI MAHADEV</span>
    <small>ENTERPRISES</small>
  </div>

  <nav className="nav-links">
    <a href="#home">Home</a>
    <a href="#solutions">Solutions</a>
    <a href="#products">Products</a>
    <a href="#about">About</a>
    <a href="#contact">Contact</a>
  </nav>

  <a href="#quote" className="nav-cta">
    Request Pricing
  </a>

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

          <div className="about-content">

            <div className="eyebrow">
              SRI MAHADEV ENTERPRISES
            </div>

            <h2>
              Technology that
              <br />
              <span>works for your business.</span>
            </h2>

            <p>
              Sri Mahadev Enterprises provides POS solutions
              for businesses looking to simplify their daily
              operations and improve the way they manage
              billing and business processes.
            </p>

            <div className="about-points">

              <div>
                <strong>01</strong>
                <span>Business-focused solutions</span>
              </div>

              <div>
                <strong>02</strong>
                <span>Professional POS products</span>
              </div>

              <div>
                <strong>03</strong>
                <span>Personalised customer support</span>
              </div>

            </div>

          </div>

        </section>

{/* =========================
    INDUSTRIES
========================= */}

<section className="section industries" id="industries">

  <div className="section-heading industries-heading">
    <div className="eyebrow">
      INDUSTRIES
    </div>

    <h2>
      Wherever retail happens.
    </h2>
  </div>


  <div className="industries-grid">

    <article className="industry-card">
<img src={airportImg} alt="Airports and travel retail" />
      <div className="industry-content">
        <span>01</span>
        <h3>Airports & travel retail</h3>
        <p>
          High-throughput lanes for airport retail,
          duty-free stores and food & beverage counters.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>


    <article className="industry-card">
<img src={supermarketImg} alt="Supermarkets and chains" />
      <div className="industry-content">
        <span>02</span>
        <h3>Supermarkets & chains</h3>
        <p>
          Every counter and store connected through
          unified pricing and centralized stock.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>


    <article className="industry-card">
      <img src={fuelImg} alt="Fuel and convenience" />
      <div className="industry-content">
        <span>03</span>
        <h3>Fuel & convenience</h3>
        <p>
          One system from the forecourt to the
          convenience store.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>


    <article className="industry-card">
<img src={restaurantImg} alt="Restaurants and F&B" />
      <div className="industry-content">
        <span>04</span>
        <h3>Restaurants & F&B</h3>
        <p>
          QR ordering, digital KOT and table management
          with connected kitchen operations.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>


    <article className="industry-card">
<img src={qsrImg} alt="QSR and fast food" />
      <div className="industry-content">
        <span>05</span>
        <h3>QSR & fast food</h3>
        <p>
          Fast counter billing, self-order kiosks
          and aggregator orders.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>


    <article className="industry-card">
<img src={kiranaImg} alt="Kirana stores" />
      <div className="industry-content">
        <span>06</span>
        <h3>Kirana stores</h3>
        <p>
          Barcode billing, stock management and
          simple everyday retail operations.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>


    <article className="industry-card">
<img src={pharmacyImg} alt="Pharmacies and medical stores" />
      <div className="industry-content">
        <span>07</span>
        <h3>Pharmacies & medical stores</h3>
        <p>
          Fast barcode billing, batch and expiry
          tracking for medical retail.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>


    <article className="industry-card">
<img src={governmentImg} alt="Government and franchise networks" />
      <div className="industry-content">
        <span>08</span>
        <h3>Government & franchise networks</h3>
        <p>
          Centralized retail operations across
          large distributed store networks.
        </p>
        <a href="#quote">Explore →</a>
      </div>
    </article>

  </div>

</section>

{/* =========================
    CASE STUDIES
========================= */}

<section className="section case-studies" id="case-studies">

  <div className="section-heading">

    <div className="eyebrow">
      CASE STUDIES
    </div>

    <h2>
      Where it's already working.
    </h2>

  </div>


  <div className="case-study-grid">

    <article className="case-study-card">

      <span className="case-category">
        AIRPORTS
      </span>

      <h3>
        India's busiest airport runs its retail on one platform
      </h3>

      <span className="case-location">
        Delhi Airport
      </span>

      <p>
        Exclusive POS operations across lounges,
        duty free, F&B and speciality retail.
      </p>

      <div className="case-stats">
        <div>
          <strong>475</strong>
          <span>POS units</span>
        </div>

        <div>
          <strong>3</strong>
          <span>Terminals</span>
        </div>

        <div>
          <strong>80M</strong>
          <span>Passengers a year</span>
        </div>
      </div>

      <a href="#quote">
        Read the case study →
      </a>

    </article>


    <article className="case-study-card featured-case">

      <span className="case-category">
        AIRPORTS
      </span>

      <h3>
        India's fourth-largest airport bills every counter on one platform
      </h3>

      <span className="case-location">
        Hyderabad Airport
      </span>

      <p>
        Every lounge, duty-free floor and F&B counter
        connected on one retail platform.
      </p>

      <div className="case-stats">
        <div>
          <strong>290</strong>
          <span>POS units</span>
        </div>

        <div>
          <strong>30M+</strong>
          <span>Passengers a year</span>
        </div>

        <div>
          <strong>Zero</strong>
          <span>Revenue leakage</span>
        </div>
      </div>

      <a href="#quote">
        Read the case study →
      </a>

    </article>


    <article className="case-study-card">

      <span className="case-category">
        GOVERNMENT RETAIL
      </span>

      <h3>
        Taking organised retail to rural Haryana
      </h3>

      <span className="case-location">
        Har-Hith · Government of Haryana
      </span>

      <p>
        Franchise supermarkets across villages with
        POS, e-commerce and warehouse-to-store supply.
      </p>

      <div className="case-stats">
        <div>
          <strong>1,100+</strong>
          <span>Stores live</span>
        </div>

        <div>
          <strong>22</strong>
          <span>Districts</span>
        </div>

        <div>
          <strong>1</strong>
          <span>Platform</span>
        </div>
      </div>

      <a href="#quote">
        Read the case study →
      </a>

    </article>

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

{/* CUSTOMER REVIEWS */}

<section className="section reviews" id="reviews">

  <div className="section-heading">
    <div className="eyebrow">
      CUSTOMER REVIEWS
    </div>

    <h2>
      What our customers
      <br />
      <span>say about us.</span>
    </h2>

    <p>
      Real experiences from businesses using our POS solutions.
    </p>
  </div>


  <div className="reviews-grid">

    {/* VIDEO 1 */}
    <div
      className="review-card"
      onClick={() => setSelectedReviewVideo(review1)}
    >
      <div className="review-thumbnail">
        <video
          src={review1}
          muted
          preload="metadata"
        />

        <div className="review-play">
          ▶
        </div>
      </div>

      <div className="review-info">
        <span>CUSTOMER REVIEW</span>
      </div>
    </div>


    {/* VIDEO 2 */}
    <div
      className="review-card"
      onClick={() => setSelectedReviewVideo(review2)}
    >
      <div className="review-thumbnail">
        <video
          src={review2}
          muted
          preload="metadata"
        />

        <div className="review-play">
          ▶
        </div>
      </div>

      <div className="review-info">
        <span>CUSTOMER REVIEW</span>
      </div>
    </div>


    {/* VIDEO 3 */}
    <div
      className="review-card"
      onClick={() => setSelectedReviewVideo(review3)}
    >
      <div className="review-thumbnail">
        <video
          src={review3}
          muted
          preload="metadata"
        />

        <div className="review-play">
          ▶
        </div>
      </div>

      <div className="review-info">
        <span>CUSTOMER REVIEW</span>
      </div>
    </div>


    {/* VIDEO 4 */}
    <div
      className="review-card"
      onClick={() => setSelectedReviewVideo(review4)}
    >
      <div className="review-thumbnail">
        <video
          src={review4}
          muted
          preload="metadata"
        />

        <div className="review-play">
          ▶
        </div>
      </div>

      <div className="review-info">
                <span>CUSTOMER REVIEW</span>

      </div>
    </div>

  </div>


  {/* REVIEW VIDEO POPUP */}

  {selectedReviewVideo && (
    <div
      className="review-video-overlay"
      onClick={() => setSelectedReviewVideo(null)}
    >

      <div
        className="review-video-popup"
        onClick={(e) => e.stopPropagation()}
      >

        <button
          className="review-video-close"
          onClick={() => setSelectedReviewVideo(null)}
        >
          ×
        </button>

        <video
          src={selectedReviewVideo}
          controls
          autoPlay
          playsInline
        />

      </div>

    </div>
  )}

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
        <span>+91 9177228888</span>
      </div>

      <div>
        <strong>✉</strong>
        <span>ampol.eswar@gmail.com</span>
      </div>

      <div>
        <strong>💬</strong>
        <span>WhatsApp Available</span>
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


<div className="contact-grid">

  <div>
    <span>PHONE</span>
    <a href="tel:+919177228888">
      +91 9177228888
    </a>
  </div>

  <div>
    <span>WHATSAPP</span>
    <a
      href="https://wa.me/919177228888"
      target="_blank"
      rel="noreferrer"
    >
      Chat on WhatsApp
    </a>
  </div>

  <div>
    <span>EMAIL</span>
    <a href="mailto:ampol.eswar@gmail.com">
      ampol.eswar@gmail.com
    </a>
  </div>

  <div>
    <span>INSTAGRAM</span>
    <a
      href="https://www.instagram.com/sri_mahadev_developers/"
      target="_blank"
      rel="noreferrer"
    >
      Follow us on Instagram
    </a>
  </div>

  <div>
    <span>LOCATION</span>
    <a
      href="https://www.google.com/maps/search/?api=1&query=Dwarakamai+Rallapalli+Nilayam+Ramavarappadu+Vijayawada+Andhra+Pradesh+521108"
      target="_blank"
      rel="noreferrer"
    >
      Dwarakamai Rallapalli Nilayam,
      Ramavarappadu, Vijayawada,
      Andhra Pradesh – 521108
    </a>
  </div>

</div>

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
  href="https://wa.me/919177228888"
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
        <span>SRI MAHADEV</span>
        <small>ENTERPRISES</small>
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