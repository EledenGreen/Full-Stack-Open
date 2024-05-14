import axios from 'axios'

const baseUrl = 'http://localhost:3001/notes'

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const createNew = async (content) => {
    const object = { content, important: false }
    const response = await axios.post(baseUrl, object)
    console.log(response.data)

    return response.data
}

const toggleImportance = async (id, object) => {
    const content = {important: !object.important }
    console.log(content)
    const response = await axios.patch(`${baseUrl}/${id}`, content)
    return response.data
}

export default {
    getAll,
    createNew,
    toggleImportance
}