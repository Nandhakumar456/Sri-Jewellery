// Centralized product data — uses real local jewelry images mapped by category

export interface Product {
    id: string;
    name: string;
    price: number;
    originalPrice: number;
    category: string;
    image: string;
    tag?: string;
    purity?: string;
    description?: string;
}

// Real local images mapped by jewelry type
const goldImg = {
    necklace: '/products/gold_necklace.png',
    ring: '/products/diamond_ring.png',
    earring: '/products/gold_earrings.png',
    jhumka: '/products/gold_jhumka.png',
    bangle: '/products/gold_bangles.png',
    bracelet: '/products/gold_bracelet.png',
    chain: '/products/gold_chain.png',
    pendant: '/products/gold_pendant.png',
};

const silverImg = {
    necklace: '/products/silver_necklace.png',
    ring: '/products/silver_ring.png',
    earring: '/products/silver_earrings.png',
    bangle: '/products/silver_bangle.png',
    anklet: '/products/silver_anklet.png',
    chain: '/products/silver_chain.png',
};

// ====== GOLD PRODUCTS (100) ======
export const goldProducts: Product[] = [
    // --- Necklaces (15) ---
    { id: 'g1', name: 'Royal Choker Necklace', price: 42000, originalPrice: 45000, category: 'Necklaces', image: goldImg.necklace, tag: 'Bestseller', purity: '22Kt', description: 'Exquisite 22Kt gold choker necklace with temple design.' },
    { id: 'g2', name: 'Mango Haram', price: 125000, originalPrice: 135000, category: 'Necklaces', image: goldImg.necklace, tag: 'Premium', purity: '22Kt', description: 'Traditional mango motif long haram, perfect for weddings.' },
    { id: 'g3', name: 'Lakshmi Coin Necklace', price: 68000, originalPrice: 72000, category: 'Necklaces', image: goldImg.chain, tag: 'Festive', purity: '22Kt', description: 'Lakshmi coin pendant necklace symbolizing prosperity.' },
    { id: 'g4', name: 'Temple Necklace Set', price: 95000, originalPrice: 102000, category: 'Necklaces', image: goldImg.necklace, tag: 'Bridal', purity: '22Kt', description: 'Complete temple necklace set with matching earrings.' },
    { id: 'g5', name: 'Ruby Studded Necklace', price: 78000, originalPrice: 84000, category: 'Necklaces', image: goldImg.necklace, purity: '22Kt', description: 'Gold necklace with natural ruby gemstones.' },
    { id: 'g6', name: 'Emerald Necklace', price: 82000, originalPrice: 88000, category: 'Necklaces', image: goldImg.pendant, purity: '22Kt', description: '22Kt gold necklace with emerald accents.' },
    { id: 'g7', name: 'Antique Kemp Necklace', price: 56000, originalPrice: 62000, category: 'Necklaces', image: goldImg.necklace, tag: 'Traditional', purity: '22Kt', description: 'Antique finish kemp stone necklace.' },
    { id: 'g8', name: 'Bridal Grand Haram', price: 180000, originalPrice: 195000, category: 'Necklaces', image: goldImg.necklace, tag: 'Bridal', purity: '22Kt', description: 'Grand bridal haram with intricate work.' },
    { id: 'g9', name: 'Peacock Necklace', price: 48000, originalPrice: 52000, category: 'Necklaces', image: goldImg.pendant, purity: '22Kt', description: 'Beautiful peacock motif gold necklace.' },
    { id: 'g10', name: 'Kundan Necklace Set', price: 72000, originalPrice: 78000, category: 'Necklaces', image: goldImg.necklace, tag: 'New', purity: '22Kt', description: 'Kundan work necklace with matching accessories.' },
    { id: 'g11', name: 'Kasu Mala', price: 92000, originalPrice: 99000, category: 'Necklaces', image: goldImg.chain, purity: '22Kt', description: 'Traditional coin necklace in pure gold.' },
    { id: 'g12', name: 'Guttapusalu Necklace', price: 115000, originalPrice: 125000, category: 'Necklaces', image: goldImg.necklace, tag: 'Premium', purity: '22Kt', description: 'Cluster pearl guttapusalu bridal necklace.' },
    { id: 'g13', name: 'Rani Haar', price: 145000, originalPrice: 155000, category: 'Necklaces', image: goldImg.necklace, tag: 'Traditional', purity: '22Kt', description: 'Multi-strand rani haar for royal occasions.' },
    { id: 'g14', name: 'South Indian Haram', price: 132000, originalPrice: 142000, category: 'Necklaces', image: goldImg.chain, purity: '22Kt', description: 'Classic South Indian style long haram.' },
    { id: 'g15', name: 'Buttalu Necklace', price: 38000, originalPrice: 42000, category: 'Necklaces', image: goldImg.pendant, purity: '22Kt', description: 'Contemporary buttalu style short necklace.' },

    // --- Rings (15) ---
    { id: 'g16', name: 'Diamond Solitaire Ring', price: 48000, originalPrice: 52000, category: 'Rings', image: goldImg.ring, tag: 'New', purity: '18Kt', description: 'Brilliant-cut diamond solitaire in 18Kt gold.' },
    { id: 'g17', name: 'Gold Band Ring', price: 12000, originalPrice: 13500, category: 'Rings', image: goldImg.ring, purity: '22Kt', description: 'Classic plain gold band ring.' },
    { id: 'g18', name: 'Floral Design Ring', price: 18000, originalPrice: 20000, category: 'Rings', image: goldImg.ring, purity: '22Kt', description: 'Intricate floral design gold ring.' },
    { id: 'g19', name: 'Cocktail Ring', price: 35000, originalPrice: 38000, category: 'Rings', image: goldImg.ring, tag: 'Trending', purity: '18Kt', description: 'Statement cocktail ring with diamonds.' },
    { id: 'g20', name: 'Engagement Ring', price: 55000, originalPrice: 60000, category: 'Rings', image: goldImg.ring, tag: 'Bestseller', purity: '18Kt', description: 'Classic diamond engagement ring.' },
    { id: 'g21', name: 'Antique Gold Ring', price: 22000, originalPrice: 24000, category: 'Rings', image: goldImg.ring, tag: 'Traditional', purity: '22Kt', description: 'Antique finish traditional gold ring.' },
    { id: 'g22', name: 'Ruby Ring', price: 28000, originalPrice: 30000, category: 'Rings', image: goldImg.ring, purity: '22Kt', description: 'Gold ring with natural ruby stone.' },
    { id: 'g23', name: 'Emerald Ring', price: 32000, originalPrice: 35000, category: 'Rings', image: goldImg.ring, purity: '22Kt', description: '22Kt ring with natural emerald.' },
    { id: 'g24', name: 'Men\'s Signet Ring', price: 25000, originalPrice: 27000, category: 'Rings', image: goldImg.ring, purity: '22Kt', description: 'Classic men\'s signet ring in 22Kt gold.' },
    { id: 'g25', name: 'Couple Ring Set', price: 38000, originalPrice: 42000, category: 'Rings', image: goldImg.ring, tag: 'New', purity: '22Kt', description: 'Matching couple ring set in gold.' },
    { id: 'g26', name: 'Infinity Ring', price: 15000, originalPrice: 17000, category: 'Rings', image: goldImg.ring, purity: '18Kt', description: 'Infinity symbol ring in 18Kt gold.' },
    { id: 'g27', name: 'Heart Ring', price: 14000, originalPrice: 15500, category: 'Rings', image: goldImg.ring, purity: '18Kt', description: 'Heart-shaped gold ring with diamonds.' },
    { id: 'g28', name: 'Stackable Ring Set', price: 28000, originalPrice: 31000, category: 'Rings', image: goldImg.ring, purity: '22Kt', description: 'Set of 3 stackable gold rings.' },
    { id: 'g29', name: 'Stone Studded Ring', price: 42000, originalPrice: 46000, category: 'Rings', image: goldImg.ring, tag: 'Premium', purity: '18Kt', description: 'Multi-stone studded ring.' },
    { id: 'g30', name: 'Plain Gold Band', price: 9500, originalPrice: 10500, category: 'Rings', image: goldImg.ring, purity: '22Kt', description: 'Simple plain 22Kt gold band.' },

    // --- Earrings (15) ---
    { id: 'g31', name: 'Temple Jhumka', price: 18500, originalPrice: 20000, category: 'Earrings', image: goldImg.jhumka, tag: 'Traditional', purity: '22Kt', description: 'Traditional temple gold jhumka earrings.' },
    { id: 'g32', name: 'Chandbali Earrings', price: 24000, originalPrice: 26000, category: 'Earrings', image: goldImg.earring, tag: 'Bestseller', purity: '22Kt', description: 'Crescent chandbali earrings with pearls.' },
    { id: 'g33', name: 'Diamond Stud Earrings', price: 35000, originalPrice: 38000, category: 'Earrings', image: goldImg.earring, tag: 'New', purity: '18Kt', description: 'Classic diamond stud earrings in gold.' },
    { id: 'g34', name: 'Gold Hoop Earrings', price: 16000, originalPrice: 17500, category: 'Earrings', image: goldImg.earring, purity: '22Kt', description: 'Simple 22Kt gold hoop earrings.' },
    { id: 'g35', name: 'Kundan Stud', price: 19000, originalPrice: 21000, category: 'Earrings', image: goldImg.jhumka, purity: '22Kt', description: 'Kundan work stud earrings.' },
    { id: 'g36', name: 'Ruby Drop Earrings', price: 28000, originalPrice: 30000, category: 'Earrings', image: goldImg.earring, tag: 'Festive', purity: '22Kt', description: 'Gold earrings with ruby drops.' },
    { id: 'g37', name: 'Peacock Earrings', price: 21000, originalPrice: 23000, category: 'Earrings', image: goldImg.jhumka, purity: '22Kt', description: 'Peacock design gold earrings.' },
    { id: 'g38', name: 'Pearl Stud Earrings', price: 14000, originalPrice: 15500, category: 'Earrings', image: goldImg.earring, purity: '22Kt', description: 'Gold stud earrings with south sea pearls.' },
    { id: 'g39', name: 'Layered Jhumka', price: 26000, originalPrice: 28500, category: 'Earrings', image: goldImg.jhumka, tag: 'Bridal', purity: '22Kt', description: 'Multi-layered grand bridal jhumka.' },
    { id: 'g40', name: 'Meenakari Jhumka', price: 22000, originalPrice: 24000, category: 'Earrings', image: goldImg.jhumka, purity: '22Kt', description: 'Colorful meenakari work jhumka earrings.' },
    { id: 'g41', name: 'Kasumala Earrings', price: 19500, originalPrice: 21500, category: 'Earrings', image: goldImg.earring, purity: '22Kt', description: 'Kasumala style chain earrings.' },
    { id: 'g42', name: 'Ear Cuff Gold', price: 8000, originalPrice: 9000, category: 'Earrings', image: goldImg.earring, purity: '22Kt', description: 'Modern gold ear cuff design.' },
    { id: 'g43', name: 'Antique Drop Earrings', price: 23000, originalPrice: 25000, category: 'Earrings', image: goldImg.jhumka, tag: 'Traditional', purity: '22Kt', description: 'Antique finish drop earrings.' },
    { id: 'g44', name: 'Emerald Stud', price: 31000, originalPrice: 34000, category: 'Earrings', image: goldImg.earring, purity: '22Kt', description: 'Green emerald stud earrings in gold.' },
    { id: 'g45', name: 'Cluster Diamond Earrings', price: 42000, originalPrice: 46000, category: 'Earrings', image: goldImg.earring, tag: 'Premium', purity: '18Kt', description: 'Diamond cluster earrings in white gold.' },

    // --- Bangles (15) ---
    { id: 'g46', name: 'Bridal Bangle Set (6)', price: 85000, originalPrice: 92000, category: 'Bangles', image: goldImg.bangle, tag: 'Bridal', purity: '22Kt', description: 'Grand bridal bangle set of 6.' },
    { id: 'g47', name: 'Kada Bangle', price: 35000, originalPrice: 38000, category: 'Bangles', image: goldImg.bangle, purity: '22Kt', description: 'Thick traditional kada bangle.' },
    { id: 'g48', name: 'Stone Bangle', price: 28000, originalPrice: 31000, category: 'Bangles', image: goldImg.bangle, tag: 'New', purity: '22Kt', description: 'Gold bangle with precious stones.' },
    { id: 'g49', name: 'Plain Gold Bangle', price: 22000, originalPrice: 24000, category: 'Bangles', image: goldImg.bangle, purity: '22Kt', description: 'Simple, elegant plain gold bangle.' },
    { id: 'g50', name: 'Antique Bangle', price: 32000, originalPrice: 35000, category: 'Bangles', image: goldImg.bangle, tag: 'Traditional', purity: '22Kt', description: 'Antique carved gold bangle.' },
    { id: 'g51', name: 'Ruby Bangle', price: 45000, originalPrice: 49000, category: 'Bangles', image: goldImg.bangle, purity: '22Kt', description: 'Gold bangle with natural rubies.' },
    { id: 'g52', name: 'Diamond Bangle', price: 65000, originalPrice: 70000, category: 'Bangles', image: goldImg.bracelet, tag: 'Premium', purity: '18Kt', description: 'Diamond studded bangle in 18Kt gold.' },
    { id: 'g53', name: 'Openable Bangle', price: 42000, originalPrice: 46000, category: 'Bangles', image: goldImg.bangle, purity: '22Kt', description: 'Openable clasp gold bangle.' },
    { id: 'g54', name: 'Temple Kada', price: 38000, originalPrice: 42000, category: 'Bangles', image: goldImg.bangle, tag: 'Festive', purity: '22Kt', description: 'Temple design broad kada bangle.' },
    { id: 'g55', name: 'Twist Bangle', price: 18000, originalPrice: 20000, category: 'Bangles', image: goldImg.bracelet, purity: '22Kt', description: 'Twisted gold bangle.' },
    { id: 'g56', name: 'Baby Gold Bangle', price: 8000, originalPrice: 9000, category: 'Bangles', image: goldImg.bangle, purity: '22Kt', description: 'Adorable baby-sized gold bangle.' },
    { id: 'g57', name: 'Broad Bangle', price: 52000, originalPrice: 56000, category: 'Bangles', image: goldImg.bangle, tag: 'Trending', purity: '22Kt', description: 'Broad ornate gold bangle.' },
    { id: 'g58', name: 'Thin Bangle Set (4)', price: 36000, originalPrice: 39000, category: 'Bangles', image: goldImg.bangle, purity: '22Kt', description: 'Set of 4 thin stackable bangles.' },
    { id: 'g59', name: 'Laser Cut Bangle', price: 24000, originalPrice: 26500, category: 'Bangles', image: goldImg.bracelet, tag: 'New', purity: '22Kt', description: 'Modern laser-cut design bangle.' },
    { id: 'g60', name: 'Filigree Bangle', price: 28000, originalPrice: 31000, category: 'Bangles', image: goldImg.bangle, purity: '22Kt', description: 'Delicate filigree work gold bangle.' },

    // --- Bracelets (10) ---
    { id: 'g61', name: 'Chain Link Bracelet', price: 31000, originalPrice: 33500, category: 'Bracelets', image: goldImg.bracelet, purity: '22Kt', description: 'Classic chain link gold bracelet.' },
    { id: 'g62', name: 'Tennis Bracelet', price: 85000, originalPrice: 92000, category: 'Bracelets', image: goldImg.bracelet, tag: 'Premium', purity: '18Kt', description: 'Diamond tennis bracelet in gold.' },
    { id: 'g63', name: 'Charm Bracelet', price: 28000, originalPrice: 31000, category: 'Bracelets', image: goldImg.bracelet, tag: 'New', purity: '22Kt', description: 'Gold bracelet with dangling charms.' },
    { id: 'g64', name: 'Cuff Bracelet', price: 35000, originalPrice: 38000, category: 'Bracelets', image: goldImg.bracelet, purity: '22Kt', description: 'Broad gold cuff bracelet.' },
    { id: 'g65', name: 'Flexible Bracelet', price: 42000, originalPrice: 46000, category: 'Bracelets', image: goldImg.bracelet, tag: 'Trending', purity: '22Kt', description: 'Flexible snake-style gold bracelet.' },
    { id: 'g66', name: 'Baby Bracelet', price: 9000, originalPrice: 10000, category: 'Bracelets', image: goldImg.bracelet, purity: '22Kt', description: 'Delicate baby gold bracelet.' },
    { id: 'g67', name: 'Men\'s Gold Bracelet', price: 55000, originalPrice: 60000, category: 'Bracelets', image: goldImg.bracelet, purity: '22Kt', description: 'Bold men\'s gold bracelet.' },
    { id: 'g68', name: 'Rope Bracelet', price: 26000, originalPrice: 28500, category: 'Bracelets', image: goldImg.bracelet, purity: '22Kt', description: 'Rope-style twisted gold bracelet.' },
    { id: 'g69', name: 'Diamond Bracelet', price: 72000, originalPrice: 78000, category: 'Bracelets', image: goldImg.bracelet, tag: 'Premium', purity: '18Kt', description: 'Diamond studded bracelet.' },
    { id: 'g70', name: 'Filigree Bracelet', price: 24000, originalPrice: 26000, category: 'Bracelets', image: goldImg.bracelet, purity: '22Kt', description: 'Delicate filigree gold bracelet.' },

    // --- Chains (10) ---
    { id: 'g71', name: 'Classic Rope Chain 20"', price: 38000, originalPrice: 40000, category: 'Chains', image: goldImg.chain, purity: '22Kt', description: 'Classic 22Kt rope chain.' },
    { id: 'g72', name: 'Box Chain 22"', price: 32000, originalPrice: 35000, category: 'Chains', image: goldImg.chain, purity: '22Kt', description: 'Box chain in 22Kt gold.' },
    { id: 'g73', name: 'Thali Chain', price: 48000, originalPrice: 52000, category: 'Chains', image: goldImg.chain, tag: 'Traditional', purity: '22Kt', description: 'Traditional thali chain in pure gold.' },
    { id: 'g74', name: 'Fancy Chain', price: 42000, originalPrice: 45000, category: 'Chains', image: goldImg.chain, tag: 'Trending', purity: '22Kt', description: 'Fancy link chain in 22Kt gold.' },
    { id: 'g75', name: 'Men\'s Heavy Chain', price: 75000, originalPrice: 82000, category: 'Chains', image: goldImg.chain, purity: '22Kt', description: 'Heavy men\'s gold chain.' },
    { id: 'g76', name: 'Twisted Chain 18"', price: 28000, originalPrice: 30000, category: 'Chains', image: goldImg.chain, purity: '22Kt', description: 'Twisted gold chain in 22Kt.' },
    { id: 'g77', name: 'Byzantine Chain', price: 58000, originalPrice: 63000, category: 'Chains', image: goldImg.chain, tag: 'Premium', purity: '22Kt', description: 'Intricate byzantine chain design.' },
    { id: 'g78', name: 'Flat Chain 24"', price: 44000, originalPrice: 48000, category: 'Chains', image: goldImg.chain, purity: '22Kt', description: 'Flat herringbone gold chain.' },
    { id: 'g79', name: 'Cable Chain', price: 26000, originalPrice: 28000, category: 'Chains', image: goldImg.chain, purity: '22Kt', description: 'Cable link gold chain.' },
    { id: 'g80', name: 'Wheat Chain 20"', price: 35000, originalPrice: 38000, category: 'Chains', image: goldImg.chain, tag: 'New', purity: '22Kt', description: 'Wheat pattern gold chain.' },

    // --- Pendants (10) ---
    { id: 'g81', name: 'Om Pendant', price: 8000, originalPrice: 9000, category: 'Pendants', image: goldImg.pendant, tag: 'Bestseller', purity: '22Kt', description: 'Sacred Om pendant in pure gold.' },
    { id: 'g82', name: 'Ganesh Pendant', price: 12000, originalPrice: 13500, category: 'Pendants', image: goldImg.pendant, purity: '22Kt', description: 'Lord Ganesh pendant in 22Kt gold.' },
    { id: 'g83', name: 'Lakshmi Pendant', price: 10000, originalPrice: 11000, category: 'Pendants', image: goldImg.pendant, tag: 'Festive', purity: '22Kt', description: 'Goddess Lakshmi gold pendant.' },
    { id: 'g84', name: 'Heart Pendant', price: 15000, originalPrice: 17000, category: 'Pendants', image: goldImg.pendant, purity: '18Kt', description: 'Heart-shaped pendant with diamonds.' },
    { id: 'g85', name: 'Alphabet Pendant', price: 7000, originalPrice: 8000, category: 'Pendants', image: goldImg.pendant, tag: 'New', purity: '22Kt', description: 'Personalized alphabet gold pendant.' },
    { id: 'g86', name: 'Flower Pendant', price: 11000, originalPrice: 12500, category: 'Pendants', image: goldImg.pendant, purity: '22Kt', description: 'Delicate floral gold pendant.' },
    { id: 'g87', name: 'Evil Eye Pendant', price: 9500, originalPrice: 10500, category: 'Pendants', image: goldImg.pendant, tag: 'Trending', purity: '18Kt', description: 'Evil eye pendant in 18Kt gold with enamel.' },
    { id: 'g88', name: 'Cross Pendant', price: 8500, originalPrice: 9500, category: 'Pendants', image: goldImg.pendant, purity: '22Kt', description: 'Elegant gold cross pendant.' },
    { id: 'g89', name: 'Star Pendant', price: 10500, originalPrice: 11500, category: 'Pendants', image: goldImg.pendant, purity: '18Kt', description: 'Star-shaped pendant with diamonds.' },
    { id: 'g90', name: 'Diamond Pendant', price: 32000, originalPrice: 35000, category: 'Pendants', image: goldImg.pendant, tag: 'Premium', purity: '18Kt', description: 'Solitaire diamond pendant.' },

    // --- Coins & Bars (10) ---
    { id: 'g91', name: 'Gold Coin 1g', price: 7200, originalPrice: 7500, category: 'Coins', image: goldImg.chain, purity: '24Kt', description: '1 gram 24Kt pure gold coin.' },
    { id: 'g92', name: 'Gold Coin 2g', price: 14400, originalPrice: 15000, category: 'Coins', image: goldImg.chain, purity: '24Kt', description: '2 gram pure gold coin.' },
    { id: 'g93', name: 'Gold Coin 5g', price: 36000, originalPrice: 37500, category: 'Coins', image: goldImg.chain, tag: 'Popular', purity: '24Kt', description: '5 gram 24Kt gold coin.' },
    { id: 'g94', name: 'Gold Coin 8g', price: 57600, originalPrice: 60000, category: 'Coins', image: goldImg.chain, purity: '24Kt', description: '8 gram gold coin with purity certificate.' },
    { id: 'g95', name: 'Gold Coin 10g', price: 72000, originalPrice: 75000, category: 'Coins', image: goldImg.chain, tag: 'Bestseller', purity: '24Kt', description: '10 gram 24Kt gold coin.' },
    { id: 'g96', name: 'Gold Bar 10g', price: 73000, originalPrice: 76000, category: 'Coins', image: goldImg.chain, tag: 'Investment', purity: '24Kt', description: '10 gram 24Kt gold bar.' },
    { id: 'g97', name: 'Gold Bar 20g', price: 146000, originalPrice: 152000, category: 'Coins', image: goldImg.chain, purity: '24Kt', description: '20 gram pure gold bar.' },
    { id: 'g98', name: 'Lakshmi Gold Coin 5g', price: 37500, originalPrice: 39000, category: 'Coins', image: goldImg.pendant, tag: 'Festive', purity: '24Kt', description: 'Lakshmi engraved 5g gold coin.' },
    { id: 'g99', name: 'Ganesh Gold Coin 2g', price: 15000, originalPrice: 15600, category: 'Coins', image: goldImg.pendant, purity: '24Kt', description: 'Ganesh design 2g pure gold coin.' },
    { id: 'g100', name: 'Gold Bar 50g', price: 365000, originalPrice: 380000, category: 'Coins', image: goldImg.chain, tag: 'Premium', purity: '24Kt', description: '50 gram 24Kt gold bar with certificate.' },
];

