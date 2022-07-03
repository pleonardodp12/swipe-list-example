console.log('eu estou dentro do arquivo')

function handleStart(evt) {
  evt.target.dataset.x = Number(evt.touches[0].pageX) + Number(evt.target.dataset.move || 0)
}

function handleTouchMove(evt) {
  let moveX = Number(evt.target.dataset.x) - evt.touches[0].pageX
  if (moveX > 130) {
    moveX = 130
  }
  if (moveX < -130) {
    moveX = -130
  }
  evt.target.dataset.move = moveX
  anime({
    targets: evt.target,
    translateX: -Number(evt.target.dataset.move),
    duration: 300
  })
}

function handleEnd(evt) {
  if (evt.target.dataset.move > 100) {
    evt.target.dataset.move = 100
  } else if (evt.target.dataset.move < -100) {
    evt.target.dataset.move = -100
  } else {
    evt.target.dataset.move = 0
  }
  const swipes = document.querySelectorAll('.swipe') || []

  swipes.forEach((item) => {
    if (item.querySelector('.con-text') === evt.target) {
      return
    }
    item.querySelector('.con-text').dataset.move = 0
    item.querySelector('.con-text').dataset.x = 0
    anime({
      targets: item.querySelector('.con-text'),
      translateX: 0
    })
  })
  setTimeout(() => {
    anime({
      targets: evt.target,
      translateX: -Number(evt.target.dataset.move)
    })
  }, 1)
}