import React from 'react';
import { useCallback } from 'react';

import { REDUCER_OPERATIONS } from './StringConstants';

export const UseLoadAllUsersDetailsRequest = () => {
  return useCallback(() => {
    return {
      type: REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_REQUEST,
      link: 'user',
      success: 'REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_SUCCESS'
    };
  }, []);
}