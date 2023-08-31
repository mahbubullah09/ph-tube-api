const loadCatagory = async() =>{

    const catagory= await fetch(`https://openapi.programming-hero.com/api/videos/categories`);
    const data= await catagory.json();
    const catagoryNames= data.data;
    handleCatagory(catagoryNames)



}

//handleCatagory

const handleCatagory = (names) =>{
    const catagoryId = document.getElementById('catagory-field');

names.forEach(name => {
    

    const catagoryName= document.createElement('div')

    catagoryName.innerHTML= `
    
    <button class="bg-[#252525] bg-opacity-20 text-[ #252525] text-base py-1 px-3 rounded mt-2 ">${name.category}</button>`

catagoryId.appendChild(catagoryName);
});

}

loadCatagory();