import { PubSub } from 'apollo-server-express';

export const pubsub = new PubSub();


export const ADD_TRAINEE = 'ADD_TRAINEE';
export const UPDATE_TRAINEE = 'UPDATE_TRAINEE';
export const DELETE_TRAINEE = 'DELETE_TRAINEE';
export const LOGIN = 'LOGIN';