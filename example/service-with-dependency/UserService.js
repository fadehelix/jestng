import angular from 'angular';


const UserServiceModule = angular.module('UserServiceModule', [])
  .factory('userService', ['CONSTANTS', (CONSTANTS) => {
    let currentRole = undefined;

    const setRole = (role) => {
      currentRole = Object.values(CONSTANTS.USER_ROLE).includes(role) ? role : 'norole';
    }
    const getRole = () => {
      return currentRole;
    }

    return {
      getRole,
      setRole
    }
  }])
  .name

export default UserServiceModule;
