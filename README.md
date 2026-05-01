# CSCI390-PROJECT2
This is a repository to Demonstrate version control and deployment skills using Git and GitHub according to the project  Objectives
================================================================================
                            GAMESTREAM PROJECT OVERVIEW
================================================================================

PROJECT NAME: GameStream
TYPE: Gaming E-commerce Aggregator Website
STATUS: MVP (Minimum Viable Product) Complete
LAST UPDATED: April 2026
OWNERS: Ali Shaer & Sajid Ghandour

================================================================================
                              PROJECT SUMMARY
================================================================================

GameStream is a multi-page static website that serves as a centralized hub for
discovering games and gaming equipment across multiple platforms. The site
aggregates listings from Steam, Xbox, PlayStation, and Nintendo, providing users
with a unified browsing experience before redirecting to official stores for
purchases.

================================================================================
                              FILE STRUCTURE
================================================================================

ROOT DIRECTORY: C:/Users/user/Desktop/WEBPROJECTALISAJID/

HTML FILES:
├── Home.html          (Landing page with best sellers & featured equipment)
├── Steam.html         (Steam platform games and deals)
├── Xbox.html          (Xbox/Game Pass games and exclusives)
├── PlayStation.html   (PS5/PS4 games and PS Plus collection)
├── Nintendo.html      (Nintendo Switch games and exclusives)
├── Equipment.html     (Gaming accessories, controllers, peripherals)
├── Login.html         (User authentication with animated UI)
└── Checkout.html      (Shopping cart and payment processing)

ASSETS:
└── bootstrap-5.3.8-dist/    (Bootstrap framework files - USED THROUGH THE BOOTSTRAP 5 EXTENTION ON VSCODE STORE)

================================================================================
                           PAGE DESCRIPTIONS
================================================================================

HOME.HTML
---------
Purpose: Main landing page and site entry point
Key Sections:
  • Glassmorphism navigation bar with sticky positioning
  • Hero section with platform selector (Steam, Xbox, PlayStation, Nintendo)
  • Flash deals banner (4 promotional cards)
  • Best Sellers grid (8 game cards with pricing)
  • Featured Equipment section (6 product cards)
  • Footer with site links
Features:
  • Responsive mobile menu
  • Hover effects on cards and buttons
  • Dynamic game card click handlers (opens external stores)
  • Platform-themed color coding

