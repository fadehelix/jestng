// import userService from './UsersService';

describe('UserService', function(){
  let userRoleMock;

  beforeEach(
    angular.mock.module('UserServiceModule')
  );

  beforeEach(angular.mock.module('app', ($provide) => {
    userRoleMock = {
      'USER_ROLE': {
        'ADMIN': 'role.admin',
        'EDITOR': 'role.editor',
      }
    }
    $provide.constant('CONSTANTS', userRoleMock)

  }))

  let _userservice;

  beforeEach(function() {

    inject(userService => {
      _userservice = userService;
    })
  })

  it('Should set and get "role.admin" role', function() {
    const role = _userservice.setRole('role.admin');
    expect(_userservice.getRole()).toEqual('role.admin');
  })
})
