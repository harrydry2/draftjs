import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Select from 'react-select';
import PaymentBlock from './paymentBlock';
import '../../../node_modules/react-select/dist/react-select.css';

class Buttons extends Component {
	constructor(props) {
		super(props);
		this.state = {
			options: [
				{ value: 'Size: A0 (841 x 1189 mm)', label: 'Size: A0 (841 x 1189 mm)', priceOption: '30', clearable: false, searchable: false },
				{ value: 'Size: A1 (594 x 841 mm)', label: 'Size: A1 (594 x 841 mm)', priceOption: '24', clearable: false, searchable: false },
				{ value: 'Size: A4 (210 × 297 mm)', label: 'Size: A4 (210 × 297 mm)', priceOption: '20', clearable: false, searchable: false },
			],
			value: 'Size: A1 (594 x 841 mm)',
			price: '24',
		}
	}

	componentDidUpdate() {
	  this.props.saveSizeAndPrice(this.state.value, this.state.price);
	} 

	onChange(e) {
		this.setState({
			value: e.value,
			price: e.priceOption,
		})
	}

	render(){
		const {value, options, price} = this.state
		return (
				<div className="buttonSectionp3">
					<Select
					  name="form-field-name"
					  value={value}
					  options={options}
					  clearable={false}
					  searchable={false}
					  onChange={(e) => this.onChange(e)}
					  className="blueBorderButton sizeButton"
					/>
					<div className="blueBorderButton priceDiv">Price: £{price}</div>
					<PaymentBlock />
				</div>
		)
	}
}

export default connect(null, actions)(Buttons);

