// Database of instragram

enum DatabaseModel {
    users ="users",
    posts ="posts",
    likes ="likes",
    comments ="comments"
}
interface IModel{
    model : DatabaseModel;
    id : number;
}

class Model implements IModel{
    model : DatabaseModel;
    id : number;

    constructor(model :DatabaseModel ){
        this.id =Math.random();
        this.model = model;
    }
    
}

interface IUser extends IModel{
    name : string;
    bio : string;
    email : string;
    follows :number[]
}
class User extends Model implements IUser{
    name : string;
    bio : string;
    email : string;
    follows :number[]

    constructor(name :string, bio :string, email :string){
        super(DatabaseModel.users)
        this.name = name;
        this.bio = bio;
        this.email = email;
        this.follows =[]

        Database.Instance?.users.push({
            name: this.name,
            bio: this.bio,
            email: this.email,
            follows: this.follows,
            model :this.model,
            id :this.id
        })
    }

    follow(userID: number){
        this.follows.push(userID)
    }
    get followers(){
        if(Database.Instance === null){
            return null
        }
        return Database.Instance?.users?.filter((user) =>{
            return user.follows.includes(this.id)
        })
    }

    get posts(){
        if(Database.Instance === null){
            return null
        }

        return Database.Instance?.posts?.filter((post) =>{
            return post.userID === this.id

        })

    }

    createPost(image: string, content: string){
        return new Post(image, content,this.id)
    }

}

interface IPost extends IModel{
    img:string;
    content : string;
    userID:number

}

class Post extends Model implements IPost{
    img:string;
    content : string;
    userID:number

    constructor(img:string, content:string, userID:number){
        super(DatabaseModel.posts)
        this.img = img;
        this.content = content;
        this.userID = userID

        Database.Instance?.posts.push({
            img: this.img,
            userID: this.userID,
            content: this.content,
            model:this.model,
            id :this.id
        })
    }


}

interface ILike extends IModel{
    userID :number;
    parentID :number;
    type : "POST" | "COMMENT"
}

class Like extends Model implements ILike{
    userID :number;
    parentID :number;
    type : "POST" | "COMMENT"

    constructor(userID :number,parentID :number,type :"POST" | "COMMENT"){
        super(DatabaseModel.likes)
        this.userID =userID;
        this.parentID =parentID;
        this.type =type;

        Database.Instance?.likes.push({
            userID: this.userID,
            parentID: this.parentID,
            type: this.type,
            model:this.model,
            id :this.id
        })
    }
}

interface IComment extends IModel{
    content: string;
    userID: number;
    postID: number;
}

class Commemnt extends Model implements IComment{
    content: string;
    userID: number;
    postID: number;


    constructor(content :string,userID:number,postID:number){
        super(DatabaseModel.comments)
    }

}

type ModelType ={
    model :DatabaseModel.users,
    data:IUser
} |
{
    model :DatabaseModel.posts,
    data:IPost
} |
{
    model :DatabaseModel.comments,
    data:IComment
} |
{
    model :DatabaseModel.likes,
    data:ILike
}


class Database{
    static Instance : Database | null = null;
    users: IUser[]
    posts: IPost[]
    comments: IComment[];
    likes : ILike[]


    private constructor(){

    }
    static connect(){
        if(Database.Instance === null){
            Database.Instance = new Database()
        }

        return Database.Instance
    }

    create({model,data} : ModelType){
        if(model === DatabaseModel.users){
            this.users.push(data)
        }else if(model === DatabaseModel.posts){
            this.posts.push(data)
        }else if(model === DatabaseModel.comments){
            this.comments.push(data)
        }else if(model === DatabaseModel.likes){
            this.likes.push(data)
        }
        
    }

}

const db1 = Database.connect()



