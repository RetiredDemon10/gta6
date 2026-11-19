/**
 * Media sourced from the web (official Rockstar GTA VI artwork and Wikimedia
 * Commons hardware photos), optimized and bundled in /public/media so the
 * site loads fast and does not depend on third-party hotlink policies.
 * See MEDIA_SOURCES.md for original URLs and attribution.
 */

const MEDIA = '/media'

export const images = {
  hero: `${MEDIA}/hero.jpg`,
  keyArt: `${MEDIA}/key-art.jpg`,
  keyArtAlt: `${MEDIA}/key-art-alt.jpg`,
  social: `${MEDIA}/social.jpg`,
  launch: `${MEDIA}/launch.jpg`,
  extended: `${MEDIA}/extended.jpg`,
  standardEdition: `${MEDIA}/standard-edition.jpg`,
  ultimateEdition: `${MEDIA}/ultimate-edition.jpg`,
  collectible: `${MEDIA}/collectible.jpg`,
  city: `${MEDIA}/vice-city.jpg`,
  ps5: `${MEDIA}/ps5-slim.png`,
  ps5Classic: `${MEDIA}/ps5.png`,
  xboxX: `${MEDIA}/xbox-x.jpg`,
  xboxS: `${MEDIA}/xbox-s.png`,
  dualSense: `${MEDIA}/dualsense.jpg`,
  xboxController: `${MEDIA}/xbox-controller.jpg`,
  ps5Pro: `${MEDIA}/ps5-pro.jpg`,
  steamDeck: `${MEDIA}/steam-deck.png`,
  dualSenseEdge: `${MEDIA}/dualsense-edge.jpg`,
  nvmeSsd: `${MEDIA}/nvme-ssd.jpg`,
  gamingHeadset: `${MEDIA}/gaming-headset.jpg`,
} as const

export type Trailer = {
  id: string
  title: string
  subtitle: string
  duration: string
  videoId: string
  thumbnail: string
}

export const trailers: Trailer[] = [
  {
    id: 'launch',
    title: 'Launch Trailer',
    subtitle: 'Vice City is open. Welcome back.',
    duration: '2:14',
    videoId: 'tJbzMqJGH4k',
    thumbnail: images.launch,
  },
  {
    id: 'trailer-2',
    title: 'Official Trailer 2',
    subtitle: 'The next chapter in the Grand Theft Auto universe.',
    duration: '2:38',
    videoId: 'VQRLujxTm3c',
    thumbnail: `${MEDIA}/trailer-2.jpg`,
  },
  {
    id: 'trailer-1',
    title: 'Official Trailer 1',
    subtitle: 'The first look at Jason, Lucia and Leonida.',
    duration: '1:30',
    videoId: 'QdBZY2fkU-0',
    thumbnail: `${MEDIA}/trailer-1.jpg`,
  },
]

export type Category = 'Consoles' | 'Bundles' | 'Games' | 'Accessories' | 'Merch'

export type Product = {
  id: string
  name: string
  category: Category
  platform: string
  price: number
  oldPrice?: number
  image: string
  badge?: string
  stock: number
  description: string
  features: string[]
}

