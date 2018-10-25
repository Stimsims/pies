export const allergies = (gluten, dairy) => {
    console.log(`utils allergies gluten ${gluten} dairy ${dairy}`);
    let ray = [gluten? 'gluten free':null, dairy? 'dairy free': null];
    let text = ray
    .filter(f => {return f})
    .map((r, i) => {
        return `${i > 0? ', ':''}${r}`;
    });
    console.log(`utils allergies text ` + text, ray);
    return text;
}