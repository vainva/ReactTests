import React, { Component } from 'react';
import './App.css';

class List extends Component {

constructor(){ 
super();
this.state = {
    inputValue: "",
    listRepos: [],
    };
}

onInput = i => {
    this.setState({
        inputValue: i.target.value
    });
};

searchRepo = () => {
    const searchWord = this.state.inputValue;
    const url = `https://api.github.com/search/repositories?q=${searchWord}`;
    fetch(url)
    .then(response => response.json())
    .then(listRepos => 
        this.setState({
            listRepos: listRepos.items
            
        })
    )
    .catch(err => console.error(err))

    };

    onSearch = () =>{
       if (this.state.inputValue === "") {
            return;
        }
        this.searchRepo();
    
}

        render() {
            const itemRows = (
                <tbody>
                {this.state.listRepos.map(repository => (
                <tr key={repository.id}>
                    <td>{repository.full_name}</td>
                    <td>
                        <a href={repository.html_url}>{repository.html_url}</a>
                    </td>
                    </tr>
                    

                ))}
                </tbody>
            );
        
        
        
        
            return(
                <div>
                    <h2>Repositories</h2>
                    <table>
                    <tbody>
                    <input className="repoFinder" placeholder="find repositorys" value={this.inputValue} onChange={this.onInput}/>
                    <button className="search" onClick={this.onSearch}>Search</button>
                    <tr><th>Name</th><th>URL</th></tr>
                    {this.state.listRepos.length ? itemRows : null}
                    </tbody>
                    </table>

                </div>
            );
        }
    }
    

    
export default List;

