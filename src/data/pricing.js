const plans = [
  {
    img: "/images/plans/Spark.jpg",
    name: "Spark Plan",
    tag: "Initial",
    price: "₹65 / delivery",
    deliveries: "Ideal for ~1,000 deliveries per month",
    distance: "5 km delivery radius included",
    weight: "Covers parcels up to 10 kg",
    extra: "₹10/km beyond radius, GST applicable",
    popular: false,
  },
  {
    img: "/images/plans/Pulse.jpg",
    name: "Pulse Plan",
    tag: "Start-up",
    price: "₹60 / delivery",
    deliveries: "Designed for growing brands with 3,000+ deliveries",
    distance: "5 km radius covered, flexible fleet",
    weight: "5 km radius covered, flexible fleet",
    extra: "₹10/km beyond radius, GST applicable",
    popular: false,
  },
  {
    img: "/images/plans/Turbo.jpg",
    name: "Turbo Plan",
    tag: "Growth",
    price: "₹55 / delivery",
    deliveries: "Best value: 10,000 deliveries per month",
    distance: "5 km radius included, scalable fleet",
    weight: "Lower per-delivery cost with volume",
    extra: "₹10/km beyond radius, GST applicable",
    popular: true, // highlight this plan
  },
  {
    img: "/images/plans/Apex.jpg",
    name: "Apex Plan",
    tag: "Enterprise",
    price: "Custom Pricing",
    deliveries: "For 10,000+ monthly deliveries",
    distance: "Custom delivery radius & fleet",
    weight: "Multi-modal transport options",
    extra: "Tailored enterprise SLA, GST extra",
    popular: false,
  },
];

export default plans;
