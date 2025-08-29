1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
Ans:getElementById=Select a single element by its id
    getElementsByClassName=Select all elements that have a same class.
    querySelector=Select the first element that matches a CSS selector.
    querySelectorAll=Select all elements that match a CSS selector.
2. How do you **create and insert a new element into the DOM**?
Ans:#Create:
    let container=document.getElementById('container');
    let newDiv=document.createElement('div');
    newDiv.innerText="Jhankar Mahboob";
    newDiv.className='name';
    #Insert: 
    container.appendChild(newDiv);
3. What is **Event Bubbling** and how does it work?
Ans:#Defination:
    Event Bubbling is a mechanism in the DOM where an event starts from the the target element and then bubbles up to its grand parent. 
    #How it works:
    If I click an element:
    Then it bubbles up to the parent div,then to the body,and finally to the document.
4. What is **Event Delegation** in JavaScript? Why is it useful?
Ans:#Defination:
    Event Delegation is a technique where you attach a single event listener to a parent element instead of attaching separate listeners to each child element.
    #Why is it useful:
    Fewer Event Listeners,works for elements added to the DOM after the event listener is attached,avoids repetitive code and makes maintenance easier.
5. What is the difference between **preventDefault() and stopPropagation()** methods?
Ans:#preventDefault():Prevents the default action of an element from happening.
    #stopPropagation():Stops the event from bubbling up to parent elements.Does not stop default browser actions like preventDefault(),only event propagation.

