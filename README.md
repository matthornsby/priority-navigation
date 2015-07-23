# Priority Navigation

## A JQuery plugin for creating arbitrarily-prioritized responsive navigation menus

It’s become generally accepted that hiding menus by default, behind a hamburger icon for instance, can dampen discoverability and therefor engagement. *Priority Navigation* is a take on the [Priority+ Navigation](https://css-tricks.com/the-priority-navigation-pattern/) pattern.

>In his article [Obvious Always Wins](http://www.lukew.com/ff/entry.asp?1945), Luke Wroblewski warns of the dangers of sweeping links and actions under the rug. It’s challenging to find the room to expose important actions on constrained mobile screen sizes, but it’s necessary for designers to do so.

>[Revisiting the Priority+ Navigation Pattern](http://bradfrost.com/blog/post/revisiting-the-priority-pattern/), Brad Frost

The main feature that sets Priority Navigation apart from other examples, is that it allows for prioritization ordering independent from menu ordering. Menu item prioritization is managed by applying data-attributes to the elements.

### The HTML

```html
<nav>
	<ul class="toPrioritize">
		<li data-priority="0">
			<a href="#">Priority-Navigation Demo</a>
		</li>
		<li data-priority="1">
			<a href="#">Priority 1</a>
		</li>
		<li data-priority="2">
			<a href="#">Priority 2</a>
		</li>
		<li data-priority="4">
			<a href="#">Priority 4a</a>
		</li>
		<li data-priority="4">
			<a href="#">Priority 4b</a>
		</li>
		<li data-priority="3">
			<a href="#">Priority 3</a>
		</li>
		<li data-priority="5">
			<a href="#">Priority 5</a>
		</li>
	</ul>
</nav>
```

Items are demoted (both hidden from view and given the class demoted) in descending order, starting with the highest data-priority value set, in this example "Priority 5" has a data-priority value of 5.

Items with the same data-priority value are demoted simultaneously, given you the option of connecting particular elements as sets, this this example "Priority 4a" and "Priority 4b" both have a data-priority value of 4.

You may optionally include elements with a data-priority value of 0. These items are hidden from closed view, even if the menu has not been truncated. The original intention of this feature was to allow the display of a link to the site homepage as part of an opened menu, as a supplement to a link provided elsewhere. In this example "Priority-Navigation Demo" is only visible if the menu is opened, but is also accessible by clicking the logo (∞).

### The CSS

Include [src/priority-navigation.css](https://github.com/matthornsby/priority-navigation/blob/master/src/priority-navigation.css) or its content in your own stylesheet.

The toPrioritize class is used for formatting, so even if you define the function with a different selector, you'll need to include that class on your list (or update the default css to compensate).

The default styling displays the menu items as inline-block, which lets you align it as normal text. However, my demo includes [additional styling](https://github.com/matthornsby/priority-navigation/blob/master/demo/demo-nav.css) to display the menu as a table which allows to fully-justify the menu.

###The JavaScript

Include [src/priority-navigation.min.js](https://github.com/matthornsby/priority-navigation/blob/master/src/priority-navigation.min.js) or its content in your own javascript. [An un-minified version](https://github.com/matthornsby/priority-navigation/blob/master/src/priority-navigation.js) is available for your review.

```js
$(".toPrioritize").prioritize();
```

That's pretty much it. Or, if you want to go a little further…

There are a few available options if you want to override the default label text.

```js
$(".toPrioritize").prioritize({
  more: "More", //default: More…
  less: "Less", //default: Less…
  menu: "Navigation" //default: Menu
});
```
