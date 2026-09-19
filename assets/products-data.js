/* =========================================================
   Bulenga Solar Solutions — products-data.js
   Structured product catalogue.
   Source: Fox ESS Product Brochure (Inverter / Battery / EV Charger),
   version 1.8, 2024/07/11.
   NOTE: No price or currency field exists anywhere in this data
   by design — do not add one.
   ========================================================= */

const PRODUCT_CATEGORIES = [
  {
    id: "pv-inverter",
    name: "PV Inverters",
    tagline: "Grid-tied inverters that turn panel output into usable power.",
    icon: "sun"
  },
  {
    id: "hybrid-inverter",
    name: "Hybrid Inverters",
    tagline: "Inverter and battery in one system, built for backup power.",
    icon: "layers"
  },
  {
    id: "microinverter",
    name: "Microinverters",
    tagline: "Panel-level conversion for shaded or complex roofs.",
    icon: "grid"
  },
  {
    id: "battery",
    name: "Batteries",
    tagline: "Modular storage that keeps the lights on after sunset.",
    icon: "battery"
  },
  {
    id: "ev-charger",
    name: "EV Chargers",
    tagline: "Home and business charging for electric vehicles.",
    icon: "plug"
  },
  {
    id: "monitoring",
    name: "Monitoring & Accessories",
    tagline: "Remote monitoring and system-management hardware.",
    icon: "monitor"
  }
];

