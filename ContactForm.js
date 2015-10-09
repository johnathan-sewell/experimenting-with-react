var ContactForm = React.createClass({
	propTypes: {
		value: React.PropTypes.object.isRequired,
		onChange: React.PropTypes.func.isRequired
	},

	updateState: function(updates) {
		this.props.onChange(Object.assign({}, this.props.value, updates));
	},

	// triggerOnChange: function() {
	// 	this.props.onChange(this.props.value);
	// },

	render: function() {
		var component = this;
		return React.createElement('form', {
				className: 'ContactForm'
			},

			React.createElement('input', {
				placeholder: 'Name',
				type: 'text',
				value: this.props.value.name,
				onChange: function(syntheticEvent) {
					component.updateState({
						name: syntheticEvent.target.value
					});
				}
			}),

			React.createElement('input', {
				placeholder: 'Email',
				type: 'email',
				value: this.props.value.email,
				onChange: function(syntheticEvent) {
					component.updateState({
						email: syntheticEvent.target.value
					});
				}
			}),

			React.createElement('textarea', {
				placeholder: 'Description',
				value: this.props.value.description,
				onChange: function(syntheticEvent) {
					component.updateState({
						description: syntheticEvent.target.value
					});
				}
			}),

			React.createElement('button', {
				// onClick: this.triggerOnChange
			}, 'Add Contact')
		);
	}
});