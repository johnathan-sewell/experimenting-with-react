//we make sure to never update this variable directly
var state = {};

var CONTACT_TEMPLATE = {
	name: "",
	email: "",
	description: "",
	errors: {}
};

/* Actions */
function updateNewContact(contact) {
	setState({
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

	if (!contact.name) {
		contact.errors.name = ["Please enter your new contact's name"];
	}

	if (Object.keys(contact.errors).length > 0) {
		return setState({
			newContact: contact
		});
	}

	setState({
		contacts: state.contacts.concat(contact),
		newContact: CONTACT_TEMPLATE
	});
}

function navigated() {
	setState({
		location: window.location.hash
	});
}

//all updates to state happen through the setState function
function setState(changes) {
	Object.assign(state, changes);

	var props = Object.assign({}, state, {
		updateNewContact: updateNewContact,
		submitNewContact: submitNewContact
	});

	var appContainer = document.getElementById('react-app');

	console.log('rendering', state);

	if (state.location === undefined) {
		return ReactDOM.render(React.createElement('a', {href: '/#/contacts'}, 'Try the contacts page'), appContainer);
	}

	if (state.location === '#/contacts') {
		return ReactDOM.render(React.createElement(ContactView, props), appContainer);
	}	
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
	newContact: CONTACT_TEMPLATE,
});

// Handle browser navigation events
window.addEventListener('hashchange', navigated, false);
navigated();