import Button from "../components/Button"
import Header from "../components/Header"

const Home = (() => {
    return (
        <div>
            <h4>Home</h4>
            <Header 
                title={"2025년 4월"}
                leftChild = {<Button text={"<"} />}
                rightChild = {<Button text={">"} />} 
            />
        </div>
    )
})
export default Home