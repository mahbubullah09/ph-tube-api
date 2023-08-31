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
    
    <button onclick="loadVideo('${name.category_id}')" class="bg-[#252525] bg-opacity-20 text-[ #252525] text-base py-1 px-3 rounded mt-2 ">${name.category}</button>`

catagoryId.appendChild(catagoryName);
});

}

const loadVideo = async(ID) =>{
    console.log(ID);
    

    const cardId = await fetch(` https://openapi.programming-hero.com/api/videos/category/${ID}`);
    const card = await cardId.json();
   
    const cardDetails = card.data;
    console.log(cardDetails);

    const cardField = document.getElementById('card-field');
    cardField.innerHTML= '';
    cardDetails.forEach(cardData => {

        const cardInfo = document.createElement('div');
        cardInfo.classList.add('my-2' ,'cursor-pointer');

        cardInfo.innerHTML= `
        <figure class=" relative ">
        <img class="md:h-60  lg:h-44 w-full rounded" src="${cardData.thumbnail} alt="">
        <div id="ad" class="absolute bottom-2 right-2">
            <p class="bg-black py-1 px-2 rounded text-white text-xs ">1000</p>
        </div>
    </figure>

    <div class=" mt-4 flex  justify-start items-start gap-2 ml-1">
                     
        <img  src="./Ellipse 1.jpg" alt="">
    </figure>  
        <div class="right flex-initial">
            <h4 class="text-base font-bold ">Building a Winning UX Strategy Using the Kano Model</h4>
            
            <div class="flex items-center gap-2">
            <p class="text-[#171717] text-opacity-70 ">Awlad Hossain </p>
            <img src="./fi_10629607.png" alt="">
        </div>
            <p class="text-[#171717] text-opacity-70 ">91K views</p>
        </div>
    </div>
        
        
        `
        cardField.appendChild(cardInfo);

        
    });








}




loadCatagory();
loadVideo('1000')