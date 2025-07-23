//La lista de personajes favoritos
//Funciones para agregar y eliminar favoritos
import axios from "axios"
import { createContext, useState, useEffect } from "react"
//Navigate/para redireccionarlo 
//UseNavigate/con eventos como botones, o formularios
const UserContext = createContext()

const UserProvider = ({ children }) => {

    const [users, setUsers] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [buscador, setBuscador] = useState('')

    const getData = async () => {
        try {
            let response = await axios.get('https://rickandmortyapi.com/api/character')
            let data = response.data.results
            data.forEach(element => {
                element.isFavorite = false
            });
            setUsers(data)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }


    }

    useEffect(() => {
        getData()
    }, [])

    const Cambio = (value) => {

        let favoritos = users.map(item => {
            if (item.id == value) {
                item.isFavorite = !item.isFavorite
            }
            return item
        })

        setUsers(favoritos)//
    }

    return (
        <UserContext.Provider
            value={
                {
                    buscador,
                    setBuscador,
                    isLoading,
                    setIsLoading,
                    users,
                    setUsers,
                    getData,
                    Cambio
                }
            }
        >
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }