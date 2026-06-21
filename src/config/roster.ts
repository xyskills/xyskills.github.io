/**
 * Character & world roster configuration.
 *
 * HOW TO CUSTOMIZE:
 * 1. Drop images into  public/assets/characters/  and  public/assets/worlds/
 * 2. Drop sounds into  public/assets/sounds/
 * 3. Edit the paths below to point at your files.
 *
 * Supported image formats: png, jpg, webp, avif, svg
 * Supported sound formats: mp3, ogg, wav, webm
 *
 * Images are loaded from the public folder and prefixed with BASE_URL
 * so they work both at / and nested subpaths like /filter/.
 */

const withBase = (path: string): string => {
  const base = import.meta.env.BASE_URL.endsWith('/')
    ? import.meta.env.BASE_URL
    : `${import.meta.env.BASE_URL}/`
  return `${base}${path.replace(/^\/+/, '')}`
}

export interface AbilityDef {
  name: string
  color: string        // CSS color for UI tags
}

export interface CharacterDef {
  id: string
  name: string
  sub: string
  image: string | null // path in /public, or null for placeholder
  accent: string       // CSS accent color
  abilities: AbilityDef[]
  sounds: {
    [key: string]: string | null  // ability-name → sound file path, null = use synthesized
  }
  locked?: boolean
}

export interface WorldDef {
  id: string
  name: string
  sub: string
  image: string | null
  gradient: string     // CSS gradient fallback when no image
  locked?: boolean
}

// ─── WORLDS ────────────────────────────────────────────────
export const worlds: WorldDef[] = [
  {
    id: 'jjk',
    name: 'Jujutsu Kaisen',
    sub: 'Shibuya, Tokyo',
    image: withBase('/assets/worlds/jjk.jpg'),
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #1a0533 100%)',
  },
  {
    id: 'naruto',
    name: 'Naruto',
    sub: 'Hidden Leaf Village',
    image: withBase('/assets/worlds/naruto.jpg'),
    gradient: 'linear-gradient(135deg, #0a1f0a 0%, #1a4d1a 50%, #0a1f0a 100%)',
    locked: true,
  },
  {
    id: 'dbz',
    name: 'Dragon Ball Z',
    sub: 'Hyperbolic Time Chamber',
    image: withBase('/assets/worlds/dbz.jpg'),
    gradient: 'linear-gradient(135deg, #1f1a00 0%, #4d3d0a 50%, #1f1a00 100%)',
    locked: true,
  },
]

// ─── CHARACTERS ────────────────────────────────────────────
export const characters: CharacterDef[] = [
  {
    id: 'gojo',
    name: 'Satoru Gojo',
    sub: 'The Strongest Sorcerer',
    image: withBase('/assets/characters/gojo.png'),
    accent: '#818cf8',
    abilities: [
      { name: 'Blue',             color: '#60a5fa' },
      { name: 'Red',              color: '#f87171' },
      { name: 'Hollow Purple',    color: '#a78bfa' },
      { name: 'Infinite Void',    color: '#c7d2fe' },
    ],
    sounds: {
      blue:   withBase('/assets/sounds/blue.mp3'),
      red:    withBase('/assets/sounds/red.mp3'),
      purple: withBase('/assets/sounds/purple.mp3'),
      shoot:  withBase('/assets/sounds/shoot.mp3'),
    },
  },
  {
    id: 'sukuna',
    name: 'Ryomen Sukuna',
    sub: 'King of Curses',
    image: withBase('/assets/characters/sukuna.png'),
    accent: '#f87171',
    abilities: [
      { name: 'Cleave',           color: '#f87171' },
      { name: 'Dismantle',        color: '#fb923c' },
      { name: 'Malevolent Shrine', color: '#dc2626' },
    ],
    sounds: {},
    locked: true,
  },
  {
    id: 'yuta',
    name: 'Yuta Okkotsu',
    sub: 'Special Grade Sorcerer',
    image: withBase('/assets/characters/yuta.png'),
    accent: '#38bdf8',
    abilities: [
      { name: 'Rika',             color: '#38bdf8' },
      { name: 'Copycat',          color: '#7dd3fc' },
      { name: 'Domain Expansion', color: '#e0f2fe' },
    ],
    sounds: {},
    locked: true,
  },
]
