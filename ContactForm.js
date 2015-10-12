var ContactForm = React.createClass({
	propTypes: {
		value: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired,
		onSubmit: React.PropTypes.func.isRequired
	},

	// triggerOnChange: function() {
	// 	this.props.onChange(this.props.value);
	// },

	render: function() {
		var self = this;
		return React.createElement('form', {
			 	className: 'ContactForm',
				onSubmit: function(event) {
					event.preventDefault();
					self.props.onSubmit(self.props.value);
				}			 	
			},

			React.createElement('input', {
				placeholder: 'Name',
				type: 'text',
				className: this.props.value.errors.name ? 'invalid' : undefined,
				value: this.props.value.name,
				onChange: function(event) {
					self.props.onChange(Object.assign({}, self.props.value, {
						name: event.target.value
					}));
				}
			}),

			React.createElement('input', {
				placeholder: 'Email',
				type: 'email',
				value: this.props.value.email,
				className: this.props.value.errors.email ? 'invalid' : undefined,
				onChange: function(event) {
					self.props.onChange(Object.assign({}, self.props.value, {
						email: event.target.value
					}));
				}
			}),

			React.createElement('textarea', {
				placeholder: 'Description',
				value: this.props.value.description,
				onChange: function(event) {
					self.props.onChange(Object.assign({}, self.props.value, {
						description: event.target.value
					}));
				}
			}),

			React.createElement('button', {}, 'Add Contact')
		);
	}
});