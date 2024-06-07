import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useLocation, Routes} from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
    const location = useLocation();

    return (
        <TransitionGroup>
            <CSSTransition
                key={location.key}
                timeout={300}
                classNames="fade"
            >
                <div className="fade">
                    <Routes location={location}>
                        {children}
                    </Routes>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
};

export default TransitionWrapper;