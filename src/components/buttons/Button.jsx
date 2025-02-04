import style from './style.module.scss';

export const Button = ({ text }) => {
    return (
        <button className={style.button}>{text}</button>
    )
}

export default Button