const GRID_COLUMNS = 12;
const COLUMN_DEFAULT_WIDTH = 6;

export function createAttributeLayout(attributes) {
    return attributes.reduce((acc, attribute) => {
        const attributeWidth = attribute?.width ?? COLUMN_DEFAULT_WIDTH;

        const lastRow = acc.at(-1);
        const lastRowColumnsWidth = lastRow.reduce((acc, col) => acc + col?.width ?? 0, 0);

        if (lastRowColumnsWidth + attributeWidth <= GRID_COLUMNS) {
            lastRow.push({
                name: attribute.name,
                width: attributeWidth
            });
        } else {
            acc.push([]);
        }

        return acc;
    }, [[]]);
}
