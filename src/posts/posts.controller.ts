import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('posts')
export class PostsController {
    @Get('/')
    getAllPost():string{
        return 'get all posts';
    }

    @Get('/:postid')
    getPostDetails(@Param() param):string{
        return `details of postid = ${param.postid}`;
    }

    @Post('/')
    createNewPost():string{
        //TODO
        return `new post created`;
    }

    @Delete('/:postid')
    deletePost(@Param() param):string{
        //TODO
        return `post deleted = ${param.postid}`;
    }

    @Put('/:postid/like')
    likePost(@Param() param):string{
        //TODO
        return `liked post ${param.postid}`;
    }
    
    @Delete('/:postid/like')
    unlikePost(@Param() param):string{
        //TODO
        return `unliked post ${param.postid}`;
    }


    
}
