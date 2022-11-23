import { Component } from "react";

class Writboard extends Component {
render(){
    return(
        <>
        <section>
            <h2>게시판 글 등록</h2>
            <form>
                <table>
                    <tr>
                        <td className="td_left">
                            <label for='board_name'>글쓴이</label>
                        </td>
                        <td className="td_right">
                            <td className="td_right" name='board_name' id='board_name'/>
                        </td>
                    </tr>
                    <tr>
                    <td className="td_left">
                            <label for='board_name'>비밀번호</label>
                        </td>
                        <td className="td_rright">
                            <td className="td_text" name='board_subject' id='board_subject'/>
                        </td>
                        </tr>
                        <tr>
                    <td className="td_left">
                            <label for='board_name'>내용</label>
                        </td>
                        <td className="td_rright">
                            <td className="board_content" name='board_subject' id='board_subject'/>
                        </td>
                        </tr>
                        <tr>
                    <td className="td_left">
                            <label for='board_file'>파일첨부</label>
                        </td>
                        <td className="td_rright">
                            <td className="board_file" name='board_file' id='board_file'/>
                        </td>
                        </tr>
                </table>
                <section id='commandCell'>
                    <button>등록</button>&nbsp;&nbsp;<input type='rest' value='다시쓰기'/>
                </section>
            </form>
        </section>
        </>
    )
}
}
export default Writboard;