# konamicode.js
Generate a secret code to your project


:rotating_light: ATTENTION :rotating_light: This code don't work in Internet Explorer :poop::poop:


# Dependences

- Nothing

# How Use

```javascript

let options = { 
	enableMobile: Boolean, // Trigger Secretcode on mobile using touch event
	taps: Number // Set touch  quantity  on page to trigger event, default is 5
}

new Secretcode("kurybr", options).listen((data) => { })


```