var state = {};

var CONTACT_TEMPLATE = {
	name: "",
	email: "",
	description: "",
	errors: {}
};

/* Actions */
function updateNewContact(contact) {
	updateState({
		newContact: contact
	});
}

function submitNewContact() {
	var contact = Object.assign({}, state.newContact, {
		key: state.contacts.length + 1,
		errors: {}
	});

	if (!/.+@.+\..+/.test(contact.email)) {
		contact.errors.email = ["Please enter your new contact's email"];
	}

	if(!contact.name){
		contact.errors.name = ["Please enter your new contact's name"];
	}

	if (Object.keys(contact.errors).length > 0) {
		return updateState({
			newContact: contact
		});
	}

	updateState({
		contacts: state.contacts.concat(contact),
		newContact: CONTACT_TEMPLATE
	});
}

function updateState(changes) {
	Object.assign(state, changes);

	var props = Object.assign({}, state, {
		updateNewContact: updateNewContact,
		submitNewContact: submitNewContact
	});

	console.log('rendering', state);
	ReactDOM.render(React.createElement(ContactView, props), document.getElementById('react-app'));
}

updateState({
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
	newContact: CONTACT_TEMPLATE,
});