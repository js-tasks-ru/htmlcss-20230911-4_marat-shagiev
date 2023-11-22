/*
 const changer = document.getElementById('theme-changer');
 const html = document.documentElement;

 changer.addEventListener('change', function() {
 html.toggleAttribute('data-theme-dark');
 });
 */
/**
 * theme changer extend from @l3x3y
 * https://discord.com/channels/920345781267996692/1143459799195988038/1163911557726601258
 * */
const switchers = document.querySelectorAll('[id^="theme-changer"]');

const switchTheme = e => {
 document.documentElement.toggleAttribute('data-theme-dark');
 switchers.forEach(switcher => {
  if (switcher != e.target) {
   switcher.checked = !switcher.checked;
  }
 });
};

switchers.forEach(switcher => switcher.addEventListener('change', switchTheme));

