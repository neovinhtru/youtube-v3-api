import {
    search_channel_sections,
    search_channel,
    get_channel_id,
    get_item_channel
} from './API/channel';

import {
    search_comment_threads,
    search_comments,
} from './API/comment';

import {
    search_playlist,
    search_playlist_items,
} from './API/playlist';

import {
    search_all,
    search_video
} from './API/video';

export const YoutubeDataAPI = class {

    apiKey : string;

    constructor (API_KEY : string) {
        this.apiKey  = API_KEY;
    }

    searchAll (q : string, maxResults : number, args : any = {}) {
        return search_all (this.apiKey, q, maxResults, args);
    }

    searchVideo (id : string, args : any = {}) {
        return search_video (this.apiKey, id, args);
    }

    searchChannel (id : string, args : any = {}) {
        return search_channel (this.apiKey, id, args);
    }

    searchChannelSections (id : string, args : any = {}) {
        return search_channel_sections (this.apiKey, id, args);
    }

    searchComments (parentId : string, args : any = {}) {
        return search_comments (this.apiKey, parentId, args);
    }

    searchCommentThreads (videoId : string, args : any = {}) {
        return search_comment_threads (this.apiKey, videoId, args);
    }

    searchPlaylist (channelId : string, maxResults : number, args : any = {}) {
        return search_playlist (this.apiKey, channelId, maxResults, args);
    }

    searchPlaylistItems (playlistId : string, maxResults : number, args : any = {}) {
        return search_playlist_items (this.apiKey, playlistId, maxResults, args);
    }

    getChannelIdFromUser (userName : string, args : any = {}) {
        return get_channel_id (this.apiKey, userName, args);
    }

    getItemChannel (id : string, maxResults : number, args : any = {}) {
        return get_item_channel (this.apiKey, id, maxResults, args);
    }
}
