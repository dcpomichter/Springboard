// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";
const text = document.getElementById('search-bar')
const submit = document.getElementById('submit-btn')
const imgBucket = document.getElementById('image-bucket')
async function grabGifFromApi() {

    const response = await axios.get(`http://api.giphy.com/v1/gifs/search?q=${text.value}&api_key=${giphyApiKey}&limit=10`);

    return response.data.data.map((val) => {
        return {
            gifURL: val.images.fixed_width.url
        }
    });
}
submit.addEventListener('click', async function (e) {
    e.preventDefault()
    imgBucket.innerHTML = ""
    const rowOne = document.createElement('div')
    rowOne.classList = 'row'
    imgBucket.appendChild(rowOne)
    const giphy = await grabGifFromApi()
    for (let i = 0; i < giphy.length / 2; i++) {
        const giph = document.createElement('img')
        giph.src = giphy[i].gifURL
        rowOne.appendChild(giph)
    }
})
