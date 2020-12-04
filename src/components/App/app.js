import React, { Fragment } from 'react'
import { Title } from '../Title/title'
import { List } from '../List/list'
import { Form } from '../Form/form';
import { Todos } from '../Todos/todos';


export class App extends React.Component {

  

  render() {
    return (
    <Fragment>
      {/*<Title />
      <Form />
      <List />*/}
      <Todos />
    </Fragment>
    )
  }
}