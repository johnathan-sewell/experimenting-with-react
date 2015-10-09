var state = {};

function updateNewContact(contact) {
	setState({
		newContact: contact
	});
}

function setState(changes) {
	console.log(changes);
	
	Object.assign(state, changes);

	var props = Object.assign({}, state, {
		onNewContactChange: updateNewContact
	});

	ReactDOM.render(React.createElement(ContactView, props), document.getElementById('react-app'));
}

setState({
	contacts: [{
		key: 1,
		name: "James K Nelson",
		email: "james@jamesknelson.com",
		description: "Front-end Unicorn"
	}, {
		key: 2,
		name: "Jim",
		email: "jim@example.com"
	}],
	newContact: {
		name: "",
		email: "",
		description: ""
	},
});