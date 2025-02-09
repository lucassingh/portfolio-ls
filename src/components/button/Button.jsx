import style from './style.module.scss';

export const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick} className={style.button}>{text}</button>
    )
}

export default Button