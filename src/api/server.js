var token = localStorage.getItem("token")

const handleSetToken = () =>{
    token = localStorage.getItem("token")
}

const serverCalls = {
    setUser: () =>{
        handleSetToken()
    },
    login: async(data = {}) =>{
        const response = await fetch(`https://car-collection-x2cb.onrender.com/signin`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)

        });
        if(!response.ok){
            throw new Error("Failed to get user-token")

        }
        const token = await response.json()
        return token
    },
    signup: async(data) =>{
        const response = await fetch(`https://car-collection-x2cb.onrender.com/signup`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },
            body: JSON.stringify(data)

        });
        if(!response.ok){
            throw new Error("Failed to sign-up user and get user-token")
        }
        return await response.json()
    },
    get: async () =>{
        const response = await fetch(`https://car-collection-x2cb.onrender.com/api/getCars`,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    create: async (data) =>{
        const response = await fetch(`https://car-collection-x2cb.onrender.com/api/create`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    update: async (data, id) =>{
        const response = await fetch(`https://car-collection-x2cb.onrender.com/api/updateCar/${id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            },
            body: JSON.stringify(data)

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    },
    delete: async (id) =>{
        const response = await fetch(`https://car-collection-x2cb.onrender.com/api/deleteCar/${id}`,
        {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'x-access-token': `Bearer ${token}`
            }

        });

        if (!response.ok){
            throw new Error('Failed to fetch data from the server')
        }
        return await response.json()
    }
}

export default serverCalls