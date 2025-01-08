import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as boards from '../../apis/boards';
import * as files from '../../apis/files';
import BoardUpdateForm from '../../components/board/BoardUpdateForm';

const UpdateContainer = () => {

  const { id } = useParams()
  const navigate = useNavigate()

  // state 선언
  const [board, setBoard] = useState({})
  const [fileList, setFileList] = useState([])
  const [mainFile, setMainFile] = useState()

  // 게시글 데이터 요청
  const getBoard = async () => {
    const response = await boards.select(id)
    const data = await response.data          // data : board + fileList
    setBoard(data.board)
    setFileList(data.fileList)
    
    const no = await data.board.no
    getMainFile(no)   // 메인 파일
  }

  

  // 게시글 수정 요청 이벤트 핸들러
  const onUpdate = async (formData, headers) => {
   try {
    // const response = await boards.update(id, title, writer, content)
    const response = await boards.update(formData, headers)
    const data = await response.data
    console.log(data);

    alert('수정 완료')

    //게시글 목록으로 이동
    navigate('/boards')

    
   } catch (error) {
    console.log(error);
    
   } 
  }

    // 다운로드
    const onDownload = async (id, fileName) => {
      // API 요청
      const response = await files.download(id)
      console.log(response);
  
      // 1. 서버에서 응답 파일데이터를 받은 Blob 변환
      // 2. 브라우저를 통해 a 태그로 등록
      // 3. a태그의 다운로드 기능으로 요청
      const url = window.URL.createObjectURL(new Blob( [response.data] ))
      // <a href="data" download="파일명.png"></a>
      const link = document.createElement('a')    // a태그 생성
      link.href = url
      link.setAttribute('download', fileName)
      document.body.appendChild(link)
      link.click()                  // 다운로드 기능을 가진 a태그 클릭
      document.body.removeChild(link)
      
    }

  // 게시글 삭제 요청 이벤트 핸들러
  const onDelete = async (id) => {
    try {
     const response = await boards.remove(id)
     const data = await response.data
     console.log(data);
 
     alert('삭제 완료')
 
     //게시글 목록으로 이동
     navigate('/boards')
 
     
    } catch (error) {
     console.log(error);
     
    } 
   }

   // 파일 삭제
   const onDeleteFile = async (fileId) => {
     console.log("삭제 1");
    try {
      
      // 파일 삭제 요청
      const fileResponse = await files.remove(fileId)
      console.log(fileResponse.data);

      // 요청 성공 여부 체크

      // 파일 목록 갱신
      const boradResponse = await boards.select(id)
      const data = boradResponse.data
      const fileList = data.fileList
      setFileList(fileList)

      // 메인 파일 요청
      getMainFile(board.no)
      
    } catch (error) {
      console.log("삭제 2");
      console.log(error);
      
    }
   }

   // 파일 선택 삭제
   const onDeleteCheckFiles = async (idList) => {
    const fileIdList = idList.join(",")
    console.log(fileIdList);
    
    try {
      // 파일 선택 삭제 요청
      const response = await files.removeFiles( fileIdList )
      console.log(response.data);

       // 파일 목록 갱신
       const boradResponse = await boards.select(id)
       const data = boradResponse.data
       const fileList = data.fileList
       setFileList(fileList)

       // 메인 파일 요청
       getMainFile(board.no)

    } catch (error) {
      console.log(error);
    }
   }

  // 메인 파일 조회
    const getMainFile = async (no) => {
      const response = await files.fileByType("boards", no, "MAIN")
      const file = await response.data
      setMainFile(file)
    }


  useEffect( () => {
    getBoard()
  }, [])

  return (
    <>
      <BoardUpdateForm board={board}
                       onUpdate={onUpdate} 
                       onDelete={onDelete}
                       fileList={fileList} 
                       onDownload={onDownload}
                       onDeleteFile={onDeleteFile}
                       onDeleteCheckFiles={onDeleteCheckFiles}
                       mFile={mainFile} />
    </>
  )
}

export default UpdateContainer