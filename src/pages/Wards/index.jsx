import React from 'react'
import Postcode from '../../components/Postcode/index.jsx'
import _ from 'lodash'
import axios from 'axios'
import Ward from '../../components/Ward/index.jsx'

const SORT_FIELDS = {
    POSTCODE: 'postcode',
    WARD: 'ward'
}

const SORT_TYPES = {
    DESC: 'desc',
    ASC: 'asc'
}

class Wards extends React.Component {
    state = {
        wards: [],
        orderBy: 'ward',
        orderType: 'asc',
        search: ''
    }

    async componentDidMount() {
        let response = await axios.get('/wards')
        let wards = response.data
        this.setState({ wards })
    }

    async onSearch (e) {
        let search = ''

        if (e) {
            search = e.target.value.toLowerCase()
        } else if (this.state.search) {
            search = this.state.search
        }

        const { orderBy, orderType } = this.state
        this.setState({ search })

        let response = await axios.get('/wards', { params: { search, orderBy, orderType }})
        let wards = response.data
        this.setState({ wards })
    }

    async setSort (field) {
        if (this.state.orderBy === field) {
            let newOrderType = this.state.orderType === SORT_TYPES.ASC ? SORT_TYPES.DESC : SORT_TYPES.ASC
            await this.setState({ orderType: newOrderType })
        }

        await this.setState({ orderBy: field })

        this.onSearch()
    }

    render () {
        return (
            <div className="columns">
                <div className="column">
                    <h1 className="title">All Postcodes</h1>
                    <h2 className="subtitle">
                        Browse through all London postcodes. You can search and sort them by ward name, or postal code.
                    </h2>


                    <div className="field is-horizontal has-addons">
                        <div className="field-label is-normal">
                            <label className="label sort-label">Sort by</label>
                        </div>
                        <p className="control">
                            <button className={`button ${this.state.orderBy === 'ward' ? 'is-active is-success' : ''}`} onClick={() => this.setSort('ward')}>
                                <span className="icon is-small">
                                    {
                                        this.state.orderBy === SORT_FIELDS.WARD ?
                                            this.state.orderType === SORT_TYPES.ASC ?
                                                <i className="material-icons">arrow_upward</i> :
                                                <i className="material-icons">arrow_downward</i>
                                            :
                                            <i className="material-icons">sort</i>
                                    }
                                </span>
                                <span>Ward name</span>
                            </button>
                        </p>
                        <p className="control">
                            <button className={`button ${this.state.orderBy === 'postcode' ? 'is-active is-success' : ''}`} onClick={() => this.setSort('postcode')}>
                                <span className="icon is-small">
                                    {
                                        this.state.orderBy === SORT_FIELDS.POSTCODE ?
                                            this.state.orderType === SORT_TYPES.ASC ?
                                                <i className="material-icons">arrow_upward</i> :
                                                <i className="material-icons">arrow_downward</i>
                                            :
                                            <i className="material-icons">sort</i>
                                    }
                                </span>
                                <span>Postcode</span>
                            </button>
                        </p>
                    </div>

                    <div className="field">
                        <div className="control has-icons-left">
                            <input
                                className="input is-medium is-rounded"
                                type="text"
                                placeholder="Search postcode or ward"
                                value={this.state.search}
                                onChange={e => this.onSearch(e)}
                            />
                            <span className="icon is-small is-left">
                                <i className="material-icons">search</i>
                            </span>
                        </div>
                    </div>

                    {
                        this.state.wards.map(ward => <Ward key={ward.ward} ward={ward} />)
                    }
                </div>
            </div>
        )
    }
}

export default Wards