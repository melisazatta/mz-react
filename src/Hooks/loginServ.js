

export default function login ({ email, password }) {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({email, password})
    }).then(res => {
        if (!res.ok) throw new Error('Response is not ok')
        return res.json()
    }).then(res => {
        const { JWT } = res
        return JWT
    })
}