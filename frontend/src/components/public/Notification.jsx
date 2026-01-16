import styles from "../../styles/Auth/public.module.css";

const {notification} = styles;

const Notification = ({number}) => {
  return (
    <div>
      {
        number > 0 && (
          <div className={`${notification}`}>
            {number}
          </div>
        )
      }
    </div>
  )
}

export default Notification
