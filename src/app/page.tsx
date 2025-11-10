"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import AboutFeature from '@/components/sections/about/AboutFeature';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { Crown, Utensils, Sparkles, MapPin, Bed, Star, Award, HelpCircle, Instagram, Facebook, Twitter } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="large"
      background="none"
      cardStyle="glass-flat"
      primaryButtonStyle="radial-glow"
      secondaryButtonStyle="outline"
      showBlurBottom={true}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://pixabay.com/get/gf59e99cfa6e8050ca7655274892c778389e9ba758bbe4aa4f63fe17d0b376ea6e61e56bd601637487478c9ab1784050d2975784dba0b8dd7aed7c5b23c818699_1280.jpg"
          logoAlt="Luxury Hotel India"
          brandName="Heritage Palace"
          button={{
            text: "Book Now",
            href: "contact"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Heritage Palace"
          description="Experience the Best of India from Our Doorstep. Luxurious stays, warm hospitality, and unforgettable views await you in the heart of incredible India."
          buttons={[
            {
              text: "Book Your Escape Now",
              href: "contact"
            },
            {
              text: "Explore Rooms",
              href: "rooms"
            }
          ]}
          imageSrc="https://pixabay.com/get/g9c2173554dceee008972d0fe9a157e74009895c8c2b4b4a857e1ac27f05d93e55528eea8cb1789e05476024332feed38a38c6a4c405f952392334dd1305bf80b_1280.jpg"
          imageAlt="Luxury hotel exterior at sunset"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <AboutFeature
          title="At Heritage Palace, we believe in creating experiences that inspire, empower, and transform. Our dedication to luxury hospitality makes every stay a memorable journey through India's rich heritage."
          features={[
            {
              icon: Crown,
              title: "Royal Heritage",
              description: "Immerse yourself in India's rich cultural heritage with authentic royal architecture and traditional hospitality that has welcomed guests for generations."
            },
            {
              icon: Utensils,
              title: "Culinary Excellence",
              description: "Savor authentic Indian cuisine and international delicacies prepared by master chefs using the finest local ingredients and traditional recipes."
            },
            {
              icon: Sparkles,
              title: "Luxury Amenities",
              description: "Indulge in world-class spa treatments, infinity pools, fitness centers, and personalized concierge services designed for the discerning traveler."
            },
            {
              icon: MapPin,
              title: "Prime Location",
              description: "Located in the heart of India's cultural capital, offering easy access to historic monuments, vibrant markets, and authentic local experiences."
            }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Accommodations"
          description="Discover our collection of elegantly appointed rooms and suites, each designed to provide the ultimate comfort and authentic Indian hospitality experience."
          tag="Featured Rooms"
          tagIcon={Bed}
          textboxLayout="default"
          gridVariant="uniform-all-items-equal"
          animationType="slide-up"
          products={[
            {
              id: "deluxe-room",
              brand: "Heritage Palace",
              name: "Deluxe Garden View",
              price: "₹8,500/night",
              rating: 5,
              reviewCount: "2.4k",
              imageSrc: "https://pixabay.com/get/g5c0265c78ab565329fbee0b7f1f58228693fa027355b7d4786ef4b0456a38e07b61f535f3de96ee2931b05a5b1d5dec37f55b3e89af35fa23c00f8cb1311b34b_1280.jpg",
              imageAlt: "Deluxe room with garden view"
            },
            {
              id: "executive-suite",
              brand: "Heritage Palace",
              name: "Executive Palace Suite",
              price: "₹18,000/night",
              rating: 5,
              reviewCount: "1.8k",
              imageSrc: "https://pixabay.com/get/g7469fd0cdcd379fdd2fcf8e259850c760d076f8cf5de9ab27bd2f59c3ac159ffebb7757036cfae887db8c9fafdd89f2aa6ddc69ea36be7b64835f57fc39debe1_1280.jpg",
              imageAlt: "Executive palace suite interior"
            },
            {
              id: "family-room",
              brand: "Heritage Palace",
              name: "Royal Family Room",
              price: "₹15,000/night",
              rating: 5,
              reviewCount: "3.1k",
              imageSrc: "https://pixabay.com/get/g7fff81dae4b9813d6f840109cb88745989f05071df7ef52cc90716c9e3b583eb4e907f30a7bc8a9afbb21f2fbb04d173e05710ec27bcc2db6f45980c51d7ea47_1280.jpg",
              imageAlt: "Spacious family room"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear what our valued guests say about their unforgettable stays at Heritage Palace"
          tag="Reviews"
          tagIcon={Star}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Rajesh Kumar",
              role: "Business Executive",
              testimonial: "The Heritage Palace exceeded all expectations. From the moment I arrived, the staff provided impeccable service, and the royal architecture transported me back in time. Perfect for business and leisure.",
              imageSrc: "https://pixabay.com/get/g8507416997e2f14cb9070c6e5357f61eb4c4a5e88fe380b155f46eddb72059d139fc36ee24d48dfa8588d4d0166fd6d064eccb340596aa3f70a37ec8f4465ed5_1280.jpg",
              imageAlt: "Portrait of Rajesh Kumar"
            },
            {
              id: "2",
              name: "Sarah Williams",
              role: "Travel Blogger",
              testimonial: "An absolutely magical experience! The attention to detail, authentic Indian hospitality, and luxurious amenities made this the highlight of my India tour. I'll definitely be returning.",
              imageSrc: "https://pixabay.com/get/g2060508c167a54cbcad42eed3f54f34d00aa76d7e337ce93edf8f313293412c8f2674d589f8982636dad4333c427cbbe51dc4dd21287dde4ed39823ae91024c9_1280.jpg",
              imageAlt: "Portrait of Sarah Williams"
            },
            {
              id: "3",
              name: "Michael & Emma Chen",
              role: "Honeymooners",
              testimonial: "Our honeymoon at Heritage Palace was like a fairytale. The romantic ambiance, exceptional dining, and personalized service created memories we'll treasure forever.",
              imageSrc: "https://pixabay.com/get/ge7ceb36a8aacf9ef92f4ad7c3b86dc41dfc9238964b8e5dcadc9661e4df17baab94dc47f0817f81dd077e3b0ef149590558992cc229c0f08d81cd362c641c038_1280.jpg",
              imageAlt: "Portrait of Michael and Emma Chen"
            },
            {
              id: "4",
              name: "The Sharma Family",
              role: "Family Travelers",
              testimonial: "Perfect family destination! The spacious rooms, kid-friendly amenities, and cultural activities kept everyone happy. The staff went above and beyond to make our stay special.",
              imageSrc: "https://pixabay.com/get/g68fee6f173b024943a5ff0ab3ef80dcf7bd730535edc9b7f0a76754d02f4015e83b0d43299459230c16b0585e1fc18e0de568eff83f83b29f27da35daa443061_1280.jpg",
              imageAlt: "Portrait of the Sharma family"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted Hospitality Partners"
          description="Join the network of premium hotels and resorts that guests trust for exceptional experiences across India"
          tag="Partners"
          tagIcon={Award}
          textboxLayout="default"
          logos={[
            "https://pixabay.com/get/g7050ae3c603bd2035d6a2224523e43573bc799c760d41e7dc4ebc108bd5b9085386cac11fa7e37f801dde24c4d198d63e4396b2fcdcdc9430361e62f98f279b0_1280.jpg",
            "https://pixabay.com/get/g568bb184bd27c7784062df97cf449f506cb919b4527fc1d2bf12079d43dc2a01294d59bb8a0d7a788ee0cf153890a732556d7433a4ecfaadc234d1722cc2afda_1280.jpg",
            "https://pixabay.com/get/g0db2976726e00675021beb8d44bb7f0aea1f829af94186a717139aa4423bcc6ac27d83f758114472b1910310a195b70675f177431cc162cc5f4f90b89731ac58_1280.jpg",
            "https://pixabay.com/get/g4c12220d59c3c0136f63e5b7694a7f42c77f4df394a05acf1009ea745c55bd19588fb21b483942c6ae2957f4c6a138c494fe4edfd8b33946de33e91ea786cce8_1280.jpg",
            "https://pixabay.com/get/g5255f90fec767a6711c4af8bc5004cc95f7c4c4a67144e9072d35979ba947469e1f29c589d57389accc77ab2401473edd62f840fa50014bd85e9bf042140f7be_1280.jpg",
            "https://pixabay.com/get/g95a5f1342b22420e672b772ace27822dd3eefd01150dca5bfa8ef894f5d766dee34ccc374da0c6291e7465b17c79d17c0423450edc2b519d4219c074c7473f87_1280.jpg",
            "https://pixabay.com/get/gc293def1a077301b7c8358b03903e9ed04cd8d3df38cea7faaca4eff96c7da7c8b0e031c420a9b8c3d1b39c92d44c1441be58e142ac9f25e505c6863dcef36ff_1280.jpg"
          ]}
          speed={35}
          showCard={true}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services, amenities, and booking policies"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          mediaPosition="left"
          imageSrc="https://pixabay.com/get/g9a139698827249ea1154990de678e1789dfc35810b1d9158c80ff4f7376ffa6d76e31c47141cff82ed5a1cb182ab2b9fc0775547f1e9fbfd0a3ee2dfa8ad5300_1280.jpg"
          imageAlt="Hotel concierge providing service"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "What are your check-in and check-out times?",
              content: "Check-in is at 3:00 PM and check-out is at 12:00 PM. Early check-in and late check-out are available upon request, subject to availability and may incur additional charges."
            },
            {
              id: "2",
              title: "Do you provide airport transfer services?",
              content: "Yes, we offer complimentary airport transfers for all guests. Our luxury vehicles and professional drivers ensure a comfortable journey to and from the hotel."
            },
            {
              id: "3",
              title: "What dining options are available?",
              content: "We feature three world-class restaurants: Royal Spice (authentic Indian cuisine), Garden Terrace (international dishes), and Sky Lounge (cocktails and light bites) with 24-hour room service."
            },
            {
              id: "4",
              title: "Is Wi-Fi available throughout the hotel?",
              content: "Yes, complimentary high-speed Wi-Fi is available in all rooms, public areas, restaurants, and conference facilities. Business center with printing and meeting facilities is also available."
            },
            {
              id: "5",
              title: "What recreational facilities do you offer?",
              content: "Our amenities include a luxury spa, infinity pool, fully equipped fitness center, yoga pavilion, and traditional Ayurvedic wellness treatments. We also arrange cultural tours and local experiences."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Plan Your Perfect Stay"
          description="Ready to experience luxury hospitality at its finest? Contact us to book your reservation or learn more about our exclusive packages and services."
          inputs={[
            {
              name: "name",
              type: "text",
              placeholder: "Your Full Name",
              required: true
            },
            {
              name: "email",
              type: "email",
              placeholder: "Email Address",
              required: true
            },
            {
              name: "phone",
              type: "tel",
              placeholder: "Phone Number",
              required: true
            },
            {
              name: "checkin",
              type: "date",
              placeholder: "Check-in Date",
              required: true
            },
            {
              name: "checkout",
              type: "date",
              placeholder: "Check-out Date",
              required: true
            }
          ]}
          textarea={{
            name: "message",
            placeholder: "Special requests or questions about your stay...",
            rows: 4,
            required: false
          }}
          imageSrc="https://pixabay.com/get/g90da1e041201184e17fb69d57f2b1d87953cc86fb8eac3d8127dc8815568b6f52dde88d45901b5860bf7632be4aa90972f11a9e745a5251f8c331573969a2fb9_1280.jpg"
          imageAlt="Luxury hotel amenities and spa"
          mediaPosition="right"
          buttonText="Book Your Stay"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Heritage Palace"
          copyrightText="© 2025 Heritage Palace. All rights reserved."
          columns={[
            {
              title: "Hotel",
              items: [
                {
                  label: "Rooms & Suites",
                  href: "rooms"
                },
                {
                  label: "Dining",
                  href: "dining"
                },
                {
                  label: "Spa & Wellness",
                  href: "spa"
                }
              ]
            },
            {
              title: "Services",
              items: [
                {
                  label: "Concierge",
                  href: "concierge"
                },
                {
                  label: "Business Center",
                  href: "business"
                },
                {
                  label: "Event Spaces",
                  href: "events"
                }
              ]
            },
            {
              title: "Experience",
              items: [
                {
                  label: "Local Tours",
                  href: "tours"
                },
                {
                  label: "Cultural Programs",
                  href: "culture"
                },
                {
                  label: "Packages",
                  href: "packages"
                }
              ]
            },
            {
              title: "Support",
              items: [
                {
                  label: "Contact Us",
                  href: "contact"
                },
                {
                  label: "Help Center",
                  href: "faq"
                },
                {
                  label: "Booking Policy",
                  href: "policy"
                }
              ]
            }
          ]}
          socialLinks={[
            {
              icon: Instagram,
              href: "https://instagram.com/heritagepalace",
              ariaLabel: "Instagram"
            },
            {
              icon: Facebook,
              href: "https://facebook.com/heritagepalace",
              ariaLabel: "Facebook"
            },
            {
              icon: Twitter,
              href: "https://twitter.com/heritagepalace",
              ariaLabel: "Twitter"
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}