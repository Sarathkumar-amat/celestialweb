import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
    "In the midst of darkness, there is always a glimmer of light. We must seek it out and strive to bring it into our lives and the lives of others.",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "2023-06-02T07:50:35+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content:
      "Freedom is not found in conquest or power. True freedom is the ability to make choices and live according to one's own values",
    likes: {
      likeCount: 1,
      likedBy: [{_id: "m1qAbCDr-b",
      firstName: "Shubam",
      lastName: "Soni",
      username: "shubhamsoni",
      followers: [],
      following: [],
      createdAt: formatDate(),
      updatedAt: formatDate(),
      }],
      dislikedBy: [],
    },
    username: "adarshbalika",
    createdAt: "2023-06-13T07:50:35+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Sometimes, the hardest battles we fight are within ourselves. Conquering our own demons is the first step towards true victory.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: "2023-06-06T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "Life is 10% what happens to us and 90% how we react to it.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: "2023-06-04T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "Hate is a double-edged sword. The more you cling to it, the more it consumes you.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "johndoe123",
    createdAt: "2023-06-13T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    likes: {
    likeCount: 1,
    likedBy: [
      {_id: "x9rEfGhi-c",
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    followers: [],
    following: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    }
  ],
    dislikedBy: [],
    },
    username: "johndoe123",
    createdAt: "2023-06-11T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "In the middle of every difficulty lies opportunity.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: "2022-06-12T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "The future belongs to those who believe in the beauty of their dreams.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: "2021-05-02T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "michaeljohnson",
    createdAt: "2022-03-17T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    {
    _id: uuid(),
    content: "The only limit to our realization of tomorrow will be our doubts of today.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "michaeljohnson",
    createdAt: "2023-06-06T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "The best way to predict the future is to create it.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "sophiamiller",
    createdAt:"2023-03-24T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "The only person you should try to be better than is the person you were yesterday.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "sophiamiller",
    createdAt: "2023-06-08T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "Every scar tells a story. They are a reminder of the battles we've fought, the pain we've endured, and the growth we've experienced.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "oliviabrown",
    createdAt: "2023-06-11T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "Don't watch the clock; do what it does. Keep going.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "oliviabrown",
    createdAt: "2022-07-22T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "The two most important days in your life are the day you are born and the day you find out why.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "ethananderson",
    createdAt: "2021-10-13T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "Do not let the behavior of others destroy your inner peace.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "ethananderson",
    createdAt:"2022-02-14T07:50:35+05:30",
    updatedAt: formatDate(),
    },
    
    {
    _id: uuid(),
    content: "Success usually comes to those who are too busy to be looking for it.",
    likes: {
    likeCount: 0,
    likedBy: [],
    dislikedBy: [],
    },
    username: "shubhamsoni",
    createdAt: "2022-01-30T07:50:35+05:30",
    updatedAt: formatDate(),
    }
];
