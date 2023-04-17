//this function used by [destination, crew, technology] section's tabs/list-links
//update state on active tabs and links + animate imgs
export const handleUpdate = (
  index,
  imageClass,
  stateName,
  setStateName,
  listName
) => {
  //if you click active link/tab already do nothing
  if (stateName[stateName.length - 1] === index) return;
  //select active img
  const img = document.getElementsByClassName(imageClass);
  //animate img by changing the opacity [fade-out]
  img[0].classList.toggle("opacity-[0%]");
  setTimeout(() => {
    //change the state
    setStateName([...Object.values(listName[index])]);
    //resetting the opacity back to normal [fade-in]
    img[0].classList.toggle("opacity-[0%]");
  }, 500);
};

/*
//this function is used by main's container 
//animate background images for main section
export const animateBackground = (path, to)=> {
    //select background img
    const bg = document.getElementsByClassName('main-container')[0]
    //if the path doesn't change do nothing
    if(bg.classList.value.includes(path)) return
    //fade-out background
    const newBg = document.getElementsByClassName('main-container')[0]
    console.log('newbg', newBg)
    newBg.classList.toggle('opacity-[0%]')
    setTimeout(() => {
        //fade-in background
        newBg.classList.toggle('opacity-[0%]') 
    }, 500);

   
}*/
