import Typography from "typography"
//import sternTheme from "typeface-merriweather";
//import sternTheme from "typography-theme-kirkham";
import sternTheme from "typography-theme-st-annes";

sternTheme.baseFontSize = 18;
sternTheme.baseLineHeight = 2;
sternTheme.overrideThemeStyles = (({ rhythm }, options) => {
   // console.log(`typography overridingThemeStyles options:`, options);
    //console.log(`typography overridingThemeStyles rhythm: `, rhythm);
    return (
        {
            
            'h1': {
                marginBottom: rhythm(1/2),
                marginTop: rhythm(1),
                color: '#030303',
                fontSize: '2.5em'
            },
            'h2':{
                marginBottom: rhythm(1/4),
                marginTop: rhythm(1/2),
            },
            'h4, h5':{
                marginBottom: rhythm(1/4),
                marginTop: rhythm(1/8)
            },
            'p': {
                color: '#030303',
                marginBottom: rhythm(1/4),
                marginTop: rhythm(1/8),
                lineHeight: rhythm(3/4)
            }
        }
    )
})
const typography = new Typography(sternTheme)

//console.log(`typography `, typography);
//typography.options.

export default typography