import './FirstSection.scss';
import img1 from '../../../assets/imgs/img1.png';
import img2 from '../../../assets/imgs/img2.png';
import img3 from '../../../assets/imgs/img3.png';
export default function FirstSection(props) {
    const moreInfoStyle = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTUwNi4xMzQsMjQxLjg0M2MtMC4wMDYtMC4wMDYtMC4wMTEtMC4wMTMtMC4wMTgtMC4wMTlsLTEwNC41MDQtMTA0Yy03LjgyOS03Ljc5MS0yMC40OTItNy43NjItMjguMjg1LDAuMDY4ICAgIGMtNy43OTIsNy44MjktNy43NjIsMjAuNDkyLDAuMDY3LDI4LjI4NEw0NDMuNTU4LDIzNkgyMGMtMTEuMDQ2LDAtMjAsOC45NTQtMjAsMjBjMCwxMS4wNDYsOC45NTQsMjAsMjAsMjBoNDIzLjU1NyAgICBsLTcwLjE2Miw2OS44MjRjLTcuODI5LDcuNzkyLTcuODU5LDIwLjQ1NS0wLjA2NywyOC4yODRjNy43OTMsNy44MzEsMjAuNDU3LDcuODU4LDI4LjI4NSwwLjA2OGwxMDQuNTA0LTEwNCAgICBjMC4wMDYtMC4wMDYsMC4wMTEtMC4wMTMsMC4wMTgtMC4wMTlDNTEzLjk2OCwyNjIuMzM5LDUxMy45NDMsMjQ5LjYzNSw1MDYuMTM0LDI0MS44NDN6IiBmaWxsPSIjZTRjMDAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg==";
    return (
        <div className='container' >
            <div className='one' id='news-1'>
                <div className='first'>
                    <div className='title1'>
                        LO MÁS RECIENTE DE
                    </div>
                    <div className='title2'>
                        NOTICIAS &amp;
                    </div>
                    <div className='title3'>
                        <spam className='span1'>EVENTOS </spam><spam className='span2'> de</spam>
                    </div>
                    <div className='title4'>
                        Dr. Tesis
                    </div>
                </div>
                <div className='second'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut<br />
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam<br />
                    corper suscipit lobor tis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit <br />
                    in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et <br />
                    iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi<br />
                    laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullam<br />
                    corper suscipit lobor tis nisl ut aliquip ex ea commodo consequat.<br />
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut <br />
                </div>
            </div>
            <div className='two' id='news-2'>
                <div className='title'>
                    Recursos para medios de comunicación
                </div>
                <div className='tables-container'>
                    <div className='table1'>
                        <img src={img1}></img>
                        <div className='content1-container'>
                            <div className='content1'>
                                Fjtrdjryk8ik<br />
                                Betjtkiyltygz<br />
                                Fgshtrifdzhjtnyc<br />
                                Rgegerhjsjvave<br />
                                Vnhsethrayd<br />
                            </div>
                        </div>
                        <div className='information-one'>
                            <a href='' className='information-link'>
                                Más información
                            </a>
                            <img src={moreInfoStyle} />
                        </div>
                    </div>
                    <div className='table2'>
                        <img src={img2}></img>
                        <div className='content2-container'>
                            <div className='content2'>
                                Fjtrdjryk8ik<br />
                                Betjtkiyltygz<br />
                                Fgshtrifdzhjtnyc<br />
                            </div>
                        </div>
                        <div className='information-two'>
                            <a href='' className='information-link'>
                                Más información
                            </a>
                            <img src={moreInfoStyle} />
                        </div>
                    </div>
                    <div className='table3'>
                        <img src={img3}></img>
                        <div className='content3-container'>
                            <div className='content3'>
                                Fjtrdjryk8ik<br />
                                Betjtkiyltygz<br />
                                Fgshtrifdzhjtnyc<br />
                                Rgegerhjsjvave<br />
                                Vnhsethrayd<br />
                            </div>
                        </div>
                        <div className='information-three'>
                            <a href='' className='information-link'>
                                Más información
                            </a>
                            <img src={moreInfoStyle} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}