import React, {useEffect, useState} from 'react';
import axios from "axios";

const Profile = () => {

    const [userInfo, setUserInfo] = useState({});

    const getuserInfo = async () => {

        try {

            const token = await localStorage.getItem("token");

            console.log("%%%%%%%%%%%%%%%%%",token)

            const config = {
                headers : {
                    authorization : "Bearer " + token.toString()
                }
            }

            console.log("*********", config)

            const {data, status}  = await axios.get("http://localhost:9090/api/users/profile",config)

            if (status === 200) {

                console.log("#############", data)

                setUserInfo(data)

            }



        } catch (err) {

            console.log(err.message)

        }

    }

    useEffect(() => {
        getuserInfo()
    }, [])

    return (
        <div>
            <h1>profile</h1>
            <h2>{userInfo.email}</h2>
            <h3>{userInfo.name}</h3>
        </div>
    );
};

export default Profile;

// 난 백엔드가 아니다 (아직은)
// api 문서를 안만들고 해보라 함. node.js 를 파악해보아라.