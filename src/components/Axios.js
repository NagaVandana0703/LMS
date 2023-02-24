import axios from 'axios';
import React from 'react';



// const token=localStorage.getItem('authtoken')

const getAxios = () => {
    const headers = {
        "Content-Type": "application/json",
        "Accept": "application/json",
        'Authorization': localStorage.getItem('authtoken'),
        // 'Authorization': `eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJqYXZhand0IiwiZXhwIjoxNjc3MDg0MTg4LCJpYXQiOjE2NzcwNjYxODh9.X8-uUZMHqnG_pZycXwCWC3oMI1cMwzyVfgfwVVgQeMBkPmGH66KFyw-NKXGGjJBfm6srk7L8yuMG8nDNzmvpzw`

    };

    const instance = axios.create({
        headers
    });

    return instance;

}
export default getAxios();