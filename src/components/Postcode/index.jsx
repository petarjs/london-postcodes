import React from 'react'
import MapWithMarkers from '../MapWithMarkers';

class Postcode extends React.Component {
    state = { isExpanded: false }

    render () {
        const { postcode } = this.props

        return (
            <div className="card mb-10">
                <header className="card-header" onClick={
                    () => this.setState({ isExpanded: !this.state.isExpanded })
                }>
                    <p className="card-header-title">
                        {postcode.district || postcode.region}
                        &nbsp;
                        <span className="tag is-medium is-rounded is-warning">{postcode.postcode}</span>
                    </p>
                    <button className="button is-large is-white card-header-icon" aria-label="more options">
                        <span className="icon">
                            { !this.state.isExpanded && <i className="material-icons">keyboard_arrow_down</i> }
                            { this.state.isExpanded && <i className="material-icons">keyboard_arrow_up</i> }
                        </span>
                    </button>
                </header>
                {
                    this.state.isExpanded &&
                    <div className="card-content is-paddingless">
                        <div className="content">
                            <MapWithMarkers
                                lat={parseFloat(postcode.latitude, 10)}
                                lng={parseFloat(postcode.longitude, 10)}
                                googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCrkhsmuop7H1PKHohuwHn0eat3iiQiwDY"
                                loadingElement={<div style={{ height: `100%` }} />}
                                containerElement={<div style={{ height: `400px` }} />}
                                mapElement={<div style={{ height: `100%` }} />}
                            />
                        </div>
                    </div>

                }
            </div>
        )
    }
}

export default Postcode