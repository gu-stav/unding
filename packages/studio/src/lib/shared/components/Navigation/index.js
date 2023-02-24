import { default as NavigationDefault } from './Navigation.svelte';
import { default as Footer } from './Footer.svelte';
import { default as Group } from './Group.svelte';
import { default as Item } from './Item.svelte';

NavigationDefault.Footer = Footer;
NavigationDefault.Group = Group;
NavigationDefault.Item = Item;

export default NavigationDefault;
