const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');
const userImg = document.querySelector('#user-img');

const user = [
    {
        name: 'Tanya Sinclair',
        imageUrl: './images/image-tanya.jpg',
        testimonial: ' “I’ve been interested in coding for a while but never taken the jump,until now.I couldn’t recommend this course enough.I’m now in the job of my dreams and so excited about the future.”',
        degree: 'UX Engineer'
    },
    {
        name: 'Jhon Tarkpor',
        imageUrl: './images/image-jhon.jpg',
        testimonial: ' “I’ve been interested in coding for a while but never taken the jump,until now.I couldn’t recommend this course enough.I’m now in the job of my dreams and so excited about the future.”',
        degree: 'Junior Front end Developer'
    }
]

let imageIndex = 0;

prevBtn.addEventListener('click', () => {
    userImg.setAttribute('src', user[0].imageUrl)
})

nextBtn.addEventListener('click', () => {
    userImg.setAttribute('src', user[1].imageUrl)
})
