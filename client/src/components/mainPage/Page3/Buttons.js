import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../actions/index';
import Select from 'react-select';
import PaymentBlock1 from './paymentBlock1';
import '../../../../node_modules/react-select/dist/react-select.css';

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      optionsSize: [
        {
          value: 'Size: A1',
          label: 'Size: A1',
          priceOption: '26.00',
          renderSize: 'A1',
          clearable: false,
          searchable: false,
        },
        {
          value: 'Size: A2',
          label: 'Size: A2',
          priceOption: '22.00',
          renderSize: 'A2',
          clearable: false,
          searchable: false,
        },
        {
          value: 'Size: A4',
          label: 'Size: A4',
          priceOption: '17.00',
          renderSize: 'A4',
          clearable: false,
          searchable: false,
        },
      ],
      optionsLocation: [
        {
          value: 'Location: UK',
          label: 'Location: UK',
          priceOption: '0.00',
          clearable: false,
          searchable: false,
        },
        {
          value: 'Location: USA',
          label: 'Location: USA',
          priceOption: '0.00',
          clearable: false,
          searchable: false,
        },
        {
          value: 'Location: Other',
          label: 'Location: Other',
          priceOption: '10.00',
          clearable: false,
          searchable: false,
        },
      ],
      valueSize: 'Size: A1',
      valueLocation: 'Location: UK',
      priceSize: '26.00',
      priceLocation: '0.00',
      renderSize: 'A1',
      sumTotal: 26,
    };
  }

  componentDidUpdate() {
    this.props.saveSizeAndPrice(this.state.value, this.state.sumTotal);
  }

  async onChangeSize(e) {
    await this.setState({
      valueSize: e.value,
      priceSize: e.priceOption,
      renderSize: e.renderSize,
    });
    const { priceSize, priceLocation } = this.state;
    const flooredLocation = Math.floor(priceLocation);
    const flooredSize = Math.floor(priceSize);
    const sumTotal = flooredLocation + flooredSize;
    this.setState({
      sumTotal,
    });
  }

  async onChangeLocation(e) {
    await this.setState({
      valueLocation: e.value,
      priceLocation: e.priceOption,
    });
    const { priceSize, priceLocation } = this.state;
    const flooredLocation = Math.floor(priceLocation);
    const flooredSize = Math.floor(priceSize);
    const sumTotal = flooredLocation + flooredSize;
    this.setState({
      sumTotal,
    });
  }

  render() {
    const {
      valueSize,
      optionsSize,
      priceSize,
      priceLocation,
      optionsLocation,
      valueLocation,
      renderSize,
      sumTotal,
    } = this.state;
    console.log(priceLocation, priceSize);
    return (
      <div className="buttonSectionp3">
        <div className="blueButtonsColumn">
          <Select
            name="form-field-name"
            value={valueLocation}
            options={optionsLocation}
            clearable={false}
            searchable={false}
            onChange={e => this.onChangeLocation(e)}
            className="blueBorderButton"
          />
          <Select
            name="form-field-name"
            value={valueSize}
            options={optionsSize}
            clearable={false}
            searchable={false}
            onChange={e => this.onChangeSize(e)}
            className="blueBorderButton"
          />
        </div>
        <div className="subtotalColumn">
          <div className="leftColumnStyles">
            <div className="leftSubtotal">{renderSize} Canvas</div>
            <div className="rightSubtotal">£{priceSize}</div>
          </div>
          <div className="canvasShipping leftColumnStyles">
            <div className="leftSubtotal">Shipping</div>
            <div className="rightSubtotal">£{priceLocation}</div>
          </div>
          <div className="canvasTotalBold leftColumnStyles">
            <div className="leftSubtotal">Total</div>
            <div className="rightSubtotal">£{sumTotal}.00</div>
          </div>
        </div>
        <PaymentBlock1 />
      </div>
    );
  }
}

export default connect(null, actions)(Buttons);
