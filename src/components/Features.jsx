import React, { useState, useRef, useEffect } from "react";
import "../styles/Feature.css";
import Productimg from "../assets/productmanagment.png";
import Shopingexp from "../assets/shoppingexperiance.webp";
import Checkooutexp from "../assets/checkoutexperiance.jpg";
import B2B from "../assets/b2b.png";
import Couponweb from "../assets/coupon.webp";
import Admintool from "../assets/admintools.webp";
import Helpdesk from "../assets/helpdesk.png";
import Mobileapp from "../assets/mobileapp.png";
import Warranty from "../assets/Warranty.png";
import Creditfacility from "../assets/creditfacility.png";

const tabs = [
  {
    id: "tab1",
    title: "Product Management",
    img: Productimg,
    features: [
      {
        title: "Multi-category & brand structure",
        desc: "Create unlimited categories, subcategories, and brand hierarchies to organize your products.",
      },
      {
        title: "Variants & attribute-based inventory",
        desc: "Manage products with multiple variations like size, color, and material with individual inventory tracking.",
      },
      {
        title: "Related products display",
        desc: "Boost average order value with intelligent product recommendations based on purchase history.",
      },
      {
        title: "Bulk import/export",
        desc: "Easily manage large catalogs with CSV imports and exports, making product updates quick and efficient.",
      },
    ],
  },
  {
    id: "tab2",
    title: "Shopping Experience",
    img: Shopingexp,
    features: [
      {
        title: "Smart filtering & search",
        desc: "Help customers find products quickly with advanced search capabilities and intelligent filters.",
      },
      {
        title: "Persistent cart & wishlist",
        desc: "Save shopping carts across sessions and devices, allowing customers to pick up where they left off.",
      },
      {
        title: "Guest & registered checkout",
        desc: "Flexible checkout options to maximize conversion rates while still capturing valuable customer data.",
      },
      {
        title: "Personalized recommendations",
        desc: "Show customers products they’re likely to be interested in based on their browsing history.",
      },
    ],
  },
  {
    id: "tab3",
    title: "Checkout & Shipping",
    img: Checkooutexp,
    features: [
      {
        title: "Multi-step checkout flow",
        desc: "Customizable checkout process optimized for conversion with address validation and saved payment methods.",
      },
      {
        title: "Pincode/zone delivery rules",
        desc: "Set delivery options, rates, and availability based on customer location with granular control.",
      },
      {
        title: "Multiple payment options",
        desc: "Support for credit cards, digital wallets, buy-now-pay-later, and other payment methods your customers prefer.",
      },
      {
        title: "Order tracking & notifications",
        desc: "Keep customers informed with automated updates about their order status and delivery progress.",
      },
    ],
  },
  {
    id: "tab4",
    title: "B2B Features",
    img: B2B,
    features: [
      {
        title: "Dual pricing (retail + wholesale)",
        desc: "Show different prices based on customer type, with custom price lists for specific accounts.",
      },
      {
        title: "Bulk order cart + tiered pricing",
        desc: "Volume discounts and efficient bulk ordering with quantity breaks and special wholesale-only products.",
      },
      {
        title: "Approval workflows",
        desc: "Multi-step approval process for B2B purchases with role-based permissions and spending limits.",
      },
      {
        title: "Quote management",
        desc: "Create, manage, and convert quotes to orders with negotiated pricing and terms for B2B customers.",
      },
    ],
  },
  {
    id: "tab5",
    title: "Promotions & Loyalty",
    img: Couponweb,
    features: [
      {
        title: "Coupons, flash sales, category banners",
        desc: "Multiple promotion types to drive sales with scheduled start/end times and targeted customer segments.",
      },
      {
        title: "Cashback & referral system",
        desc: "Reward customers for purchases and referrals with store credit, discounts, or other incentives.",
      },
      {
        title: "Loyalty points program",
        desc: "Build customer retention with points-based rewards that can be redeemed for discounts or exclusive products.",
      },
      {
        title: "Abandoned cart recovery",
        desc: "Automatically follow up with customers who leave items in their cart to recover potentially lost sales.",
      },
    ],
  },
  {
    id: "tab6",
    title: "Admin Tools",
    img: Admintool,
    features: [
      {
        title: "Real-time dashboards & role control",
        desc: "Monitor performance and manage user permissions with customizable dashboards for different team members.",
      },
      {
        title: "Built-in blog + SEO pages",
        desc: "Content management tools for marketing and SEO with customizable templates and metadata control.",
      },
      {
        title: "Advanced reporting",
        desc: "Detailed analytics and business intelligence with exportable reports and custom report builders.",
      },
      {
        title: "Inventory management",
        desc: "Track stock levels, set low-stock alerts, and manage inventory across multiple locations or warehouses.",
      },
    ],
  },
  {
    id: "tab7",
    title: "Help Desk",
    img: Helpdesk,
    features: [
      {
        title: "Omnichannel support",
        desc: "Manage customer inquiries from email, chat, phone, and social media in one unified interface.",
      },
      {
        title: "Ticket management system",
        desc: "Organize, prioritize, and track customer issues with automated routing and escalation workflows.",
      },
      {
        title: "Knowledge base & self-service",
        desc: "Comprehensive documentation and FAQs with intelligent search to help customers find answers quickly.",
      },
      {
        title: "Live chat & chatbot integration",
        desc: "Provide instant support with AI-powered chatbots for common questions and seamless handoff to human agents.",
      },
    ],
  },
  {
    id: "tab8",
    title: "NBFC Credit Facility",
    img: Creditfacility,
    badge: "Upcoming",
    features: [
      {
        title: "CIBIL-based credit assessment",
        desc: "Automated credit limit approval based on retailer's credit score, business history, and financial profile.",
      },
      {
        title: "Instant manufacturer payment",
        desc: "NBFC settles manufacturer payments immediately while providing flexible repayment terms to retailers.",
      },
      {
        title: "Seamless checkout integration",
        desc: "Simple 'Pay with NBFC Credit' option at checkout allows pre-approved retailers to purchase using their credit facility instantly.",
      },
      {
        title: "Flexible repayment terms",
        desc: "Retailers benefit from flexible payment schedules while manufacturers receive immediate payment.",
      },
    ],
  },
  {
    id: "tab9",
    title: "Warranty Management",
    img: Warranty,
    features: [
      {
        title: "Digital warranty registration",
        desc: "Automated warranty activation upon purchase with digital documentation and proof of purchase storage.",
      },
      {
        title: "Warranty claim processing",
        desc: "Streamlined claim submission with status tracking and automated notifications throughout the process.",
      },
      {
        title: "Extended warranty sales",
        desc: "Offer and manage extended warranty programs as an additional revenue stream with automated renewal reminders.",
      },
      {
        title: "Warranty analytics",
        desc: "Track warranty claim patterns to identify product quality issues and improve future product development.",
      },
    ],
  },
  {
    id: "tab10",
    title: "Mobile App",
    img: Mobileapp,
    features: [
      {
        title: "Responsive website",
        desc: "Optimized for all screen sizes and devices with a mobile-first design approach.",
      },
      {
        title: "Native iOS/Android mobile app",
        desc: "Custom-built apps with your branding that provide a seamless shopping experience on mobile devices.",
      },
      {
        title: "Built to your brand",
        desc: "100% custom design that reflects your unique brand identity and values.",
      },
      {
        title: "Push notifications",
        desc: "Engage customers with targeted push notifications about orders, promotions, and personalized offers.",
      },
    ],
  },
];

