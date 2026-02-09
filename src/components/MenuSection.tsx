import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const menuCategories = [
  {
    name: "Soups",
    items: [
      { name: "Tom Yum Soup", desc: "Hot & sour Thai broth with lemongrass and galangal" },
      { name: "Hot & Sour Soup", desc: "Classic Sichuan-style with silken tofu and bamboo" },
      { name: "Wonton Soup", desc: "Handmade wontons in a clear aromatic broth" },
      { name: "Thai Coconut Soup", desc: "Creamy tom kha with mushrooms and kaffir lime" },
    ],
  },
  {
    name: "Appetizers",
    items: [
      { name: "Bang Bang Chicken", desc: "Crispy chicken tossed in fiery Sichuan sauce" },
      { name: "Korean Wings", desc: "Double-fried wings glazed in gochujang honey" },
      { name: "Crystal Dumplings", desc: "Translucent jade dumplings with chili oil" },
      { name: "Crispy Corn", desc: "Wok-tossed golden corn with sesame and spice" },
      { name: "Spring Rolls", desc: "Crispy golden rolls with fresh vegetable filling" },
      { name: "Prawn Toast", desc: "Sesame-crusted shrimp on toasted bread" },
    ],
  },
  {
    name: "Noodles",
    items: [
      { name: "Schezwan Noodles", desc: "Fiery wok-tossed noodles with bold Sichuan heat" },
      { name: "Pad Thai", desc: "Classic Thai rice noodles with tamarind and peanut" },
      { name: "Hakka Noodles", desc: "Indo-Chinese stir-fried noodles with vegetables" },
      { name: "Dan Dan Noodles", desc: "Numbing Sichuan pork ragù over wheat noodles" },
      { name: "Thai Basil Noodles", desc: "Wok-charred noodles with holy basil and chili" },
    ],
  },
  {
    name: "Rice",
    items: [
      { name: "Nasi Goreng", desc: "Indonesian fried rice with sweet soy and sambal" },
      { name: "Thai Basil Fried Rice", desc: "Aromatic rice with basil, chili, and garlic" },
      { name: "Kimchi Fried Rice", desc: "Korean-style with aged kimchi and sesame" },
      { name: "Yang Chow Fried Rice", desc: "Classic Cantonese with egg and scallion" },
    ],
  },
  {
    name: "Mains",
    items: [
      { name: "Kung Pao Chicken", desc: "Sichuan classic with peanuts and dried chili" },
      { name: "Thai Green Curry", desc: "Fragrant coconut curry with Thai herbs" },
      { name: "Mapo Tofu", desc: "Silken tofu in numbing, spicy bean sauce" },
      { name: "Sweet & Sour Chicken", desc: "Crispy chicken with tangy pineapple glaze" },
      { name: "Black Pepper Paneer", desc: "Wok-seared paneer with cracked black pepper" },
      { name: "Chili Garlic Prawns", desc: "Sizzling prawns in a bold garlic-chili sauce" },
    ],
  },
  {
    name: "Sides",
    items: [
      { name: "Steamed Jasmine Rice", desc: "Fragrant long-grain Thai rice" },
      { name: "Edamame", desc: "Salted soybean pods with chili flakes" },
      { name: "Wok-Tossed Greens", desc: "Seasonal greens with garlic and oyster sauce" },
    ],
  },
];

export default function MenuSection() {
  const [activeTab, setActiveTab] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="menu" className="py-24 md:py-32 bg-warm-dark">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-gold text-sm uppercase tracking-[0.3em] mb-4">
            The Menu
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-warm-dark-foreground mb-4">
            Crafted to <span className="italic">Ignite</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mx-auto" />
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
          {menuCategories.map((cat, i) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(i)}
              className={`px-5 py-2 rounded-sm font-body text-sm uppercase tracking-wider transition-all duration-300 ${
                activeTab === i
                  ? "bg-primary text-primary-foreground"
                  : "text-warm-dark-foreground/60 hover:text-gold border border-warm-dark-foreground/15"
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Items grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto"
        >
          {menuCategories[activeTab].items.map((item) => (
            <div
              key={item.name}
              className="group p-5 rounded-sm border border-warm-dark-foreground/10 hover:border-gold/30 transition-all duration-300"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-lg font-semibold text-warm-dark-foreground group-hover:text-gold transition-colors">
                  {item.name}
                </h3>
              </div>
              <p className="font-body text-sm text-warm-dark-foreground/50">
                {item.desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
