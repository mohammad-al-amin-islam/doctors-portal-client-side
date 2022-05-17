import { useEffect, useState } from "react";

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        const userEmail = user?.user?.email;
        const email = { email: userEmail }
        if (userEmail) {
            fetch(`https://nameless-scrubland-24240.herokuapp.com/user/${userEmail}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(email)
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    const accessToken = data.token;
                    setToken(accessToken)
                    localStorage.setItem('accessToken', token);
                })
        }
    }, [user, token]);
    return [token];
}
export default useToken;