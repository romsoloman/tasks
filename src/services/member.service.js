import { utilService } from "./util.service.js";
// import { httpService } from './http.service.js';
import { storageService } from "./async-storage.service.js";

const MEMBER_DB = 'member';

// const MEMBER_URL = 'member/';

const gMembers = require('../data/member/member.json')

export const memberService = {
  query,
  getById,
  remove,
  save,
  getEmptyMember,
  // getByUserId,
}

function query() {
  // try {
  //   const members = await httpService.get(ANYs_URL, filterBy)
  //   localStorage.setItem(KEY, JSON.stringify(anys))
  //   return anys
  // } catch (err) {
  //   console.log('Got err ', err)
  // }
  let members = utilService.loadFromStorage(MEMBER_DB)
  if (!members || !members.length) {
    members = gMembers; // gMembers -> some data from json .
    utilService.saveToStorage(MEMBER_DB, members)
  }
  return storageService.query(MEMBER_DB);
}

function getById(id) {
  // try {
  //   const any = await httpService.get(KEY + id)
  //   return any
  // } catch (err) {
  //   console.log('Got err ', err)
  // }
  return storageService.get(MEMBER_DB, id);
}

// function getByUserId(id) {
//   try {
//     const gig = await httpService.get(`${GIG_URL + id}/profile`)
//     return gig
//   } catch (err) {
//     console.log('Got err ', err)
//   }
// }

function remove(id) {
  // try {
  //   const any = await httpService.delete(KEY + id)
  //   return any
  // }
  // catch (err) {
  //   console.log('Got err ', err)
  // }
  return storageService.remove(MEMBER_DB, id);

}

function save(member) {
  // try {
  //   if (any._id) {
  //     const updatedAny = await httpService.put(KEY + any._id, any)
  //     return updatedAny
  //   } else {
  //     const savedAny = await httpService.post(KEY, any)
  //     console.log('savedAny', savedAny);
  //     return savedAny;
  //   }
  // } catch (err) {
  //   console.log(err)
  // }
  return member._id ? storageService.put(MEMBER_DB, member) : storageService.post(MEMBER_DB, member);
}

function getEmptyMember() {
  return {
    memberName: '',
    role: '',
    imgUrl: '',
    createdAt: Date.now(),
    isOnline: false,
  }
}



// Create Test anys Data:
// function _createToys() {
//   var toys = JSON.parse(localStorage.getItem(KEY))
//   if (!toys || !toys.length) {
//     const TOY_URL = 'http://www.filltext.com/?rows=20&_id=%7bindex%7d&name=%7blorem|2%7d&price=%7bnumber|100%7d&type=%5b%22Educational%22,%22Funny%22,%22Adult%22%5d&createdAt=%7bdate|1970,2000%7d&inStock=%7bbool%7d&pretty=true'
//     return axios.get(TOY_URL)
//       .then(res => {
//         toys = res.data
//         localStorage.setItem(KEY, JSON.stringify(toys))
//       })
//   }
//   return toys;
// }
