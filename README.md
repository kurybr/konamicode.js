# Secret Code
Generate a secret code to your project <br>
Gere um código secreto para seu projeto


:rotating_light: ATTENTION :rotating_light: This code don't work in Internet Explorer :poop::poop:
<br>
:rotating_light: ATENÇÃO :rotating_light: Esse código não funciona no Internet Explorer :poop::poop:

# Description

Create your secret code and add easter egg on your projects

# Dependences

- Nothing


# How Use

```javascript

let options = { 
	enableMobile: Boolean, // Trigger Secretcode on mobile using touch event
	taps: Number // Set touch  quantity  on page to trigger event, default is 5
}


const foo = new Secretcode("foo", options)
foo.listen((data) => { 
	// ... When entering the correct code trigger callback
	// ... Ao digitar o código correto dispara o callback
})

let secret = ['up', 'up', 'up', 'up', 'up']
const bar = new Secretcode(secret, options)
bar.listen((data) => { 

})

// Default secret code is Konami Code
// O Código secreto padrão é o Konami Code
new Secretcode().listen((data) => { })

```

