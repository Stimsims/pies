import Typography from "typography"
import sternTheme from "typeface-merriweather"
sternTheme.baseFontSize = 18;
sternTheme.baseLineHeight = 1.8;
sternTheme.overrideThemeStyles = (({ rhythm }, options) => {
   // console.log(`typography overridingThemeStyles options:`, options);
    //console.log(`typography overridingThemeStyles rhythm: `, rhythm);
    return (
        {
            
            'h1': {
                marginBottom: rhythm(1/2),
                marginTop: rhythm(1),
                color: '#030303'
            },
            'p': {
                color: '#030303'
            }
        }
    )
})
const typography = new Typography(sternTheme)

//console.log(`typography `, typography);
//typography.options.

export default typography