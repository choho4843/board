import { useState, useEffect } from 'react';
import axios from 'axios';
import './ListBoard.css';
import { Link, Route } from 'react-router-dom'

function BoardPage() {
    const [pageInfo, setPageInfo] = useState({
        allPAgae:0, curlPage:0, startPage:0, endPage:0
    });
    const [boards, setBoards] = useState([]);

    const pageRequest = (e) => {
        serverRequest(e.target.value)
    }

    const serverRequest = (page) => {
        axios.get('http://localhost:8080/boardpage/' +page).
            then((response) => {
                console.log(response.data.pageInfo);
                setPageInfo(response.data.pageInfo);
                setBoards(response.data.boards);
            })
            .catch((error) => {
                console.log(error);
            })
        }

    useEffect(() => {
        axios.get('http://localhost:8080/boardpage').
            then((response) => {
                console.log(response.data.pageInfo);
                setPageInfo(response.data.pageInfo);
                setBoards(response.data.boards);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <>
            <h2> 글 목록 <Link to={'/write'}>게시판 글쓰기</Link></h2>
            <section>
                <table>
                    <tbody>
                        <tr id='tr_top'>
                            <th>번호</th>
                            <th>작성자</th>
                            <th>제목</th>
                        </tr>
                        {
                            boards.map((board) => (
                                <tr key={board.id}>
                                    <td><Link to={"/detail/" + board.id}>{board.id}</Link></td>
                                    <td>{board.writer}</td>
                                    <td>{board.subject}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </section><br/>
            <section id="pageList">
                {/* {
                    pageBtn.map(i=>(
                      <>
                      <button pageBtn key={i} value={i}>{i}</button>&nbsp;&nbsp;
                      </>
                        ))
                } */}
                { (()=> {
                    const array = [];
                    for(let i = pageInfo.startPage; i <= pageInfo.endPage; i ++){
                        array.push(
                            <span key={i}>
                                <button value={i} onClick={pageRequest}>{i}</button>&nbsp;&nbsp;
                                </span>)
                    }
                    return array;
                })()}
            </section>
        </>
    )
}

export default BoardPage;