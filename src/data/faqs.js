const faqs = [
  {
    category: "Frontend Logistics Services",
    qstn: "What services does Frontend Logistics offer?",
    answer: (
      <>
        <p>
          Frontend Logistics offers comprehensive logistics solutions including:
        </p>
        <ul>
          <li>
            <strong>B2B2C Fulfillment:</strong> End-to-end delivery management
            for businesses
          </li>
          <li>
            <strong>D2C Micro-Fulfillment:</strong> Fast same-day and next-day
            deliveries
          </li>
          <li>
            <strong>P2P Delivery:</strong> Personal and small business parcel
            delivery
          </li>
          <li>
            <strong>Real-time Tracking:</strong> Live updates on your deliveries
          </li>
          <li>
            <strong>Route Optimization:</strong> AI-powered route planning for
            efficiency
          </li>
        </ul>
      </>
    ),
  },
  {
    category: "Frontend Logistics Services",
    qstn: "How does real-time tracking work?",
    answer: (
      <>
        <p>
          Our real-time tracking system provides live updates on your delivery
          status. You'll receive:
        </p>
        <ul>
          <li>Instant notifications when your package is picked up</li>
          <li>Live location updates during transit</li>
          <li>Estimated delivery time updates</li>
          <li>Delivery confirmation with photo proof</li>
          <li>24/7 access to tracking information via our app or website</li>
        </ul>
      </>
    ),
  },
  {
    category: "Delivery & Coverage",
    qstn: "What areas do you serve?",
    answer: (
      <>
        <p>
          We currently serve major cities across India including Mumbai, Delhi
          NCR, Bangalore, Chennai, Hyderabad, Kolkata, Pune, Bhubaneswar,
          Guwahati and Ranchi. We're continuously expanding our network to cover
          more locations.
        </p>
        <p>
          For specific coverage areas and delivery times, please contact our
          customer support team.
        </p>
      </>
    ),
  },
  {
    category: "Frontend Logistics Services",
    qstn: "How do I schedule a pickup?",
    answer: (
      <>
        <p>Scheduling a pickup is easy with Frontend Logistics:</p>
        <ul>
          <li>Use our mobile app or website to create a pickup request</li>
          <li>Select your preferred pickup time slot</li>
          <li>Provide package details and destination</li>
          <li>Our team will confirm the pickup within 30 minutes</li>
          <li>
            You can also call our customer support for immediate assistance
          </li>
        </ul>
      </>
    ),
  },
  {
    category: "Delivery & Coverage",
    qstn: "What are your delivery timeframes?",
    answer: (
      <>
        <p>Our delivery timeframes vary based on the service type:</p>
        <ul>
          <li>
            <strong>Same-day Delivery:</strong> Available in select cities for
            orders placed before 2 PM
          </li>
          <li>
            <strong>Next-day Delivery:</strong> Standard service across all
            major cities
          </li>
          <li>
            <strong>Express Delivery:</strong> 2-4 hours for urgent shipments
          </li>
          <li>
            <strong>Standard Delivery:</strong> 2-3 business days for inter-city
            shipments
          </li>
        </ul>
      </>
    ),
  },
  {
    category: "Delivery & Coverage",
    qstn: "How do you handle fragile items?",
    answer: (
      <>
        <p>We take special care with fragile items:</p>
        <ul>
          <li>Dedicated fragile item handling protocols</li>
          <li>Special packaging materials and cushioning</li>
          <li>Separate handling areas to prevent damage</li>
          <li>Extra insurance coverage for valuable items</li>
          <li>Gentle handling and careful loading procedures</li>
        </ul>
      </>
    ),
  },
  {
    category: "Payments & Policies",
    qstn: "What payment methods do you accept?",
    answer: (
      <>
        <p>We accept multiple payment methods for your convenience:</p>
        <ul>
          <li>Credit and debit cards (Visa, MasterCard, RuPay)</li>
          <li>Digital wallets (Paytm, PhonePe, Google Pay)</li>
          <li>UPI payments</li>
          <li>Net banking</li>
          <li>Cash on delivery (for eligible shipments)</li>
          <li>Corporate billing for business clients</li>
        </ul>
      </>
    ),
  },
  {
    category: "Payments & Policies",
    qstn: "Do you offer insurance for shipments?",
    answer: (
      <>
        <p>Yes, we offer comprehensive insurance coverage:</p>
        <ul>
          <li>Basic coverage included with all shipments</li>
          <li>Additional insurance available for high-value items</li>
          <li>Coverage for damage, loss, and theft</li>
          <li>Quick claim processing and settlement</li>
          <li>Transparent insurance terms and conditions</li>
        </ul>
      </>
    ),
  },
  {
    category: "Delivery & Coverage",
    qstn: "What if my package is lost or damaged?",
    answer: (
      <>
        <p>In case of loss or damage:</p>
        <ul>
          <li>Report the issue immediately through our app or website</li>
          <li>Our customer support team will investigate within 24 hours</li>
          <li>If covered by insurance, we'll process your claim</li>
          <li>We'll provide regular updates on the investigation</li>
          <li>Compensation will be processed according to our terms</li>
        </ul>
      </>
    ),
  },
  {
    category: "Frontend Logistics Services",
    qstn: "How can I become a delivery partner?",
    answer: (
      <>
        <p>Join our delivery partner network by following these steps:</p>
        <ul>
          <li>Complete the online application form on our website</li>
          <li>Submit required documents (ID proof, vehicle documents)</li>
          <li>Attend our orientation and training program</li>
          <li>Complete background verification</li>
          <li>Start earning with flexible working hours</li>
          <li>Access our partner app for order management</li>
        </ul>
      </>
    ),
  },
  {
    category: "Payments & Policies",
    qstn: "Do you offer bulk Frontend Logisticsg discounts?",
    answer: (
      <>
        <p>Yes, we offer attractive discounts for bulk shipments:</p>
        <ul>
          <li>Volume-based pricing for regular shipments</li>
          <li>Corporate account benefits for businesses</li>
          <li>Seasonal promotions and special offers</li>
          <li>Loyalty programs for frequent shippers</li>
          <li>Custom pricing for enterprise clients</li>
        </ul>
      </>
    ),
  },
];

const categories = [
  {
    name: "Frontend Logistics Services",
    icon: "/icons/faq-categories/services.png",
  },
  { name: "Delivery & Coverage", icon: "/icons/faq-categories/delivery.png" },
  { name: "Payments & Policies", icon: "/icons/faq-categories/payment.png" },
];

const serviceFaqs = [
  {
    question: "What is a Micro-Fulfillment Center (MFC)?",
    answer:
      "A compact, tech-enabled local warehouse designed to fulfill orders within nearby pincodes—ensuring rapid delivery and lower logistics overhead.",
  },
  {
    question: "How fast can I start?",
    answer:
      "Brands can go live within days in select zones. Our team handles setup, integration, and go-to-market support.",
  },
  {
    question: "Do I need to give up customer data?",
    answer:
      "Not at all. With Frontend Logistics, your brand owns the data, customer relationship, and delivery journey—end-to-end.",
  },
];

export { faqs, categories, serviceFaqs };
