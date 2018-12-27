import React from 'react';
import sayo from './sayo.png';

export default class extends React.Component {
    static title = "Sayo";
    static img = sayo;

    render() {
        return (
            <p>
                You’re all cool kthxbai
            </p>
        );
    }
}