import React from "react";
//components
import Card from "../UI/Card";
//Styles
import classes from "./UsersList.module.css";


const UsersList = props =>
{
    return (
        <Card className={ classes.users }>
            <ul>
                { props.users.map( user => (
                    <li key={ user.id }>
                        { user.name }({ user.age } years old)
                    </li>
                ) ) }
            </ul>
        </Card>
    );
};

export default UsersList;