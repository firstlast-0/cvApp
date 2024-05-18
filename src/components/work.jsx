
function Work({ values, setters }) {
    return (
        <>
            <h3>Work Experience</h3>
            <button onClick={() => {handleAdd(values.work, setters.setWork)}}>+</button><br /><br />
            {values.work.map((job, index) => { return (<div key={index}>
                Company: <input type="text" value={job.company} onChange={(event) => {
                let newWork = values.work.slice();
                newWork[index].company = event.target.value;
                setters.setWork(newWork)}} />
                <br />
                Position: <input type="text" value={job.position} onChange={(event) => {
                let newWork = values.work.slice();
                newWork[index].position = event.target.value;
                setters.setWork(newWork)}} />
                <br />
                Responsibilities: <input type="text" value={job.resp} onChange={(event) => {
                let newWork = values.work.slice();
                newWork[index].resp = event.target.value;
                setters.setWork(newWork)}} />
                <br />
                Start date: <input type="text" value={job.start} onChange={(event) => {
                let newWork = values.work.slice();
                newWork[index].start = event.target.value;
                setters.setWork(newWork)}} />
                <br />
                End date: <input type="text" value={job.end} onChange={(event) => {
                let newWork = values.work.slice();
                newWork[index].end = event.target.value;
                setters.setWork(newWork)}} />
                <br /><br /></div>);
            })}
                         
        </>
    );
}

const handleAdd = (array, setter) => {
    let newArr = array.slice();
    newArr.push({company: '', position: '', resp: '', start: '', end: ''});
    setter(newArr);
};

export default Work;
