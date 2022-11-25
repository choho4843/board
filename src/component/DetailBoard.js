// import { Component } from "react";
// import "./WriteBoard.css"
// import axios from "axios"

// class DetailBoard extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             writer:'',
//             subject:'',
//             content:'',
//             imageurl:''
//         }
//     }
//     componentDidMount = () => {
//         axios.get('http://localhost:8080/boarddetail/1')
//             .then((response) => {
//                 const board = response.data;
//                 this.setState({ writer: board.writer, subject: board.subject, content: board.content, imageUrl: 'http://localhost:8080/img/' + board.filename });
//             })
//             .catch((error) => {

//             })
//         }
//     render() {
//         return (
//             <>
//                 <section>
//                     <h2>게시판 글 등록</h2>
//                     <form>
//                         <table>
//                             <tr>
//                                 <td className="td_left">
//                                     <label for='writer'>글쓴이</label>
//                                 </td>
//                                 <td className="td_right">
//                                     <input type='text' name='writer' id='writer' value={this.state.writer}  />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td className="td_left">
//                                     <label for='subject'>제목</label>
//                                 </td>
//                                 <td className="td_right">
//                                     <input type='title' name='subject' id='subject' value={this.state.subject}  />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td className="td_left">
//                                     <label for='content'>내용</label>
//                                 </td>
//                                 <td className="td_right">
//                                     <textarea type='text' name='content' id='content' cols='40' rows='15' value={this.state.content}  />
//                                 </td>
//                             </tr>
//                             <tr>
//                                 <td className="td_left">
//                                     <label for='file'>이미지파일</label>
//                                 </td>
//                                 <td className="td_right">
//                                     <img src={this.state.imageUrl} alt='' width={"200px"} height={"250px"}/>
//                                 </td>
//                             </tr>
//                         </table>
//                         <section id='commandCell'>
//                             <a href="#">수정</a>&nbsp;&nbsp;
//                             <a href="#">삭제</a>
//                         </section>
//                     </form>
//                 </section>
//             </>
//         )
//     }
// }
import { useState, useEffect } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';

function DetailBoard() {
    const [writer, setWriter] = useState('');
    const [subject, setSubject] = useState('');
    const [content, setContent] = useState('');
    const [imageUrl, setImageurl] = useState('');
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        axios.get(`http://localhost:8080/boarddetail/${id}`)
            .then((response) => {
                const board = response.data;
                setWriter(board.writer);
                setSubject(board.subject);
                setContent(board.content);
                setImageurl('http://localhost:8080/img/' + board.filename);
            })
            .catch((error) => {

            })
    },[]);

    return (
        <>

            <section>
                <h2>상세</h2>
                <form>
                    <table>
                        <tr>
                            <td className="td_left">
                                <label for='writer'>글쓴이</label>
                            </td>
                            <td className="td_right">
                                <input type='text' name='writer' id='writer' value={writer} />
                            </td>
                        </tr>
                        <tr>
                            <td className="td_left">
                                <label for='subject'>제목</label>
                            </td>
                            <td className="td_right">
                                <input type='title' name='subject' id='subject' value={subject} />
                            </td>
                        </tr>
                        <tr>
                            <td className="td_left">
                                <label for='content'>내용</label>
                            </td>
                            <td className="td_right">
                                <textarea type='text' name='content' id='content' cols='40' rows='15' value={content} />
                            </td>
                        </tr>
                        <tr>
                            <td className="td_left">
                                <label for='file'>이미지파일</label>
                            </td>
                            <td className="td_right">
                                <img src={imageUrl} alt='' width={"200px"} height={"250px"} />
                            </td>
                        </tr>
                    </table>
                    <section id='commandCell'>
                        <a href={"/update/"+id}>수정</a>&nbsp;&nbsp;
                        <a href="#">삭제</a>
                    </section>
                </form>
            </section>
        </>
    )
}
export default DetailBoard;