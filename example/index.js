let code = new Secretcode("kurybr")
let konami = new Secretcode(null, { enableMobile: true })



code.listen((data) => { 
	console.log('code', data)
})
konami.listen((data) => {
	console.log('konami', data)
})