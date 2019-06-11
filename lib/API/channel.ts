import axios, {AxiosError} from 'axios';

import {
    SEARCH_CHANNEL_URL,
    SEARCH_CHANNEL_SECTIONS_URL,
    SEARCH_ALL_URL
} from './urls';

export function search_channel_sections (
    API_KEY : string,
    channelId : string,
    args : any = {},
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet,contentDetails";
        args.channelId = channelId;
        args.key = API_KEY;

        axios.get(SEARCH_CHANNEL_SECTIONS_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });
}

export function search_channel (
    API_KEY : string,
    id : string,
    args : any = {},
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet,contentDetails,statistics";
        args.id = id;
        args.key = API_KEY;

        axios.get(SEARCH_CHANNEL_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });
}

export function get_channel_id (
    API_KEY : string,
    userName: string,
    args : any = {},
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "id";
        args.key = API_KEY;
        args.forUsername = userName;

        axios.get(SEARCH_CHANNEL_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });
}

export function get_item_channel (
    API_KEY : string,
    channelId: string,
    maxResults: number,
    args : any = {},
) {
    return new Promise<{}>((resolve, reject) => {

        args.part = "snippet";
        args.key = API_KEY;
        args.channelId = channelId;
        args.maxResults = maxResults;

        axios.get(SEARCH_ALL_URL,{
            params : args
        }).then((response:any) => {
            resolve(response.data);
        }).catch((err : AxiosError) => {
            reject(err);
        });
    });
}
