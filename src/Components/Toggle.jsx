import "./Toggel.css";

export const Toogle =({handleChange, isChecked})=>{
    return(
        <div className="toggle-container">
            <input type="checkbox" 
            id="check"
            className="toggle"
            onChange={handleChange}
            checked={isChecked}/>
            <label htmlFor="check">Dark Mode</label>
        </div>
    )
}