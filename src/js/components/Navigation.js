
import React from 'react';

 const Navigation = () => {

    function formatName(user) {
       return  user.firstName + ' ' + user.lastName;
    }

    const user = {
        firstName: 'Harper',
        lastName: 'Perez'
    };

    return ( <h1> Hello, {formatName(user)}!  </h1> );


}

export default Navigation;