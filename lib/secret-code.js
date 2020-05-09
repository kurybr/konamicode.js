const keys = { 
	'ArrowUp': 'up',
	'ArrowDown': 'down',
	'ArrowRight': 'right',
	'ArrowLeft' : 'left',
	'Insert' : "enter"
}


/**
 * @typedef SecretOptions
 * @property  { Boolean } enableMobile | Enable Secret Code on Mobile
 * @property  { Number } taps | Set touch  quantity  on page to trigger event
 */


class Secretcode { 

	/**
	 * 
	 * @param {String|Array} secret | Combination to trigger event.
	 * @param { SecretOptions } options | 
	 * @example
	 *  [up, up, down, down, b, a, b, a] (Konami Code)
	 *  
	 * 
	 */
	constructor(secret, options = { taps : 5, enableMobile: true }) {

		this.konami = ['up', 'up', 'down', 'down', 'b', 'a', 'b', 'a'];
		this.options = options;
		this.secret = secret || this.konami.join('');
		this.combination = "";
	}

	/**
	 * 
	 */
	reset() { 
		this.count = 0;
		this.combination = "";
	}

	/**
	 * Start event to listen
	 */
	listen( cb ) { 
		this.cb = cb || function() { };

		if(this.options.enableMobile) { 
			this.MobileCode(options.touchs || 5)
		}

		window.addEventListener('keyup', (event) => { 
			if(event.key === "Escape") { 
				this.cb({ match: false, reset: true })
				return this.reset();
			}

			let _key = event.key.toString()
			this.combination += keys[_key] || _key.toLowerCase()
			if(this.combination === this.secret){ 
				return cb({ match: true })
			}
			
		}, true)
		return this;
	}

	/**
	 * 
	 * @param {*} limit 
	 */
	MobileCode(limit) { 
		this.count = 0
		let timeout;
		window.addEventListener('touchend', (evt) => { 
			this.count++
			clearTimeout(timeout)

			if(this.count === limit) { 
				this.reset();
				return this.cb({ match: true })
			}

			timeout = setTimeout(() => { 
				this.cb({ match: false, reset: true })
				this.reset()
			}, 3000)
		})	
	}
}



if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
	module.exports = Secretcode;
}
