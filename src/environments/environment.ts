// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //user
  login: 'http://localhost:8080/user/login',
  newAccount:'http://localhost:8080/user/newaccount',
  updateAccount:'http://localhost:8080/user/updateaccount',
  searchUsers:'http://localhost:8080/user/searchusers',
  getallUsers:'http://localhost:8080/user/getall',
  getoneUser:'http://localhost:8080/user/getone',

  //friend
  friendRequest:'http://localhost:8080/friend/request',
  requestUpdate:'http://localhost:8080/friend/requestupdate',
  deleteFriend:'http://localhost:8080/friend/deletefriend',
  getAllFriends:'http://localhost:8080/friend/getall',

  //chat
  newChat:'http://localhost:8080/chat/newchat',
  deleteChat:'http://localhost:8080/chat/deletechat',
  muteChat:'http://localhost:8080/chat/mutestatus',
  getAllChats:'http://localhost:8080/chat/getallchats',
  searchChats:'http://localhost:8080/chat/searchchats',
  getGroups:'http://localhost:8080/chat/getgroupname',
  getone:'http://localhost:8080/chat/getone',

  //chatlog
  message:'http://localhost:8080/chatlog/newmessage',
  getChats:'http://localhost:8080/chatlog/getallchatlogs',

  //block
  block:'http://localhost:8080/block/block',
  unblock:'http://localhost:8080/block/unblock',
  getblock:'http://localhost:8080/block/getblocks'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
