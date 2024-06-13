export interface GetMoviesSearchItemModel {
  Poster: string
  Title: string
  Type: string
  Year: string
  imdbID: string
}

export interface GetMoviesResponseModel {
  Search?: GetMoviesSearchItemModel[]
  Error?: string
  totalResults?: string
  Response: string
}

export interface getMoviesRequest {
  [key: string]: string
  s: string
  page: string
}
