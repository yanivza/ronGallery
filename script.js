


const numbers_of_images=12

function one_img_from_array_gallery(num_of_images){
    for(let num_img=1; num_img<=num_of_images;num_img++){
        make_div_for_img_and_append(num_img)
    }
}


function make_div_for_img_and_append(img){
    let bored_photo=document.getElementById("photo_bored")
    let img_div=document.createElement("div")
    img_div.className="photo_div"
    let img_pc=document.createElement("img")
    img_pc.src = "./css/img/"+img+".jpg";
    img_div.append(img_pc)
    bored_photo.append(img_div)

}


one_img_from_array_gallery(numbers_of_images)


