import axios from "axios";

// Test URL
const origin = "http://20.214.190.113:5050";
const getPostsURL = origin + "/posts";
const getPostOneURL = origin + "/posts/"
const createReviewURL = origin + "/posts";

// Test API Request
export const getPosts = async()=>{
    const posts = await axios.get(getPostsURL)
    .then(res=>res.data)
    .catch(console.log);
    return posts;
}

export const getPostOne = async (id)=>{
    const requestURL = getPostOneURL + id;
    const post = await axios.get(requestURL)
    .then(res=>res.data)
    .catch(console.log);
    return post
}

export const createReview = async(review, accessToken)=>{
    if(!review.user_id || !review.title || !review.location || !review.content)
        return new Error("Invalid Review Info!");

    if(!accessToken) return new Error("Not Authorized");

    const createResult = await axios.post(createReviewURL, review, {
        headers:{
            Authorization: accessToken
        }
    })
    .then(res=>res)
    .catch(err=>err);

    return createResult;
}