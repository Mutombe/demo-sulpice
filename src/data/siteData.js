export const designTokens = {
  heroStyle: "cinematic",
  typography: {
    heading: "Playfair Display",
    body: "DM Sans",
    display: "Playfair Display",
  },
  effects: {
    noise: true,
    glassmorphism: "none",
    floatingShapes: false,
    scrollProgress: true,
    meshGradient: false,
    gradientBorders: false,
    cursorGlow: false,
  },
  animationPreset: "dramatic",
  serviceCardStyle: "overlay",
  projectGridStyle: "masonry",
  testimonialStyle: "carousel",
  statsStyle: "overlay",
  bgPattern: "none",
  homeSectionOrder: [
    "hero", "marquee", "services", "portfolio", "stats", "about", "whyChooseUs", "locations", "testimonials", "social", "cta"
  ],
};

const siteData = {
  business: {
    name: "Sulpice",
    legalName: "Sulpice Designs Zimbabwe",
    tagline: "Where Every Moment Becomes a Masterpiece",
    description:
      "Sulpice is Zimbabwe and South Africa's premier event decor company. From intimate weddings to grand corporate galas, we transform ordinary spaces into extraordinary experiences. Three branches across two countries, 500+ events styled, and a reputation built on turning your vision into breathtaking reality.",
    phone: "+263 77 233 5903",
    phoneRaw: "+263772335903",
    whatsappNumber: "263772335903",
    email: "sulpicedesignszim@gmail.com",
    address: "28 Midlothian Ave, Eastlea, Harare, Zimbabwe",
    country: "Zimbabwe",
    city: "Harare",
    rating: 4.9,
    ratingRounded: 5,
    reviewCount: 127,
    established: "2016",
    yearsExperience: "8+",
    projectsCompleted: "500+",
    employees: "20+",
    coordinates: { lat: -17.8252, lng: 31.0635 },
    hours: [
      { day: "Monday - Friday", time: "8:00 AM - 6:00 PM" },
      { day: "Saturday", time: "9:00 AM - 4:00 PM" },
      { day: "Sunday", time: "By Appointment" },
    ],
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.5!2d31.0635!3d-17.8252!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQ5JzMwLjciUyAzMcKwMDMnNDguNiJF!5e0!3m2!1sen!2szw!4v1700000000000!5m2!1sen!2szw",
    cookieConsentKey: "sulpice-cookie-consent",
    socialLinks: {
      facebook: "https://www.facebook.com/sulpicedesigns",
      instagram: "https://www.instagram.com/sulpicedesigns",
      linkedin: "#",
    },
  },

  navbar: {
    logoImage: null,
    logoLine1: "Sulpice",
    logoLine2: "Designs",
  },

  hero: {
    badge: "Zimbabwe & South Africa's Premier Event Stylists",
    titleParts: [
      { text: "WHERE EVERY " },
      { text: "MOMENT", highlight: true },
      { text: " BECOMES A MASTERPIECE." },
    ],
    subtitle:
      "Three countries. 500+ events. One uncompromising vision. We don't just decorate spaces -- we compose experiences that live in memory long after the last guest departs.",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "View Our Portfolio",
    trustBadge: "500+ Events Styled",
    backgroundImages: [
      { url: "https://images.unsplash.com/photo-1519741497674-611481863552?w=1920&q=85", alt: "Exquisite wedding table arrangement with candles and florals" },
      { url: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85", alt: "Grand ballroom event with dramatic lighting" },
      { url: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1920&q=85", alt: "Stunning evening event with warm ambient lighting" },
    ],
  },

  stats: [
    { number: "500+", label: "Events Styled" },
    { number: "8+", label: "Years of Excellence" },
    { number: "3", label: "Countries" },
    { number: "98%", label: "Client Satisfaction" },
  ],

  servicesPreview: [
    {
      title: "Wedding Decor",
      desc: "From ethereal garden ceremonies to opulent ballroom receptions, we craft wedding environments that tell your unique love story through texture, light, and bloom.",
      icon: "Heart",
    },
    {
      title: "Corporate Events",
      desc: "Elevate your brand presence with sophisticated event styling that communicates authority, innovation, and impeccable taste to every attendee.",
      icon: "Briefcase",
    },
    {
      title: "Birthday Celebrations",
      desc: "Whether it is a milestone 50th or a magical sweet sixteen, we create birthday atmospheres that make the guest of honour feel like royalty.",
      icon: "Star",
    },
    {
      title: "Conference Styling",
      desc: "Transform sterile conference halls into inspiring environments that energize delegates and reinforce your organizational narrative.",
      icon: "Buildings",
    },
    {
      title: "Floral Design",
      desc: "Our botanical artisans compose living sculptures -- from cascading centerpieces to architectural installations that redefine what flowers can become.",
      icon: "Leaf",
    },
    {
      title: "Custom Installations",
      desc: "Bespoke structural design for the extraordinary. Suspended gardens, light sculptures, immersive entrance experiences -- if you can dream it, we build it.",
      icon: "Lightbulb",
    },
  ],

  services: {
    heroTitle: "Our Services",
    heroSubtitle: "Six disciplines of design excellence, unified by a singular obsession with beauty.",
    items: [
      {
        title: "Wedding Decor",
        slug: "wedding-decor",
        desc: "Your wedding day deserves more than decoration -- it deserves a world built around your love story. From the first petal to the last candle, we orchestrate every visual element to create an atmosphere so immersive, your guests will feel they have stepped into a dream. Our wedding design process begins with understanding the essence of your relationship and translating it into a cohesive visual language that speaks through colour, texture, light, and bloom.",
        features: ["Ceremony Backdrops", "Reception Styling", "Bridal Table Design", "Aisle Decor", "Lighting Design", "Linen & Draping"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
      },
      {
        title: "Corporate Events",
        slug: "corporate-events",
        desc: "In the corporate arena, environment shapes perception. We design event spaces that elevate your brand from the moment guests cross the threshold. Whether it is an annual gala, product launch, or awards ceremony, our styling communicates sophistication, intentionality, and the kind of attention to detail that distinguishes market leaders.",
        features: ["Brand Integration", "Stage Design", "VIP Lounges", "Networking Spaces", "Award Ceremonies", "Product Launches"],
        image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80",
      },
      {
        title: "Birthday Celebrations",
        slug: "birthday-celebrations",
        desc: "A birthday is not just a date -- it is a celebration of a life well lived. Whether you are marking a golden anniversary of life with a lavish 50th or creating a fantastical world for a child's imagination, we design birthday environments that honour the guest of honour with spaces as remarkable as the person they celebrate.",
        features: ["Theme Development", "Balloon Artistry", "Cake Table Styling", "Photo Zones", "Lighting Effects", "Party Favours Display"],
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
      },
      {
        title: "Conference Styling",
        slug: "conference-styling",
        desc: "The best conferences do not just inform -- they inspire. Our conference styling transforms generic venues into environments that energize delegates, reinforce organizational narratives, and create the perfect backdrop for knowledge exchange and networking.",
        features: ["Registration Design", "Stage Backdrops", "Breakout Room Styling", "Exhibition Stands", "Delegate Kits", "Signage & Wayfinding"],
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
      },
      {
        title: "Floral Design",
        slug: "floral-design",
        desc: "Flowers are not decoration -- they are living art. Our floral design studio pushes the boundaries of botanical expression, creating arrangements that range from classical European elegance to avant-garde sculptural installations. Each composition is crafted with seasonality, symbolism, and structural integrity in mind.",
        features: ["Bridal Bouquets", "Centerpiece Design", "Hanging Installations", "Arch & Arbour Florals", "Church & Venue Florals", "Corsages & Boutonnieres"],
        image: "https://images.unsplash.com/photo-1459501462159-97d5bded1416?w=800&q=80",
      },
      {
        title: "Custom Installations",
        slug: "custom-installations",
        desc: "For those who demand the extraordinary. Our custom installation division creates one-of-a-kind structural pieces that become the defining element of any event. Suspended floral chandeliers, LED light sculptures, immersive entrance tunnels -- we make the impossible tangible.",
        features: ["Suspended Gardens", "Light Sculptures", "Entrance Experiences", "Ceiling Installations", "Interactive Displays", "Structural Draping"],
        image: "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
      },
    ],
  },

  projects: {
    heroTitle: "Our Portfolio",
    heroSubtitle: "A curated selection of our most extraordinary transformations.",
    items: [
      {
        title: "The Velvet Garden",
        slug: "the-velvet-garden",
        category: "Wedding",
        location: "Harare, Zimbabwe",
        desc: "An enchanted garden wedding where deep burgundy velvet met cascading white roses beneath a canopy of 10,000 fairy lights.",
        client: "Private Wedding",
        services: ["Ceremony Decor", "Reception Styling", "Floral Design", "Lighting"],
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&q=80",
          "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        ],
      },
      {
        title: "Golden Hour Celebration",
        slug: "golden-hour-celebration",
        category: "Birthday",
        location: "Johannesburg, South Africa",
        desc: "A milestone 50th birthday transformed into a sun-drenched golden hour experience with amber tones and gilded accents.",
        client: "Private Birthday",
        services: ["Theme Design", "Balloon Artistry", "Floral Design", "Lighting"],
        image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&q=80",
          "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
        ],
      },
      {
        title: "Crystal Canopy Affair",
        slug: "crystal-canopy-affair",
        category: "Wedding",
        location: "Bulawayo, Zimbabwe",
        desc: "Suspended crystal installations and white orchid cascades transformed a heritage venue into a palace of light.",
        client: "Private Wedding",
        services: ["Custom Installations", "Floral Design", "Lighting", "Draping"],
        image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80",
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
        ],
      },
      {
        title: "The Obsidian Gala",
        slug: "the-obsidian-gala",
        category: "Corporate",
        location: "Harare, Zimbabwe",
        desc: "An annual corporate awards gala dressed in black, gold, and candlelight with a 12-metre floral wall.",
        client: "ZB Financial Holdings",
        services: ["Stage Design", "Brand Integration", "Floral Wall", "VIP Styling"],
        image: "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80",
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        ],
      },
      {
        title: "Rose Gold Reverie",
        slug: "rose-gold-reverie",
        category: "Wedding",
        location: "Johannesburg, South Africa",
        desc: "A modern wedding draped in blush, rose gold, and copper. Geometric terrariums and cascading orchids.",
        client: "Private Wedding",
        services: ["Ceremony Decor", "Reception Styling", "Custom Metalwork", "Florals"],
        image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1469371670807-013ccf25f16a?w=800&q=80",
          "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
        ],
      },
      {
        title: "The Botanical Theatre",
        slug: "the-botanical-theatre",
        category: "Conference",
        location: "Harare, Zimbabwe",
        desc: "A three-day leadership conference reimagined as a botanical experience with living plant walls.",
        client: "EcoBank Group",
        services: ["Conference Styling", "Living Walls", "Signage", "Breakout Design"],
        image: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=800&q=80",
          "https://images.unsplash.com/photo-1529543544282-ea99407407c3?w=800&q=80",
        ],
      },
      {
        title: "Midnight in Morocco",
        slug: "midnight-in-morocco",
        category: "Birthday",
        location: "Harare, Zimbabwe",
        desc: "A 40th birthday transported to the riads of Marrakech with jewel tones and Moroccan lanterns.",
        client: "Private Birthday",
        services: ["Theme Design", "Lighting Design", "Textile Styling", "Scent Design"],
        image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&q=80",
          "https://images.unsplash.com/photo-1478146059778-26028b07395a?w=800&q=80",
        ],
      },
      {
        title: "White Orchid Suite",
        slug: "white-orchid-suite",
        category: "Wedding",
        location: "Bulawayo, Zimbabwe",
        desc: "Over 5,000 white phalaenopsis orchids creating a monochromatic masterwork of botanical architecture.",
        client: "Private Wedding",
        services: ["Floral Design", "Ceremony Styling", "Reception Decor", "Lighting"],
        image: "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1544078751-58fee2d8a03b?w=800&q=80",
          "https://images.unsplash.com/photo-1459501462159-97d5bded1416?w=800&q=80",
        ],
      },
      {
        title: "The Luminaire Launch",
        slug: "the-luminaire-launch",
        category: "Corporate",
        location: "Johannesburg, South Africa",
        desc: "A premium product launch designed around light with custom LED installations and projection mapping.",
        client: "Samsung Africa",
        services: ["Stage Design", "LED Installations", "Brand Styling", "VIP Experience"],
        image: "https://images.unsplash.com/photo-1529543544282-ea99407407c3?w=800&q=80",
        images: [
          "https://images.unsplash.com/photo-1529543544282-ea99407407c3?w=800&q=80",
          "https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?w=800&q=80",
        ],
      },
    ],
  },

  homeTestimonials: [
    {
      text: "Sulpice did not just decorate our wedding -- they created a world we never wanted to leave. Every guest said it was the most beautiful event they had ever attended. The floral installations took our breath away.",
      name: "Rumbidzai Chikore",
      role: "Bride, Harare Wedding",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
    {
      text: "We have worked with event companies across Southern Africa, and Sulpice stands in a class of their own. The stage design for our annual gala received more social media coverage than the event itself.",
      name: "Thomas Manyika",
      role: "CEO, ZB Financial Holdings",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    },
    {
      text: "My 50th birthday was everything I dreamed and more. The golden hour theme was executed with such precision -- every photograph looks like it belongs in a magazine. Sulpice turned an ordinary venue into a palace.",
      name: "Grace Moyo",
      role: "Birthday Celebrant, Johannesburg",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80",
    },
    {
      text: "The conference styling completely changed the energy of our event. Delegates were more engaged, more creative, and more inspired. The botanical design elements were unlike anything we have seen.",
      name: "David Chigumira",
      role: "Events Director, EcoBank",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80",
    },
    {
      text: "From our first consultation to the last candle being placed, Sulpice made us feel like our wedding was the only event in the world. The crystal canopy they created was nothing short of magical.",
      name: "Tatenda & Michael Ndlovu",
      role: "Couple, Bulawayo Wedding",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    },
  ],

  about: {
    heroTitle: "The Sulpice Story",
    heroSubtitle: "Born from a passion for beauty. Built on a foundation of excellence across three countries.",
    story: [
      "Sulpice was founded in 2016 with a singular belief: that every gathering, no matter the scale, deserves to be wrapped in beauty. What began as a small floral design studio in Eastlea, Harare, has grown into one of Southern Africa's most sought-after event design companies.",
      "Today, with branches in Harare, Bulawayo, and Johannesburg, we bring the same obsessive attention to detail and creative ambition to every project. Our team of designers, florists, and installation artists share one thing -- an unwillingness to settle for ordinary.",
      "Over 500 events and counting, from intimate garden weddings to 1,000-guest corporate galas, we have proven that great design has the power to transform not just spaces, but the way people feel within them.",
    ],
    values: [
      { title: "Artistry First", desc: "Every detail is a design decision. We approach each event as a creative composition, not a checklist." },
      { title: "Bespoke Always", desc: "No templates. No shortcuts. Every event is designed from scratch to reflect your unique vision." },
      { title: "Multi-Country Excellence", desc: "Same world-class standard whether you are in Harare, Bulawayo, or Johannesburg." },
      { title: "End-to-End Care", desc: "From concept sketches to on-site installation and post-event breakdown. We handle everything." },
    ],
    team: [
      {
        name: "Patience Sulpice",
        role: "Creative Director & Founder",
        bio: "With over 12 years in event design, Patience's eye for colour, proportion, and emotional storytelling has defined the Sulpice aesthetic.",
        image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=400&q=80",
      },
      {
        name: "Tendai Marange",
        role: "Lead Floral Artist",
        bio: "Trained in European botanical arts, Tendai brings a rare fusion of classical technique and African botanical expression to every arrangement.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
      },
      {
        name: "James Karonga",
        role: "Event Coordinator",
        bio: "The logistics maestro behind every flawless execution. James ensures that the creative vision is delivered on time, on budget, and beyond expectation.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      },
      {
        name: "Kudzai Sibanda",
        role: "Design Architect",
        bio: "Our structural imagination. Kudzai designs and engineers the custom installations that have become Sulpice's signature.",
        image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      },
    ],
  },

  reviews: {
    heroTitle: "Client Voices",
    heroSubtitle: "Hear from the brides, executives, and celebrants who trusted us with their most important moments.",
    items: [
      { text: "Sulpice did not just decorate our wedding -- they created a world we never wanted to leave. Every guest said it was the most beautiful event they had ever attended.", name: "Rumbidzai Chikore", role: "Bride, Harare Wedding", rating: 5 },
      { text: "We have worked with event companies across Southern Africa, and Sulpice stands in a class of their own. The stage design for our annual gala was extraordinary.", name: "Thomas Manyika", role: "CEO, ZB Financial Holdings", rating: 5 },
      { text: "My 50th birthday was everything I dreamed and more. The golden hour theme was executed with precision -- every photograph looks like it belongs in a magazine.", name: "Grace Moyo", role: "Birthday Celebrant, Johannesburg", rating: 5 },
      { text: "The conference styling completely changed the energy of our event. Delegates were more engaged, more creative, and more inspired than ever before.", name: "David Chigumira", role: "Events Director, EcoBank", rating: 5 },
      { text: "From our first consultation to the last candle being placed, Sulpice made us feel like our wedding was the only event in the world.", name: "Tatenda Ndlovu", role: "Bride, Bulawayo Wedding", rating: 5 },
      { text: "The Moroccan-themed birthday party Sulpice created was out of this world. The textures, the scents, the lighting -- it was a complete sensory experience.", name: "Farai Mushonga", role: "Birthday Celebrant, Harare", rating: 5 },
      { text: "Our product launch needed to feel premium. Sulpice understood the brief perfectly -- the LED installations and brand integration were flawless.", name: "Nyasha Karimanzira", role: "Marketing Director, Samsung Africa", rating: 5 },
      { text: "I cried when I walked into my reception. The rose gold and copper theme was more beautiful than anything I had seen on Pinterest. Sulpice made my dream real.", name: "Chiedza Mapuranga", role: "Bride, Johannesburg Wedding", rating: 5 },
      { text: "Three years running, Sulpice has styled our annual dinner. Each year they outdo themselves. The attention to detail and creative evolution is remarkable.", name: "Patrick Makoni", role: "Managing Partner, Deloitte Zimbabwe", rating: 5 },
      { text: "The floral arrangements at our wedding were living art. The suspended orchid installation above the dance floor was the most photographed element of our entire day.", name: "Tsitsi & Kevin Masvosva", role: "Couple, Harare Wedding", rating: 5 },
      { text: "Sulpice turned a plain conference centre into an inspiring botanical workspace. Our delegates could not stop talking about the environment.", name: "Linda Masuku", role: "HR Director, Old Mutual Zimbabwe", rating: 5 },
      { text: "My daughter's sweet sixteen was pure magic. The team created a fairy-tale world complete with a living flower wall and custom photo experiences.", name: "Margaret Chitsiga", role: "Parent, Birthday Client", rating: 5 },
      { text: "Working with Sulpice on our Bulawayo branch launch was effortless. They handled everything from concept to cleanup. The result was stunning.", name: "Robert Mugwagwa", role: "COO, FBC Holdings", rating: 5 },
      { text: "I have referred Sulpice to every bride I know. Their professionalism, creativity, and genuine care for your vision sets them apart from everyone else.", name: "Yeukai Chimwanda", role: "Wedding Planner, Harare", rating: 5 },
      { text: "The white orchid wedding they created for us was the most elegant event our families had ever witnessed. Sulpice operates at a level few can match.", name: "Melody & Simon Phiri", role: "Couple, Bulawayo Wedding", rating: 5 },
      { text: "Our company milestone celebration was transformed by Sulpice. What could have been a standard corporate dinner became an unforgettable experience.", name: "Angela Mhembere", role: "CEO, Liquid Intelligent Technologies", rating: 5 },
      { text: "Sulpice's work speaks for itself, but their process is equally impressive. Clear communication, transparent pricing, and zero stress on the day.", name: "Brian Mutema", role: "Father of the Bride, Harare", rating: 5 },
    ],
  },

  careers: {
    heroTitle: "Join the Studio",
    heroSubtitle: "If you believe beauty is a profession, not a pastime, we want to hear from you.",
    positions: [
      {
        title: "Junior Floral Designer",
        department: "Floral Studio",
        location: "Harare",
        type: "Full-time",
        desc: "Assist our lead floral artist in creating arrangements for weddings, corporate events, and installations.",
      },
      {
        title: "Event Setup Coordinator",
        department: "Operations",
        location: "Johannesburg",
        type: "Full-time",
        desc: "Lead on-site installation teams to ensure every event is set up to our exacting standards.",
      },
    ],
  },

  contact: {
    heroTitle: "Let's Create Together",
    heroSubtitle: "Tell us about your event, and we'll show you what's possible.",
    branches: [
      {
        name: "Harare Studio",
        address: "28 Midlothian Ave, Eastlea, Harare, Zimbabwe",
        phone: "+263 77 233 5903",
        email: "sulpicedesignszim@gmail.com",
      },
      {
        name: "Bulawayo Office",
        address: "Bulawayo, Zimbabwe",
        phone: "+263 77 233 5903",
        email: "sulpicedesignszim@gmail.com",
      },
      {
        name: "Johannesburg Studio",
        address: "Johannesburg, South Africa",
        phone: "+263 77 233 5903",
        email: "sulpicedesignszim@gmail.com",
      },
    ],
  },

  homeCta: {
    title: "YOUR VISION, OUR ARTISTRY",
    subtitle: "Every extraordinary event begins with a single conversation. Tell us about the moment you want to create, and let us show you what is possible.",
    ctaPrimary: "Plan Your Event",
    ctaSecondary: "Chat on WhatsApp",
    whatsappText: "Hello Sulpice! I'd like to discuss an upcoming event.",
    backgroundImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1920&q=85",
  },

  footer: {
    description: "Zimbabwe and South Africa's premier event decor company. Transforming ordinary spaces into extraordinary experiences since 2016.",
    copyright: "Sulpice Designs",
  },
};

export default siteData;
