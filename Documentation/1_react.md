[official source](https://nextjs.org/learn/dashboard-app)

# React foundations

[source](https://nextjs.org/learn/react-foundations)
on va prendre le chemin sans "connaissance" de react => voir sur quoi ils mettent l'emphase

## About react and next.js
next.js est un framework basé sur React (routing, data-fetching, caching, ...)

## Rendering user interfaces
rappel du principe du DOM ... lol

## Updating UI with javascript

```javascript
const appElement = document.getElementById('app')
const headerElement = document.createElement('header')
const headerContentElement = document.createTextNode('some text')
headerElement.appendChild(headerContentElement)
appElement.appendChild(headerElement)
```
HTML represents the initial page content, whereas the DOM represents the updated page content which was changed by the JavaScript code you wrote.
rappel sur le principe de imperatif versus declaratif ... react (et donc next) sont declaratifs

## getting started with react

jsx est une syntaxe d'extension du js (permet syntaxe html-like)
note sur les règles de base de jsx
- un seul root element (versus utilisation de fragments)
- close tous les tags (pas comme le html donc)
- camelCase always (y compris pour les attributs)
  pas compréhensible par le navigateur -> besoin d'un compilateur (ex babel)

exemple
```javascript
// suppose installation de react et de babel par exemple 
const domNode = document.getElementById('app'); // selection du point de rendu dans le dom 
const root = ReactDOM.createRoot(domNode); 
root.render(<h1>Develop. Preview. Ship.</h1>); // rendu dans le dom 
```

## Building UI with components
notions importantes :
- components
- props
- state

### components
```javascript
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
root.render(<Header />);
```
on peut bien entendu imbriquer des composants
```javascript
function Header() {
  return <h1>Develop. Preview. Ship.</h1>;
}
 
function HomePage() {
  return (
    <div>
      <Header />
    </div>
  );
}
```

### props
sont des données que l'on passe au composant

```javascript
function HomePage() {
  return (
    <div>
      <Header title="React" />
    </div>
  );
}

function Header({ title }) { // donc un objet qui est recu avec clef title , on peut déstructurer
	return <h1>{title}</h1>; // interpolation via {} ou si pas destructuration props.title du coup 
}
```

quelques variantes mais toujours du js ...
```javascript
function Header(props) {
  return <h1>{props.title}</h1>;
}

function Header({ title }) {
	return <h1>{`Cool ${title}`}</h1>;
}

function createTitle(title) {
	if (title) {
		return title;
	} else {
		return 'Default title';
	}
}

function Header({ title }) {
	return <h1>{createTitle(title)}</h1>;
}

function Header({ title }) {
	return <h1>{title ? title : 'Default Title'}</h1>;
}
```

ou pour une liste avec un map
```javascript
return (
    <div>
      <Header title="Develop. Preview. Ship." />
      <ul>
        {names.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </div>
  ); // notice key => pour le render du DOM 
```
### state (et events)

events
```javascript
  // ...
 
  function handleClick() {
    console.log("increment like count")
  }
 
  return (
    <div>
      {/* ... */}
	  <button onClick={handleClick}>Like</button>
    </div>
     )
   }
```

state
```javascript
function HomePage() {
  // ...
  const [likes, setLikes] = React.useState(0);

    function handleClick() {
        setLikes(likes + 1);
    }
 
  return (
    // ...
    <button onClick={handleClick}>Like({likes})</button>
  );
}
```

donc le state est créé et géré localement dans le composant (>< props)
lecture sur [react official doc](https://react.dev/learn/adding-interactivity)
- un changement de state induit un re-render du composant (et du coup des composants enfants)

et [react official doc](https://react.dev/learn/managing-state)
- éviter la redondance (sans dec ...), donc les variables dérivées peuvent être utilisées (ex fullName)
- si un state doit être partagé entre 2 composants => le state doit être dans un parent des deux
    - si on veut reset un state => utilisation d'une key
- si gestion plus complexe du state => utiliser un reducer , en substance une fonction unique

exemple de code avec reducer
```javascript
import { useReducer } from 'react';
import AddTask from './AddTask.js';
import TaskList from './TaskList.js';

export default function TaskApp() {
  const [tasks, dispatch] = useReducer(
    tasksReducer,
    initialTasks
  );

  function handleAddTask(text) {
    dispatch({
      type: 'added',
      id: nextId++,
      text: text,
    });
  }

  function handleChangeTask(task) {
    dispatch({
      type: 'changed',
      task: task
    });
  }

  function handleDeleteTask(taskId) {
    dispatch({
      type: 'deleted',
      id: taskId
    });
  }

  return (
    <>
      <h1>Prague itinerary</h1>
      <AddTask
        onAddTask={handleAddTask}
      />
      <TaskList
        tasks={tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
    </>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

let nextId = 3;
const initialTasks = [
  { id: 0, text: 'Visit Kafka Museum', done: true },
  { id: 1, text: 'Watch a puppet show', done: false },
  { id: 2, text: 'Lennon Wall pic', done: false }
];
```

dernier point : contexte
-> permet de bypasser la communication via props de parent-enfant direct
-> en gros le composant parent fournit des données à tous les enfants
attention si changement de contexte => tous les enfants sont re-rendered (donc si haut taux de changement pas bon du tout pour les perfs)
par ailleurs la tracabilité du code est vraiment amoindrie puisqu'on a des données à disposition qui viennent d'un peu partout

## From React to Next.js

```terminal 
npm install react@latest react-dom@latest next@latest
```
note -> pourquoi est-ce que react n'est pas dans les dépendances de next ??!
bon ils rentrent dans la conversion du code avec express js mais rien de super pertinent -> fonctionner avec autre chose pour le faire

## Server and client environments

en gros server-components sont rendus par le server et les clients par le client
une fois que les server-components sont rendus -> RSC payload envoyé pour peupler l'app avec le client-side
(note perso au niveau du référencement ca doit donc pas mal changer la donne)
par défaut server-component (pour les perfs) mais impossible d'avoir un state dans le server-component 
