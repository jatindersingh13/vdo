import axios from 'axios';

const config = {
    baseURL: 'https://mp4filmy.lol/apis/?type'
}

 

export const handleUpDatesApi = async () => {
    try {
        const response = await axios.get(`${config.baseURL}=updates&key=i`)
    const data = response.data
    const status = response.status
    return { success: true, data: data, status:status }
}
    catch (error) {
    return { success: false, data: error }

}
}

export const PunjabiList = async () => {
    try {
        const response = await axios.get(`${config.baseURL}=updates&key=Punjabi`)
    const data = response.data
    const status = response.status
    return { success: true, data: data, status:status }
}
    catch (error) {
    return { success: false, data: error }

}
}

export const HindiList = async () => {
    try {
        const response = await axios.get(`${config.baseURL}=updates&key=Hindi`)
    const data = response.data
    const status = response.status
    return { success: true, data: data, status:status }
}
    catch (error) {
    return { success: false, data: error }

}
}

export const HollywoodList = async () => {
    try {
        const response = await axios.get(`${config.baseURL}=updates&key=Hollywood`)
    const data = response.data
    const status = response.status
    return { success: true, data: data, status:status }
}
    catch (error) {
    return { success: false, data: error }

}
}

export const SouthList = async () => {
    try {
        const response = await axios.get(`${config.baseURL}=updates&key=south`)
    const data = response.data
    const status = response.status
    return { success: true, data: data, status:status }
}
    catch (error) {
    return { success: false, data: error }

}
}

// default getMoviesFromApi;

 