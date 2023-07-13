import Spline from '@splinetool/react-spline';

export default function Object({link}) {

    return (
        <div>
            
            <div>
                <Spline scene={link} />
            </div>
        </div>
    );
}