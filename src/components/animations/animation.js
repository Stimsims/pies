export const animationMixIn = (dur, del, fill, ease, iter) => {
    return `
        animation-duration: ${dur? dur:'1'}s;
        ${del? 'animation-delay: ' + del + 's;':''}
        ${fill? 'animation-fill-mode: ' + fill + ';':''}
        animation-timing-function: ${ease? ease:'ease-in'};
    `
}