import { Controller, Get, Param } from '@nestjs/common';

@Controller('hashtags')
export class HashtagsController {

    @Get("/")
    getHashtag():string{
        //TODO: add actual logic
        return 'All top hashtag';
    }

    @Get("/:tag/posts")
    getPostsForHashtag(@Param() param):string{
        //TODO: add actual logic
        return `show all posts with hashtag ${param.tag}`;
    }
    
}
