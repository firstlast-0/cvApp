
function Edu({ values, setters }) {
    return (
        <>
            <h3>Education</h3>
            <button onClick={() => {handleAdd(values.educ, setters.setEduc)}}>ADD</button><br /><br />
            {values.educ.map((edu, index) => { return (<div key={index}>
                School: <input type="text" value={edu.school} onChange={(event) => {
                let newEduc = values.educ.slice();
                newEduc[index].school = event.target.value;
                setters.setEduc(newEduc)}} />
                <br />
                Title of Study: <input type="text" value={edu.title} onChange={(event) => {
                let newEduc = values.educ.slice();
                newEduc[index].title = event.target.value;
                setters.setEduc(newEduc)}} />
                <br />
                Date: <input type="text" value={edu.date} onChange={(event) => {
                let newEduc = values.educ.slice();
                newEduc[index].date = event.target.value;
                setters.setEduc(newEduc)}} />
                <br /><br /></div>);
            })}
                         
        </>
    );
}

const handleAdd = (array, setter) => {
    let newArr = array.slice();
    newArr.push({school: '', title: '', date: ''});
    setter(newArr);
};

export default Edu;
