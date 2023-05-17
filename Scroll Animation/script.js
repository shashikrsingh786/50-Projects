const boxes = document.querySelectorAll('.box')
const imageUrls = [
   'https://th.bing.com/th/id/R.a9b7034c98630df0e3ebee8612402bf8?rik=D7WO0UgHBMTOHg&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fEBUuAZe.jpg&ehk=tS2cutfKOTxW%2fr1xWW%2bYjqrDGAgSSTZpvN%2fZxlNBM%2fY%3d&risl=&pid=ImgRaw&r=0',
    'https://wallpapercave.com/wp/e4qVmOW.jpg',
'https://th.bing.com/th/id/R.ad8290ef5ee431665c46a47ae82ceb7b?rik=4N%2bjy3HT5jWlBw&riu=http%3a%2f%2fwww.pixelstalk.net%2fwp-content%2fuploads%2f2016%2f08%2fFree-Download-Spiderman-Wallpaper.jpeg&ehk=AG97Yp5Kt3wNAQjVN0jC8Sx3tK2RtahOiv1NLNDaBww%3d&risl=&pid=ImgRaw&r=0',
    'https://www.hdwallpaper.nu/wp-content/uploads/2017/07/spiderman-11.jpg',
    

    // Add more image URLs here
  ];

window.addEventListener('scroll', checkBoxes)

checkBoxes()

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}

boxes.forEach((box, index) => {
    const imageUrl = imageUrls[index]; // Get the corresponding image URL based on index
  console.log('hello');
    // Apply the image to the element
    box.style.backgroundImage = `url(${imageUrl})`;
  });

  