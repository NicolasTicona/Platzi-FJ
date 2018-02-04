export default function platzom(str){

	let translation = str;

	const reverse = (str) => str.split('').reverse().join('') 
	
	function minMay(str){
		const length = str.length
		let translation = ''
		let capitalize = true
	
		for(let i = 0; i < str.length; i++){
			const char = str.charAt(i)
			translation += capitalize ? char.toUpperCase() : char.toLowerCase()
			capitalize = !capitalize
		}

		return translation
	}

	if(str == reverse(str)){
		return minMay(str)
	}

	else{

		if(translation.length >= 10){
			const firstHalf = translation.slice(0, Math.round(translation.length / 2))
			const lastHalf = translation.slice(translation.length / 2)
			translation =  `${firstHalf}-${lastHalf}`
		}

		else{
			// terminacion AR
			if(str.toLowerCase().endsWith('ar')){
				translation = str.slice(0, -2)
			}

			// Inicio Z
			if(str.toLowerCase().startsWith('z')){
				translation += 'pe'
			}
		}


		return translation
	}

}

