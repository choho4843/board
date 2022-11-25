import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Update() {
    const [writer, setWriter] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        axios.post(`http://localhost:8080/boarddetail/${id}`)
            .then((response) => {
                const board = response.data;
                setWriter(board.writer);
                setSubject(board.subject);
                setContent(board.content);
            })
            .catch((error) => {

            })
    }, []);

    const subject_change = (e) => {
        setSubject(e.target.value);
    }

    const content_change = (e) => {
        setContent(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        axios.put(`http://localhost:8080/update/${id}`, null,
        {params:{subject:subject, content:content}})

            .then((response) => {
                console.log("통신성공")
                alert(response.data);
                document.location.href = "/";
            })
            .catch((error) => {
                console.log("통신성공")
            })
    }
    return (
        <>

            <section>
                <h2>게시판 글 수정</h2>
                <form>
                    <table>
                        <tr>
                            <td className="td_left">
                                <label for='id'>번호</label>
                            </td>
                            <td className="td_right">
                                <input type='id' name='id' id='id' value={id} />
                            </td>
                        </tr>
                        <tr>
                            <td className="td_left">
                                <label for='writer'>글쓴이</label>
                            </td>
                            <td className="td_right">
                                <input type='text' name='writer' id='writer' value={writer} readOnly />
                            </td>
                        </tr>
                        <tr>
                            <td className="td_left">
                                <label for='subject'>제목</label>
                            </td>
                            <td className="td_right">
                                <input type='title' name='subject' id='subject' value={subject} onChange={subject_change} />
                            </td>
                        </tr>
                        <tr>
                            <td className="td_left">
                                <label for='content'>내용</label>
                            </td>
                            <td className="td_right">
                                <textarea type='text' name='content' id='content' cols='40' rows='15' value={content} onChange={content_change} />
                            </td>
                        </tr>
                    </table>
                    <section id='commandCell'>
                        <button onClick={submit}>저장</button>&nbsp;&nbsp;
                    </section>
                </form>
            </section>
        </>
    )
}
export default Update;