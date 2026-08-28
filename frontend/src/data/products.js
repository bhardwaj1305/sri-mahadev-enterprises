import aspire from "../assets/products/aspire_4k.webp";
import pro from "../assets/products/pro_4k.webp";
import eliteA from "../assets/products/elite-a_4k.webp";
import mpos from "../assets/products/mpos_4k.webp";

const products = [
  {
    id: "aspire",
    name: "Aspire",
    category: "ENTRY-LEVEL POS",

    description:
      "A reliable and affordable Android POS solution designed for small businesses, local shops, pharmacies and kirana stores.",

    bestFor: [
      "Kirana & grocery stores",
      "Small retail shops",
      "Pharmacies",
      "Boutiques",
      "Small billing counters",
    ],

    whyThisDevice:
      "Aspire is an easy-to-use countertop POS designed for everyday retail operations. Its compact design and reliable hardware make it a practical choice for businesses starting with a professional POS system.",

    benefits: [
      "Affordable entry-level solution",
      "Faster billing and checkout",
      "Better inventory management",
      "Professional billing experience",
      "Ideal for small and growing businesses",
    ],

    image: aspire,

    highlights: [
      '11.6" Display',
      "2 GB RAM",
      "8 GB Storage",
      "Android 9",
    ],

    specs: {
      Model: "GC099",
      Chipset: "RK3288",
      Display: '11.6" Inches',
      Resolution: "1366 × 768",
      "Touch Type": "Capacitive",
      RAM: "2 GB",
      Storage: "8 GB",
      CPU: "1.8GHz ARM Quad Core A17",
      "Android Version": "9",
      "External Ports": "4 USB Port, RS232",
      "WiFi / LAN": "2.4GHz",
      Bluetooth: "Yes",
      "Cash Drawer Port": "Yes",
    },
  },

  {
    id: "pro",
    name: "Pro",
    category: "PROFESSIONAL POS",

    description:
      "A professional Android POS system built for supermarkets, restaurants and businesses that require faster performance and greater storage capacity.",

    bestFor: [
      "Supermarkets",
      "Restaurants",
      "Busy retail stores",
      "Multi-counter businesses",
      "Growing businesses",
    ],

    whyThisDevice:
      "Pro is designed for businesses that need a larger display, higher memory and more storage for demanding day-to-day POS operations. It provides a professional experience for high-volume billing environments.",

    benefits: [
      "Faster day-to-day operations",
      "Large Full HD display",
      "More storage for business applications",
      "Smooth billing experience",
      "Suitable for professional business environments",
    ],

    image: pro,

    highlights: [
      '15.6" FHD Display',
      "4 GB RAM",
      "64 GB Storage",
      "Android 13",
    ],

    specs: {
      Model: "Sunmi D3Pro",
      Chipset: "Qualcomm",
      Display: '15.6" FHD',
      Resolution: "1920 × 1080",
      "Touch Type": "Multi Touch Screen",
      RAM: "4 GB",
      Storage: "64 GB",
      CPU: "Qualcomm Hexa-6 Core 1.9GHz",
      "Android Version": "13",
      "External Ports": "3 USB Port",
      "WiFi / LAN": "2.4GHz",
      Bluetooth: "Yes",
      "Cash Drawer Port": "Yes",
    },
  },

  {
    id: "elite-a",
    name: "Elite-A",
    category: "ENTERPRISE POS",

    description:
      "An enterprise-grade POS solution designed for growing businesses that need powerful hardware, flexible display configurations and scalable operations.",

    bestFor: [
      "Supermarkets",
      "Large retail stores",
      "Enterprise businesses",
      "Multi-counter operations",
      "Growing business networks",
    ],

    whyThisDevice:
      "Elite-A is built for businesses that need a professional and scalable POS setup. Its dual-display configuration and powerful hardware make it suitable for demanding retail environments and customer-facing operations.",

    benefits: [
      "Enterprise-ready hardware",
      "Dual-display capability",
      "Powerful processing",
      "Better suited for scalable operations",
      "Professional customer-facing experience",
    ],

    image: eliteA,

    highlights: [
      '14" Dual Display',
      "4 GB RAM",
      "16 GB Storage",
      "Android 13",
    ],

    specs: {
      Model: "GC097",
      Chipset: "RK3399",
      Display: '14" Dual Display',
      Resolution: "1366 × 768",
      "Touch Type": "Capacitive (Dual/Single)",
      RAM: "4 GB",
      Storage: "16 GB",
      CPU: "1.8GHz Dual Cortex A72 + 1.4 Quad Cortex A53",
      "Android Version": "13",
      "External Ports": "4 USB Port, RS232",
      "WiFi / LAN": "2.4GHz",
      Bluetooth: "Yes",
      "Cash Drawer Port": "Yes",
    },
  },

  {
    id: "mpos",
    name: "MPOS",
    category: "HANDHELD POS",

    description:
      "A pocket-size Android POS designed for queue busting, tableside ordering and doorstep billing — putting the complete billing experience in one hand.",

    bestFor: [
      "Restaurants",
      "Cafés",
      "Food courts",
      "Tableside ordering",
      "Doorstep billing",
      "Queue-busting counters",
    ],

    whyThisDevice:
      "NS MPOS combines handheld billing with a built-in thermal printer, making it ideal when billing needs to happen away from the main counter. Its compact design is especially useful for restaurants, tableside service and mobile billing.",

    benefits: [
      "Pocket-size portable POS",
      "Built-in thermal printer",
      "Faster queue management",
      "Tableside ordering",
      "Doorstep billing",
      "5,200 mAh full-shift battery",
      "Wi-Fi and Bluetooth connectivity",
    ],

    image: mpos,

    highlights: [
      '5" Touch Display',
      "5,200 mAh Full-Shift Battery",
      'Inbuilt 2" Thermal Printer',
      "Wi-Fi + Bluetooth",
      "Runs the same billing & inventory",
    ],

    specs: {
      Model: "NS MPOS",
      Display: '5-inch capacitive touch, 1280 × 720',
      Processor: "Quad-core with dedicated secure CPU",
      "Memory / Storage": "1 GB RAM / 8 GB internal",
      Printer: 'Inbuilt 2-inch thermal printer',
      Battery: "5,200 mAh",
      Connectivity: "Wi-Fi 2.4 GHz · Bluetooth 4",
      Ports: "Micro-USB OTG",
      Power: "5 V, 2 A charging",
      Certification: "BIS certified",
    },
  },
];

export default products;