export const products: Product[] = [
  {
    id: 'ps5-slim',
    name: 'PlayStation 5 Slim',
    category: 'Consoles',
    platform: 'PlayStation 5',
    price: 499.99,
    oldPrice: 549.99,
    image: images.ps5,
    badge: 'Bestseller',
    stock: 24,
    description:
      'Slimmer design, 1TB SSD and the DualSense controller. Ready for GTA VI on day one.',
    features: ['1TB ultra-fast SSD', '4K gaming up to 120fps', 'DualSense haptics included'],
  },
  {
    id: 'xbox-series-x',
    name: 'Xbox Series X 1TB',
    category: 'Consoles',
    platform: 'Xbox Series X',
    price: 499.99,
    image: images.xboxX,
    badge: 'In stock',
    stock: 18,
    description:
      'The most powerful Xbox console with true 4K gaming and instant resume.',
    features: ['1TB custom SSD', '12 teraflops of power', 'Quick Resume'],
  },
  {
    id: 'xbox-series-s',
    name: 'Xbox Series S 512GB',
    category: 'Consoles',
    platform: 'Xbox Series S',
    price: 299.99,
    oldPrice: 329.99,
    image: images.xboxS,
    badge: 'Best value',
    stock: 32,
    description:
      'Compact, affordable and fully next-gen. Play GTA VI in stunning 1440p.',
    features: ['512GB SSD', '1440p at up to 120fps', 'All-digital library'],
  },
  {
    id: 'gta6-bundle-ps5',
    name: 'GTA VI + PS5 Bundle',
    category: 'Bundles',
    platform: 'PlayStation 5',
    price: 559.99,
    oldPrice: 619.99,
    image: images.keyArt,
    badge: 'Save $60',
    stock: 12,
    description:
      'Everything you need for launch day: a PS5 Slim plus a GTA VI digital code.',
    features: ['PS5 Slim 1TB', 'GTA VI digital download code', 'Free priority shipping'],
  },
  {
    id: 'gta6-bundle-xbox',
    name: 'GTA VI + Xbox Bundle',
    category: 'Bundles',
    platform: 'Xbox Series X',
    price: 559.99,
    image: images.keyArtAlt,
    badge: 'Launch bundle',
    stock: 9,
    description:
      'Xbox Series X paired with GTA VI for the ultimate Leonida experience.',
    features: ['Xbox Series X 1TB', 'GTA VI digital download code', 'Free priority shipping'],
  },
  {
    id: 'gta6-standard',
    name: 'GTA VI — Standard Edition',
    category: 'Games',
    platform: 'PS5 / Xbox',
    price: 69.99,
    image: images.standardEdition,
    badge: 'Digital code',
    stock: 99,
    description:
      'The full single-player story of Jason and Lucia. Digital code delivered by email.',
    features: ['Full base game', 'Digital code by email', 'Works on PS5 or Xbox Series'],
  },
  {
    id: 'gta6-ultimate',
    name: 'GTA VI — Ultimate Edition',
    category: 'Games',
    platform: 'PS5 / Xbox',
    price: 99.99,
    image: images.ultimateEdition,
    badge: 'Most popular',
    stock: 74,
    description:
      'The base game plus exclusive vehicles, weapons, looks and in-game cash.',
    features: ['Full base game', 'Exclusive vehicles & weapons', 'Vice City style pack'],
  },
  {
    id: 'collectors-edition',
    name: "GTA VI Collector's Edition",
    category: 'Bundles',
    platform: 'PS5 / Xbox',
    price: 199.99,
    image: images.collectible,
    badge: 'Limited',
    stock: 6,
    description:
      'A display-worthy set with collectible art, steelbook and Ultimate Edition content.',
    features: ['Ultimate Edition game', 'Exclusive steelbook', 'Printed Vice City art print'],
  },
  {
    id: 'dualsense',
    name: 'DualSense Controller — Chroma Pearl',
    category: 'Accessories',
    platform: 'PlayStation 5',
    price: 79.99,
    image: images.dualSense,
    stock: 41,
    description:
      'Feel every moment in Vice City with haptic feedback and adaptive triggers.',
    features: ['Haptic feedback', 'Adaptive triggers', 'Built-in microphone'],
  },
  {
    id: 'xbox-controller',
    name: 'Xbox Wireless Controller',
    category: 'Accessories',
    platform: 'Xbox Series X|S',
    price: 64.99,
    image: images.xboxController,
    stock: 37,
    description:
      'Precision control with a textured grip and seamless console pairing.',
    features: ['Textured grip', 'Hybrid D-pad', 'Up to 20hr battery life'],
  },
  {
    id: 'ps5-pro',
    name: 'PlayStation 5 Pro',
    category: 'Consoles',
    platform: 'PlayStation 5',
    price: 699.99,
    image: images.ps5Pro,
    badge: 'New arrival',
    stock: 14,
    description:
      'The upgraded PS5 with enhanced ray tracing and AI upscaling for the sharpest Vice City views.',
    features: ['2TB SSD', '4K gaming with PSSR upscaling', 'Enhanced ray tracing'],
  },
  {
    id: 'ps5-digital',
    name: 'PlayStation 5 Digital Edition',
    category: 'Consoles',
    platform: 'PlayStation 5',
    price: 449.99,
    image: images.ps5Classic,
    stock: 21,
    description:
      'All the next-gen power in an all-digital design. Build your GTA VI library from the PlayStation Store.',
    features: ['1TB ultra-fast SSD', 'DualSense controller included', 'All-digital library'],
  },
  {
    id: 'xbox-series-s-1tb',
    name: 'Xbox Series S 1TB',
    category: 'Consoles',
    platform: 'Xbox Series S',
    price: 349.99,
    image: images.xboxS,
    stock: 19,
    description:
      'More room for the big installs with a compact, digital-first Xbox that is ready for GTA VI.',
    features: ['1TB custom SSD', '1440p at up to 120fps', 'Quick Resume'],
  },
  {
    id: 'steam-deck-oled',
    name: 'Steam Deck OLED',
    category: 'Consoles',
    platform: 'PC / Handheld',
    price: 549.99,
    image: images.steamDeck,
    badge: 'Portable',
    stock: 11,
    description:
      'Take your PC library on the go with a vibrant HDR OLED screen and full-size controls.',
    features: ['7.4" HDR OLED display', '512GB NVMe storage', 'Up to 12hr battery life'],
  },
  {
    id: 'dualsense-edge',
    name: 'DualSense Edge Controller',
    category: 'Accessories',
    platform: 'PlayStation 5',
    price: 199.99,
    image: images.dualSenseEdge,
    stock: 16,
    description:
      'A pro-level DualSense with customizable controls, swappable stick caps and adjustable triggers.',
    features: ['Remappable buttons', 'Swappable stick modules', 'Custom trigger travel'],
  },
  {
    id: 'nvme-ssd-2tb',
    name: '2TB NVMe SSD Expansion',
    category: 'Accessories',
    platform: 'PS5 / PC',
    price: 179.99,
    image: images.nvmeSsd,
    badge: 'Fast install',
    stock: 28,
    description:
      'Give GTA VI and the rest of your library room to breathe with a high-speed NVMe drive.',
    features: ['2TB capacity', 'PCIe Gen4 speeds', 'Easy PS5 / PC installation'],
  },
  {
    id: 'gaming-headset',
    name: 'Vice City RGB Gaming Headset',
    category: 'Accessories',
    platform: 'Multi-platform',
    price: 89.99,
    image: images.gamingHeadset,
    stock: 45,
    description:
      'Immersive surround sound and a bright neon design made for late nights in Leonida.',
    features: ['7.1 surround sound', 'Noise-cancelling mic', 'RGB lighting'],
  },
  {
    id: 'gta6-bundle-xbox-s',
    name: 'GTA VI + Xbox Series S Bundle',
    category: 'Bundles',
    platform: 'Xbox Series S',
    price: 399.99,
    oldPrice: 449.99,
    image: images.keyArtAlt,
    badge: 'Save $50',
    stock: 8,
    description:
      'A compact next-gen Xbox bundled with a GTA VI digital code for less than buying separately.',
    features: ['Xbox Series S 512GB', 'GTA VI digital download code', 'Free priority shipping'],
  },
  {
    id: 'gta6-vinyl',
    name: 'GTA VI — Vinyl Soundtrack',
    category: 'Merch',
    platform: 'Merchandise',
    price: 39.99,
    image: images.extended,
    badge: 'Collectible',
    stock: 50,
    description:
      'A two-disc vinyl pressing featuring the sounds of Leonida, housed in a gatefold sleeve.',
    features: ['Gatefold 2LP set', 'Original game score', 'Vice City-inspired artwork'],
  },
  {
    id: 'gta6-art-book',
    name: 'GTA VI — Vice City Art Book',
    category: 'Merch',
    platform: 'Merchandise',
    price: 34.99,
    image: images.collectible,
    stock: 60,
    description:
      'A hardcover look at the characters, vehicles and sun-soaked world behind GTA VI.',
    features: ['Hardcover edition', 'Concept art & character designs', 'Behind-the-scenes notes'],
  },
  {
    id: 'gta6-steelbook',
    name: 'GTA VI — Steelbook Case',
    category: 'Merch',
    platform: 'Merchandise',
    price: 24.99,
    image: images.standardEdition,
    stock: 75,
    description:
      'A display-worthy steel case with exclusive Vice City key art for your game collection.',
    features: ['Premium metal case', 'Exclusive key art', 'Fits standard game case'],
  },
]
