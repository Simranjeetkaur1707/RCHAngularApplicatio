import { Injectable } from '@angular/core';
import { User } from './user'; 


export class UserService {
    createUser(user: User) {
        console.log('Mobile Number: ' + user.mobileNumber);
}
}