import React, { useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const ViewFriends = () => {
    const[data,changedata]=useState([])
    const fetchData=()=>
        {
            axios.post("https://friendsapi-re5a.onrender.com/adddata").then(
                (response)=>{
                    console.log(response.data)
                    changedata(response.data)
                }
            ).catch(
                (error)=>{
                    console.log(error.message)
                    alert(error.message)
                }
            ).finally()
        }
    return (
        <div>
            <NavBar/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Friend Name</th>
                                        <th scope="col">Friend Nick Name</th>
                                        <th scope="col">Describe Your Friend</th>
                                    </tr>
                                </thead>
                                <tbody>
                                  {
                                    data.map(
                                        (value,index)=>
                                            {
                                                return <tr>
                                                <td>{value.name}</td>
                                                <td>{value.friendName}</td>
                                                <td>{value.friendNickName}</td>
                                                <td>{value.DescribeYourFriend}</td>
                                            </tr>
                                            }
                                    )
                                  }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewFriends