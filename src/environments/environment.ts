// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //user
  login:'http://54.163.196.222:8088/AceChat/user/login',
  newAccount:'http://54.163.196.222:8088/AceChat/user/newaccount',
  updateAccount:'http://54.163.196.222:8088/AceChat/user/updateaccount',
  searchUsers:'http://54.163.196.222:8088/AceChat/user/searchusers',
  getallUsers:'http://54.163.196.222:8088/AceChat/user/getall',
  getoneUser:'http://54.163.196.222:8088/AceChat/user/getone',

  //friend
  friendRequest:'http://54.163.196.222:8088/AceChat/friend/request',
  requestUpdate:'http://54.163.196.222:8088/AceChat/friend/requestupdate',
  deleteFriend:'http://54.163.196.222:8088/AceChat/friend/deletefriend',
  getAllFriends:'http://54.163.196.222:8088/AceChat/friend/getall',

  //chat
  newChat:'http://54.163.196.222:8088/AceChat/chat/newchat',
  deleteChat:'http://54.163.196.222:8088/AceChat/chat/deletechat',
  muteChat:'http://54.163.196.222:8088/AceChat/chat/mutestatus',
  getAllChats:'http://54.163.196.222:8088/AceChat/chat/getallchats',
  searchChats:'http://54.163.196.222:8088/AceChat/chat/searchchats',
  getGroups:'http://54.163.196.222:8088/AceChat/chat/getgroupname',
  getone:'http://54.163.196.222:8088/AceChat/chat/getone',

  //chatlog
  message:'http://54.163.196.222:8088/AceChat/chatlog/newmessage',
  getChats:'http://54.163.196.222:8088/AceChat/chatlog/getallchatlogs',

  //block
  block:'http://54.163.196.222:8088/AceChat/block/block',
  unblock:'http://54.163.196.222:8088/AceChat/block/unblock',
  getblock:'http://54.163.196.222:8088/AceChat/block/getblocks'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
