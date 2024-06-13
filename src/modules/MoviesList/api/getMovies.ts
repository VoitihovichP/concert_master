import type {
  getMoviesRequest,
  GetMoviesResponseModel,
  GetMoviesSearchItemModel
} from '../models/GetMovies.model'

export const getMovies = async (
  params: getMoviesRequest
): Promise<GetMoviesResponseModel | GetMoviesSearchItemModel | null> => {
  try {
    const queryString = new URLSearchParams(params).toString()
    const data = await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=8523cbb8&${queryString}`)
    return data.json()
  } catch (e) {
    return null
  }
}
