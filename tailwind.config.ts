
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				// Updated Gotham theme color palette - darker and more atmospheric
				dark: {
					DEFAULT: '#070709', // Deeper dark for background
					secondary: '#0F0F13',
					tertiary: '#16161C'
				},
				light: {
					DEFAULT: '#C4C4C6', // Muted silver 
					secondary: '#8F8F91', // Darker silver gray
					tertiary: '#646467'  // Very muted gray
				},
				neon: {
					blue: '#1A4E68', // More subdued cold blue
					purple: '#2A1E41', // Moody muted purple
					red: '#591A22',  // Subdued dark red
					green: '#0D2E29' // Deep muted green
				},
				gotham: {
					yellow: '#483E1A', // Muted dark amber
					steel: '#1F262E',  // Dark steel gray
					silver: '#7C7C7E',  // Muted silver
					shadow: '#1A1A1A'   // Deep shadow tone
				}
			},
			fontFamily: {
				'jetbrains': ['"JetBrains Mono"', 'monospace'],
				'inter': ['Inter', 'sans-serif'],
				'opensans': ['"Open Sans"', 'sans-serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'cursor-blink': {
					'0%': { opacity: '1' },
					'50%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'text-slide': {
					'0%': { transform: 'translateY(0%)' },
					'33%': { transform: 'translateY(-33.33%)' },
					'66%': { transform: 'translateY(-66.66%)' },
					'100%': { transform: 'translateY(-99.99%)' }
				},
				'glow': {
					'0%': { boxShadow: '0 0 5px rgba(0, 194, 255, 0.5)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 194, 255, 0.8)' },
					'100%': { boxShadow: '0 0 5px rgba(0, 194, 255, 0.5)' }
				},
				'float': {
					'0%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-10px)' },
					'100%': { transform: 'translateY(0px)' }
				},
				'matrix-fall': {
					'0%': { transform: 'translateY(-100%)', opacity: '1' },
					'100%': { transform: 'translateY(100%)', opacity: '0' }
				},
				'glitch': {
					'0%': { transform: 'translate(0)' },
					'20%': { transform: 'translate(-2px, 2px)' },
					'40%': { transform: 'translate(-2px, -2px)' },
					'60%': { transform: 'translate(2px, 2px)' },
					'80%': { transform: 'translate(2px, -2px)' },
					'100%': { transform: 'translate(0)' }
				},
				'scan-line': {
					'0%': { top: '0%' },
					'100%': { top: '100%' }
				},
				'pulse-neon': {
					'0%, 100%': { opacity: '1', filter: 'brightness(1)' },
					'50%': { opacity: '0.7', filter: 'brightness(1.5)' }
				},
				'border-flow': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'grid-move': {
					'0%': { backgroundPosition: '0 0' },
					'100%': { backgroundPosition: '30px 30px' }
				},
				'mist': {
					'0%': { backgroundPosition: '0% 0%', opacity: '0.4' },
					'50%': { backgroundPosition: '100% 0%', opacity: '0.6' },
					'100%': { backgroundPosition: '0% 0%', opacity: '0.4' }
				},
				'shadow-pulse': {
					'0%': { boxShadow: '0 0 12px rgba(0, 194, 255, 0.2)' },
					'50%': { boxShadow: '0 0 20px rgba(0, 194, 255, 0.5)' },
					'100%': { boxShadow: '0 0 12px rgba(0, 194, 255, 0.2)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'cursor-blink': 'cursor-blink 1s infinite',
				'text-slide': 'text-slide 9s infinite',
				'glow': 'glow 2s infinite',
				'float': 'float 3s ease-in-out infinite',
				'matrix-fall': 'matrix-fall 20s linear infinite',
				'glitch': 'glitch 0.3s ease-in-out infinite alternate',
				'scan-line': 'scan-line 5s linear infinite',
				'pulse-neon': 'pulse-neon 2s infinite',
				'border-flow': 'border-flow 3s ease infinite',
				'grid-move': 'grid-move 3s linear infinite',
				'mist': 'mist 10s ease infinite',
				'shadow-pulse': 'shadow-pulse 3s infinite'
			},
			backgroundImage: {
				'cyber-grid': 'linear-gradient(rgba(30, 78, 104, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(30, 78, 104, 0.03) 1px, transparent 1px)',
				'gotham-gradient': 'linear-gradient(45deg, #0F1721, #0A0A0F, #1A1428, #0A0A0F)',
				'rain-texture': 'url("data:image/svg+xml,%3Csvg width=\'100%25\' height=\'100%25\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cdefs%3E%3Cpattern id=\'rain\' width=\'100\' height=\'100\' patternUnits=\'userSpaceOnUse\'%3E%3Cpath d=\'M 0 0 L 5 10\' stroke=\'rgba(100, 100, 110, 0.08)\' stroke-width=\'0.5\'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=\'100%25\' height=\'100%25\' fill=\'url(%23rain)\'/%3E%3C/svg%3E")',
			},
			backgroundSize: {
				'grid-size': '30px 30px',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
