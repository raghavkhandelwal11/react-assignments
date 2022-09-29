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
<<<<<<< HEAD
            <button onClick= {props.method} id="fix-position">back</button>
=======
            <button onClick={props.method} id="fix-position">back</button>
>>>>>>> 39065fd25654afab4ab56200c36cbb85a4818437
        </div>
    );

}

<<<<<<< HEAD
//  function backToFirstPage() {
//     document.getElementById("first-page").style.display = "block";
//     document.getElementById("second-page").style.display = "none"; 
// }


=======
>>>>>>> 39065fd25654afab4ab56200c36cbb85a4818437

export default Enteries;
