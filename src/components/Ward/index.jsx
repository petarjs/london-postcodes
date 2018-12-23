import React from 'react'

const getStaticMapUrl = ward => `https://maps.googleapis.com/maps/api/staticmap?center=london&zoom=9&scale=2&size=600x300&maptype=roadmap&key=AIzaSyCrkhsmuop7H1PKHohuwHn0eat3iiQiwDY&format=png&visual_refresh=true&markers=size:mid%7Ccolor:0xff0000%7Clabel:H%7CHeathrow+Airport&markers=size:mid%7Ccolor:0x0a6bf2%7Clabel:${ward[0]}%7C${ward},+london`

class Ward extends React.Component {
    state = { isExpanded: false }

    render () {
        const { ward } = this.props

        const mapUrl = getStaticMapUrl(ward.ward)

        return (
            <div className="card mb-10">
                <header className="card-header" onClick={
                    () => this.setState({ isExpanded: !this.state.isExpanded })
                }>
                    <p className="card-header-title">
                        {ward.ward}
                        &nbsp;
                        <span className="tag is-medium is-rounded is-warning">{ward.postcode}</span>
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
                            <img src={mapUrl} alt=""/>
                        </div>
                    </div>

                }
            </div>
        )
    }
}

export default Ward