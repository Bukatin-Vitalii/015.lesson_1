let result = []

const addKids = (data) => {
	data.children.forEach((item) => {
		result.push(item)
	})
	if (result.length > 3) {
		console.log(result)
	}
}

const parse = (data) => JSON.parse(data)

const requestData = (method, url) => {
	const xml = new XMLHttpRequest()
	xml.open(method, url, true)
	xml.send()

	xml.onreadystatechange = function () {
		if (this.readyState === 4 && this.status === 200) {
			let data = parse(this.response)
			addKids(data)
		}
	}
}

requestData('GET', 'request/data.json')
requestData('GET', 'request/data2.json')




