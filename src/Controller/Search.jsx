import axios from "axios";

const crawlBlogData = async (tag) => {
    console.log('crawling tag data');
    try {
        let response = await axios.get('https://gocomet-web-scrapper.herokuapp.com/tag/' + tag, {
            params: { tag: tag },
            crossDomain: true,
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
        });

        return response.data;
    } catch (err) {
        console.log(err.message);
    }
}

export default crawlBlogData;