import { default as DataTableDefault } from './DataTable.svelte';
import { default as Row } from './Row.svelte';
import { default as Cell } from './Cell.svelte';
import { default as Header } from './Header.svelte';
import { default as HeaderCell } from './HeaderCell.svelte';
import { default as Body } from './Body.svelte';

DataTableDefault.Body = Body;
DataTableDefault.Row = Row;
DataTableDefault.Cell = Cell;
DataTableDefault.Header = Header;
DataTableDefault.HeaderCell = HeaderCell;

export default DataTableDefault;
