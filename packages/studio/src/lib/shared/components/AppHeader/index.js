import { default as AppHeaderDefault } from './Navigation.svelte';
import Footer from './Footer.svelte';
import Group from './Group.svelte';
import Item from './Item.svelte';

AppHeaderDefault.Footer = Footer;
AppHeaderDefault.Group = Group;
AppHeaderDefault.Item = Item;

export default AppHeaderDefault;
