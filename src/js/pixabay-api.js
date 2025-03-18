
export const fetchPhotos = searchedQuery => {
  const params = new URLSearchParams({
    key: '48862284-111645087e0508ab98b21d672',
    q: searchedQuery,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });
  return fetch(`https://pixabay.com/api/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
