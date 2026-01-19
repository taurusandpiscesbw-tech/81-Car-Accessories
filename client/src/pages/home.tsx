import { useState, useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { 
  MessageCircle, 
  Menu, 
  ChevronRight, 
  Music, 
  Armchair, 
  Car, 
  Gauge, 
  Wrench, 
  Package, 
  CheckCircle2,
  MapPin,
  Calendar,
  Clock,
  Navigation,
  X,
  Star
} from "lucide-react";
import heroImage from "@assets/generated_images/right_hand_drive_modern_car_interior.png";
import storefrontImage from "@assets/photo_2026-01-17_11.09.17_1768619396091.jpeg";

// Gallery Images
import gallery1 from "@assets/photo_2026-01-17_11.15.45_1768619764446.jpeg"; // Fog Light LED
import gallery2 from "@assets/photo_2026-01-17_11.15.43_1768619764446.jpeg"; // Ambient Door Light
import gallery3 from "@assets/photo_2026-01-17_11.15.40_1768619764447.jpeg"; // Throttle Controller
import gallery4 from "@assets/photo_2026-01-17_11.15.38_1768619764447.jpeg"; // Pioneer Subwoofer
import gallery5 from "@assets/photo_2026-01-17_11.15.36_1768619764447.jpeg"; // J-Style Bar
import gallery6 from "@assets/photo_2026-01-17_11.15.34_1768619764447.jpeg"; // Wide Mirrors
import gallery7 from "@assets/photo_2026-01-17_11.15.30_1768619764447.jpeg"; // Gear Console Light
import gallery8 from "@assets/photo_2026-01-17_11.15.28_1768619764448.jpeg"; // Gear Console Light 2
import gallery9 from "@assets/photo_2026-01-17_11.15.26_1768619764448.jpeg"; // Digital Meter
import gallery10 from "@assets/photo_2026-01-17_11.15.22_1768619764448.jpeg"; // JBL Speaker
import gallery11 from "@assets/photo_2026-01-17_11.15.18_1768619764448.jpeg"; // Racing Meters

// WhatsApp Configuration
const WA_NUMBER = "60127359081";
const WA_PREFILL = `Hi 81 Car Accessories, I want to upgrade my car.
Model / Year: ____
I want: (Entertainment / Interior / Exterior / Meter / Accessories)
Budget: RM ____
Coming from: (MY / SG Tuas)
Preferred date/time: ____`;

const getWaLink = () => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(WA_PREFILL)}`;

const i18n = {
  en: {
    hero_title: "Upgrade Your Drive",
    hero_sub: "Premium modifications with clean workmanship. Transform your car with our expert installation and sporty styling packages.",
    tag1: "Entertainment System",
    tag2: "Interior Styling",
    tag3: "Exterior Kits",
    tag4: "Custom Meter",
    btn_whatsapp: "WhatsApp Booking",
    btn_services: "View Services",
    fast_reply: "Fast Reply",
    clean_work: "Clean Workmanship",
    warranty: "Warranty",
    services_title: "What We Do",
    s1_title: "Car Entertainment",
    s1_desc: "Android Player, Apple CarPlay, 360 Camera, and high-end audio tuning.",
    s2_title: "Interior Styling",
    s2_desc: "Custom seat covers, premium floor mats, steering wheels, and trim upgrades.",
    s3_title: "Exterior Styling",
    s3_desc: "Spoilers, body kits, diffusers, and sporty aesthetic enhancements.",
    s4_title: "Meter Design",
    s4_desc: "Sporty meter clusters, digital dashboard upgrades, and custom lighting.",
    s5_title: "Accessories Install",
    s5_desc: "Dashcams, sensors, lighting upgrades. Professional clean installation.",
    s6_title: "Value Packages",
    s6_desc: "Bundled upgrades for complete transformation at better rates.",
    sg_title: "Visiting from Tuas?",
    sg_subtitle: "Singapore Drivers Welcome",
    sg_desc: "Book your slot before you drive in. We offer quick installation for selected items and the best value upgrades just across the border.",
    close_tuas: "Close to Tuas Link",
    priority: "Appointment Priority",
    btn_sg: "Book SG Slot",
    final_title: "Ready to Upgrade?",
    final_desc: "Send us your car model and what you're looking for. We'll recommend the best setup for your budget.",
    btn_chat: "Start Chat on WhatsApp",
    wa_float_title: "Chat on WhatsApp",
    wa_float_sub: "Fast Reply • Send Model",
    visit_title: "Visit Our Store",
    address_title: "Address",
    get_directions: "Get Directions",
    hours_title: "Opening Hours",
    open_everyday: "Open Everyday!",
    testimonials_title: "What Our Customers Say",
    see_reviews: "See all reviews on Google",
    gallery_title: "Our Recent Works",
    malaysia_sg_welcome: "Malaysia 🇲🇾 & SG 🇸🇬 Welcome",
    featured_work: "Featured Work",
    featured_desc: "Ambient Lighting & Android Player Setup",
    gallery_titles: {
        led: "LED Headlight Upgrade",
        ambient: "Ambient Lighting",
        meters: "Performance Meters",
        audio: "JBL Audio Upgrade",
        obd: "Digital OBD2 Display",
        sub: "Underseat Subwoofer",
        bar: "Chassis Stiffening Bar",
        console: "Console Illumination"
    }
  },
  bm: {
    hero_title: "Naik Taraf Pemanduan Anda",
    hero_sub: "Modifikasi premium dengan kerja tangan yang kemas. Transformasi kereta anda dengan pemasangan pakar dan pakej gaya sporty kami.",
    tag1: "Sistem Hiburan",
    tag2: "Gaya Dalaman",
    tag3: "Kit Luaran",
    tag4: "Meter Kustom",
    btn_whatsapp: "Tempah WhatsApp",
    btn_services: "Lihat Servis",
    fast_reply: "Balas Pantas",
    clean_work: "Kerja Kemas",
    warranty: "Waranti",
    services_title: "Apa Kami Buat",
    s1_title: "Hiburan Kereta",
    s1_desc: "Android Player, Apple CarPlay, Kamera 360, dan penalaan audio berkualiti tinggi.",
    s2_title: "Gaya Dalaman",
    s2_desc: "Sarung kerusi kustom, karpet premium, stereng, dan naik taraf trim.",
    s3_title: "Gaya Luaran",
    s3_desc: "Spoiler, body kit, diffuser, dan peningkatan estetik sporty.",
    s4_title: "Rekaan Meter",
    s4_desc: "Kluster meter sporty, naik taraf papan pemuka digital, dan pencahayaan kustom.",
    s5_title: "Pemasangan Aksesori",
    s5_desc: "Dashcam, sensor, naik taraf lampu. Pemasangan profesional dan kemas.",
    s6_title: "Pakej Berbaloi",
    s6_desc: "Naik taraf bundle untuk transformasi lengkap dengan kadar lebih baik.",
    sg_title: "Melawat dari Tuas?",
    sg_subtitle: "Pemandu Singapura Dialu-alukan",
    sg_desc: "Tempah slot anda sebelum memandu masuk. Kami tawarkan pemasangan pantas untuk item terpilih dan naik taraf nilai terbaik hanya di seberang sempadan.",
    close_tuas: "Dekat Tuas Link",
    priority: "Keutamaan Temujanji",
    btn_sg: "Tempah Slot SG",
    final_title: "Sedia untuk Naik Taraf?",
    final_desc: "Hantar model kereta anda dan apa yang anda cari. Kami akan cadangkan setup terbaik untuk bajet anda.",
    btn_chat: "Mula Chat di WhatsApp",
    wa_float_title: "Chat di WhatsApp",
    wa_float_sub: "Balas Pantas • Hantar Model",
    visit_title: "Lawati Kedai Kami",
    address_title: "Alamat",
    get_directions: "Dapatkan Arah",
    hours_title: "Waktu Operasi",
    open_everyday: "Buka Setiap Hari!",
    testimonials_title: "Apa Kata Pelanggan Kami",
    see_reviews: "Lihat semua ulasan di Google",
    gallery_title: "Kerja Terkini Kami",
    malaysia_sg_welcome: "Malaysia 🇲🇾 & SG 🇸🇬 Dialu-alukan",
    featured_work: "Kerja Pilihan",
    featured_desc: "Pencahayaan Ambien & Setup Android Player",
    gallery_titles: {
        led: "Naik Taraf Lampu LED",
        ambient: "Lampu Ambien",
        meters: "Meter Prestasi",
        audio: "Naik Taraf Audio JBL",
        obd: "Paparan OBD2 Digital",
        sub: "Subwoofer Bawah Kerusi",
        bar: "Bar Pengukuh Casis",
        console: "Pencahayaan Konsol"
    }
  },
  zh: {
    hero_title: "升级您的驾驶体验",
    hero_sub: "优质改装，工艺精湛。通过我们的专业安装和运动风格配套，让您的爱车焕然一新。",
    tag1: "娱乐系统",
    tag2: "内饰造型",
    tag3: "外观套件",
    tag4: "定制仪表",
    btn_whatsapp: "WhatsApp 预约",
    btn_services: "查看服务",
    fast_reply: "快速回复",
    clean_work: "做工整洁",
    warranty: "保修",
    services_title: "我们的服务",
    s1_title: "汽车娱乐",
    s1_desc: "安卓主机、Apple CarPlay、360全景相机和高端音响调音。",
    s2_title: "内饰造型",
    s2_desc: "定制座套、高级脚垫、方向盘和内饰升级。",
    s3_title: "外观造型",
    s3_desc: "尾翼、包围套件、扩散器和运动美学增强。",
    s4_title: "仪表设计",
    s4_desc: "运动仪表组、数字仪表盘升级和定制灯光。",
    s5_title: "配件安装",
    s5_desc: "行车记录仪、传感器、灯光升级。专业整洁安装。",
    s6_title: "超值配套",
    s6_desc: "捆绑升级，以更优惠的价格实现全面改造。",
    sg_title: "来自大士 Tuas？",
    sg_subtitle: "欢迎新加坡车主",
    sg_desc: "开车入境前预订您的时段。我们为特定项目提供快速安装，并在边境对面提供性价比最高的升级。",
    close_tuas: "靠近 Tuas Link",
    priority: "预约优先",
    btn_sg: "预订 SG 时段",
    final_title: "准备好升级了吗？",
    final_desc: "把您的车型和需求发给我们。我们将根据您的预算推荐最佳方案。",
    btn_chat: "在 WhatsApp 上开始聊天",
    wa_float_title: "WhatsApp 咨询",
    wa_float_sub: "快速回复 • 发送车型",
    visit_title: "访问我们的店铺",
    address_title: "地址",
    get_directions: "获取路线",
    hours_title: "营业时间",
    open_everyday: "每天营业！",
    testimonials_title: "客户评价",
    see_reviews: "在 Google 上查看所有评论",
    gallery_title: "我们最近的作品",
    malaysia_sg_welcome: "欢迎马来西亚 🇲🇾 & 新加坡 🇸🇬",
    featured_work: "精选作品",
    featured_desc: "氛围灯与安卓主机设置",
    gallery_titles: {
        led: "LED 大灯升级",
        ambient: "氛围灯",
        meters: "性能仪表",
        audio: "JBL 音响升级",
        obd: "数字 OBD2 显示器",
        sub: "座椅下低音炮",
        bar: "底盘加强杆",
        console: "中控台照明"
    }
  }
};

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [lang, setLang] = useState<"en" | "bm" | "zh">("en");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Helper for translations
  const t = i18n[lang];

  const galleryImages = [
    { src: gallery1, title: t.gallery_titles.led },
    { src: gallery2, title: t.gallery_titles.ambient },
    { src: gallery11, title: t.gallery_titles.meters },
    { src: gallery10, title: t.gallery_titles.audio },
    { src: gallery9, title: t.gallery_titles.obd },
    { src: gallery4, title: t.gallery_titles.sub },
    { src: gallery5, title: t.gallery_titles.bar },
    { src: gallery8, title: t.gallery_titles.console },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Navigation */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
          scrolled 
            ? "bg-background/80 backdrop-blur-md border-border py-3" 
            : "bg-transparent border-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
            </div>
            <span className="font-display font-bold text-lg md:text-xl tracking-wider">81 CAR ACCESSORIES</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center bg-secondary/50 rounded-full p-1 border border-border">
              {(["en", "bm", "zh"] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-3 py-1 rounded-full text-xs font-bold uppercase transition-all ${
                    lang === l 
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {l === "zh" ? "中文" : l}
                </button>
              ))}
            </div>

            <a 
              href={getWaLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-5 py-2 rounded-full font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(255,122,24,0.3)]"
            >
              <MessageCircle size={18} />
              <span>{t.btn_whatsapp}</span>
            </a>
          </div>
        </div>
      </header>

      <main className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          
          {/* Hero Section */}
          <section className="grid lg:grid-cols-2 gap-8 mb-24 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-b from-primary/5 to-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,122,24,0.15),transparent_50%)]" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {t.malaysia_sg_welcome}
                </div>
                
                <h1 className="text-5xl lg:text-6xl leading-tight mb-6">
                  {t.hero_title}
                </h1>
                
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed max-w-md">
                  {t.hero_sub}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">
                  {[t.tag1, t.tag2, t.tag3, t.tag4].map((tag) => (
                    <span key={tag} className="px-3 py-1.5 rounded-md bg-secondary border border-border text-xs text-muted-foreground font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4">
                  <a 
                    href={getWaLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_4px_20px_rgba(255,122,24,0.25)]"
                  >
                    <MessageCircle size={20} />
                    {t.btn_whatsapp}
                  </a>
                  <a 
                    href="#services"
                    className="flex items-center gap-2 bg-secondary hover:bg-secondary/80 text-foreground px-6 py-3 rounded-xl font-bold transition-all border border-border"
                  >
                    {t.btn_services}
                  </a>
                </div>

                <div className="mt-8 flex items-center gap-4 text-xs text-muted-foreground border-t border-border pt-6">
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-primary" /> {t.fast_reply}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-primary" /> {t.clean_work}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <CheckCircle2 size={14} className="text-primary" /> {t.warranty}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative h-[500px] lg:h-[650px] rounded-3xl overflow-hidden border border-border group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10" />
              <img 
                src={heroImage} 
                alt="Modern Car Interior" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20">
                <div className="bg-background/80 backdrop-blur-md border border-border/50 p-4 rounded-xl inline-block">
                  <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{t.featured_work}</p>
                  <p className="font-display font-bold text-xl">{t.featured_desc}</p>
                </div>
              </div>
            </motion.div>
          </section>

          {/* Services Grid */}
          <section id="services" className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl">{t.services_title}</h2>
              <div className="h-px flex-1 bg-border ml-6 hidden md:block" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: <Music className="text-primary" size={24} />,
                  title: t.s1_title,
                  desc: t.s1_desc
                },
                { 
                  icon: <Armchair className="text-primary" size={24} />,
                  title: t.s2_title,
                  desc: t.s2_desc
                },
                { 
                  icon: <Car className="text-primary" size={24} />,
                  title: t.s3_title,
                  desc: t.s3_desc
                },
                { 
                  icon: <Gauge className="text-primary" size={24} />,
                  title: t.s4_title,
                  desc: t.s4_desc
                },
                { 
                  icon: <Wrench className="text-primary" size={24} />,
                  title: t.s5_title,
                  desc: t.s5_desc
                },
                { 
                  icon: <Package className="text-primary" size={24} />,
                  title: t.s6_title,
                  desc: t.s6_desc
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6 rounded-2xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {service.icon}
                  </div>
                  <h3 className="text-xl mb-3 group-hover:text-primary transition-colors">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Featured Works Gallery */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <h2 className="text-3xl">{t.gallery_title}</h2>
              <div className="h-px flex-1 bg-border ml-6 hidden md:block" />
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {galleryImages.map((img, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setSelectedImage(img.src)}
                  className={`relative aspect-square rounded-xl overflow-hidden cursor-pointer group ${
                    i === 0 || i === 3 ? "md:col-span-2 md:row-span-2" : ""
                  }`}
                >
                  <img 
                    src={img.src} 
                    alt={img.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="font-bold text-white text-sm">{img.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* SG Promo Section */}
          <section className="mb-24">
            <div className="bg-gradient-to-r from-secondary to-card border border-border rounded-3xl p-8 lg:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🇸🇬</span>
                    <span className="font-display font-bold text-primary uppercase tracking-wider">{t.sg_subtitle}</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl mb-4">{t.sg_title}</h2>
                  <p className="text-muted-foreground max-w-xl text-lg mb-6">
                    {t.sg_desc}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-lg border border-border">
                      <MapPin size={16} /> {t.close_tuas}
                    </div>
                    <div className="flex items-center gap-2 bg-background/50 px-3 py-1.5 rounded-lg border border-border">
                      <Calendar size={16} /> {t.priority}
                    </div>
                  </div>
                </div>
                
                <a 
                  href={getWaLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="shrink-0 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-xl font-bold flex items-center gap-3 transition-transform hover:scale-105 shadow-lg shadow-primary/20"
                >
                  <MessageCircle size={20} />
                  {t.btn_sg}
                </a>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="mb-24">
            <div className="flex items-center justify-between mb-10">
              <div className="flex items-center gap-3">
                <div className="bg-white p-2 rounded-full">
                  <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                  </svg>
                </div>
                <h2 className="text-3xl">{t.testimonials_title}</h2>
              </div>
              <div className="h-px flex-1 bg-border ml-6 hidden md:block" />
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  name: "Yao Jun Teng",
                  role: "Local Guide • 176 reviews",
                  time: "11 months ago",
                  text: "Terence has been helpful in sharing the line of products and services. Acceptable pricing and service. Recommend to come here to do your car. Singapore driver here.",
                  img: "https://lh3.googleusercontent.com/a/ACg8ocIsdF_uK8k7_...=s40-c-rp-mo-br100" // Placeholder for avatar styling
                },
                {
                  name: "Nas P Ramlee",
                  role: "Local Guide • 12 reviews",
                  time: "7 months ago",
                  text: "Drove from sg to this place just to rectify my car audio and found out that my woofer was not working anymore and they recommended me lots of products! Thank you so much for your help and ill come back soon!"
                },
                {
                  name: "alvin lim",
                  role: "Local Guide • 15 reviews",
                  time: "4 months ago",
                  text: "Goh from 81 car accessories, is top tier service, let’s me test all the different android player one by one, he also went above an beyond to help me wire and test different sub woofers from the car. Highly recommend!"
                },
                {
                  name: "VDJ HARRIS ENTERTAINMENT CREW",
                  role: "2 reviews",
                  time: "a year ago",
                  text: "Would like to share that the personal here are efficient and polite. Reasonable prices quoted and professional advice rendered. Terence had been very helpful.Tq Terence"
                },
                {
                  name: "Lordy Teemo",
                  role: "6 reviews",
                  time: "4 months ago",
                  text: "Best shop.. i did my foglamp and headlamp here.. staff all friendly.. many products can be found here.. 👍👍"
                },
                {
                  name: "Saran raj",
                  role: "3 reviews",
                  time: "3 months ago",
                  text: "The shop boss very friendly and explain about product details in understanding way"
                }
              ].map((review, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border p-6 rounded-2xl flex flex-col h-full"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm leading-none mb-1">{review.name}</h4>
                      <p className="text-[10px] text-muted-foreground uppercase tracking-wider">{review.role}</p>
                    </div>
                    <div className="ml-auto text-xs text-muted-foreground">{review.time}</div>
                  </div>
                  
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={14} className="fill-orange-400 text-orange-400" />
                    ))}
                  </div>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed flex-1">"{review.text}"</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
               <a 
                 href="https://www.google.com/search?q=81+car+accessories+reviews" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors font-medium text-sm"
               >
                 {t.see_reviews} <ChevronRight size={14} />
               </a>
            </div>
          </section>

          {/* Location & Hours Section */}
          <section className="mb-24">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Store Info */}
              <div className="space-y-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl">{t.visit_title}</h2>
                  <div className="h-px flex-1 bg-border ml-6 hidden md:block" />
                </div>
                
                <div className="bg-card border border-border rounded-2xl overflow-hidden">
                  <div className="aspect-video relative">
                    <img 
                      src={storefrontImage}
                      alt="81 Car Accessories Storefront" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-1">81 Car Accessories</h3>
                        <p className="text-gray-300 text-sm">Skudai, Johor</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="p-6 space-y-6">
                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t.address_title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          No 106, Jalan Nb2 1/4,<br />
                          Taman Nusa Bestari 2,<br />
                          81300 Skudai, Johor Darul Ta'zim
                        </p>
                        <a 
                          href="https://maps.google.com/?q=No106,+Jalan+Nb2+1/4,+Taman+Nusa+Bestari+2,+81300+Skudai,+Johor" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-primary text-xs font-bold mt-2 hover:underline"
                        >
                          <Navigation size={12} /> {t.get_directions}
                        </a>
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">{t.hours_title}</h4>
                        <div className="text-muted-foreground text-sm space-y-1">
                          <div className="flex justify-between gap-8">
                            <span>Saturday - Friday</span>
                            <span className="text-foreground font-medium">9:30 AM – 8:30 PM</span>
                          </div>
                          <p className="text-xs text-primary/80 mt-2 font-medium">{t.open_everyday}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="bg-card border border-border rounded-2xl overflow-hidden h-full min-h-[400px]">
                <iframe 
                  src="https://maps.google.com/maps?q=No106,+Jalan+Nb2+1/4,+Taman+Nusa+Bestari+2,+81300+Skudai,+Johor&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  width="100%" 
                  height="100%" 
                  style={{ border: 0, minHeight: "400px" }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-4xl mb-6">{t.final_title}</h2>
              <p className="text-muted-foreground text-lg mb-8">
                {t.final_desc}
              </p>
              <a 
                href={getWaLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold text-lg transition-all"
              >
                <MessageCircle size={22} />
                {t.btn_chat}
              </a>
            </div>
          </section>

        </div>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted-foreground bg-card">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} 81 Car Accessories. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating Action Button */}
      <a
        href={getWaLink()}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-card border border-primary/40 pl-4 pr-2 py-2 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.5)] backdrop-blur-md hover:-translate-y-1 transition-transform group"
      >
        <div className="flex flex-col items-start">
          <span className="font-bold text-sm">{t.wa_float_title}</span>
          <span className="text-[10px] text-muted-foreground group-hover:text-primary transition-colors">{t.wa_float_sub}</span>
        </div>
        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center text-primary-foreground shadow-lg shadow-primary/30">
          <MessageCircle size={20} fill="currentColor" />
        </div>
      </a>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl w-full max-h-[90vh]">
            <button 
              className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage} 
              alt="Gallery View" 
              className="w-full h-full object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}
