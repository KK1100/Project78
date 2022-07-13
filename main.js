var images = ["https://i.postimg.cc/MGn9GJXw/family.jpg","https://thumbs.dreamstime.com/b/african-father-icon-cartoon-style-vector-web-design-isolated-white-background-199761885.jpg", "https://us.123rf.com/450wm/kakigori/kakigori1805/kakigori180500004/100772179-cute-african-american-mother-holding-her-cute-baby-girl.jpg?ver=6", "https://i.postimg.cc/JnL6wtrd/sister.jpg", "https://i.postimg.cc/bw5W5zSK/mother.jpg"];
var names = ["Family Book", "William McEachern", "Patrica McEachern", "Willow  McEachern", "Aiden McEachern"];
var i = 0;
function update()
{
    i++;
    var numbers_of_family_member_in_array = 4
    if(i > numbers_of_family_member_in_array)
      {
          i = 0;
      }
    
    //Debug the code to store list of images in updatedImage. Use images[i]
    var updatedImage = [i];
    //Debug the code to store list of names in updatedName. Use names[i]
    var updatedName = [i] ;
 
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_name").innerHTML = updatedName;
}
