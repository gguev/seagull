import YouTube from 'youtube-sr';
import _ from 'lodash';

export const ytSearchVideos = async (query) => {
    const blacklist = [
        'IGN',
        'GameSpot',
        'GamingBolt',
        'GamesRadar',
        'hbomberguy',
        'PC Gamer'
    ]
    
    const cleanedQuery = query.replace(/['"\u0040\u0026\u2122\u00ae]/g, '');

    const videos = await YouTube.search(cleanedQuery);

    const cleanedVideos = videos.filter((video) => {
        return !blacklist.includes(video.channel.name)
    });
    
    return cleanedVideos;
}
