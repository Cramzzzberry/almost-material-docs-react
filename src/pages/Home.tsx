import HomeCard from "../components/Home-Card"

const HomePage = () => {
    return (
        <>
            <div className="card p-32 mb-8 text-center">
                <h1 className="font-[600]">Almost Material</h1>
                <h4>A TailwindCSS plugin heavily based on Material Design 3</h4>
            </div>

            {/* commented for future purposes */}
            {/* <div className="grid grid-cols-3 gap-2 mx-32">
                <HomeCards />
            </div> */}
        </>
    )
    }

    const HomeCards = () => {
    const homeCards = []
    const homeCardDetails = {
        "Badge": {
            url: "/badge",
            desc: "Represents the status or notification of the underlying element",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Button": {
            url: "/button",
            desc: "It allows the user to take actions",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Card": {
            url: "/card",
            desc: "Used to contain a group of elements",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Checkbox": {
            url: "/checkbox",
            desc: "Denotes the current state of an element and used for multiple choices",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Drawer": {
            url: "/drawer",
            desc: "Used to access different pages that slides from the side",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Dropdown": {
            url: "/dropdown",
            desc: "Gives user a list of contents, choices or navigation points that floats around the interactable element",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Indicator": {
            url: "/indicator",
            desc: "It positions an element to an indicator state",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Input Field": {
            url: "/input-field",
            desc: "Provides access to respond via text and/or other means of responses",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Menu": {
            url: "/menu",
            desc: "Used to group links, navigation points, choices, and others",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Modal": {
            url: "/modal",
            desc: "A pop up window that disables other interactions except itself",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Navigation Bar": {
            url: "/navbar",
            desc: "Provides quick access to other pages/navigation points. It sits on top or at the bottom of the page",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Progress Bar": {
            url: "/progress-bar",
            desc: "Displays a visual representation of a progress",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Radio Button": {
            url: "/radio-button",
            desc: "Denotes the current state of an element and used for single choice",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Rail": {
            url: "/rail",
            desc: "It also provides quick access to other pages/navigation points. It sits at the left side of the page",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Swap": {
            url: "/swap",
            desc: "Swaps two elements to represent states in more detail",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        "Switch": {
            url: "/switch",
            desc: "A toggle used for on and off purposes",
            imgSrc: "https://images.pexels.com/photos/841228/pexels-photo-841228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
    }

    for(const key of Object.keys(homeCardDetails)) {
        homeCards.push(
            <HomeCard
                key={ key }
                url={ homeCardDetails[key].url }
                title={ key }
                desc={ homeCardDetails[key].desc }
                imgSrc={ homeCardDetails[key].imgSrc } />
        )
    }

    return homeCards
}

export default HomePage