import { BASE_URL } from '../api/api'

export const fetchArticle = async () => {
    let response = await fetch(BASE_URL + '/articles?page=1&size=10')
    let dataJson = await response.json()
    return dataJson.data
}


