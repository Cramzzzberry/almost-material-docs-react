import Block from "../../components/Component-Blocks"
import Page from "../../components/Component-Page"
import { SliderSnippets } from "./Slider-Snippets"

const getSliders =  () => {
    const sliderComponents = []
    const sliderSnippets = Object.keys(SliderSnippets)

    for(const key of sliderSnippets) {
        sliderComponents.push(
        <Block
            key={ key }
            componentName={ key }
            preview={ SliderSnippets[key].preview }
            htmlCode={ SliderSnippets[key].htmlCode }
            jsxCode={ SliderSnippets[key].jsxCode } />
        )
    }

    return sliderComponents
}

const SliderPage = () => {
    return (
        <Page 
            name="Slider"
            desc="Lets the user choose from a range of values"
            components={ getSliders() }
        />
    )
}

export default SliderPage