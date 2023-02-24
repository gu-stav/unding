import { default as SubNavigationDefault } from './SubNavigation.svelte';
import { default as Group } from './Group.svelte';
import { default as Item } from './Item.svelte';

SubNavigationDefault.Group = Group;
SubNavigationDefault.Item = Item;

export default SubNavigationDefault;
