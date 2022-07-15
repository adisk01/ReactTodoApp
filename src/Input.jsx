let Input = (props) =>
{
    return(
        <input 
            className="text-box" 
            type="text" 
            onChange={(e) => {
                props.handlecurrentinput(e.currentTarget.value);
            }}
            onKeyDown={(e) => {
              if (e.key == "Enter") {
                props.handletasks();
              }
            }}
            value={props.currinput}
          />
    )
}
export default Input;