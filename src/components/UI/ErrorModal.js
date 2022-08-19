import React from "react";
//Styles
import classes from "./ErrorModal.module.css";
import Card from "./card";
import Button from "./button";

const ErrorModal = props =>
{
    return (
        <div>
            <div className={ classes.backdrop } onClick={ props.onConfirm } />
            <Card className={ classes.modal }>
                <header className={ classes.header }>
                    <h2>{ props.title }</h2>
                </header>
                <div className={ classes.content }>
                    <p>{ props.message }</p>
                </div>
                <div>
                    <footer className={ classes.actions }>
                        <Button onClick={ props.onConfirm }>Okay</Button>
                    </footer>
                </div>
            </Card>
        </div>
    );
};

export default ErrorModal;