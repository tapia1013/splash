const { body } = document;

function changeBackground(number) {
  // Check if background is already showing
  let previousBackground;

  if (body.className) {
    previousBackground = body.className;
  }

  // reset cause once we choose 3rd color it doesnt allows us to change background
  // RESET
  body.className = '';

  // console.log(number);
  switch (number) {
    case '1':
      return (previousBackground === 'background-1' ? false : body.classList.add('background-1'))

    case '2':
      return (previousBackground === 'background-2' ? false : body.classList.add('background-2'))

    case '3':
      return (previousBackground === 'background-3' ? false : body.classList.add('background-3'))

    default:
      break;
  }
} 