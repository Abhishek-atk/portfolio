const leftPupil = document.getElementById('left-pupil');
const rightPupil = document.getElementById('right-pupil');

document.addEventListener('mousemove', (event) => {
    const x = event.clientX;
    const y = event.clientY;
    const leftEyeX = 303;
    const leftEyeY = 165;
    const rightEyeX = 357;
    const rightEyeY = 165;
    const maxOffset = 15;

    // Calculate the offset based on the mouse position
    const leftOffsetX = maxOffset * (x - leftEyeX) / window.innerWidth;
    const leftOffsetY = maxOffset * (y - leftEyeY) / window.innerHeight;
    const rightOffsetX = maxOffset * (x - rightEyeX) / window.innerWidth;
    const rightOffsetY = maxOffset * (y - rightEyeY) / window.innerHeight;

    // Update the position of the pupils
    leftPupil.setAttribute('cx', leftEyeX + leftOffsetX);
    leftPupil.setAttribute('cy', leftEyeY + leftOffsetY);
    rightPupil.setAttribute('cx', rightEyeX + rightOffsetX);
    rightPupil.setAttribute('cy', rightEyeY + rightOffsetY);
});