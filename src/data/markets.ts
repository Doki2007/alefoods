import madreOrganica from "#assets/images/organica.png";
import marketCapon from "#assets/images/capon.png";
import marketEcoVive from "#assets/images/ecovive.png";
import marketFranco from "#assets/images/franco.webp";
import marketGreta from "#assets/images/marketgreta.png";
import marketHoli from "#assets/images/marketholi.png";
import marketOjeda from "#assets/images/ojedamarket.png";
import marketUnion from "#assets/images/union1.webp";

export type LogoList = {
  image: ImageMetadata;
  alt: string;
};

export const logoList: LogoList[] = [
  { image: madreOrganica, alt: "Madre Orgánica Market" },
  { image: marketCapon, alt: "Market Capón" },
  { image: marketEcoVive, alt: "Market EcoVive" },
  { image: marketFranco, alt: "Market Franco" },
  { image: marketGreta, alt: "Market Greta" },
  { image: marketHoli, alt: "Market Holi" },
  { image: marketOjeda, alt: "Market Ojeda" },
  { image: marketUnion, alt: "Market Union" },
];


export type Market = {
  name: string;
  districts: string[];
};

export const marketList: Market[] = [
  { name: "Holi Supermercados", districts: ["Barranco","Magdalena", "Miraflores", "San Borja", ] },
  { name: "Market Capón", districts: ["Miraflores", "San Borja"] },
  { name: "Franco Retail", districts: ["Surco"] },
  { name: "Greta Market Saludable", districts: ["La Molina", "Miraflores", "Surco"] },
  { name: "Madre Orgánica", districts: ["Miraflores"] },
  { name: "Ojeda Market", districts: ["San Borja"] },
  { name: "Ecovive", districts: ["Barranco"] },
  { name: "Market Unv Union", districts: ["Ñaña"] },
];
