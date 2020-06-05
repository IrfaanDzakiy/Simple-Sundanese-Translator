import React from 'react'
import Translator from './Translator'
// function MainContent(){
//     return(
//         <main>
//             <h1>This is My Content</h1>
//             <Options/>
//         </main>
//     )
// }

class MainContent extends React.Component{


    // componentDidMount(){
    //     setTimeout(() => {
    //         this.setState({
    //             bool: false
    //         })
    //     }, 5000)
    // }
    render(){
        return(
            <div className="My-content">
                <Translator/>
            </div>
        )
    }
}

export default MainContent