// ====== SILVER PRODUCTS (100) ======
export const silverProducts: Product[] = [
    // --- Necklaces (15) ---
    { id: 's1', name: 'Crescent Moon Necklace', price: 3500, originalPrice: 4000, category: 'Necklaces', image: silverImg.necklace, tag: 'Bestseller', purity: '925 Silver', description: 'Sterling silver crescent moon pendant.' },
    { id: 's2', name: 'Layered Chain Necklace', price: 4200, originalPrice: 4800, category: 'Necklaces', image: silverImg.chain, tag: 'Trending', purity: '925 Silver', description: 'Multi-layered sterling silver chain.' },
    { id: 's3', name: 'Leaf Pendant Necklace', price: 2800, originalPrice: 3200, category: 'Necklaces', image: silverImg.necklace, purity: '925 Silver', description: 'Delicate silver leaf pendant necklace.' },
    { id: 's4', name: 'Bar Necklace', price: 2200, originalPrice: 2600, category: 'Necklaces', image: silverImg.chain, purity: '925 Silver', description: 'Minimalist sterling silver bar necklace.' },
    { id: 's5', name: 'Y Necklace', price: 3800, originalPrice: 4200, category: 'Necklaces', image: silverImg.necklace, tag: 'New', purity: '925 Silver', description: 'Elegant Y-shaped silver necklace.' },
    { id: 's6', name: 'Choker Necklace', price: 4500, originalPrice: 5200, category: 'Necklaces', image: silverImg.necklace, purity: '925 Silver', description: 'Silver choker with CZ stones.' },
    { id: 's7', name: 'Pearl Necklace', price: 5200, originalPrice: 5800, category: 'Necklaces', image: silverImg.necklace, tag: 'Premium', purity: '925 Silver', description: 'Freshwater pearl necklace with silver chain.' },
    { id: 's8', name: 'Heart Necklace', price: 2500, originalPrice: 2900, category: 'Necklaces', image: silverImg.necklace, purity: '925 Silver', description: 'Heart pendant silver necklace.' },
    { id: 's9', name: 'Collar Necklace', price: 6800, originalPrice: 7500, category: 'Necklaces', image: silverImg.chain, purity: '925 Silver', description: 'Statement collar necklace in sterling silver.' },
    { id: 's10', name: 'Locket Necklace', price: 3200, originalPrice: 3600, category: 'Necklaces', image: silverImg.necklace, purity: '925 Silver', description: 'Openable locket necklace.' },
    { id: 's11', name: 'Station Necklace', price: 4800, originalPrice: 5400, category: 'Necklaces', image: silverImg.chain, tag: 'Trending', purity: '925 Silver', description: 'Station chain necklace with CZ.' },
    { id: 's12', name: 'Tassel Necklace', price: 3600, originalPrice: 4200, category: 'Necklaces', image: silverImg.necklace, purity: '925 Silver', description: 'Silver tassel pendant necklace.' },
    { id: 's13', name: 'Beaded Necklace', price: 5500, originalPrice: 6200, category: 'Necklaces', image: silverImg.necklace, tag: 'Boho', purity: '925 Silver', description: 'Beaded silver necklace with gemstones.' },
    { id: 's14', name: 'Infinity Necklace', price: 2800, originalPrice: 3200, category: 'Necklaces', image: silverImg.chain, purity: '925 Silver', description: 'Infinity symbol pendant necklace.' },
    { id: 's15', name: 'Coin Necklace', price: 3400, originalPrice: 3900, category: 'Necklaces', image: silverImg.necklace, tag: 'New', purity: '925 Silver', description: 'Vintage coin pendant silver necklace.' },

    // --- Rings (15) ---
    { id: 's16', name: 'Blossom Ring', price: 2800, originalPrice: 3200, category: 'Rings', image: silverImg.ring, tag: 'New', purity: '925 Silver', description: 'Flower blossom sterling silver ring.' },
    { id: 's17', name: 'Cocktail Ring', price: 3400, originalPrice: 3800, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Statement cocktail ring in silver.' },
    { id: 's18', name: 'Band Ring', price: 1500, originalPrice: 1800, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Simple sterling silver band.' },
    { id: 's19', name: 'Toe Ring Set (5)', price: 1200, originalPrice: 1500, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Set of 5 adjustable silver toe rings.' },
    { id: 's20', name: 'Infinity Ring', price: 1900, originalPrice: 2200, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Infinity symbol band ring.' },
    { id: 's21', name: 'Statement Ring', price: 4200, originalPrice: 4800, category: 'Rings', image: silverImg.ring, tag: 'Premium', purity: '925 Silver', description: 'Bold statement ring in silver.' },
    { id: 's22', name: 'Stackable Set (3)', price: 3200, originalPrice: 3600, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Set of 3 stackable silver rings.' },
    { id: 's23', name: 'Amethyst Ring', price: 3800, originalPrice: 4200, category: 'Rings', image: silverImg.ring, tag: 'Trending', purity: '925 Silver', description: 'Silver ring with natural amethyst stone.' },
    { id: 's24', name: 'Open Ring', price: 1800, originalPrice: 2100, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Adjustable open ring design.' },
    { id: 's25', name: 'Signet Ring', price: 2400, originalPrice: 2800, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Classic silver signet ring.' },
    { id: 's26', name: 'Dome Ring', price: 2600, originalPrice: 3000, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Dome-shaped silver ring.' },
    { id: 's27', name: 'Wave Ring', price: 1600, originalPrice: 1900, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Ocean wave design silver ring.' },
    { id: 's28', name: 'Spinner Ring', price: 3200, originalPrice: 3600, category: 'Rings', image: silverImg.ring, tag: 'New', purity: '925 Silver', description: 'Anti-anxiety spinner ring in silver.' },
    { id: 's29', name: 'Crown Ring', price: 2200, originalPrice: 2600, category: 'Rings', image: silverImg.ring, purity: '925 Silver', description: 'Crown-shaped silver ring with CZ.' },
    { id: 's30', name: 'Couple Ring Set', price: 3600, originalPrice: 4000, category: 'Rings', image: silverImg.ring, tag: 'Bestseller', purity: '925 Silver', description: 'Matching couple ring set in silver.' },

    // --- Earrings (15) ---
    { id: 's31', name: 'Frost Drop Earrings', price: 3200, originalPrice: 3500, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'Crystal frost drop silver earrings.' },
    { id: 's32', name: 'Silver Hoop Earrings', price: 2400, originalPrice: 2800, category: 'Earrings', image: silverImg.earring, tag: 'Bestseller', purity: '925 Silver', description: 'Classic sterling silver hoops.' },
    { id: 's33', name: 'CZ Stud Earrings', price: 1800, originalPrice: 2100, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'CZ stone stud earrings.' },
    { id: 's34', name: 'Threader Earrings', price: 2200, originalPrice: 2600, category: 'Earrings', image: silverImg.earring, tag: 'Trending', purity: '925 Silver', description: 'Long threader earrings in silver.' },
    { id: 's35', name: 'Cuff Earrings', price: 1600, originalPrice: 1900, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'Modern ear cuff earrings.' },
    { id: 's36', name: 'Climber Earrings', price: 2800, originalPrice: 3200, category: 'Earrings', image: silverImg.earring, tag: 'New', purity: '925 Silver', description: 'Ear climber earrings in silver.' },
    { id: 's37', name: 'Pearl Drop Earrings', price: 3800, originalPrice: 4200, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'Pearl drop earrings with silver hooks.' },
    { id: 's38', name: 'Huggie Earrings', price: 2600, originalPrice: 3000, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'Small huggie hoop earrings.' },
    { id: 's39', name: 'Chandelier Earrings', price: 5200, originalPrice: 5800, category: 'Earrings', image: silverImg.earring, tag: 'Premium', purity: '925 Silver', description: 'Statement chandelier earrings.' },
    { id: 's40', name: 'Button Earrings', price: 1500, originalPrice: 1800, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'Simple button stud earrings.' },
    { id: 's41', name: 'Feather Earrings', price: 2400, originalPrice: 2800, category: 'Earrings', image: silverImg.earring, tag: 'Boho', purity: '925 Silver', description: 'Feather design silver earrings.' },
    { id: 's42', name: 'Star Earrings', price: 1800, originalPrice: 2100, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'Star-shaped stud earrings.' },
    { id: 's43', name: 'Chain Dangle Earrings', price: 2600, originalPrice: 3000, category: 'Earrings', image: silverImg.earring, tag: 'Trending', purity: '925 Silver', description: 'Chain tassel dangle earrings.' },
    { id: 's44', name: 'Oxidized Jhumka', price: 2200, originalPrice: 2600, category: 'Earrings', image: silverImg.earring, tag: 'Traditional', purity: '925 Silver', description: 'Oxidized silver traditional jhumka.' },
    { id: 's45', name: 'Geometric Earrings', price: 2000, originalPrice: 2400, category: 'Earrings', image: silverImg.earring, purity: '925 Silver', description: 'Modern geometric silver earrings.' },

    // --- Bangles (10) ---
    { id: 's46', name: 'Twisted Bangle', price: 5100, originalPrice: 5800, category: 'Bangles', image: silverImg.bangle, purity: '925 Silver', description: 'Twisted design sterling silver bangle.' },
    { id: 's47', name: 'Hammered Bangle', price: 4200, originalPrice: 4800, category: 'Bangles', image: silverImg.bangle, tag: 'New', purity: '925 Silver', description: 'Hammered finish silver bangle.' },
    { id: 's48', name: 'Cuff Bangle', price: 6800, originalPrice: 7500, category: 'Bangles', image: silverImg.bangle, tag: 'Premium', purity: '925 Silver', description: 'Wide cuff bangle in sterling silver.' },
    { id: 's49', name: 'Open Bangle', price: 3600, originalPrice: 4000, category: 'Bangles', image: silverImg.bangle, purity: '925 Silver', description: 'Open-ended silver bangle.' },
    { id: 's50', name: 'Stone Set Bangle', price: 5800, originalPrice: 6500, category: 'Bangles', image: silverImg.bangle, tag: 'Trending', purity: '925 Silver', description: 'Sterling silver bangle with CZ stones.' },
    { id: 's51', name: 'Oxidized Bangle', price: 3200, originalPrice: 3600, category: 'Bangles', image: silverImg.bangle, tag: 'Traditional', purity: '925 Silver', description: 'Oxidized silver bangle with patterns.' },
    { id: 's52', name: 'Wire Bangle', price: 2400, originalPrice: 2800, category: 'Bangles', image: silverImg.bangle, purity: '925 Silver', description: 'Thin wire bangle bracelet.' },
    { id: 's53', name: 'Charm Bangle', price: 4500, originalPrice: 5000, category: 'Bangles', image: silverImg.bangle, purity: '925 Silver', description: 'Bangle with hanging charms.' },
    { id: 's54', name: 'Celtic Bangle', price: 3800, originalPrice: 4200, category: 'Bangles', image: silverImg.bangle, tag: 'Boho', purity: '925 Silver', description: 'Celtic knot design silver bangle.' },
    { id: 's55', name: 'Bamboo Bangle', price: 4200, originalPrice: 4800, category: 'Bangles', image: silverImg.bangle, purity: '925 Silver', description: 'Bamboo textured silver bangle.' },

    // --- Bracelets (10) ---
    { id: 's56', name: 'Link Bracelet', price: 3600, originalPrice: 4000, category: 'Bracelets', image: silverImg.bangle, purity: '925 Silver', description: 'Chain link sterling silver bracelet.' },
    { id: 's57', name: 'Charm Bracelet', price: 4200, originalPrice: 4800, category: 'Bracelets', image: silverImg.bangle, tag: 'Bestseller', purity: '925 Silver', description: 'Silver bracelet with assorted charms.' },
    { id: 's58', name: 'Tennis Bracelet', price: 8200, originalPrice: 9000, category: 'Bracelets', image: silverImg.bangle, tag: 'Premium', purity: '925 Silver', description: 'CZ tennis bracelet in sterling silver.' },
    { id: 's59', name: 'Beaded Bracelet', price: 2800, originalPrice: 3200, category: 'Bracelets', image: silverImg.bangle, purity: '925 Silver', description: 'Silver beaded stretch bracelet.' },
    { id: 's60', name: 'Pearl Bracelet', price: 4800, originalPrice: 5400, category: 'Bracelets', image: silverImg.bangle, tag: 'New', purity: '925 Silver', description: 'Freshwater pearl silver bracelet.' },
    { id: 's61', name: 'Wrap Bracelet', price: 3200, originalPrice: 3600, category: 'Bracelets', image: silverImg.bangle, purity: '925 Silver', description: 'Multi-wrap silver bracelet.' },
    { id: 's62', name: 'ID Bracelet', price: 2600, originalPrice: 3000, category: 'Bracelets', image: silverImg.bangle, purity: '925 Silver', description: 'Engravable ID bracelet.' },
    { id: 's63', name: 'Friendship Bracelet', price: 1800, originalPrice: 2100, category: 'Bracelets', image: silverImg.bangle, purity: '925 Silver', description: 'Adjustable friendship bracelet.' },
    { id: 's64', name: 'Cuff Bracelet', price: 5200, originalPrice: 5800, category: 'Bracelets', image: silverImg.bangle, tag: 'Trending', purity: '925 Silver', description: 'Wide silver cuff bracelet.' },
    { id: 's65', name: 'Bolo Bracelet', price: 3400, originalPrice: 3800, category: 'Bracelets', image: silverImg.bangle, purity: '925 Silver', description: 'Adjustable bolo bracelet.' },

    // --- Anklets (10) ---
    { id: 's66', name: 'Bell Anklet', price: 2500, originalPrice: 2800, category: 'Anklets', image: silverImg.anklet, tag: 'Traditional', purity: '925 Silver', description: 'Traditional bell ankle bracelet.' },
    { id: 's67', name: 'Chain Anklet', price: 1800, originalPrice: 2100, category: 'Anklets', image: silverImg.anklet, purity: '925 Silver', description: 'Simple silver chain anklet.' },
    { id: 's68', name: 'Charm Anklet', price: 2800, originalPrice: 3200, category: 'Anklets', image: silverImg.anklet, tag: 'Trending', purity: '925 Silver', description: 'Anklet with dangling charms.' },
    { id: 's69', name: 'Beaded Anklet', price: 2200, originalPrice: 2600, category: 'Anklets', image: silverImg.anklet, tag: 'Boho', purity: '925 Silver', description: 'Silver beaded ankle bracelet.' },
    { id: 's70', name: 'Oxidized Anklet', price: 2000, originalPrice: 2400, category: 'Anklets', image: silverImg.anklet, purity: '925 Silver', description: 'Oxidized silver heavy anklet.' },
    { id: 's71', name: 'Layered Anklet', price: 3200, originalPrice: 3600, category: 'Anklets', image: silverImg.anklet, tag: 'New', purity: '925 Silver', description: 'Double-layered silver anklet.' },
    { id: 's72', name: 'Butterfly Anklet', price: 2400, originalPrice: 2800, category: 'Anklets', image: silverImg.anklet, purity: '925 Silver', description: 'Butterfly charm anklet.' },
    { id: 's73', name: 'Star Anklet', price: 2000, originalPrice: 2300, category: 'Anklets', image: silverImg.chain, purity: '925 Silver', description: 'Star charm silver anklet.' },
    { id: 's74', name: 'Heart Anklet', price: 2600, originalPrice: 3000, category: 'Anklets', image: silverImg.anklet, tag: 'Bestseller', purity: '925 Silver', description: 'Heart charm elegant anklet.' },
    { id: 's75', name: 'Boho Anklet', price: 1800, originalPrice: 2200, category: 'Anklets', image: silverImg.anklet, purity: '925 Silver', description: 'Bohemian style silver anklet.' },

    // --- Chains (10) ---
    { id: 's76', name: 'Box Chain 18"', price: 1500, originalPrice: 1800, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Sterling silver box chain.' },
    { id: 's77', name: 'Cable Chain', price: 1200, originalPrice: 1500, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Classic cable link chain.' },
    { id: 's78', name: 'Rope Chain', price: 2200, originalPrice: 2600, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Rope design silver chain.' },
    { id: 's79', name: 'Curb Chain', price: 1800, originalPrice: 2100, category: 'Chains', image: silverImg.chain, tag: 'New', purity: '925 Silver', description: 'Flat curb link chain.' },
    { id: 's80', name: 'Snake Chain', price: 2400, originalPrice: 2800, category: 'Chains', image: silverImg.chain, tag: 'Trending', purity: '925 Silver', description: 'Smooth snake chain in silver.' },
    { id: 's81', name: 'Figaro Chain', price: 2000, originalPrice: 2300, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Italian figaro chain design.' },
    { id: 's82', name: 'Singapore Chain', price: 1600, originalPrice: 1900, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Twisted Singapore chain.' },
    { id: 's83', name: 'Wheat Chain', price: 1800, originalPrice: 2100, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Wheat pattern silver chain.' },
    { id: 's84', name: 'Rolo Chain', price: 1400, originalPrice: 1700, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Round rolo link chain.' },
    { id: 's85', name: 'Ball Chain 20"', price: 1200, originalPrice: 1500, category: 'Chains', image: silverImg.chain, purity: '925 Silver', description: 'Ball bead chain necklace.' },

    // --- Pendants (15) ---
    { id: 's86', name: 'Moon Pendant', price: 2200, originalPrice: 2600, category: 'Pendants', image: silverImg.necklace, tag: 'Bestseller', purity: '925 Silver', description: 'Crescent moon silver pendant.' },
    { id: 's87', name: 'Star Pendant', price: 1800, originalPrice: 2100, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Star-shaped sterling pendant.' },
    { id: 's88', name: 'Heart Pendant', price: 2000, originalPrice: 2300, category: 'Pendants', image: silverImg.necklace, tag: 'New', purity: '925 Silver', description: 'Classic heart pendant in silver.' },
    { id: 's89', name: 'Cross Pendant', price: 1600, originalPrice: 1900, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Simple cross pendant.' },
    { id: 's90', name: 'Compass Pendant', price: 2800, originalPrice: 3200, category: 'Pendants', image: silverImg.necklace, tag: 'Trending', purity: '925 Silver', description: 'Travel compass pendant necklace.' },
    { id: 's91', name: 'Tree of Life Pendant', price: 2400, originalPrice: 2800, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Tree of life design pendant.' },
    { id: 's92', name: 'Feather Pendant', price: 1800, originalPrice: 2100, category: 'Pendants', image: silverImg.necklace, tag: 'Boho', purity: '925 Silver', description: 'Silver feather pendant.' },
    { id: 's93', name: 'Evil Eye Pendant', price: 2200, originalPrice: 2600, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Evil eye protection pendant.' },
    { id: 's94', name: 'Lotus Pendant', price: 2600, originalPrice: 3000, category: 'Pendants', image: silverImg.necklace, tag: 'New', purity: '925 Silver', description: 'Lotus flower silver pendant.' },
    { id: 's95', name: 'Dolphin Pendant', price: 2000, originalPrice: 2300, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Playful dolphin pendant.' },
    { id: 's96', name: 'Anchor Pendant', price: 2200, originalPrice: 2500, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Nautical anchor pendant.' },
    { id: 's97', name: 'Butterfly Pendant', price: 2400, originalPrice: 2800, category: 'Pendants', image: silverImg.necklace, tag: 'Trending', purity: '925 Silver', description: 'Butterfly wings silver pendant.' },
    { id: 's98', name: 'Key Pendant', price: 1800, originalPrice: 2100, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Vintage key pendant design.' },
    { id: 's99', name: 'Arrow Pendant', price: 1600, originalPrice: 1900, category: 'Pendants', image: silverImg.necklace, purity: '925 Silver', description: 'Arrow direction pendant.' },
    { id: 's100', name: 'Infinity Pendant', price: 2200, originalPrice: 2500, category: 'Pendants', image: silverImg.necklace, tag: 'Bestseller', purity: '925 Silver', description: 'Infinity symbol pendant in silver.' },
];

export function getProductById(id: string): Product | undefined {
    return [...goldProducts, ...silverProducts].find(p => p.id === id);
}
