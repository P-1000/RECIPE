const app_key = 'a165f4a5ef68e83ef8cf2e59aa3cf30f';
const app_id = '3d7f623c';

const query = document.getElementById("query_Holder");
const search = document.getElementById("S_btn");

const container = document.querySelector('.container');



const handleSearch = async ()=>{
    try {
        const endPoint = `https://api.edamam.com/search?q=${query.value}&app_id=${app_id}&app_key=${app_key}`
        const response = await fetch(endPoint);
        const {hits} = await response.json();
        hits.map(({recipe})=>{
            const ele = document.createElement('img');
            ele.style="width:480px;margin:12px"
            ele.src = recipe.image;
            container.appendChild(ele);
        }
        )
    } catch (error) {
        console.log(error)
        console.log("error")
    }
}


