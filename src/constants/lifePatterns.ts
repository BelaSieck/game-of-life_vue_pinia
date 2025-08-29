export interface LifePattern {
  name: string;
  description: string;
  type: "Still life" | "Oscillator" | "Spaceship" | "Gun" | "Methuselah";
  period: number | null;
  rows: number;
  columns: number;
  pattern: boolean[][];
}

export const lifePatterns: LifePattern[] = [
  // ===== Still lifes (period 1) =====
  {
    name: "Block",
    description: "Smallest still life (2×2).",
    type: "Still life",
    period: 1,
    rows: 2,
    columns: 2,
    pattern: [
      [true, true],
      [true, true],
    ],
  },
  {
    name: "Beehive",
    description: "Common 6-cell still life.",
    type: "Still life",
    period: 1,
    rows: 3,
    columns: 4,
    pattern: [
      [false, true,  true,  false],
      [true,  false, false, true ],
      [false, true,  true,  false],
    ],
  },
  {
    name: "Loaf",
    description: "7-cell still life; like a beehive with a tail.",
    type: "Still life",
    period: 1,
    rows: 4,
    columns: 4,
    pattern: [
      [false, true,  true,  false],
      [true,  false, false, true ],
      [false, true,  false, true ],
      [false, false, true,  false],
    ],
  },
  {
    name: "Boat",
    description: "5-cell still life; beehive-like triangle.",
    type: "Still life",
    period: 1,
    rows: 3,
    columns: 3,
    pattern: [
      [true,  true,  false],
      [true,  false, true ],
      [false, true,  false],
    ],
  },
  {
    name: "Tub",
    description: "4-cell diamond-shaped still life.",
    type: "Still life",
    period: 1,
    rows: 3,
    columns: 3,
    pattern: [
      [false, true,  false],
      [true,  false, true ],
      [false, true,  false],
    ],
  },

  // ===== Oscillators =====
  {
    name: "Blinker",
    description: "Period-2 oscillator (line of three).",
    type: "Oscillator",
    period: 2,
    rows: 1,
    columns: 3,
    pattern: [
      [true, true, true],
    ],
  },
  {
    name: "Toad",
    description: "Period-2 oscillator of two offset rows of three.",
    type: "Oscillator",
    period: 2,
    rows: 2,
    columns: 4,
    pattern: [
      [false, true,  true,  true ],
      [true,  true,  true,  false],
    ],
  },
  {
    name: "Beacon",
    description: "Period-2 oscillator of two 2×2 blocks touching corners.",
    type: "Oscillator",
    period: 2,
    rows: 4,
    columns: 4,
    pattern: [
      [true,  true,  false, false],
      [true,  false, false, false],
      [false, false, false, true ],
      [false, false, true,  true ],
    ],
  },
  {
    name: "Pulsar",
    description: "Large period-3 oscillator with 48 cells.",
    type: "Oscillator",
    period: 3,
    rows: 13,
    columns: 13,
    pattern: [
      [false,false,true,true,true,false,false,false,true,true,true,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false],
      [true,false,false,false,false,true,false,true,false,false,false,false,true],
      [true,false,false,false,false,true,false,true,false,false,false,false,true],
      [true,false,false,false,false,true,false,true,false,false,false,false,true],
      [false,false,true,true,true,false,false,false,true,true,true,false,false],
      [false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,true,true,true,false,false,false,true,true,true,false,false],
      [true,false,false,false,false,true,false,true,false,false,false,false,true],
      [true,false,false,false,false,true,false,true,false,false,false,false,true],
      [true,false,false,false,false,true,false,true,false,false,false,false,true],
      [false,false,false,false,false,false,false,false,false,false,false,false,false],
      [false,false,true,true,true,false,false,false,true,true,true,false,false],
    ],
  },
  {
    name: "Pentadecathlon",
    description: "Period-15 oscillator (the only one of its kind).",
    type: "Oscillator",
    period: 15,
    rows: 8,
    columns: 3,
    pattern: [
      [false,true,false],
      [true,true,true],
      [false,true,false],
      [false,true,false],
      [false,true,false],
      [false,true,false],
      [true,true,true],
      [false,true,false],
    ],
  },

  // ===== Spaceships =====
  {
    name: "Glider",
    description: "Smallest spaceship; travels diagonally.",
    type: "Spaceship",
    period: 4,
    rows: 3,
    columns: 3,
    pattern: [
      [false, true,  false],
      [false, false, true ],
      [true,  true,  true ],
    ],
  },
  {
    name: "Lightweight Spaceship (LWSS)",
    description: "Common orthogonal spaceship (period 4).",
    type: "Spaceship",
    period: 4,
    rows: 4,
    columns: 5,
    pattern: [
      [false, true,  true,  true,  true ],
      [true,  false, false, false, true ],
      [false, false, false, false, true ],
      [true,  false, false, true,  false],
    ],
  },
  {
    name: "Middleweight Spaceship (MWSS)",
    description: "Bigger spaceship (period 4).",
    type: "Spaceship",
    period: 4,
    rows: 4,
    columns: 6,
    pattern: [
      [false, true,  true,  true,  true, true ],
      [true,  false, false, false, false, true ],
      [false, false, false, false, false, true ],
      [true,  false, false, false, true,  false],
    ],
  },
  {
    name: "Heavyweight Spaceship (HWSS)",
    description: "Largest of the standard spaceships (period 4).",
    type: "Spaceship",
    period: 4,
    rows: 4,
    columns: 7,
    pattern: [
      [false, true,  true,  true,  true,  true, true ],
      [true,  false, false, false, false, false, true ],
      [false, false, false, false, false, false, true ],
      [true,  false, false, false, false, true,  false],
    ],
  },

  // ===== Methuselahs (no fixed period) =====
  {
    name: "R-pentomino",
    description: "Famous methuselah; evolves for a long time before stabilizing.",
    type: "Methuselah",
    period: null,
    rows: 3,
    columns: 3,
    pattern: [
      [false, true,  true ],
      [true,  true,  false],
      [false, true,  false],
    ],
  },
  {
    name: "Diehard",
    description: "Dies after 130 generations despite looking lively at first.",
    type: "Methuselah",
    period: null,
    rows: 3,
    columns: 7,
    pattern: [
      [false, false, false, false, false, false, true ],
      [true,  true,  false, false, false, false, false],
      [false, true,  false, false, false, true,  true ],
    ],
  },
  {
    name: "Acorn",
    description: "Simple 7-cell seed that explodes into complex debris before settling.",
    type: "Methuselah",
    period: null,
    rows: 3,
    columns: 7,
    pattern: [
      [false, true,  false, false, false, false, false],
      [false, false, false, true,  false, false, false],
      [true,  true,  false, false, true,  true,  true ],
    ],
  },
];
