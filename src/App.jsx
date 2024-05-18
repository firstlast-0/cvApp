import { useState } from 'react'
import Gen from './components/gen.jsx'
import GenSub from './components/gen-sub.jsx'
import Edu from './components/edu.jsx'
import EduSub from './components/edu-sub.jsx'
import Work from './components/work.jsx'
import WorkSub from './components/work-sub.jsx'
import './App.css'

function Buttons({ setMode }) {
    return <>
        <button onClick={() => {setMode('sub')} }>SUBMIT</button>
        <button onClick={() => {setMode('edit')} }>EDIT</button>
    </>;
}

function App() {
    const [mode, setMode] = useState('edit');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const [educ, setEduc] = useState([{school: '', title: '', date: ''}]);
    const [work, setWork] = useState([{company: '', position: '', resp: '', start: '', end: ''}]);

    if (mode === 'edit') {
        return (
            <>
                <Buttons setMode={setMode} /><br /><br />
                <Gen values={{name, email, phone}} setters={{setName, setEmail, setPhone}} /><br /><br />
                <hr />
                <Edu values={{educ}} setters={{setEduc}} />
                <hr />
                <Work values={{work}} setters={{setWork}} />
            </>
        )
    } else {
        return (
            <>
                <Buttons setMode={setMode} /><br /><br />
                <GenSub values={{name, email, phone}} /><br />
                <hr />
                <EduSub values={{educ}} /><br />
                <hr />
                <WorkSub values={{work}} />
            </>
        )
    }
}

export default App
