import React, { Component, setState } from 'react';
import '../App.css';

export default class CustomersList extends Component {
    state = {
        pageTitle: 'Customers',
        customersCount: 5,
        customers: [
            {
                id: 1,
                fullname: 'Jack Miller',
                photo: 'https://picsum.photos/id/1011/60',
                phoneno: '+1(54)-123-456-000',
                address: { city: 'Boston' }
            },
            {
                id: 2,
                fullname: 'John Cook',
                photo: 'https://picsum.photos/id/1040/60',
                phoneno: '+1(34)-789-012-000',
                address: { city: null }
            },
            {
                id: 3,
                fullname: 'Mandy Scott',
                photo: 'https://picsum.photos/id/1003/60',
                phoneno: '+1(66)-345-678-000',
                address: { city: 'Fairfax' }
            },
            {
                id: 4,
                fullname: 'Wendy Tall',
                photo: 'https://picsum.photos/id/1010/60',
                phoneno: null,
                address: { city: 'New Mines' }
            },
            {
                id: 5,
                fullname: 'Tomi Akin',
                photo: 'https://picsum.photos/id/1111/60',
                phoneno: null,
                address: { city: 'York City' }
            }
        ]
    };

    // Executes when the refresh button is clicked
    onRefreshClick = () => {
        this.setState({
            customersCount: 7
        }
        );
    }

    getFullName = (cust) => {
        if (cust.fullname)
            return (
                cust.fullname
            )
        else
            return (
                <div className='bg-warning p-1'>
                    Not provided
                </div>
            )
    }

    onChangePicture = (cust, index) => {
    }

    getCustomerDetails = () => {
        return (this.state.customers.map((cust, index) => {
            return (
                <tr key={cust.id}>
                    <td>{cust.id}</td>
                    <td>{this.getFullName(cust)}</td>
                    <td>
                        <img src={cust.photo} />
                        <div>
                            <button
                                className='btn btn-sm btn-secondary'
                                onClick={() => { this.onChangePicture(cust, index) }}>
                                Change Picture
                            </button>
                        </div>
                    </td>
                    <td>{(cust.phoneno == null) ? 'Not provided' : cust.phoneno}</td>
                    <td>
                        {
                            cust.address.city ? (cust.address.city) :
                                <div className='bg-warning p-1'>Not provided</div>
                        }
                    </td>
                </tr>
            )
        }))
    }

    // customerNameStyle = (custName) => {
    //     if (custName.startsWith('M'))
    //         return { backgroundColor: 'teal' };
    //     else if (custName.startsWith('J'))
    //         return { backgroundColor: 'grey' };
    //     else return {};
    // }

    render() {
        return (
            <div>
                <h4 className='m-1 p-2'>{this.state.pageTitle}
                    <span className='m-2 p-1 pt-0 pb-0 highlight'>{this.state.customersCount}</span>
                    <button className='btn btn-info' onClick={this.onRefreshClick}>Refresh</button>
                </h4>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Full Name</th>
                            <th>Photo</th>
                            <th>Phone Number</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>{this.getCustomerDetails()}</tbody>
                </table>
            </div>
        )
    }
}
