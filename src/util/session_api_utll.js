import axios from "axios"

export const signup = user => (
    axios.post("http://localhost:3001/api/users", {
        user
    },
        { withCredentials: true },
    )
        .then(result => {
            console.log(result)
            //   localStorage.setItem("jwt", result.jwt)
            //   this.setState(({
            //     isLoggedIn: true
            //   }));
        })
        .catch(error => {
            console.log(error)
        })
)



export const login = user => (
    fetch("http://localhost:3001/api/v1/users", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user),
    })
        .then(result => {
            console.log(result)
            // localStorage.setItem("jwt", result.jwt)
            // this.setState(({
            //     isLoggedIn: true
            // }));
            // history.push("/")
        })
        .catch(error => {
            console.log(error)
        })
)

// export const logout = () => (
//     $.ajax({
//         method: "DELETE",
//         url: '/api/session'
//     })
// )