export const theme = {
    colors: {
        neutral: {
            '50': '#fdfdfd',
            '100': '#efefef',
            '200': '#dcdcdc',
            '300': '#bdbdbd',
            '400': '#989898',
            '500': '#7c7c7c',
            '600': '#656565',
            '700': '#525252',
            '800': '#464646',
            '900': '#3d3d3d',
        }
    },

    // https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale
    spacing: {
        '0.5': '0.125rem',
        '1': '0.25rem',
        '1.5': '0.375rem',
        '2': '0.5rem',
        '2.5': '0.625rem',
        '3': '0.75rem',
        '3.5': '0.875rem',
        '4': '1rem'
    },

    fonts: {
        default: {
            family: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji"`
        }
    }
};

export function getCSSCustomProperties(theme, prefix = '') {
    return Object.entries(theme).reduce((acc, [key, value]) => {
        if (typeof value === 'object') {
            return acc + getCSSCustomProperties(value, `${prefix}-${key}`);
        }

        return acc + `-${prefix}-${key.replace('.', '_')}: ${value};\n`;
    }, '');
}
