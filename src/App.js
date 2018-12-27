import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import ScrollArea from 'react-scrollbar';
import './App.scss';

import Tyler from './messages/tyler.js';
import Deelon from './messages/deelon.js';
import Cell from './messages/cell.js';
import Mute from './messages/mute.js';
import Aeg from './messages/aeg.js';
import Cake from './messages/cake.js';
import Saag from './messages/saag.js';
import Snow from './messages/snow.js';
import Derp from './messages/derp.js';
import Any from './messages/any.js';
import Neel from './messages/neel.js';
import Vase from './messages/vase.js';
import Supa from './messages/supa.js';
import Zack from './messages/zack.js';
import Cal from './messages/cal.js';
import Dou from './messages/douwert.js';
import Ventis from './messages/ventis.js';
import Mark from './messages/mark.js';
import Kray from './messages/kray.js';
import Sayo from './messages/sayo.js';

import defaultImage from './logo.svg'
import indexImage from './ova.png';
import back from './ic_arrow_back_48px.svg';

const allUsers = [
    Tyler,
    Deelon,
    Cell,
    Mute,
    Aeg,
    Cake,
    Saag,
    Snow,
    Derp,
    Any,
    Neel,
    Vase,
    Supa,
    Zack,
    Cal,
    Dou,
    Ventis,
    Mark,
    Kray,
    Sayo
];

function Title(props) {
    return (
        <div className="linear-horizontal title">
            <img src={props.img} width="96" height="96" alt={props.title}/>
            <h1>{props.title}</h1>
        </div>
    );
}

class Message extends Component {
    static defaultProps = {
        title: "Title",
        img: defaultImage
    };

    render() {
        return (
            <div className="app-content">
                <div className="grid-header">
                    <Title {...this.props}/>
                    <div className="app-divider" />
                </div>
                <div className="app-message-wrapper grid-content">
                    <div className="app-message-gradient"/>
                    <ScrollArea className="app-message"
                                contentClassName="app-message-content"
                                smoothScrolling={true}>
                        {this.props.children}
                    </ScrollArea>
                </div>

                <div className="grid-footer">
                    <div className="app-divider" />
                    <div className="linear-horizontal app-back" onClick={this.props.onBack}>
                        <img src={back} alt="Back"/>
                        <span>Back</span>
                    </div>
                </div>
            </div>
        )
    }
}

function User(props) {
    return (
        <div className="user linear-vertical" onClick={() => props.onClick(props.name)}>
            <img src={props.img} width="96" height="96" alt={props.name}/>
            <span>{props.name}</span>
        </div>
    );
}
class Index extends Component {
    render() {
        return (
            <div className="app-content">
                <div className="grid-header">
                    <Title img={indexImage} title="OVA One Year Anniversary"/>
                    <div className="app-divider" />
                </div>

                <div className="index-content">
                    {allUsers.map(user => <User img={user.img} name={user.title} onClick={this.props.onUserClick}/>)}
                </div>

                <div className="grid-footer">
                    <div className="app-divider" />
                </div>
            </div>
        );
    }
}

class App extends Component {

    static userLookup = new Map(allUsers.map(user => [user.title, user]));

    state = {
        message: null
    };

    onUserClick = user => {
        this.setState({message: App.userLookup.get(user)});
    };

    render() {
        let index = null;
        let content = null;
        if(this.state.message) {
            const Content = this.state.message;
            content = (
                <Message title={Content.title} img={Content.img} onBack={() => this.onUserClick(null)}>
                    <Content/>
                </Message>
            );
        }
        else {
            index = <Index onUserClick={this.onUserClick}/>;
        }

        return (
            <div className="app-wrapper">
                <CSSTransitionGroup
                    transitionName="index"
                    transitionEnterTimeout={500}
                    transitionEnter
                    transitionLeaveTimeout={500} >
                    {index}
                </CSSTransitionGroup>

                <CSSTransitionGroup
                    transitionName="content"
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    {content}
                </CSSTransitionGroup>
            </div>
        );
    }
}

export default App;
