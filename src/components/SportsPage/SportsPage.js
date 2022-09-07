import React from 'react';
import SportsCardRecommended from '../SportsCardRecommended/SportsCardRecommended';
import SportsCardRow from '../SportsCardRow/SportsCardRow';
import SportsHeaderRow from '../SportsHeaderRow/SportsHeaderRow';
import './SportsPage.css';


const SportsPage = () => {
  return (
    <div className='sportsPage'>
        <div className='sportsHeaderSection'>
            <SportsHeaderRow
                image='https://yt3.ggpht.com/B9YzX7YLiCFWffgZdNd8BExRMnF5afNdBaaoAO7q9VpuDxDsYp09Ylp0A8XWwedWfmZBWA8sZtk=s176-c-k-c0x00ffffff-no-rj-mo'
                channel='Sports'
                subscribers='75.1'
                button='SUBSCRIBE'
            />
        </div>
        <header className='sportsPage__header'>
            <h4>MLB Game of the Week Live</h4>
        </header>
        <div className='sportsMLBSection'>
            <SportsCardRow
                image='https://i.ytimg.com/vi/rU-K8Im4KRw/maxresdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu8oatW_FL1MNa2GadTc02tj-DxmhnLDf7S5dKu20wA=s68-c-k-c0x00ffffff-no-rj'
                title='Mariners at Angels | MLB Game of the Week Live on YouTube'
                channel='MLB'
                verified
                views='557K'
                timestamp='2 weeks'
            />
            <SportsCardRow
                image='https://i.ytimg.com/vi/w72lUUiN__s/maxresdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu8oatW_FL1MNa2GadTc02tj-DxmhnLDf7S5dKu20wA=s68-c-k-c0x00ffffff-no-rj'
                title='Rangers at Astros | MLB Game of the Week Live on YouTube'
                channel='MLB'
                verified
                views='613K'
                timestamp='3 weeks'
            />
            <SportsCardRow
                image='https://i.ytimg.com/vi/bIDltJuiwXk/maxresdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu8oatW_FL1MNa2GadTc02tj-DxmhnLDf7S5dKu20wA=s68-c-k-c0x00ffffff-no-rj'
                title='Twins at Brewers | MLB Game of the Week Live on YouTube'
                channel='MLB'
                verified
                views='602K'
                timestamp='1 month'
            />
            <SportsCardRow
                image='https://i.ytimg.com/vi/bIDltJuiwXk/maxresdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu8oatW_FL1MNa2GadTc02tj-DxmhnLDf7S5dKu20wA=s68-c-k-c0x00ffffff-no-rj'
                title='Brewers at Twins | MLB Game of the Week Live on YouTube'
                channel='MLB'
                verified
                views='524K'
                timestamp='1 month'
            />
            </div>
            <div className='sportsCardSection'>
            <SportsCardRecommended
                image='https://i.ytimg.com/vi/pE0QyFSWK2U/maxresdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu-KTJUj59N6qAMZanddZVdHFfFnSejcCs1Bw0DwGA=s68-c-k-c0x00ffffff-no-rj'
                title='Khamzat Chimaev UFC 279 Interview: Fighting Nate Diaz and...'
                channel='ESPN MMA'
                verified
                views='563K'
                timestamp='1 day'
            />
            <SportsCardRecommended
                image='https://images.daznservices.com/di/library/DAZN_News/48/dc/canelo-alvarez-102819-getty-ftr_incay39xh02711tsx0r4mv666.jpg?t=472225518&quality=60&h=450'
                channelImage='https://yt3.ggpht.com/ipy4X2-vKYv96LdmLFkTlRtcHDQHgL6DIYBymEjl2vQ-HUNwuOYWmtMK-YswUO7rf5EPjLjZ=s68-c-k-c0x00ffffff-no-rj'
                title='This Is What It Feels Like to Face Canelo In The Ring 👀'
                channel='DAZN BOXING'
                verified
                views='43K'
                timestamp='1 day'
            />
            <SportsCardRecommended
                image='https://i.ytimg.com/vi/ouzYYruBRNo/maxresdefault.jpg'
                channelImage='https://yt3.ggpht.com/MKFUgbrKO1aR0BOmNa89kEVziFbv0yYggqwwxkYE33Ji9HtHA58T0gTfWU2Hp8wo_QH4M7tqOD0=s68-c-k-c0x00ffffff-no-rj'
                title='Isaac Cruz Calls out Gervonta Davis after KO | Cruz vs Ramirez...'
                channel='Premier Boxing Champions'
                verified
                views='943K'
                timestamp='1 day'
            />
            <SportsCardRecommended
                image='https://www.pasadenastarnews.com/wp-content/uploads/2022/09/LDN-Boxing-Weigh-N-0905-8.jpg?w=978'
                channelImage='https://yt3.ggpht.com/MKFUgbrKO1aR0BOmNa89kEVziFbv0yYggqwwxkYE33Ji9HtHA58T0gTfWU2Hp8wo_QH4M7tqOD0=s68-c-k-c0x00ffffff-no-rj'
                title='Ruiz vs Ortiz FIGHT HIGHLIGHTS: September 4, 2022 | PBC on FOX...'
                channel='Premier Boxing Champions'
                verified
                views='1.5M'
                timestamp='1 day'
            />
            <SportsCardRecommended
                image='https://i.ytimg.com/vi/pOmVEayfijc/mqdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu9CTZthCqqE8eIrZnjIaXGDni8TipJ9pZR2B_6J=s68-c-k-c0x00ffffff-no-rj'
                title='DEONTAY WILDER STEPS IN RING WHEN ADY RUIZ DAD CALLS HI...'
                channel='FightHype.com'
                verified
                views='576K'
                timestamp='1 day'
            />
            <SportsCardRecommended
                image='https://i.ytimg.com/vi/Eq9N3rMayIQ/mqdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu-7YKAjhPTBw9mrc-7_A1OuRILmsClMRoTJ1XdRsE8=s68-c-k-c0x00ffffff-no-rj'
                title='The Secret Behind Nate Diazs Secret Punch | UFC BREAKDOWN'
                channel='UFC - Ultimate Fighting Champions...'
                verified
                views='286K'
                timestamp='1 day'
            />
            <SportsCardRecommended
                image='https://cdn2.myvidster.com/user/thumbs/bd33bc67f253abd576b62af26633bbc5_1.jpg'
                channelImage='https://yt3.ggpht.com/MKFUgbrKO1aR0BOmNa89kEVziFbv0yYggqwwxkYE33Ji9HtHA58T0gTfWU2Hp8wo_QH4M7tqOD0=s68-c-k-c0x00ffffff-no-rj'
                title='Cruz vs Ramirez FIGHT HIGHLIGHTS: September 4, 2022|...'
                channel='Premier Boxing Champions'
                verified
                views='839K'
                timestamp='1 day'
            />
            <SportsCardRecommended
                image='https://i.ytimg.com/vi/u7Da0HO7k7M/maxresdefault.jpg'
                channelImage='https://yt3.ggpht.com/ytc/AMLnZu9w3FOHwhHxjSbJqqvXirb9SDXxMa78Zxos5WT5=s68-c-k-c0x00ffffff-no-rj'
                title='Andy Ruiz Jr. vs. Luis Ortiz | Preview Highlight | PBC on FOX'
                channel='PBC ON FOX'
                verified
                views='1.1M'
                timestamp='1 day'
            />
            </div>
    </div>
  );
};

export default SportsPage;