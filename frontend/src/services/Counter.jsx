import { useState, useEffect } from 'react';
import styles from "../styles/Landing/Customtimer.module.css";

const { customtimer } = styles;

const CountdownTimer = ({ targetDate }) => {
    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft(targetDate));
        }, 1000);

        return () => clearInterval(timer);
    }, [targetDate]);

    function calculateTimeLeft(targetDate) {
        const endDate = new Date(targetDate);
        const now = new Date();

        // Ensure countdown is set to exactly 7 days from now
        endDate.setDate(now.getDate() + 7); 

        const difference = +endDate - +now;
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((difference % (1000 * 60)) / 1000),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    }

    return (
        <div>
            {timeLeft.days !== undefined ? (
                <div className="d-flex w-100 gap-3 mb-2">
                    <div className={customtimer} style={{display:'flex' , flexDirection:'column'}}>
                        <span className='text-dark fw-bold'>{timeLeft.days}</span>
                        <span>Day</span>
                    </div>
                    <div className={`${customtimer}`} style={{display:'flex' , flexDirection:'column'}}>
                        <span className='text-dark fw-bold'>{timeLeft.hours}</span>
                        <span>Hour</span>
                    </div>
                    <div className={customtimer} style={{display:'flex' , flexDirection:'column'}}>
                        <span className='text-dark fw-bold'>{timeLeft.minutes}</span>
                        <span>Min</span>
                    </div>
                    <div className={customtimer} style={{display:'flex' , flexDirection:'column'}}>
                        <span className='text-dark fw-bold'>{timeLeft.seconds}</span>
                        <span>Sec</span>
                    </div>
                </div>
            ) : (
                <div>Time's up!</div>
            )}
        </div>
    );
};

export default CountdownTimer;