STEAM.HTML
----------
Purpose: Steam platform-specific game listings
Theme Colors: Steam Blue (#1b2838, #66c0f4)
Key Sections:
  • Platform hero with Steam branding
  • Featured Deals section
  • Top Rated Steam Games grid
  • Early Access highlights
Features:
  • Consistent navigation with active state
  • Game cards link to store.steampowered.com

XBOX.HTML
---------
Purpose: Xbox Series X|S and Game Pass content
Theme Colors: Xbox Green (#107c10, #9bf00b)
Key Sections:
  • Xbox-exclusive hero section
  • Xbox Exclusives grid (Halo, Forza, Gears, Starfield)
  • Game Pass Highlights section
  • Promotional deal cards
Features:
  • Game Pass "Included" badge support
  • Xbox Store integration links

PLAYSTATION.HTML
----------------
Purpose: PlayStation 5 and PS4 game catalog
Theme Colors: PlayStation Blue (#003791, #66a0ff)
Key Sections:
  • PlayStation-exclusive hero
  • PS Exclusives grid (Spider-Man, God of War, Last of Us, Ghost)
  • PS Plus Collection section
  • PS VR2 promotions
Features:
  • PS Plus "Included" badge support
  • PlayStation Store integration links

NINTENDO.HTML
-------------
Purpose: Nintendo Switch games and exclusives
Theme Colors: Nintendo Red (#e60012, #ff4d4d)
Key Sections:
  • Nintendo eShop hero section
  • Nintendo Exclusives grid (Zelda, Mario, Metroid, Pokemon)
  • Indie Highlights section
  • Switch Online promotions
Features:
  • Nintendo eShop integration links

EQUIPMENT.HTML
--------------
Purpose: Gaming peripherals and hardware
Key Sections:
  • Controllers (DualSense Edge, Xbox Elite, Pro Controller)
  • Consoles (Steam Deck, Switch OLED)
  • Accessories (Headsets, Keyboards, Mice)
  • Multi-platform compatibility indicators
Features:
  • Equipment-specific categorization
  • Amazon/Newegg affiliate-style links

LOGIN.HTML
----------
Purpose: User authentication interface
Design: Animated rotating rings with glassmorphism form
Features:
  • Three rotating ring animations (CSS keyframes)
  • Username/password input fields
  • "Forgot Password" and "Sign Up" links
  • Hover effects on animated rings
Note: Currently frontend-only (no backend authentication implemented)

CHECKOUT.HTML (Assumed Structure)
---------------------------------
Purpose: Shopping cart and payment processing
Expected Sections:
  • Cart summary with item list
  • Price breakdown (subtotal, tax, shipping)
  • Payment method selection
  • Shipping address form
  • Order confirmation button
Note: This page exists in project planning but implementation details TBD

================================================================================
                           DESIGN SYSTEM
================================================================================

COLOR PALETTE:
-------------
Primary Background:    #0b132b (Dark navy)
Secondary Background:  #1c2541 (Lighter navy)
Accent Gold:           #ffb703 (CTAs, prices)
Text Primary:          #f5f7ff (White-ish)
Text Secondary:        #bfc7e6 (Muted blue-gray)

Platform Colors:
  • Steam:        #1b2838 / #66c0f4
  • Xbox:         #107c10 / #9bf00b
  • PlayStation:  #003791 / #66a0ff
  • Nintendo:     #e60012 / #ff4d4d

TYPOGRAPHY:
-----------
Font Family: "Trebuchet MS", "Segoe UI", sans-serif
Heading Sizes:
  • H1 (Hero): 2.5rem (mobile: 1.75rem)
  • Section Titles: 1.5rem
  • Card Titles: 0.95rem

COMPONENTS:
-----------
• Navbar: Glassmorphism (backdrop-filter: blur), sticky positioning
• Cards: Rounded (12px), subtle border, hover lift effect
• Buttons: Rounded (10px), gold background, hover transform
• Platform Badges: Color-coded by platform
• Price Display: Gold text with optional strikethrough original price

================================================================================
                           TECHNICAL DETAILS
================================================================================

TECH STACK:
-----------
• Frontend: Vanilla HTML5, CSS3, JavaScript (ES6+)
• CSS Features: CSS Grid, Flexbox, CSS Variables (limited), Keyframe Animations
• Responsive: Media queries at 760px breakpoint
• No External Frameworks: Bootstrap included

BROWSER SUPPORT:
----------------
• Modern browsers (Chrome, Firefox, Safari, Edge)
• CSS backdrop-filter requires modern browser

PERFORMANCE NOTES:
------------------
• All CSS is inline (no external stylesheets)
• Images use placeholder.co service
• No minification currently applied
• Static site - no server-side processing required

================================================================================
                           FUNCTIONALITY
================================================================================

CURRENT FEATURES:
-----------------
✓ Multi-page navigation with active state indicators
✓ Responsive design (mobile hamburger menu)
✓ Platform-specific themed pages
✓ Game cards with pricing and discounts
✓ Equipment product listings
✓ Animated login page
✓ External store linking (Steam, Xbox, PlayStation, Nintendo)
✓ JavaScript card click handlers

PLANNED FEATURES:
-----------------
• Functional checkout process
• User authentication backend
• Shopping cart persistence
• Search functionality
• Filter and sort options
• Expand real per-title product image coverage
• Affiliate link integration

KNOWN ISSUES:
-------------
• Not all pages use exact product thumbnails yet (fallback image service used for reliability)
• Some long-list titles still use official store search fallback when a verified exact product URL is unavailable

================================================================================
                           EXTERNAL INTEGRATIONS
================================================================================

STORE REDIRECTS:
----------------
The site links to official stores using exact product URLs where mapped, with search fallback:
• Steam: store.steampowered.com/app/{app_id} or store.steampowered.com/search/?term={game_name}
• Xbox: xbox.com/en-US/games/{title} or xbox.com/en-US/Search/Results?q={game_name}
• PlayStation: playstation.com game pages or store.playstation.com search URLs
• Nintendo: nintendo.com/us/store/products/{title-slug}-switch/ or nintendo.com/us/search/#q={game_name}
• Equipment: amazon.com/s?k={product_name} or newegg.com

================================================================================
                           DEVELOPMENT NOTES
================================================================================

CODING STANDARDS:
-----------------
• Semantic HTML5 elements
• Mobile-first responsive approach
• CSS custom properties limited (got some from pintrest and google)

FILE NAMING:
------------
• PascalCase for HTML files (Home.html, Steam.html, etc.)
• Consistent extension (.html)

MAINTENANCE:
------------
• Each page is self-contained (inline styles)
• Changes to shared components require updating multiple files
• No build process or CSS preprocessor currently used

================================================================================
                           PROJECT STATUS
================================================================================

COMPLETED:
----------
✓ All 5 main platform pages (Home, Steam, Xbox, PlayStation, Nintendo)
✓ Equipment page
✓ Login page with animations
✓ Responsive navigation
✓ Footer with proper attribution
✓ Game card interactions

IN PROGRESS:
------------
• Checkout page implementation
• Backend integration planning

TODO:
-----
• Add real product images
•h Implement functional checkout
• Add search functionality
• User account system
• Wishlist feature
• Review and rating system

================================================================================
                              END OF OVERVIEW (Done By Ali Rida El Chaer and Sajid Ghandour)
================================================================================
