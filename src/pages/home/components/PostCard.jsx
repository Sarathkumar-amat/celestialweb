import "./PostCard.css"
export function PostCard({singlePost})
{
    const {content,username} = singlePost
    return (<div className="postCard">
       <p>{username}</p> 
        <p>{content}</p>
       
        <i class="bi-heart"></i>
        <i onClick={()=>console.log("hello")} style={{color:"red"}} class="bi-heart-fill"></i>
        <i class="bi-chat-left"></i>
        <i class="bi-share"></i>
        <i class="bi-bookmark"></i>
        <i class="bi-bookmark-fill"></i>

    </div>)
}