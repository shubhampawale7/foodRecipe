import { Grid , Form, Input} from "semantic-ui-react"
import { useState } from "react"

const Search= ({setSearchedQuery})=>{
    const[value,setValue]=useState("");
    const onFormSubmit=()=>{
        setSearchedQuery(value);

    }

    return(
        <Grid column={2} textAlign="center" className='search-box'>
            <Grid.Column>
                <h2>Search Recipes with <span style={{color:"#2185D0"}}>Our Recipe</span></h2>
                <h4>Input Recipes</h4>
                <Form onSubmit={onFormSubmit}>
                        <Input
                        placeholder="Enter Ingredients"
                        action={{icon:"search", color:"blue"}}
                        onChange={(e)=>setValue(e.target.value)}
                        value={value}
                        />

                </Form>
            </Grid.Column>                  
        </Grid>
    )
   
}
export default Search