const PRODUCTS = [
  /* ---------------- PV INVERTERS ---------------- */
  {
    id: "s-series",
    name: "S Series",
    category: "pv-inverter",
    seriesLabel: "Single Phase, Single MPPT String Inverter",
    powerRange: "0.7 – 3.3kW",
    phase: "Single phase",
    mppt: "1 MPPT",
    ipRating: "IP65",
    shortDescription: "A compact single-MPPT inverter sized for small residential solar arrays where space and simplicity matter most.",
    detailedDescription: "The S Series is Fox ESS's entry-level grid-tied inverter, built around a smaller physical footprint that suits tight installation spaces such as apartment balconies or small roof sections. It uses a single MPPT channel, which keeps the design straightforward for smaller residential arrays, and is built to a form factor the manufacturer describes as designed with home aesthetics in mind.",
    features: [
      "Smaller unit size for easier mounting",
      "Designed to suit residential aesthetics",
      "Higher conversion efficiency for compact installations",
      "IP65-rated enclosure for outdoor use",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential"],
    image: "assets/images/products/s-series.jpg"
  },
  {
    id: "e-series",
    name: "E Series",
    category: "pv-inverter",
    seriesLabel: "Single-Phase, Single MPPT String Inverter",
    powerRange: "3 – 6kW",
    phase: "Single phase",
    mppt: "1 MPPT",
    ipRating: "IP65",
    shortDescription: "A single-MPPT residential inverter with a wider current range and built-in arc-fault protection.",
    detailedDescription: "Stepping up from the S Series, the E Series covers a 3–6kW output range for larger single-phase residential systems. It carries a wider MPPT input current range so it can be paired with higher-power PV panels, and includes AFCI (arc-fault detection) as a standard safety feature.",
    features: [
      "Wider MPPT current range for high-power panels",
      "Built-in AFCI arc-fault detection",
      "Designed for residential rooftop installations",
      "IP65-rated enclosure",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential"],
    image: "assets/images/products/e-series.jpg"
  },
  {
    id: "f-series",
    name: "F Series",
    category: "pv-inverter",
    seriesLabel: "Single-Phase, Dual MPPT String Inverter",
    powerRange: "3 – 6kW",
    phase: "Single phase",
    mppt: "2 MPPT",
    ipRating: "IP65",
    shortDescription: "A dual-MPPT version of the residential 3–6kW inverter, suited to roofs with two distinct panel strings or orientations.",
    detailedDescription: "The F Series matches the E Series in power range but adds a second MPPT channel, making it a better fit for roofs split across two orientations or partially shaded sections. It shares the same AFCI protection and wide input current range for compatibility with higher-output panels.",
    features: [
      "Dual MPPT for split or multi-orientation roofs",
      "Wider MPPT current range for high-power panels",
      "Built-in AFCI arc-fault detection",
      "IP65-rated enclosure",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential"],
    image: "assets/images/products/f-series.jpg"
  },
  {
    id: "g-series",
    name: "G Series",
    category: "pv-inverter",
    seriesLabel: "Single-Phase, Three MPPT String Inverter",
    powerRange: "7 – 10.5kW",
    phase: "Single phase",
    mppt: "3 MPPT",
    ipRating: "IP65",
    shortDescription: "A three-MPPT single-phase inverter for larger residential systems with multiple panel strings.",
    detailedDescription: "The G Series extends the single-phase range up to 10.5kW with three independent MPPT channels, giving installers more flexibility when a roof has several strings running in different directions. Like the rest of the residential range, it includes AFCI protection and is built for straightforward installation.",
    features: [
      "Three MPPT channels for flexible string layouts",
      "Wider MPPT current range for high-power panels",
      "Built-in AFCI arc-fault detection",
      "IP65-rated enclosure",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential"],
    image: "assets/images/products/g-series.jpg"
  },
  {
    id: "t-series",
    name: "T Series",
    category: "pv-inverter",
    seriesLabel: "Three Phase, Dual MPPT String Inverter",
    powerRange: "3 – 25kW",
    phase: "Three phase",
    mppt: "2 MPPT",
    ipRating: "IP65",
    shortDescription: "A wide-ranging three-phase inverter covering small commercial systems through to larger residential and light-commercial installs.",
    detailedDescription: "The T Series is a three-phase, dual-MPPT string inverter spanning an unusually wide 3–25kW output range, which lets Bulenga Solar Solutions cover everything from a substantial home installation to a small business site with a single product family. It includes AFCI protection and a diversified interface design intended to improve compatibility with third-party equipment.",
    features: [
      "Ultra-wide 3–25kW power application range",
      "Built-in AFCI arc-fault detection",
      "Diversified interface for third-party compatibility",
      "Wider MPPT current range for high-power panels",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/t-series.jpg"
  },
  {
    id: "t-series-pro",
    name: "T Series Pro",
    category: "pv-inverter",
    seriesLabel: "Three-Phase, Dual MPPT String Inverter",
    powerRange: "15 – 30kW",
    phase: "Three phase",
    mppt: "2 MPPT",
    ipRating: "IP65",
    shortDescription: "A higher-capacity three-phase inverter for commercial rooftops and larger three-phase sites.",
    detailedDescription: "The T Series Pro picks up where the standard T Series leaves off, covering a 15–30kW range for commercial buildings and larger three-phase installations. It carries the same AFCI protection and wide MPPT current tolerance, with an interface designed for compatibility across a range of third-party components.",
    features: [
      "Wide 15–30kW power application range",
      "Built-in AFCI arc-fault detection",
      "Diversified interface for third-party compatibility",
      "Wider MPPT current range for high-power panels",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Commercial"],
    image: "assets/images/products/t-series-pro.jpg"
  },
  {
    id: "r-series",
    name: "R Series",
    category: "pv-inverter",
    seriesLabel: "Three-Phase, Nine MPPT String Inverter",
    powerRange: "75 – 110kW",
    phase: "Three phase",
    mppt: "9 MPPT",
    ipRating: "IP66",
    shortDescription: "A high-capacity commercial and industrial inverter with nine MPPT channels for complex array layouts.",
    detailedDescription: "The R Series is built for large commercial and industrial solar arrays, offering nine independent MPPT channels across a 75–110kW output range. It carries a higher IP66 protection rating and anti-corrosion C5 durability, along with PID recovery and PV string current monitoring for ongoing system health checks, plus support for high-power stand-alone operation.",
    features: [
      "IP66 protection rating with C5 anti-corrosion durability",
      "Integrated PID repair function for stronger reliability",
      "PV string current monitoring",
      "Built-in AFCI arc-fault detection",
      "Support for high power in stand-alone mode"
    ],
    applications: ["Commercial", "Industrial"],
    image: "assets/images/products/r-series.jpg"
  },
  {
    id: "u-series",
    name: "U Series",
    category: "pv-inverter",
    seriesLabel: "Three Phase, Three MPPT String Inverter",
    powerRange: "30 – 40kW",
    phase: "Three phase",
    mppt: "3 MPPT",
    ipRating: "IP66",
    shortDescription: "A mid-capacity commercial inverter with an IP66 rating for demanding site conditions.",
    detailedDescription: "The U Series sits in the 30–40kW range for commercial installations, with three MPPT channels and a wide operating tolerance for varied panel configurations. It carries an IP66 enclosure rating and includes AFCI protection along with an interface designed for compatibility with third-party monitoring and grid equipment.",
    features: [
      "Wide 30–40kW power application range",
      "Built-in AFCI arc-fault detection",
      "IP66-rated enclosure",
      "Diversified interface for third-party compatibility",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Commercial"],
    image: "assets/images/products/u-series.jpg"
  },
  {
    id: "v-series",
    name: "V Series",
    category: "pv-inverter",
    seriesLabel: "Three Phase, Four MPPT String Inverter",
    powerRange: "30 – 75kW",
    phase: "Three phase",
    mppt: "4 MPPT",
    ipRating: "IP66",
    shortDescription: "A four-MPPT commercial inverter covering a broad output range with industrial-grade protection.",
    detailedDescription: "The V Series covers 30–75kW with four MPPT channels, making it suitable for medium to large commercial installations with varied string configurations. It shares the R Series' IP66 rating, C5 anti-corrosion protection, PID recovery function and PV string current monitoring, along with support for high-power stand-alone operation.",
    features: [
      "IP66 protection rating with C5 anti-corrosion durability",
      "Integrated PID repair function",
      "PV string current monitoring",
      "Built-in AFCI arc-fault detection",
      "Support for high power in stand-alone mode"
    ],
    applications: ["Commercial", "Industrial"],
    image: "assets/images/products/v-series.jpg"
  },
  {
    id: "vl-series",
    name: "VL Series",
    category: "pv-inverter",
    seriesLabel: "Three Phase, Four MPPT String Inverter",
    powerRange: "15 – 37.5kW",
    phase: "Three phase",
    mppt: "4 MPPT",
    ipRating: "IP66",
    shortDescription: "A lighter-capacity companion to the V Series for mid-sized commercial arrays.",
    detailedDescription: "The VL Series brings the same four-MPPT, IP66-rated design as the V Series to a lower 15–37.5kW power band, making it a fit for mid-sized commercial sites that don't need the full V Series capacity. It includes the same PID recovery, PV string current monitoring and AFCI protection.",
    features: [
      "IP66 protection rating with C5 anti-corrosion durability",
      "Integrated PID repair function",
      "PV string current monitoring",
      "Built-in AFCI arc-fault detection",
      "Support for high power in stand-alone mode"
    ],
    applications: ["Commercial"],
    image: "assets/images/products/vl-series.jpg"
  },

  /* ---------------- HYBRID INVERTERS ---------------- */
  {
    id: "h1-ac1-series",
    name: "H1 & AC1 Series",
    category: "hybrid-inverter",
    seriesLabel: "Single-Phase, Dual MPPT Hybrid / AC Storage Inverter",
    powerRange: "3 – 6kW",
    phase: "Single phase",
    mppt: "2 MPPT",
    ipRating: "IP65",
    shortDescription: "An entry-level hybrid/AC storage inverter for homes adding battery backup to their solar system.",
    detailedDescription: "The H1 & AC1 Series combines solar generation and battery storage in one single-phase unit, working with Fox ESS's proprietary high-voltage batteries. The AC1 variant is designed as a retrofit AC-coupled option for adding storage to an existing solar installation, while the H1 covers new hybrid installations, giving Bulenga Solar Solutions flexibility depending on whether a household already has panels installed.",
    features: [
      "Compatible with Fox ESS high-voltage batteries",
      "Suits both new installs and battery retrofits",
      "IP65-rated enclosure",
      "Remote monitoring via the Fox ESS Cloud platform",
      "Dual MPPT input"
    ],
    applications: ["Residential"],
    image: "assets/images/products/h1-ac1-series.jpg"
  },
  {
    id: "h3-ac3-series",
    name: "H3 & AC3 Series",
    category: "hybrid-inverter",
    seriesLabel: "Three-Phase, Dual MPPT Storage Inverter",
    powerRange: "H3: 5 – 12kW · AC3: 5 – 10kW",
    phase: "Three phase",
    mppt: "2 MPPT",
    ipRating: "IP65",
    shortDescription: "A three-phase hybrid storage inverter for homes and small businesses running three-phase power.",
    detailedDescription: "The H3 & AC3 Series brings the same hybrid and AC-coupled retrofit flexibility as the H1 & AC1 Series to three-phase properties. The H3 covers 5–12kW and the AC3 covers 5–10kW, both built around Fox ESS's high-voltage battery ecosystem for efficient charge and discharge performance.",
    features: [
      "Compatible with Fox ESS high-voltage batteries",
      "Suits both new installs and battery retrofits",
      "IP65-rated enclosure",
      "Remote monitoring via the Fox ESS Cloud platform",
      "Dual MPPT input"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/h3-ac3-series.jpg"
  },
  {
    id: "h3-pro-series",
    name: "H3 Pro Series",
    category: "hybrid-inverter",
    seriesLabel: "Three-Phase, Hybrid / AC Inverter",
    powerRange: "15 – 30kW",
    phase: "Three phase",
    mppt: "3 MPPT",
    ipRating: "IP65",
    shortDescription: "A higher-capacity hybrid inverter with three MPPT inputs and dual battery bank support.",
    detailedDescription: "The H3 Pro Series scales hybrid storage up to 15–30kW for larger homes and small commercial sites. It supports three MPPT inputs alongside two separate battery sets, and the manufacturer notes that different combinations of inputs and battery banks can be configured to suit a range of installation scenarios.",
    features: [
      "3 MPPT inputs with 2 battery-set support",
      "Flexible configuration for varied installation scenarios",
      "IP65-rated enclosure",
      "Remote monitoring via the Fox ESS Cloud platform",
      "High-voltage battery compatibility"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/h3-pro-series.jpg"
  },
  {
    id: "k-series",
    name: "K Series",
    category: "hybrid-inverter",
    seriesLabel: "Single-Phase, Hybrid / AC Storage Inverter",
    powerRange: "7 – 10.5kW",
    phase: "Single phase",
    mppt: "—",
    ipRating: "IP65",
    shortDescription: "A higher-output single-phase storage inverter for homes that need more backup capacity than the entry-level range.",
    detailedDescription: "The K Series increases single-phase storage output to 7–10.5kW, giving Bulenga Solar Solutions an option for households wanting more backup power capacity without moving to a three-phase system. It is built on the same high-voltage battery platform as the rest of the hybrid range.",
    features: [
      "Increased single-phase output capacity",
      "Compatible with Fox ESS high-voltage batteries",
      "IP65-rated enclosure",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential"],
    image: "assets/images/products/k-series.jpg"
  },
  {
    id: "us-series",
    name: "US Series",
    category: "hybrid-inverter",
    seriesLabel: "Split-Phase, Hybrid / AC Inverter",
    powerRange: "3.8 – 11.4kW",
    phase: "Split phase",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A split-phase hybrid inverter supporting multi-unit parallel operation for larger backup requirements.",
    detailedDescription: "The US Series is a split-phase storage inverter that supports up to four units running in parallel, allowing a single property to scale backup capacity well beyond what one unit provides. This makes it a flexible option where future expansion of storage capacity is a consideration.",
    features: [
      "Supports up to 4-unit parallel operation",
      "Wide 3.8–11.4kW output range",
      "Compatible with Fox ESS high-voltage batteries",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential"],
    image: "assets/images/products/us-series.jpg"
  },
  {
    id: "powerq-series",
    name: "PowerQ Series",
    category: "hybrid-inverter",
    seriesLabel: "All-in-One Residential Energy Storage System",
    powerRange: "3.8 – 11.4kW",
    phase: "—",
    mppt: "—",
    ipRating: "—",
    shortDescription: "An integrated all-in-one storage system combining inverter and battery in a single modular unit.",
    detailedDescription: "The PowerQ Series is Fox ESS's all-in-one residential storage system, bringing the inverter and battery together in one modular enclosure rather than as separate components. The manufacturer states the system can scale up to 80kWh of total backup capacity through its modular design, making it suited to households planning for significant backup coverage.",
    features: [
      "All-in-one integrated inverter and battery design",
      "Modular system for scalable backup capacity",
      "Up to 80kWh total backup capacity (manufacturer-stated)",
      "Remote monitoring via the Fox ESS Cloud platform"
    ],
    applications: ["Residential"],
    image: "assets/images/products/powerq-series.jpg"
  },
  {
    id: "gmax-series",
    name: "G-MAX Series",
    category: "hybrid-inverter",
    seriesLabel: "Commercial and Industrial Inverter",
    powerRange: "100kW",
    phase: "Three phase",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A containerised, all-in-one commercial and industrial storage system for large-scale energy needs.",
    detailedDescription: "The G-MAX Series is Fox ESS's large-format commercial and industrial storage product, built as a single standardised container housing the battery, power conversion system, safety systems, distribution and cooling. This all-in-one approach is intended to simplify manufacturing and on-site installation for large energy users such as factories and commercial estates.",
    features: [
      "All-in-one containerised design",
      "Integrated battery, PCS, and thermal management",
      "Preventive safety and smart distribution systems",
      "Standardised for simpler large-scale installation"
    ],
    applications: ["Commercial", "Industrial"],
    image: "assets/images/products/gmax-series.jpg"
  },

  /* ---------------- MICROINVERTER ---------------- */
  {
    id: "m-series",
    name: "M Series",
    category: "microinverter",
    seriesLabel: "Microinverter Series",
    powerRange: "0.6 – 1.2kW",
    phase: "Single phase",
    mppt: "Per-panel MPPT",
    ipRating: "IP67",
    shortDescription: "A panel-level microinverter that manages each panel independently for better performance under partial shade.",
    detailedDescription: "The M Series microinverter runs independent MPPT control and status monitoring on each individual panel rather than a full string, which helps limit the impact of shading or panel-level faults on total system output. Fox ESS describes this component-level monitoring as a way to view the status of each part of the system individually, alongside low DC voltage operation for improved safety.",
    features: [
      "Independent MPPT control per panel",
      "Component-level performance monitoring",
      "Low DC voltage for improved safety",
      "IP67-rated for outdoor durability",
      "Designed to reduce shading-related losses"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/m-series.jpg"
  },

  /* ---------------- BATTERIES ---------------- */
  {
    id: "ecs-battery",
    name: "ECS Battery",
    category: "battery",
    seriesLabel: "Modular Battery Storage — ECS2900 / ECS4300H / ECS4800 / EQ4800",
    powerRange: "Modular, expandable capacity",
    phase: "—",
    mppt: "—",
    ipRating: "IP65",
    shortDescription: "A modular, expandable battery platform available across four capacity variants for residential storage.",
    detailedDescription: "The ECS Battery range covers four models — ECS2900, ECS4300H, ECS4800 and EQ4800 — built on a modular design that can be expanded as a household's storage needs grow. Fox ESS designed the range for plug-and-play installation to help reduce fitting time and cost, with a wide voltage range for compatibility across different inverter models.",
    features: [
      "Modular design that can be expanded over time",
      "Plug-and-play installation",
      "Wide voltage range, compatible with a variety of inverters",
      "High-precision state-of-charge estimation",
      "Temperature and voltage self-adaptation for longer service life",
      "Self-diagnostic technology with redundant safety design"
    ],
    applications: ["Residential"],
    image: "assets/images/products/ecs-battery.jpg"
  },
  {
    id: "ep-battery",
    name: "EP Battery",
    category: "battery",
    seriesLabel: "Integrated Battery Storage — EP3 / EP4 / EP5 / EP10 / EP11",
    powerRange: "Integrated, expandable capacity",
    phase: "—",
    mppt: "—",
    ipRating: "IP65",
    shortDescription: "An integrated battery line spanning five capacity options for homes with different backup requirements.",
    detailedDescription: "The EP Battery range spans five models — EP3, EP4, EP5, EP10 and EP11 — using an integrated rather than stacked-module design, while still supporting expansion. Like the ECS range, it is built for plug-and-play installation and wide inverter compatibility, with the same self-diagnostic and safety features.",
    features: [
      "Integrated design that remains expandable",
      "Plug-and-play installation",
      "Compatible with a variety of inverters",
      "High-precision state-of-charge estimation",
      "Temperature and voltage self-adaptation for longer service life",
      "Self-diagnostic technology with redundant safety design"
    ],
    applications: ["Residential"],
    image: "assets/images/products/ep-battery.jpg"
  },
  {
    id: "hv-battery",
    name: "HV Battery",
    category: "battery",
    seriesLabel: "High-Voltage Rack Battery — HV2600",
    powerRange: "Modular, expandable capacity",
    phase: "—",
    mppt: "—",
    ipRating: "IP21",
    shortDescription: "A rack-mounted high-voltage battery module aimed at larger or more technical installations.",
    detailedDescription: "The HV2600 is a rack-format battery module built around Fox ESS's BMS (battery management system) and a modular, expandable design. Its IP21 rating reflects an indoor, rack-room style installation rather than outdoor exposure, making it suited to plant rooms and dedicated equipment spaces in larger residential or light-commercial projects.",
    features: [
      "BMS-managed modular design",
      "Plug-and-play installation",
      "Wide voltage range, compatible with a variety of inverters",
      "High-precision state-of-charge estimation",
      "Self-diagnostic technology with redundant safety design"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/hv-battery.jpg"
  },

  /* ---------------- EV CHARGERS ---------------- */
  {
    id: "a7300",
    name: "A7300",
    category: "ev-charger",
    seriesLabel: "Single-Phase AC EV Charger",
    powerRange: "Single-phase",
    phase: "Single phase",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A wall-mounted single-phase EV charger for homes with one electric vehicle to charge overnight.",
    detailedDescription: "The A7300 is Fox ESS's single-phase AC EV charger, built with the same streamlined wall-mount design used across the AC charger range. It can be configured and monitored remotely through the Fox ESS app, and supports several working modes to suit different charging schedules and household setups.",
    features: [
      "App-based remote configuration",
      "Streamlined wall-mount enclosure",
      "Multiple working modes for different scenarios",
      "Suited to single-vehicle home charging"
    ],
    applications: ["Residential"],
    image: "assets/images/products/ev-charger-black.jpg"
  },
  {
    id: "a011k",
    name: "A011K",
    category: "ev-charger",
    seriesLabel: "Three-Phase AC EV Charger",
    powerRange: "Three-phase",
    phase: "Three phase",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A three-phase AC EV charger for homes or small businesses with three-phase supply and faster charging needs.",
    detailedDescription: "The A011K brings three-phase AC charging to the Fox ESS EV charger range, aimed at properties with three-phase power connections that want a faster charge than a single-phase unit can provide. Like the rest of the range, it supports app-based configuration and multiple working modes.",
    features: [
      "Three-phase AC charging",
      "App-based remote configuration",
      "Multiple working modes for different scenarios",
      "Streamlined wall-mount enclosure"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/ev-charger-silver.jpg"
  },
  {
    id: "a022k",
    name: "A022K",
    category: "ev-charger",
    seriesLabel: "Three-Phase AC EV Charger",
    powerRange: "Three-phase",
    phase: "Three phase",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A higher-capacity three-phase AC EV charger for businesses or multi-vehicle households.",
    detailedDescription: "The A022K sits alongside the A011K as a three-phase AC charging option, aimed at sites with higher charging demand such as small commercial premises or households running more than one electric vehicle. It shares the same app-based configuration and flexible working-mode support as the rest of the range.",
    features: [
      "Three-phase AC charging",
      "App-based remote configuration",
      "Multiple working modes for different scenarios",
      "Suited to higher-demand charging sites"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/ev-charger-white.jpg"
  },

  /* ---------------- MONITORING & ACCESSORIES ---------------- */
  {
    id: "smart-wifi",
    name: "Smart WiFi",
    category: "monitoring",
    seriesLabel: "Monitoring Datalogger",
    powerRange: "—",
    phase: "—",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A WiFi datalogger that connects a Fox ESS inverter to the Fox ESS Cloud monitoring platform.",
    detailedDescription: "The Smart WiFi dongle connects compatible Fox ESS inverters to the Fox ESS Cloud platform over a home or business WiFi network, so system performance can be checked from the companion app or web portal at any time, from live output through to historical data.",
    features: [
      "Connects inverters to the Fox ESS Cloud platform",
      "Live and historical performance data",
      "Compatible with iOS and Android apps",
      "Simple plug-in installation"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/smart-wifi.jpg"
  },
  {
    id: "smart-gprs",
    name: "Smart GPRS",
    category: "monitoring",
    seriesLabel: "Monitoring Datalogger",
    powerRange: "—",
    phase: "—",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A GPRS datalogger for sites without a reliable WiFi connection.",
    detailedDescription: "The Smart GPRS datalogger provides the same Fox ESS Cloud connectivity as the Smart WiFi module but over a mobile GPRS connection, which suits installations where a stable local WiFi network isn't available on site.",
    features: [
      "Cloud connectivity without a WiFi network",
      "Live and historical performance data",
      "Compatible with iOS and Android apps",
      "Simple plug-in installation"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/smart-gprs.jpg"
  },
  {
    id: "smart-lan",
    name: "Smart LAN",
    category: "monitoring",
    seriesLabel: "Monitoring Datalogger",
    powerRange: "—",
    phase: "—",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A wired LAN datalogger for sites that prefer a hard-wired network connection.",
    detailedDescription: "The Smart LAN datalogger connects a Fox ESS inverter to the Fox ESS Cloud platform over a wired Ethernet connection, offering a stable alternative for sites where a wired network point is available near the inverter.",
    features: [
      "Wired connection to the Fox ESS Cloud platform",
      "Live and historical performance data",
      "Compatible with iOS and Android apps",
      "Simple plug-in installation"
    ],
    applications: ["Commercial", "Industrial"],
    image: "assets/images/products/smart-lan.jpg"
  },
  {
    id: "smart-4g",
    name: "Smart 4G",
    category: "monitoring",
    seriesLabel: "Monitoring Datalogger",
    powerRange: "—",
    phase: "—",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A 4G datalogger for remote sites without fixed internet infrastructure.",
    detailedDescription: "The Smart 4G datalogger uses a mobile 4G connection to link a Fox ESS inverter to the Fox ESS Cloud platform, making it a practical option for remote installations or sites where neither WiFi nor a wired network connection is readily available.",
    features: [
      "4G mobile connectivity to the Fox ESS Cloud platform",
      "Live and historical performance data",
      "Compatible with iOS and Android apps",
      "Suited to remote or off-grid-adjacent sites"
    ],
    applications: ["Residential", "Commercial", "Industrial"],
    image: "assets/images/products/smart-4g.jpg"
  },
  {
    id: "embox",
    name: "EMBox",
    category: "monitoring",
    seriesLabel: "Energy Management Box",
    powerRange: "—",
    phase: "—",
    mppt: "—",
    ipRating: "—",
    shortDescription: "An energy management box for coordinating multiple inputs and outputs across a larger solar and storage system.",
    detailedDescription: "The EMBox is a system-level monitoring and management unit with multiple digital and analogue input/output terminals, RS485 and CAN communication ports, and dual Ethernet connections. It is intended for sites with more complex monitoring needs than a single inverter, coordinating data across a broader installation.",
    features: [
      "Multiple digital and analogue I/O terminals",
      "RS485 and CAN communication support",
      "Dual Ethernet ports",
      "Suited to larger, multi-component systems"
    ],
    applications: ["Commercial", "Industrial"],
    image: "assets/images/products/embox.jpg"
  },
  {
    id: "fox-hub-g2",
    name: "Fox Hub G2",
    category: "monitoring",
    seriesLabel: "System Management Hub",
    powerRange: "—",
    phase: "—",
    mppt: "—",
    ipRating: "—",
    shortDescription: "A system management hub from Fox ESS's American-market product line, available for compatible installations.",
    detailedDescription: "The Fox Hub G2 is part of Fox ESS's product development aimed at the characteristics of the American market. Bulenga Solar Solutions can advise whether the Fox Hub G2 is an appropriate fit alongside a given inverter and battery combination for a specific project.",
    features: [
      "Part of the Fox ESS system hub line",
      "Developed for compatibility with specific market requirements",
      "Ask Bulenga Solar Solutions for current compatibility guidance"
    ],
    applications: ["Residential", "Commercial"],
    image: "assets/images/products/fox-hub-g2.jpg"
  }
];

/* Sampled backdrop colour per product photo, so the image tile
   background blends with each photo's own studio background
   instead of showing a mismatched edge. */
const PRODUCT_IMAGE_BG = {
  "a011k-silver.jpg": "#1f3a65",
  "a022k-white.jpg": "#1c335c",
  "a7300-black.jpg": "#204270",
  "e-series.jpg": "#d9dee4",
  "ecs-battery.jpg": "#ffffff",
  "embox.jpg": "#1b2e4e",
  "ep-battery.jpg": "#ffffff",
  "ev-charger-black.jpg": "#1f416f",
  "ev-charger-red.jpg": "#192646",
  "ev-charger-silver.jpg": "#1e3760",
  "ev-charger-white.jpg": "#1b2d51",
  "f-series.jpg": "#f7f5f6",
  "fox-hub-g2.jpg": "#1b2b4d",
  "g-max-series.jpg": "#a9a7a8",
  "g-series.jpg": "#27405e",
  "gmax-series.jpg": "#a9a7a8",
  "h1-ac1-series.jpg": "#f4f4f4",
  "h3-ac3-series.jpg": "#fbffff",
  "h3-pro-series.jpg": "#f4f4f4",
  "hv-battery.jpg": "#ffffff",
  "k-series.jpg": "#f3f6ef",
  "m-series.jpg": "#a7a5a6",
  "powerq-series.jpg": "#1f4377",
  "r-series.jpg": "#aaa8a9",
  "s-series.jpg": "#efedee",
  "smart-4g.jpg": "#1d3058",
  "smart-dataloggers.jpg": "#204270",
  "smart-gprs.jpg": "#1e3b67",
  "smart-lan.jpg": "#1d365f",
  "smart-wifi.jpg": "#1f416f",
  "t-series-pro.jpg": "#374254",
  "t-series.jpg": "#a6a4a5",
  "u-series.jpg": "#374254",
  "us-series.jpg": "#efedee",
  "v-series.jpg": "#a6a4a5",
  "vl-series.jpg": "#374254"
};

function getImageBg(imagePath) {
  const filename = imagePath.split("/").pop();
  return PRODUCT_IMAGE_BG[filename] || "#f2f5f6";
}

function getProductsByCategory(categoryId) {
  return PRODUCTS.filter(p => p.category === categoryId);
}

function getProductById(id) {
  return PRODUCTS.find(p => p.id === id);
}

function getCategoryById(id) {
  return PRODUCT_CATEGORIES.find(c => c.id === id);
}