function Features() {
  const [activeTab, setActiveTab] = useState("tab1");
  const tabsRef = useRef(null);
  const hasLoadedOnce = useRef(false);

  useEffect(() => {
    if (tabsRef.current) tabsRef.current.scrollLeft = 0;
  }, []);

  const handleTabClick = (id, e) => {
    e.preventDefault();
    setActiveTab(id);

    // ✅ Only scroll when user manually clicks a tab
    if (hasLoadedOnce.current) {
      const section = document.querySelector("#features");
      if (section) {
        window.scrollTo({
          top: section.offsetTop - 100,
          behavior: "smooth",
        });
      }
    }
    hasLoadedOnce.current = true;

    if (e.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <section className="features-section" id="features">
      <div className="container">
        <div className="section-title">
          <h2 className="my-4">
            Complete <span className="gradiant-texts">Features</span>
          </h2>
          <p className="subtitle">
            Everything you need to run a successful online business
          </p>
        </div>

        <div className="tabs-container" ref={tabsRef}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab-heading ${
                activeTab === tab.id ? "active" : ""
              }`}
              onClick={(e) => handleTabClick(tab.id, e)}
            >
              {tab.title}
              {tab.badge && <span className="badge">{tab.badge}</span>}
            </button>
          ))}
        </div>

        <div className="tab-content-area">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              className={`tab-pane ${activeTab === tab.id ? "active" : ""}`}
            >
              <div className="row align-items-start">
                <div className="col-md-6">
                  <h3 className="fw-bold">
                    {tab.title}{" "}
                    {tab.badge && <span className="badge">{tab.badge}</span>}
                  </h3>
                  <ul className="custom-feature-list ps-0">
                    {tab.features.map((f, i) => (
                      <li key={i}>
                        <h6>{f.title}</h6>
                        <p>{f.desc}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="col-md-6 text-center">
                  <img
                    src={tab.img}
                    alt={tab.title}
                    className="img-fluid rounded-4"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
