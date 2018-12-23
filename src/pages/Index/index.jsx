import React from 'react'
import axios from 'axios'
import postcodes from '../../postcodes.json'
import Postcode from '../../components/Postcode/index.jsx';

class Index extends React.Component {
    state = { search: '', matchingPostcodes: [] }

    onSearch (e) {
        const search = e.target.value.toLowerCase()
        this.setState({ search })

        const matchingPostcodes = postcodes.filter(
            postcode =>
                postcode.postcode.toLowerCase().indexOf(search) === 0 ||
                postcode.town.toLowerCase().indexOf(search) === 0
        )

        this.setState({ matchingPostcodes })
    }

    render () {
        const { matchingPostcodes } = this.state

        return (
            <div className="columns">
                <div className="column">
                    <h1 className="title">Find a Postcode</h1>
                    <h2 className="subtitle">
                        Type <strong>the postcode (e.g. SW2)</strong> or <strong>the town name (e.g. Sutton)</strong> into the search box below to see more info about it.
                    </h2>

                    <div className="field">
                        <div className="control has-icons-left">
                            <input
                                className="input is-medium is-rounded"
                                type="text"
                                placeholder="Search postcode or town"
                                value={this.state.search}
                                onChange={e => this.onSearch(e)}
                            />
                            <span className="icon is-small is-left">
                                <i className="material-icons">search</i>
                            </span>
                        </div>
                    </div>
                    {
                        matchingPostcodes.map(postcode => <Postcode key={postcode.postcode} postcode={postcode} />)
                    }
                </div>
            </div>
        )
    }
}

export default Index