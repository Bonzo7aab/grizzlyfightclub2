const Toast = ({positive}: {positive: boolean}) => {
    console.log(positive)
     return positive ? (
        <div className="toast toast-top toast-center">
            <div className="alert alert-success">
                <span>Email wysłany</span>
            </div>
        </div>

    )
    : 
    (
        <div className="toast toast-top toast-center">
            <div className="alert alert-negative">
                <span>Coś poszło nie tak, napisz do nas bezpośrednio</span>
            </div>
        </div>
    )
    }
export default Toast;