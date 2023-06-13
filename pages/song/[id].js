import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

export default function Songlyric({ data, songs }) {
    const famoussongs = songs.filter(song => song.knowenby === "famous")
    return (
        <div className='singlesong'>
            <Head>
                <title>{data.album}</title>
                <meta name="description" content={`The music is composed by ${data.music} and the song is performed by ${data.singers}.`} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="keywords" content={`${data.keywords}`} />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="singmainwrap">
                <div className="titledivwrap">
                    <div className="singleimg"><img className='singleidimg' src={data.img} alt={data.title} /></div>
                    <div className="singlehead"><h2>
                        <div className="sontlhd">{data.title} Song Lyrics - {data.movie} Movie</div>
                        <div className="songtlcoms">The music is composed by {data.music} and the song is performed by {data.singers}.</div>
                    </h2></div>
                </div>
                <h4 className="credits">{data.title} Song Lyrics Credit:</h4>
                <table className='credittable'>
                    <tbody>
                        <tr>
                            <td>Album Song Lyrics:</td>
                            <td>{data.album}</td>
                        </tr>
                        <tr>
                            <td>Director:</td>
                            <td>{data.director}</td>
                        </tr>
                        <tr>
                            <td>Producer:</td>
                            <td>{data.producer}</td>
                        </tr>
                        <tr>
                            <td>Lyricist:</td>
                            <td>{data.lyricist}</td>
                        </tr>
                        <tr>
                            <td>Music:</td>
                            <td>{data.music}</td>
                        </tr>
                        <tr>
                            <td>Singers:</td>
                            <td>{data.singers}</td>
                        </tr>
                        <tr>
                            <td>Stars Cast:</td>
                            <td>{data.starcast}</td>
                        </tr>
                        <tr>
                            <td>Music Label:</td>
                            <td>{data.musiclabel}</td>
                        </tr>
                    </tbody>
                </table>
                <div className="paras">
                    <h2 className="sesontl">{data.title} Song Lyrics:</h2>
                    <div className="para1">
                        <div className="line1">{data.para1[1]}</div>
                        <div className="line2">{data.para1[2]}</div>
                        <div className="line3">{data.para1[3]}</div>
                        <div className="line4">{data.para1[4]}</div>
                        <div className="line5">{data.para1[5]}</div>
                        <div className="line6">{data.para1[6]}</div>
                        <div className="line7">{data.para1[7]}</div>
                        <div className="line8">{data.para1[8]}</div>
                        <div className="line9">{data.para1[9]}</div>
                        <div className="line10">{data.para1[10]}</div>
                    </div>
                    <div className="para2">
                        <div className="line1">{data.para2[1]}</div>
                        <div className="line2">{data.para2[2]}</div>
                        <div className="line3">{data.para2[3]}</div>
                        <div className="line4">{data.para2[4]}</div>
                        <div className="line5">{data.para2[5]}</div>
                        <div className="line6">{data.para2[6]}</div>
                        <div className="line7">{data.para2[7]}</div>
                        <div className="line8">{data.para2[8]}</div>
                        <div className="line9">{data.para2[9]}</div>
                        <div className="line10">{data.para2[10]}</div>
                    </div>
                    <div className="para3">
                        <div className="line1">{data.para3[1]}</div>
                        <div className="line2">{data.para3[2]}</div>
                        <div className="line3">{data.para3[3]}</div>
                        <div className="line4">{data.para3[4]}</div>
                        <div className="line5">{data.para3[5]}</div>
                        <div className="line6">{data.para3[6]}</div>
                        <div className="line7">{data.para3[7]}</div>
                        <div className="line8">{data.para3[8]}</div>
                        <div className="line9">{data.para3[9]}</div>
                        <div className="line10">{data.para3[10]}</div>
                    </div>
                    <div className="para4">
                        <div className="line1">{data.para4[1]}</div>
                        <div className="line2">{data.para4[2]}</div>
                        <div className="line3">{data.para4[3]}</div>
                        <div className="line4">{data.para4[4]}</div>
                        <div className="line5">{data.para4[5]}</div>
                        <div className="line6">{data.para4[6]}</div>
                        <div className="line7">{data.para4[7]}</div>
                        <div className="line8">{data.para4[8]}</div>
                        <div className="line9">{data.para4[9]}</div>
                        <div className="line10">{data.para4[10]}</div>
                    </div>
                    <div className="para5">
                        <div className="line1">{data.para5[1]}</div>
                        <div className="line2">{data.para5[2]}</div>
                        <div className="line3">{data.para5[3]}</div>
                        <div className="line4">{data.para5[4]}</div>
                        <div className="line5">{data.para5[5]}</div>
                        <div className="line6">{data.para5[6]}</div>
                        <div className="line7">{data.para5[7]}</div>
                        <div className="line8">{data.para5[8]}</div>
                        <div className="line9">{data.para5[9]}</div>
                        <div className="line10">{data.para5[10]}</div>
                    </div>
                </div>
            </div>
            <div className="singsongidpg">
                <div className="singsidewrap">
                    <div className="latestdiv">
                        <h2 className="homeheads latesthead">Famous Songs</h2>
                        <div className="songs">{famoussongs.map(song => {
                            return (
                                <Link key={song.id} className='songlinks' href={`https://lyricsmama.netlify.app/song/${song.title}`}>
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
                        <div className="songs">{songs.map(song => {
                            return (
                                <Link key={song.id} className='songlinks' href={`https://lyricsmama.netlify.app/song/${song.title}`}>
                                    <div className="songtitle">
                                        <div className="songimage"><img className='songimg' src={song.img} alt={song.title} /></div>
                                        <div className="songtitle">{song.title} Song Lyrics - {song.movie} Movie</div>
                                    </div>
                                </Link>
                            )
                        })}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export async function getStaticPaths() {
    const { allsongs } = await import('/data/data.json');
    const allpaths = allsongs.map((ev) => {
        return {
            params: {
                id: ev.title.toString()
            }
        }
    });
    return {
        paths: allpaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { allsongs } = await import('/data/data.json');
    const id = context.params.id;
    const single = allsongs.find(si => si.title === id);
    return {
        props: {
            data: single,
            songs: allsongs
        }
    };
}
