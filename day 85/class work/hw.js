//  შექმენით ათი დივი და მათ შიგნით p თაგები (JS), შემდეგ აირჩიეთ ყველა ამ დივის შიგნით p თაგი და გადაუყევით მას და ფონტი გახადეთ 3 პიქსელი.
for (let i = 0; i < 10; i++) {
    const div = document.createElement('div');
    const p = document.createElement('p');
    p.textContent = `This is paragraph ${i + 1}`;
    div.appendChild(p);
    document.body.appendChild(div);
}


const paragraphs = document.querySelectorAll('div > p');
paragraphs.forEach(p => {
    p.style.fontSize = '3px';
});