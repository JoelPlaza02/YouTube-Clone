import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import ChannelRow from '../ChannelRow/ChannelRow';
import VideoRow from '../VideoRow/VideoRow';
import './SearchPage.css';
import TuneIcon from '@mui/icons-material/Tune';

const SearchPage = () => {
  return (
    <div className='searchPageContainer'>
        <Sidebar />
     <div className='search__page'>
        <div className='searchPage__filter'>
            <TuneIcon className="filter__icon" />
            <h2>FILTERS</h2>
        </div>
        <hr />

        <ChannelRow
            image="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="FULL SEND PODCAST"
            verified
            subscriptions="1.65M"
            videos="49"
            description="Hosted by Kyle Forgeard & friends."
        />
        <hr />
        <h3 className='videoRow__header'>Latest from FULL SEND PODCAST</h3>
        <VideoRow
            image="https://i.ytimg.com/vi/UeeEFDLaMYY/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBf_2W5FqvX105P1lcwWuPZ4d9ZOw"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Bored Ape Yacht Club Creators Explain How Steph Curry & Bieber Got Their NFT &
            How BAYC is Worth $4B"
            views="1.5M"
            timestamp="7 days ago"
            description="Filmed at Gekko in Miami, FL. LISTEN ON SPOTIFY: https://open.spotify.com/show/5IEFhgPq9gcYU9MSXkALiZ SUBSCRIBE..."
        />

        <VideoRow
            image="https://i.ytimg.com/vi/fXS_gkWAIs0/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Elon Musk Reveals His Knowledge on Aliens, Challenges Putin to UFC, and Predicts WW3"
            views="10M"
            timestamp="3 weeks ago"
            description="00:00 INTRO 17:50 DRINKING FIRST HAPPY DAD 20:56 ELON MOVES TO TEXAS 23:16 BAY AREA TESLA FACTORY 26:00 ..."
        />

        <VideoRow
            image="https://i.ytimg.com/vi/f4isrrclZu0/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Andrew Tate Exposes How He Makes Money, Talks Scamming People and Dating Kylie Jenner!"
            views="9.2M"
            timestamp="4 weeks ago"
            description="HIGH VALUE MALE MERCH DROP: https://fullsend.com/products/high-value-male-tee GET FULL SEND SUPPS NOW: ..."
        />

        <VideoRow
            image="https://i.ytimg.com/vi/qNDfBQ9EjWc/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Post Malone on His Relationship with Justin Bieber & Preparing for the End of the World!"
            views="3.9M"
            timestamp="2 months ago"
            description="Listen to Post Malone's new album here: https://postmalone.lnk.to/tct GET FULL SEND SUPPS NOW: http://supplements.co LET'S .."
        />

        <VideoRow
            image="https://i.ytimg.com/vi/ya0RUpCOFFM/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Luke Combs on His Competition with Morgan Wallen & The Country Music Industry Secrets!"
            views="1.4M"
            timestamp="2 months ago"
            description="GET FULL SEND SUPPS NOW: http://supplements.co LET'S GO!! FIND HAPPY DAD NEAR YOU: http://happydad.com/find ..."
        />

        <VideoRow
            image="https://i.ytimg.com/vi/UbGVM-Usy8M/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Gary Vee Explains How He Made $90 Million on NFTs & Why They Will Change the World"
            views="2.8M"
            timestamp="7 months ago"
            description="This week, the boys sit down with entrepreneur Gary Vee and John Shahidi in NYC. Gary explains how he made his money, NFT's ..."
        />

        <VideoRow
            image="https://i.ytimg.com/vi/iheFA-P1MRo/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Justin Gaethje on Why He Hates Colby Covington, Fighter Pay & Fighting Conor McGregor!"
            views="2.1M"
            timestamp="3 months ago"
            description="GET FULL SEND SUPPS NOW: http://supplements.co LET'S GO!! FIND HAPPY DAD NEAR YOU: http://happydad.com/find ..."
        />

        <VideoRow
            image="https://i.ytimg.com/vi/8N4-0OaFB-c/maxresdefault.jpg"
            channelImage="https://yt3.ggpht.com/5_TYQJ-59yU45NoK1GpQcRuov8OgZuwuSiS-0X8IveZI3QK_tKaiQxx9BHGqVkGogD08zY-txA=s68-c-k-c0x00ffffff-no-rj"
            channel="FULL SEND PODCAST"
            verified
            title="Joe Burrow on Partying after The Super Bowl Loss, Tom Brady’s Future & Pre Game Outfits!"
            views="2.7M"
            timestamp="3 months ago"
            description="GET FULL SEND SUPPS NOW: http://supplements.co LET'S GO!! FIND HAPPY DAD NEAR YOU: http://happydad.com/find ..."
        />

     </div>
    </div>
  );
};

export default SearchPage;