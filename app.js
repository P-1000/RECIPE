const app_key = 'a165f4a5ef68e83ef8cf2e59aa3cf30f';
const app_id = '3d7f623c';

const query = document.querySelector('.search input')
const search = document.querySelector('.search button')


const container = document.querySelector('.container');

const handleSearch = async()=>{
    try {
        container.innerHTML=''
        const endPoint = `https://api.edamam.com/search?q=${query.value}&app_id=${app_id}&app_key=${app_key}`
        const response = await fetch(endPoint);
        const {hits} = await response.json();
        console.log(hits);

        hits.map(({recipe})=>{
            // console.log(recipe)
            const {image , label, calories, url} = recipe
            const ele = document.createElement('div');
            ele.innerHTML= `
                <div class="card">
                <img src="${image}" alt="${label}"/>
                <h2>${label}</h2>
                <a href="${url}">View Recipe</a>
                <h3>${calories}</h3>
                </div>
            `
            container.appendChild(ele);
        }
        )

    } catch (error) {
        console.log(error)
        console.log("error Occured")
    }

}


search.addEventListener('click',handleSearch);

