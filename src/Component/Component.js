import anymatch from 'anymatch';
import * as React from 'react';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            error: false
        }
    }

    componentDidMount() {
        //La idea seria que en comptes de la URL que tenim aquí al fetch, (aquesta és una API d'exemple)
        //hi passessim l'endpoint del php que tindriem en un servidor que estigués actiu.
        //ex. "/server/backend.php"
        fetch("https://opentdb.com/api.php?amount=10")
          .then(res => res.json())
          .then(
            (result) => {
              this.setState({
                error: false,
                items: result.results
              }, () => console.log(this.state.items));
            },
            (error) => {
              this.setState({
                error: true
              });
            }
          )
    }

    render() {
        return(
            <div>
                {
                    this.state.items.length > 0  && !this.state.error ?
                    <ul>
                        {
                            this.state.items.map( (item) => (
                                <li key={item.id}>
                                    {item.question}
                                </li>
                            ) )
                        }
                    </ul>
                    :
                    this.state.error ?
                    <div>
                        Hi ha hagut un error en la crida!!!
                    </div>
                    :
                    !this.state.error ?
                    <div>
                        Carregant els components
                    </div>
                    :
                    null
                }
            </div>
        )
    }
}