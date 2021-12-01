import axios from "axios";

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export const getContactsApi = async () => {
    const { data } = await axios.get('/contacts')
    return data
}
export const setContactsApi = async (contact) => {
    const { data } = await axios.post('/contacts', contact)
    return data
}
export const deleteContactsApi = async (id) => {
    const { data } = await axios.delete(`/contacts/${id}`)
    return data
}

// export const fetchSignUp = async (user) => {
//     const response = await axios.post('/users/signup', user)
//       console.log(response.data)
// }
