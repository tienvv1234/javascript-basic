import axios from 'axios';

export default class Search {
    constructor(query){
        this.query = query
    }

    async getResults(){
        const key = 'f99e40e8eacfabca3437cbe9912229e5';
        try {
            const res = await axios(`https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;  
        } catch (error) {
            alert(error);
        }
        
    }
}