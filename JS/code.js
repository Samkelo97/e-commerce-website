let education = [
    {
      id: 1,
      image:"https://i.postimg.cc/T1YhJxgw/explorer-in-oystrersteel.jpg",
      desc: "Rolex champagne Daytona",
      price: "456 345",
    },
    {
      id: 2,
      image:"https://i.postimg.cc/g2j5TzJy/rolex-submariner-in-oystersteel.jpg",
      desc: "Rolex submariner in oystersteel",
      price: "356 789",
    },
    {
      id: 3,
      image:"https://i.postimg.cc/Gtvwt7Xj/ahmed-Seddiqi-Sons.jpg",
      desc: "Sahmed & sons",
      price: "874 999",
    },
    {
      id: 4,
      image:"https://i.postimg.cc/LXwSDxjS/police-Menso-Watch.jpg",
      desc: "Police Menso Watch clean silver fang for men",
      price: "3 069",
    },
    {
      id: 5,
      image:"https://i.postimg.cc/kXcb1SYZ/malawi-Multifunction-leather-Strap.jpg",
      desc: "Police Malawi Multifunction Leather strap",
      price: "2 567",
    },
    {
        id:6,
        image:"https://i.postimg.cc/RVBM3bd5/police-Raho-Watch.webp",
        desc:"Police Raho Watch skull addition for men",
        price:"4 356",

    }
  ];
  
  let dispEducation = document.querySelector(".Products");
  education.forEach((data) => {
    dispEducation.innerHTML += `
      <div class= "card col-12 col-md-4 col-sm-6 m-4">
      <img src="${data.image}">
      <div class="card-body">
      <p class="text-black">${data.desc} </p>
      <p class="prices <br>">ZAR ${data.price}</p>
      </div>
      </div>`;
  });
  let Ladies = [
    {
      id: 1,
      image:"https://i.postimg.cc/C1Q7hpBX/vinntage-18k-yellow-gold.jpg",
      desc: "Vintage 18k yellow gold",
      price: "666 385",
    },
    {
      id: 2,
      image:"https://i.postimg.cc/d04P93pC/White-diamond-dial-steel.jpg",
      desc: "White diamond dial steel",
      price: "234 654"
    },
    {
      id: 3,
      image:"https://i.postimg.cc/MpzjcrSG/ladies-rolex-datejust.webp",
      desc: "date just rolex for Ladies",
      price: "134 567",
    },
    {
      id: 4,
      image:"https://i.postimg.cc/pLDrBQP6/police-womens-mopion-black-plated-and-silver-leather.png",
      desc: "Mopion black plated and silver",
      price: "2 980",
    },
    {
      id: 5,
      image:"https://i.postimg.cc/VvmPmtxd/police-women-ponta-gold-toned.png",
      desc: "Ponta gold toned with pink",
      price: "1 468",
    },
    {
        id:6,
        image:"https://i.postimg.cc/bJYRPN6q/police-women-Maritas-black-dial-gold-Toned.png",
        desc:"Maritas black dialed gold",
        price:"3 496",

    }
  ];
  
  let dispLadies = document.querySelector(".Ladies");
  Ladies.forEach((data) => {
    dispLadies.innerHTML += `
      <div class= "card col-12 col-md-4 col-sm-6 m-4" id="femme">
      <img src="${data.image}">
      <div class="card-body">
      <p class="text-black">${data.desc} </p>
      <p class="prices <br>">ZAR ${data.price}</p>
      </div>
      </div>`;
  });