let imageOne = document.getElementById("img01");

let imageTwo = document.getElementById("img1");
imageTwo.addEventListener("mouseover", function () {
  imageOne.src =
    "https://plus.unsplash.com/premium_photo-1687572807160-b5262826e4df?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D";
  imageOne.style.height = "50vh";
});

imageTwo.addEventListener("mouseout", function () {
  imageOne.src =
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D";
});

let imageThree = document.getElementById("img2");

imageThree.addEventListener("mouseover", function () {
  imageOne.src =
    "https://plus.unsplash.com/premium_photo-1661515367945-4478698d414e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGNvbXB1dGVyJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D";
});

imageThree.addEventListener("mouseout", function () {
  imageOne.src =
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D";
});

let imageFour = document.getElementById("img3");

imageFour.addEventListener("mouseover", function () {
  imageOne.src =
    "https://images.unsplash.com/photo-1465418031253-26bca286214c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNvbXB1dGVyJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D";
});

imageFour.addEventListener("mouseout", function () {
  imageOne.src =
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D";
});

let imageFive = document.getElementById("img4");

imageFive.addEventListener("mouseover", function () {
  imageOne.src =
    "https://images.unsplash.com/photo-1624571409108-e9a41746af53?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fGNvbXB1dGVyJTIwcGljdHVyZXN8ZW58MHx8MHx8fDA%3D";
});

imageFive.addEventListener("mouseout", function () {
  imageOne.src =
    "https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29tcHV0ZXIlMjBwaWN0dXJlc3xlbnwwfHwwfHx8MA%3D%3D";
});
