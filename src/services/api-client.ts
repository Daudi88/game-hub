import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "1b4125580a6f480d94be72ae50662888"
    }
})