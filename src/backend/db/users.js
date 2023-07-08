import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "x9rEfGhi-c",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    bookmarks: [],
    followers: [],
    following: [],
    // website: "https://sarathkumar-portfolio.netlify.app/",
    password: "adarshBalika123",
    bio: "Just hang on",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:"http://surl.li/ijvfa"
    
  },
  {
    _id: "m1qAbCDr-b",
    firstName: "Shubam",
    lastName: "Soni",
    username: "shubhamsoni",
    bookmarks: [],
    followers: [],
    following: [],
    password: "shubhamsoni123",
    bio: "There is no paradise",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    profileImg:"http://surl.li/ijvfa"
    
  },
  {
    _id: "s2pXjVEq-a",
    firstName: "John",
    lastName: "Doe",
    username: "johndoe123",
    password: "JohnDoePass",
    bio: "Live life to the fullest!",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: "2022-02-15T15:30:45+05:30",
    updatedAt: "2023-05-20T09:12:30+05:30",
    profileImg:"http://surl.li/ijvgc"
   
  },
  {
    _id: "r5mYhTBx-b",
    firstName: "Emily",
    lastName: "Smith",
    username: "emilysmith",
    password: "Emily123",
    followers: [],
    following: [],
    bio: "Dream big, achieve bigger!",
    bookmarks: [],
    createdAt: "2022-03-10T08:45:12+05:30",
    updatedAt: "2023-06-05T11:20:15+05:30",
    profileImg:"http://surl.li/ijvgh"
  },
  {
    _id: "u8nZkQCv-c",
    firstName: "Michael",
    lastName: "Johnson",
    username: "michaeljohnson",
    password: "MJ2023",
    followers: [],
    following: [],
    bio: "Passion fuels progress!",
    bookmarks: [],
    createdAt: "2022-04-22T16:20:30+05:30",
    updatedAt: "2023-06-09T14:05:50+05:30",
    profileImg:"http://surl.li/ijvgw"
  },
  {
    _id: "p3lSdYFu-d",
    firstName: "Sophia",
    lastName: "Miller",
    username: "sophiamiller",
    password: "SophiaM123",
    bio: "Spread love and kindness!",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: "2022-05-05T12:10:25+05:30",
    updatedAt: "2023-06-10T08:35:40+05:30",
    profileImg:"http://surl.li/ijvgw"
  },
  {
    _id: "m9vXrDJy-f",
    firstName: "Olivia",
    lastName: "Brown",
    username: "oliviabrown",
    password: "OliviaB123",
    bio: "Believe in yourself!",
    bookmarks: [],
    followers: [],
    following: [],
    createdAt: "2022-07-01T14:30:15+05:30",
    updatedAt: "2023-06-10T12:15:10+05:30",
    profileImg:"http://surl.li/ijvhk"
  },
  {
    _id: "w2gKfUEo-g",
    firstName: "Ethan",
    lastName: "Anderson",
    username: "ethananderson",
    password: "Ethan123",
    bio: "Chase your dreams!",
    followers: [],
    following: [],
    bookmarks: [],
    createdAt: "2022-08-14T09:25:50+05:30",
    updatedAt: "2023-06-10T14:45:05+05:30",
    profileImg:"http://surl.li/ijvgw"
  }
];
