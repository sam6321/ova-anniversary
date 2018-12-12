import React from 'react';
import saag from './saag.png';
import heart from '../heart.svg';

export default class extends React.Component {
    static title = "Saagonsa";
    static img = saag;

    render() {
        return (
            <p>
                Oh uhm, I'm not super great with words, but personally y'all are some pretty great friends.
                I've had a lot of fun over this past year, and met some really great people, including my wonderful
                boyfriend Neelarai <img src={heart} width="24" height="24" alt="heart"/>
            </p>
        );
    }
}
