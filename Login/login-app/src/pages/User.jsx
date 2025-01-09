import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as Swal from '../apis/alert'
import * as auth from '../apis/auth'
import api from '../apis/api'
import Header from '../components/Header/Header'
import UserForm from '../components/User/UserForm'
import { LoginContext } from '../contexts/LoginContextProvider'
import Cookies from 'js-cookie'

const User = () => {

  // context
  const { isLoading, isLogin, roles, logout, userInfo } = useContext(LoginContext)

  const navigate = useNavigate()


  // // 쿠키에서 JWT 가져오기
  // const jwt = Cookies.get("jwt")

  // // JWT 가 쿠키에 있을 떄
  // const authorization = `Bearer ${jwt}`

  // // JWT 를 Authorization 헤더에 등록
  // api.defaults.headers.common.Authorization = authorization

  console.log(`api header : ${api.defaults.headers.common.Authorization}`)

  // 회원 정보 수정
  const updateUser = async (form) => {
    let response
    let data
    try {
      response = await auth.update(form)
    } catch (error) {
      console.error(error);
      console.error(`회원정보 수정 중 에러가 발생하였습니다.`);
      return
    }

    data = response.data
    const status = response.status
    console.log(`data : ${data}`);
    console.log(`status : ${status}`);

    if (status == 200) {
      console.log(`회원정보 수정 성공!`);
      Swal.alert("회원정보 수정 성공", "로그아웃 후, 다시 로그인해주세요.", 'success',
        // 로그아웃 처리
        () => { logout(true) }
      )
    } else {
      console.log(`회원정보 수정 실패!`);
      Swal.alert("회원정보 수정 실패", "회원정보 수정에 실패하였습니다.", 'error')
    }


  }

  // 회원 탈퇴
  const deleteUser = async (username) => {
    console.log(username);

    let response
    let data
    try {
      response = await auth.remove(username)
    } catch (error) {
      console.error(error);
      console.error(`회원 탈퇴 처리 중 에러가 발생하였습니다.`);
    }

    data = response.data
    const status = response.status

    if (status == 200) {
      Swal.alert("회원탈퇴 성공", "그동안 감사했습니다.", "success",
        () => logout(true)
      )
    } else {
      Swal.alert("회원탈퇴 실패", "그동안 감사할뻔했습니다.", "error")
    }
  }

  useEffect(() => {
    // 로딩중...
    if (isLoading) return

    // 사용자 정보가 로딩완료 되었을 때만, 로그인 여부 체크
    if (!isLogin || !roles.isUser) {
      navigate("/login")
    }
  }, [isLoading])

  return (
    <>
      <Header />
      <div className="container">
        <UserForm userInfo={userInfo} updateUser={updateUser} deleteUser={deleteUser} />
      </div>
    </>
  )
}

export default User