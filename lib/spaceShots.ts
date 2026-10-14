/**
 * The real room — photographs by Julia (Ismoilova Family Photography),
 * the client's "final" folder, 2026-10-14 (curated to the 21 distinct views). Files live in public/img/real/
 * as WebP; 7, 10 and 16 were upscaled to 2600px with Higgsfield (the rest
 * are the photographer's own 2200px-and-up exports).
 *
 * Order matters: the first `PREVIEW` shots are what shows before
 * "See every photograph". Dimensions are the intrinsic WebP sizes.
 */
export type SpaceGroup =
  | "entrance"
  | "hall"
  | "studio"
  | "lounge"
  | "workshop"
  | "creative"
  | "content";

export type SpaceShot = {
  file: string;
  w: number;
  h: number;
  group: SpaceGroup;
  alt: string;
};

export const GROUP_ORDER: SpaceGroup[] = [
  "entrance",
  "hall",
  "studio",
  "lounge",
  "workshop",
  "creative",
  "content",
];

export const PREVIEW = 9;

export const SPACE_SHOTS: SpaceShot[] = [
  { file: "10", w: 2600, h: 1738, group: "entrance", alt: "The COBA shopfront with glowing black lettering, the owl mark and the lounge visible through the glass." },
  { file: "16", w: 2600, h: 1738, group: "hall", alt: "The main hall: shelving lit in warm light, a ladder, black pendant lamps and long oak tables." },
  { file: "3", w: 1024, h: 1536, group: "studio", alt: "White flowers in a glass vase beside canvases on easels, on the teal studio table." },
  { file: "7", w: 2600, h: 1738, group: "lounge", alt: "The green velvet lounge with a low stone table and a chess set." },
  { file: "dsc09871", w: 2200, h: 1467, group: "hall", alt: "The owl mark and the words Create Explore Connect on the white brick wall above a reception table." },
  { file: "19", w: 1467, h: 2200, group: "workshop", alt: "A workshop table set with water, notebooks and chairs, facing the COBA screen." },
  { file: "6", w: 1536, h: 1024, group: "studio", alt: "The studio table with canvases set out beside the green lounge." },
  { file: "26", w: 2200, h: 1467, group: "creative", alt: "A low curved table with green velvet stools under glowing wall shelves." },
  { file: "11", w: 1536, h: 1024, group: "entrance", alt: "The COBA entrance, with the name in English and Arabic above the glass doors." },
  { file: "12", w: 1536, h: 1024, group: "hall", alt: "The hall beneath the owl mark, with oak tables and the screen beyond." },
  { file: "9", w: 1024, h: 1536, group: "lounge", alt: "A chess board on a round stone table among green velvet stools." },
  { file: "13", w: 1536, h: 1024, group: "workshop", alt: "A square oak table with boucle chairs, a flip chart and the COBA screen." },
  { file: "1", w: 1024, h: 1536, group: "studio", alt: "The studio table with canvases and flowers below the lit shelving wall." },
  { file: "17", w: 1536, h: 1024, group: "hall", alt: "The hall from the owl wall, with the creative studio table in the distance." },
  { file: "28", w: 2200, h: 1467, group: "creative", alt: "Green velvet stools at a table in front of a wall of glowing shelves and a ladder." },
  { file: "22", w: 2200, h: 1467, group: "workshop", alt: "Boucle chairs set out for a talk, facing the screen and flip chart." },
  { file: "8", w: 1024, h: 1536, group: "lounge", alt: "The green sofa beside a tall plant and the cream curtain." },
  { file: "4", w: 1024, h: 1536, group: "studio", alt: "A bouquet and a canvas on an easel, close up on the studio table." },
  { file: "18", w: 1024, h: 1536, group: "workshop", alt: "A glass bottle, a glass and a notebook on a travertine table, with a plant." },
  { file: "20", w: 1467, h: 2200, group: "workshop", alt: "A long meeting table set with water and notebooks, leading to the screen." },
  { file: "dsc09862", w: 1467, h: 2200, group: "content", alt: "A small content corner with two softbox lights, a phone stand and stools." },
];
