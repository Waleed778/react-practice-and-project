import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID GPO16rvaO8sa9IRCs8bGx1jzDdsygcETEwhu5mhu4oo'
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;