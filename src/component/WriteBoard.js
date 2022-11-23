import { Component } from "react";
import "./WriteBoard.css"

class WriteBoard extends Component {
    constructor(props){
        super(props);
        this.state = {
            writer:'',
            password:'',
            subject:'',
            content:'',
            file:'',
            filename:''
        }
    }
    submit = (e) =>{
        
    }

    render() {
        return (
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
                                    <input type='text' name='board_name' id='board_name' />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_left">
                                    <label for='board_pass'>비밀번호</label>
                                </td>
                                <td className="td_right">
                                    <input type='password' name='board_pass' id='board_pass' />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_left">
                                    <label for='board_title'>제목</label>
                                </td>
                                <td className="td_right">
                                    <input type='title' name='board_subject' id='board_subject' />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_left">
                                    <label for='board_content'>내용</label>
                                </td>
                                <td className="td_right">
                                    <textarea type='text' name='board_content' id='board_content' cols='40' rows='15' />
                                </td>
                            </tr>
                            <tr>
                                <td className="td_left">
                                    <label for='board_file'>파일첨부</label>
                                </td>
                                <td className="td_right">
                                    <input type='file' name='board_file' id='board_file' />
                                </td>
                            </tr>
                        </table>
                        <section id='commandCell'>
                            <button>등록</button>&nbsp;&nbsp;
                            <input type='reset' value='다시쓰기' />
                        </section>
                    </form>
                </section>
            </>
        )
    }
}
export default WriteBoard;