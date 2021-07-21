# Typing Trainer

## Goals

The purpose of this web app is to allow a user to train their typing skills by writing out a piece of text without any errors.  
A future goal is to have a backend api that allows users to race eachother in realtime using socket.io.  

## Tech Stack

- Frontend
    - Typescript
    - React
    - React Query
- Backend
    - Typescript
    - Node
    - Express
    - Socket.io
    - Redis

## Todo

- Stage 1: Prototype
    - [ ] Implement trainer with quotes from github 
        - [x] Fetch quotes from github
        - [x] Clean quotes
        - [x] Display quote to player
        - [x] Validate input
        - [x] Change state on valid input
        - [ ] Display errors
        - [ ] Show info screen on finish
        - [x] Reset state on new game
    - [ ] Create backend that serves quotes
    - [ ] Allow for server to accept input from client
        - [ ] Client sends letters to server
        - [ ] Server changes state of player
        - [ ] Server emits to all players
