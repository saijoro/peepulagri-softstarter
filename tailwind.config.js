export default {
	darkMode: ["class"],
	content: [
	  "./app/**/*.{js,ts,jsx,tsx}",
	  "../app/components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	extend: {
    		colors: {
				title: 'var(--Title, #35353D)',
    			background: 'hsl(var(--sidebar-background))',
    			foreground: 'hsl(var(--sidebar-foreground))',
    			border: 'hsl(var(--border, var(--sidebar-border)))',
    			sidebar: {
    				DEFAULT: 'hsl(var(--sidebar-background))',
    				foreground: 'hsl(var(--sidebar-foreground))',
    				primary: 'hsl(var(--sidebar-primary))',
    				'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
    				accent: 'hsl(var(--sidebar-accent))',
    				'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
    				border: 'hsl(var(--sidebar-border))',
    				ring: 'hsl(var(--sidebar-ring))'
    			}
    		},
    		keyframes: {
    			'accordion-down': {
    				from: {
    					height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },
	plugins: [
	  function ({ addUtilities }) {
		addUtilities({
		  ".scrollbar-hidden": {
			"-webkit-scrollbar": { display: "none" },
			"scrollbar-width": "none",
			"-ms-overflow-style": "none",
		  },
		  ".outline-ring-50": {
			outline: "2px solid gray",
			"outline-offset": "2px",
		  },
		});
	  },
	],
  };