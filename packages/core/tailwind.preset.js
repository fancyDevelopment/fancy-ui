const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary)',
          background: 'var(--color-primary-background)',
          container: 'var(--color-primary-container)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          background: 'var(--color-secondary-background)',
          container: 'var(--color-secondary-container)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          background: 'var(--color-accent-background)',
          container: 'var(--color-accent-container)',
        },
        background: {
          DEFAULT: 'var(--color-background)',
          variant: 'var(--color-background-variant)',
        }, 
        outline: 'var(--color-outline)',
        hover: 'var(--color-hover)',
        shade: 'var(--color-shade)',
        tint: 'var(--color-tint)',
        success: 'var(--color-success)',
        error: 'var(--color-error)',
        on: {
          primary: {
            DEFAULT: 'var(--color-on-primary)',
            background: 'var(--color-on-primary-background)',
            container: 'var(--color-on-primary-container)',
          },
          secondary: {
            DEFAULT: 'var(--color-on-secondary)',
            background: 'var(--color-on-secondary-background)',
            container: 'var(--color-on-secondary-container)',
          },
          accent: {
            DEFAULT: 'var(--color-on-accent)',
            background: 'var(--color-on-accent-background)',
            container: 'var(--color-on-accent-container)',
          },
        }
      },
      spacing:  {
        'rim': '8px',
        'rim/2': '4px',
        'component': '10px',
        'component/2': '5px',
        'element': '10px',
        'icon': '24px',
        'iconX2': '48px',
        'hover': '48px',
      },
      fontSize: {
        'title': '24px',
        'subtitle': '14px',
        'label': '11px'
      },
      fontWeight: {
        'title': '300',
        'label': '300'
      },
      borderRadius: {
        DEFAULT: '12px',
        component: '12px',
        element: '12px'
      },
      boxShadow: {
        DEFAULT: '0 2px 2px 0 rgb(0 0 0 / 14%), 0 3px 1px -2px rgb(0 0 0 / 12%), 0 1px 5px 0 rgb(0 0 0 / 20%)'
      },
      keyframes: {
        ripple: {
          '0%': { 
            'transform-origin': 'top left',
            transform: 'scale(0) translateX(-50%) translateY(-50%)',
          },
          '100%': { 
            'transform-origin': 'top left',
            transform: 'scale(4) translateX(-50%) translateY(-50%)',
            opacity: 0 
          },
        }
      },
      animation: {
        ripple: 'ripple 800ms linear',
      }
    },
    variables: {
      DEFAULT: {
        color: {
          primary: '#333333',
          'primary-background': '#f5f5f5',
          'primary-container': '#e7e7e7',
          secondary: '#555555',
          'secondary-background': '#f7f7f7',
          'secondary-container': '#ebebeb',
          accent: '#777777',
          'accent-background': '#f8f8f8',
          'accent-container': '#efefef',
          background: '#f7f7f7',
          'background-variant': '#d8d8d8',
          outline: '#cecece',
          hover: '#00000025',
          shade: '#00000015',
          tint: '#FFFFFF90',
          success: '#009900',
          error: '#DD0000',
          on: {
            primary: '#fbfbfb',
            'primary-background': '#030303',
            'primary-container': '#030303',
            secondary: '#fcfcfc',
            'secondary-background': '#040404',
            'secondary-container': '#040404',
            accent: '#fcfcfc',
            'accent-background': '#060606',
            'accent-container': '#060606'
          }
        }
      }
    }
  },
  plugins: [
    require('@mertasan/tailwindcss-variables'),
    plugin(fuiComponents)
  ]
};

function fuiComponents({ addComponents }) {
  addComponents({
    '.shell-background': {
      'background-color': 'green'
    }
  });
}
