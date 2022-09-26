import '../App.css';

const Enteries  = (props) => {
    let list  = props.list;

    let ele = [];
    for(let i = 0; i < list.length; i++) {
        ele.push(<p>Name: {list[i][0]} | Department: {list[i][1]} | Rating: {list[i][2]}</p>);
    }

    

    return (
        <div >
            <h1 id='heading-one'>EMPLOYEE FEEDBACK DATA</h1>
            <div className='bottomBox'>
                {ele}
            </div>
            <button onClick={backToFirstPage} id="fix-position">back</button>
        </div>
    );

}

function backToFirstPage() {
    document.getElementById("first-page").style.display = "block";
    document.getElementById("second-page").style.display = "none"; 
}


export default Enteries;