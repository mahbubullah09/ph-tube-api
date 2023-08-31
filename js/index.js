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
        <div id="${cardData.thumbnail}" class="absolute bottom-2 right-2">
         
        </div>
     </figure>

     <div class=" mt-4 flex  justify-start items-start gap-2 ml-1">
          <figure>         
        <img class="rounded-full min-[320px]:w-16 min-[320px]:h-9 min-[360px]:h-10 min-[360px]:w-14 min-[410px]:w-14 min-[410px]:h-12  md:w-16 md:h-12 lg:w-28 lg:h-12"  src=${cardData.authors[0].profile_picture} alt="">
     </figure>  
        <div class="right flex-initial">
            <h4 class="text-base font-bold ">Building a Winning UX Strategy Using the Kano Model</h4>
            
            <div id="${cardData.thumbnail}-img" class="flex items-center gap-2">
            <p class="text-[#171717] text-opacity-70 ">Awlad Hossain </p>
           
        </div>
            <p class="text-[#171717] text-opacity-70 ">91K views</p>
        </div>
     </div>
        
        
        `
        cardField.appendChild(cardInfo);


        const vidId= document.getElementById(`${cardData.thumbnail}`);
        console.log(vidId);
        const postDate= cardData.others.posted_date;
        if(postDate !== ''){
            const postDate= cardData.others.posted_date;
            if(postDate !== ''){
                console.log(postDate);
                const pera = document.createElement('p');
                pera.classList.add('bg-black', 'text-white', 'text-xs' , 'py-1', 'px-2', 'rounded');
                
               
                pera.innerHTML=`${postDate} seconds ago`;
    
                vidId.appendChild(pera);
            }
        }

        const verifyId= document.getElementById(`${cardData.thumbnail}-img`);
        console.log(verifyId);
        const verifyStatus= cardData.authors[0].verified;
      
        console.log(verifyStatus);     

        if(verifyStatus === true){
            console.log(verifyId);
             const newDiv =document.createElement('div');
             newDiv.innerHTML=`
             <img src="./images/fi_10629607.png" alt="">
             `

             verifyId.appendChild(newDiv);
        }
    });

    








}




loadCatagory();
loadVideo('1000')