"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const urls_1 = require("./urls");
function search_channel_sections(API_KEY, channelId, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "snippet,contentDetails";
        args.channelId = channelId;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_CHANNEL_SECTIONS_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.search_channel_sections = search_channel_sections;
function search_channel(API_KEY, id, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "snippet,contentDetails,statistics";
        args.id = id;
        args.key = API_KEY;
        axios_1.default.get(urls_1.SEARCH_CHANNEL_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.search_channel = search_channel;
function get_channel_id(API_KEY, userName, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "id";
        args.key = API_KEY;
        args.forUsername = userName;
        axios_1.default.get(urls_1.SEARCH_CHANNEL_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.get_channel_id = get_channel_id;
function get_item_channel(API_KEY, channelId, maxResults, args = {}) {
    return new Promise((resolve, reject) => {
        args.part = "snippet";
        args.key = API_KEY;
        args.channelId = channelId;
        args.maxResults = maxResults;
        axios_1.default.get(urls_1.SEARCH_ALL_URL, {
            params: args
        }).then((response) => {
            resolve(response.data);
        }).catch((err) => {
            reject(err);
        });
    });
}
exports.get_item_channel = get_item_channel;
