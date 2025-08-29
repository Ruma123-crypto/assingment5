1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

<!-- One no Ans -->
i.getElementById("id"):Returns one element with that specific id.
ii.getElementByClassName("class"):Returns all element with that class
iii.queryselector("selector"):Returns the firest element that matches a CSS seletor

iv.querySelectorAll("selector"):Returns all element that match a CSS selector

2. How do you **create and insert a new element into the DOM**?

<!-- Two no ans -->

i.create element
const newDiv=document.createElement("div")

ii.Add content
newDiv.innerText="hello World"
iii.insert into Dom
document.body.appendChild(newDiv)

3. What is **Event Bubbling** and how does it work?

<!-- third ans -->

defination:Event bubbling means when an event happens on an element it first runs on that element then bubbles up to its parent then grandparent and so on untill it reaches the root

ii.work
suppose click a <button> inside a <div> indisde <body>
1.Event runs ont the <button>
2.Then it bubbles up to the <div>
3.Then to <body>
4.Finally to <html >and document


4. What is **Event Delegation** in JavaScript? Why is it useful?

<!-- 4th ans -->

defination:Instead of adding event listeners to many child elements you attact one listenser on a parent and use thes events target to handle the specific child that was clicked

useful
1.Reduces memory usage
2.Works for dynamic elements added later
3.eaiser to manage many child elements at once


5. What is the difference between **preventDefault() and stopPropagation()** methods?
<!-- five ans -->

preventDefault()
Stops the default browser action for an event

StopPropagation()
Stops the event from bubbling or capturing further up (or down) the DOM