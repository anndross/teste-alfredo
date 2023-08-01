import axios from "axios"

interface Hero {
  name: string
}

interface Response {
  data: {
    total: string
    results: any[]
  }
}

export const getHeroes = async (offset = 0) => {
  const BASE_URL = `https://gateway.marvel.com/v1/public/characters?offset=${offset}&`

  try {
    const { data } = await axios.get<Response>(BASE_URL, {
      params: {
        ts: process.env.NEXT_PUBLIC_TS,
        apikey: process.env.NEXT_PUBLIC_API_KEY,
        hash: process.env.NEXT_PUBLIC_HASH
      }
    })


    const heroesData = {
      total: data.data.total,
      results: data.data.results
    }

    return heroesData
  } catch (error) {
    console.error(error);
  }
}