import { nextui } from '@nextui-org/theme';
import { Config } from 'tailwindcss';



/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conie":
        "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },

      fontFamily: {
        sans: ['var(--font-sans)'],
        mono: ['var(--font-mono)'],
      },
    },
  },

  darkMode: 'class',
 plugins: [nextui({
    "themes": {
      "light": {
        "colors": {
          "default": {
            "50": "#f1efed",
            "100": "#ddd8d5",
            "200": "#c9c2bc",
            "300": "#b5aba3",
            "400": "#a1958b",
            "500": "#8d7e72",
            "600": "#74685e",
            "700": "#5c524a",
            "800": "#433c36",
            "900": "#2a2622",
            "foreground": "#000",
            "DEFAULT": "#8d7e72"
          },
          "primary": {
            "50": "#f3e3e7",
            "100": "#e3bdc6",
            "200": "#d296a5",
            "300": "#c16f84",
            "400": "#b14963",
            "500": "#a02242",
            "600": "#841c36",
            "700": "#68162b",
            "800": "#4c101f",
            "900": "#300a14",
            "foreground": "#fff",
            "DEFAULT": "#a02242"
          },
          "secondary": {
            "50": "#f7e8e8",
            "100": "#ebc8c7",
            "200": "#dfa7a7",
            "300": "#d38786",
            "400": "#c86666",
            "500": "#bc4645",
            "600": "#9b3a39",
            "700": "#7a2e2d",
            "800": "#592121",
            "900": "#381515",
            "foreground": "#fff",
            "DEFAULT": "#bc4645"
          },
          "success": {
            "50": "#e8f2ef",
            "100": "#c8dfd9",
            "200": "#a9ccc3",
            "300": "#89b9ac",
            "400": "#69a696",
            "500": "#499380",
            "600": "#3c796a",
            "700": "#2f6053",
            "800": "#23463d",
            "900": "#162c26",
            "foreground": "#000",
            "DEFAULT": "#499380"
          },
          "warning": {
            "50": "#fcefe2",
            "100": "#f8d9b9",
            "200": "#f5c28f",
            "300": "#f1ac66",
            "400": "#ed953d",
            "500": "#e97f14",
            "600": "#c06911",
            "700": "#97530d",
            "800": "#6f3c0a",
            "900": "#462606",
            "foreground": "#000",
            "DEFAULT": "#e97f14"
          },
          "danger": {
            "50": "#fbe6e1",
            "100": "#f6c2b6",
            "200": "#f09f8c",
            "300": "#eb7c62",
            "400": "#e55837",
            "500": "#e0350d",
            "600": "#b92c0b",
            "700": "#922208",
            "800": "#6a1906",
            "900": "#431004",
            "foreground": "#000",
            "DEFAULT": "#e0350d"
          },
          "background": "#fffdf9",
          "foreground": {
            "50": "#e5e3df",
            "100": "#c0bbb3",
            "200": "#9b9386",
            "300": "#766b5a",
            "400": "#51442d",
            "500": "#2c1c01",
            "600": "#241701",
            "700": "#1d1201",
            "800": "#150d00",
            "900": "#0d0800",
            "foreground": "#fff",
            "DEFAULT": "#2c1c01"
          },
          "content1": {
            "DEFAULT": "#f6e9ec",
            "foreground": "#000"
          },
          "content2": {
            "DEFAULT": "#e7c8d0",
            "foreground": "#000"
          },
          "content3": {
            "DEFAULT": "#deb2bd",
            "foreground": "#000"
          },
          "content4": {
            "DEFAULT": "#d49caa",
            "foreground": "#000"
          },
          "focus": "#a02242",
          "overlay": "#000000",
          "divider": "#111111"
        }
      },
      "dark": {
        "colors": {
          "default": {
            "50": "#151212",
            "100": "#231e1f",
            "200": "#322b2b",
            "300": "#403738",
            "400": "#6b6465",
            "500": "#969192",
            "600": "#c1bebe",
            "700": "#ecebeb",
            "foreground": "#fff",
            "DEFAULT": "#322b2b"
          },
          "primary": {
            "50": "#340b15",
            "100": "#581324",
            "200": "#7c1a33",
            "300": "#a02242",
            "400": "#b5546d",
            "500": "#cb8597",
            "600": "#e0b7c2",
            "700": "#f6e9ec",
            "foreground": "#fff",
            "DEFAULT": "#7c1a33"
          },
          "secondary": {
            "50": "#3d1716",
            "100": "#672726",
            "200": "#923635",
            "300": "#bc4645",
            "400": "#cb706f",
            "500": "#da9999",
            "600": "#e9c3c3",
            "700": "#f8edec",
            "foreground": "#fff",
            "DEFAULT": "#923635"
          },
          "success": {
            "50": "#18302a",
            "100": "#285146",
            "200": "#397263",
            "300": "#499380",
            "400": "#72ab9d",
            "500": "#9bc4b9",
            "600": "#c4dcd6",
            "700": "#edf4f2",
            "foreground": "#fff",
            "DEFAULT": "#397263"
          },
          "warning": {
            "50": "#4c2906",
            "100": "#80460b",
            "200": "#b56210",
            "300": "#e97f14",
            "400": "#ee9c49",
            "500": "#f3b97e",
            "600": "#f8d5b3",
            "700": "#fdf2e8",
            "foreground": "#000",
            "DEFAULT": "#b56210"
          },
          "danger": {
            "50": "#491104",
            "100": "#7b1d07",
            "200": "#ae290a",
            "300": "#e0350d",
            "400": "#e76243",
            "500": "#ee907a",
            "600": "#f5bdb0",
            "700": "#fcebe7",
            "foreground": "#fff",
            "DEFAULT": "#ae290a"
          },
          "background": "#080202",
          "foreground": {
            "50": "#534b4c",
            "100": "#8c8081",
            "200": "#c6b4b5",
            "300": "#ffe8ea",
            "400": "#ffedef",
            "500": "#fff2f3",
            "600": "#fff8f8",
            "700": "#fffdfd",
            "foreground": "#000",
            "DEFAULT": "#c6b4b5"
          },
          "content1": {
            "DEFAULT": "#20070d",
            "foreground": "#fff"
          },
          "content2": {
            "DEFAULT": "#300a14",
            "foreground": "#fff"
          },
          "content3": {
            "DEFAULT": "#400e1a",
            "foreground": "#fff"
          },
          "content4": {
            "DEFAULT": "#501121",
            "foreground": "#fff"
          },
          "focus": "#a02242",
          "overlay": "#ffffff",
          "divider": "#ffffff"
        }
      }
    },
    "layout": {
      "fontSize": {
        "tiny": "0.75rem",
        "small": "0.875rem",
        "medium": "1rem",
        "large": "1.125rem"
      },
      "lineHeight": {
        "tiny": "1rem",
        "small": "1.25rem",
        "medium": "1.5rem",
        "large": "1.75rem"
      },
      "radius": {
        "small": "0.5rem",
        "medium": "0.75rem",
        "large": "0.875rem"
      },
      "borderWidth": {
        "small": "1px",
        "medium": "2px",
        "large": "3px"
      },
      "disabledOpacity": "0.5",
      "dividerWeight": "1",
      "hoverOpacity": "0.9"
    }
  })
]
};
export default config;

