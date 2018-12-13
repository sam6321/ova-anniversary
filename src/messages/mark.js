import React from 'react';
import mark from './mark.png';
import markAudio from './mark.mp3';

export default class extends React.Component {
    static title = "Mark";
    static img = mark;

    render() {
        return (
            <audio src={markAudio} controls className="mark"/>
        );
    }
}