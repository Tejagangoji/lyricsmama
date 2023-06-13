import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ allsongs }) {
  const famoussongs = allsongs.filter(song => song.knowenby === "famous");
  return (
    <>
      <Head>
        <title>LyRiCs MaMa</title>
        <meta name="description" content="LyRiCs MaMa offers a vast collection of lyrics for music lovers to search and sing along with. It's a valuable resource for accurate and up-to-date song lyrics from various movies and categories." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="song lyrics, lyrics database, music lyrics, song texts, song words, lyric search, lyrics by artist, lyrics by song title, find song lyrics, sing along lyrics, popular songs, search a song" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="homemain">
          <div className="homewraper">
            <div className="latestdiv">
              <h2 className="homeheads latesthead">Famous Songs</h2>
              <div className="songs">{famoussongs.map(song => {
                return (
                  <Link key={song.id} className='songlinks' href={`http://localhost:3000/song/${song.title}`}>
                    <div className="songtitle">
                      <div className="songimage"><img className='songimg' src={song.img} alt={song.title} /></div>
                      <div className="songtitle">{song.title} Song Lyrics - {song.movie} Movie</div>
                    </div>
                  </Link>
                )
              })}
              </div>
            </div>
            <div className="famousdiv">
              <h2 className="homeheads famoushead">Latest Songs</h2>
              <div className="songs">{allsongs.map(song => {
                return (
                  <Link key={song.id} className='songlinks' href={`http://localhost:3000/song/${song.title}`}>
                    <div className="songtitle">
                      <div className="songimage"><img className='songimg' src={song.img} alt={song.title} /></div>
                      <div className="songtitle">{song.title} Song Lyrics - {song.movie} Movie</div>
                    </div>
                  </Link>
                )
              })}</div>
            </div>
          </div>
          <div className="adsection"></div>
        </div>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const { allsongs } = await import('/data/data.json');
  return {
    props: {
      allsongs
    },
  };
}
