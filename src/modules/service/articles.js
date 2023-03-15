const BASE_URL = 'https://newsapi.org/v2';
const API_KEY = '364fa8ee9d7346e7bae6dc97f478dce1';
const OPTIONS = {
  headers: {
    Authorization: API_KEY,
  },
};

export default class ArticlesService {
  fetchData(searchQuery) {
    const searchParams = new URLSearchParams({
      q: searchQuery,
      sortBy: 'publishedAt',
      pageSize: 10,
    });

    return fetch(`${BASE_URL}/everything?${searchParams}`, OPTIONS)
      .then((response) => response.json())
      .then(({ articles }) => articles)
      .catch((error) => {
        console.error(error);
      });
  }
}
