const apikey='410b912a59cf4ceb8810819fd3e4bee6';
const main=document.querySelector('main');
window.addEventListener('load', e => {
    UpdateNews();
})

async function UpdateNews()
{
    const res =await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=410b912a59cf4ceb8810819fd3e4bee6');
    const json=await res.json();
    main.innerHTML=json.articles.map(createArticle).join('\n');
}
function createArticle(article)
{
    return 
    '<h2>${article.title}</h2>';
}