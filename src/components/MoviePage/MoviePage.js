import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import MovieHeaderRow from '../MovieHeaderRow/MovieHeaderRow';
import MovieCategoryRow from '../MovieCategoryRow/MovieCategoryRow';
import MovieCardRow from '../MovieCardRow/MovieCardRow';
import './MoviePage.css';

const MoviePage = () => {
  return (
    <div className='moviePage__sidebar'>
        <Sidebar />
      <div className='moviePage'>

          <MovieHeaderRow
              image='https://www.gstatic.com/youtube/img/tvfilm/movies_profile.png'
              title='Movies & Shows'
              description='Watch the latest and greatest hits'
          />
          <MovieCategoryRow />

          <h4 className='movieCard__header'>Recommended movies for you</h4>
          <div className='movieCardSection'>
             <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/YUaDE3FKo5s/movieposter_en.webp'
                 title='A Killer Next Door'
                 description='Thriller • 2020 • English audio'
                 button='Buy or Rent'
                 rating='Unrated'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/JUWWDCpSmEk/movieposter_en.webp'
                 title='Gemini Man'
                 description='Action & adventure • 2019 • English'
                 button='Buy or Rent'
                 rating='PG-13'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/Iyl-GY1_sG0/movieposter_en.webp'
                 title='John Lewis: Good Trouble'
                 description='Documentary • 2020 • English audio'
                 button='Buy or Rent'
                 rating='PG'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/uq2L1i_ObBk/movieposter_en.webp'
                 title='Dragon Ball Super: Broly (Original Japanese Version)'
                 description='Action & adventure • 2018 • Japanese'
                 button='Buy or Rent'
                 rating='TV-PG'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/Od6WD8qdaPI/movieposter_en.webp'
                 title='After Earth'
                 description='Action & adventure • 2013 • English'
                 button='Buy or Rent'
                 rating='PG-13'
              />
            </div>
            <hr className='movieCard__horizontalRule' />
          <h4 className='movieCard__header'>Free to watch movies</h4>
          <div className='movieCard__free'>
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/QVKoCD9uRxc/movieposter_en.webp'
                 title='Annihilation'
                 description='Action & adventure • 2018 • English'
                 button='Free with Ads'
                 rating='R'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/aIwcN6uuUo8/movieposter.webp'
                 title='Salt (Extended Edition)'
                 description='Drama • 2010 • English audio'
                 button='Free with Ads'
                 rating='PG-13'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/lj16MvB9YyE/movieposter.webp'
                 title='The Secret'
                 description='Independent • 2007 • English audio'
                 button='Free with Ads'
                 rating='PG'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/K3O3j7Lm098/movieposter.webp'
                 title='Crouching Tiger, Hidden Dragon'
                 description='Action & adventure • 2000 • Chinese'
                 button='Free with Ads'
                 rating='PG-13'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/vzUDKpPLf6k/movieposter.webp'
                 title='Act of Vengeance'
                 description='Thriller • English audio'
                 button='Free with Ads'
                 rating='Unrated'
              />
          </div>
          <hr className='movieCard__horizontalRule' />
          <h4 className='movieCard__header'>Top selling</h4>
          <div className='movieCard__topSelling'>
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/0KBTJBiL3oQ/movieposter_en.webp'
                 title='Top Gun: Maverick'
                 description='Action & adventure • 2022 • English'
                 button='Buy'
                 rating='PG-13'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/oJ_VO7tWIE4/movieposter_en.webp'
                 title='Nope'
                 description='Science fiction • 2022 • English audio'
                 button='Rent'
                 rating='R'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/84pqAlp2mLI/movieposter_en.webp'
                 title='Elvis'
                 description='Drama • 2022 • English audio (and 10'
                 button='Buy or Rent'
                 rating='PG-13'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/Lan7rVoUnC0/movieposter_en.webp'
                 title='Minions: The Rise of Gru'
                 description='Animation • 2022 • English audio'
                 button='Buy'
                 rating='PG'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/iZrBDA0FZKk/movieposter_en.webp'
                 title='DC League Of Super-Pets'
                 description='Animation • 2022 • English audio (and'
                 button='Buy or Rent'
                 rating='PG'
              />
          </div>
          <hr className='movieCard__horizontalRule' />
          <h4 className='movieCard__header'>Documentary</h4>
          <div className='movieCard__documentary'>
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/0P8hS9LZpdI/movieposter_en.webp'
                 title='The Plot Against The President'
                 description='Documentary • 2020 • English audio'
                 button='Buy or Rent'
                 rating='Unrated'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/oVITa1-JG8I/movieposter.webp'
                 title='Conor McGregor: Notorious'
                 description='Documentary • 2017 • English audio'
                 button='Buy or Rent'
                 rating='PG'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/aG8vO3QkjBg/movieposter_en.webp'
                 title='The Most Beautiful Boy In The World'
                 description='Documentary • 2022 • English audio'
                 button='Buy or Rent'
                 rating='PG'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/juFHuhR7yi8/movieposter.webp'
                 title='Meeting Gorbachev'
                 description='Documentary • 2019 • English audio'
                 button='Buy or Rent'
                 rating='Unrated'
              />
              <MovieCardRow
                 image='https://i.ytimg.com/vi_webp/r5EAX7mge84/movieposter_en.webp'
                 title='Leaving Neverland Part 1'
                 description='Documentary • 2019 • English audio'
                 button='Buy or Rent'
                 rating='Unrated'
              />
          </div>
     </div>
    </div> 
  );;
};

export default MoviePage;