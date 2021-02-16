/* eslint-disable */
import dotenv from 'dotenv';
import React, { useState, useEffect } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { useTranslate, useRedirect } from 'react-admin';
import PasswordChange from './PasswordChange';
import axios from 'axios';
import { Form, message, Button, Descriptions } from 'antd';
import './Configuration.css';
import 'react-dropzone-uploader/dist/styles.css';
import defaultOptions from '../defaultOptions';
import { useForm } from 'react-hook-form';
import PasswordCheckModal from './PasswordCheckModal';

dotenv.config();

const MyPage = () => {
  const translate = useTranslate();
  const redirect = useRedirect();
  const location = `${process.env.REACT_APP_API_HOST}`;
  const [userInfo, setUserInfo] = useState(null);
  const [modalVisible, setModalVisible] = useState(true);
  const [errorPassCheck, setErrorPassCheck] = useState(false);

  /* 
  'onBlur', 'onChange' 모드일 때 validation 체크 submit 전에 해줌 mode 관련 참고 https://react-hook-form.com/api#useForm
  */
  const { register, handleSubmit, errors } = useForm({ mode: 'onBlur' });

  const getUserInfo = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: `${location}/api/v1/users/self`,
        credentials: 'include',
        withCredentials: true,
      });
      setUserInfo(response.data);
    } catch (e) {
      message.error(`${translate('alert.no_user_info')} error : ${e}`);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []); // onSubmit 모드일 때 errors가 필요함

  const onUserInfoChange = async (data) => {
    fetch(`${location}/api/v1/users/${userInfo?.id}`, {
      method: 'PATCH',
      credentials: 'include',
      ...defaultOptions,
      withCredentials: true,
      body: JSON.stringify(data),
    })
      .then(() => {
        message.success(`${translate('alert.info_edit')}`, 2);
        setTimeout(() => {
          redirect('/');
        }, 500);
      })
      .catch((error) => {
        message.error(`${error}`, 5);
      });
  };

  return (
    <>
      {!modalVisible && (
        <div class="bo_mypage">
          <h2>{translate('pos.configuration')}</h2>
          <Card>
            <CardContent>
              <h3>{translate('pos.myinfo')}</h3>
              <Descriptions column={2}>
                <Descriptions.Item
                  label={translate('pos.username')}
                  className="confDescription"
                >
                  {userInfo?.username}
                </Descriptions.Item>
                <Descriptions.Item
                  label={translate('pos.group')}
                  className="confDescription"
                >
                  {userInfo?.groups[0]}
                </Descriptions.Item>
              </Descriptions>
              <Descriptions className="psBox">
                <Descriptions.Item
                  label={translate('pos.password')}
                  className="confDescription"
                >
                  <PasswordChange />
                </Descriptions.Item>
              </Descriptions>
              <Form
                labelCol={{ span: 6 }}
                wrapperCol={{ span: 7 }}
                onSubmit={handleSubmit(onUserInfoChange)}
              >
                <Form.Item label={translate('pos.email')} className="emailBox">
                  <input
                    name="email"
                    defaultValue={userInfo?.email}
                    style={{ marginLeft: '15px' }}
                    placeholder="이메일 입력 '@' 포함"
                    ref={register({
                      required: true,
                      pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                    })}
                  />
                  {/* errors 중 email을 확인 아래도 같은 방식 */}
                  {errors.email && (
                    <div className="input-error">
                      {translate('error.email')}
                    </div>
                  )}
                </Form.Item>
                <Form.Item label={translate('pos.phone')} className="phoneBox">
                  <input
                    name="phone_number"
                    defaultValue={userInfo?.phone_number}
                    style={{ marginLeft: '15px' }}
                    placeholder="전화번호 입력 '-' 포함"
                    // ref={register}
                    ref={register({ pattern: /^[0-9]{3}-[0-9]{4}-[0-9]{4}$/ })}
                  />
                  {errors.phone_number && (
                    <div className="input-error">
                      {translate('error.phone_number')}
                    </div>
                  )}
                </Form.Item>
                <Form.Item label={translate('pos.last_name')} className="lnBox">
                  <input
                    name="last_name"
                    defaultValue={userInfo?.last_name}
                    style={{ marginLeft: '15px' }}
                    // ref={register}
                    ref={register({ pattern: /^[가-힣|a-z|A-Z|]{0,30}$/ })}
                  />
                  {errors.last_name && (
                    <div className="input-error">
                      {translate('error.last_name')}
                    </div>
                  )}
                </Form.Item>
                <Form.Item
                  label={translate('pos.first_name')}
                  className="fnBox"
                >
                  <input
                    name="first_name"
                    defaultValue={userInfo?.first_name}
                    style={{ marginLeft: '15px' }}
                    // ref={register}
                    ref={register({ pattern: /^[가-힣|a-z|A-Z|]{0,30}$/ })}
                  />
                  {errors.first_name && (
                    <div className="input-error">
                      {translate('error.first_name')}
                    </div>
                  )}
                </Form.Item>
                <Form.Item
                  label={translate('pos.date_of_birth')}
                  className="fnBox"
                >
                  <input
                    name="dateofbirth"
                    defaultValue={userInfo?.dateofbirth}
                    placeholder="YYYY-MM-DD"
                    style={{ marginLeft: '15px' }}
                    placeholder="생년월일 8자리 '-' 포함"
                    // ref={register}
                    ref={register({
                      pattern: /^[0-9]{4}-[0-1]{1}[0-9]{1}-[0-3]{1}[0-9]{1}$/,
                    })}
                  />
                  {errors.dateofbirth && (
                    <div className="input-error">
                      {translate('error.dateofbirth')}
                    </div>
                  )}
                </Form.Item>
                <Form.Item label={translate('pos.gender')} className="gdBox">
                  <label className="radio-label">
                    <input
                      name="gender"
                      type="radio"
                      value="male"
                      ref={register}
                      defaultChecked={userInfo?.gender === 'male' ? true : null}
                    />
                    <span className="radio-span">
                      {translate('signUp.male')}
                    </span>
                  </label>
                  <label className="radio-label">
                    <input
                      name="gender"
                      type="radio"
                      value="female"
                      ref={register}
                      defaultChecked={
                        userInfo?.gender === 'female' ? true : null
                      }
                    />
                    <span className="radio-span">
                      {translate('signUp.female')}
                    </span>
                  </label>
                </Form.Item>
                <Form.Item
                  wrapperCol={{ span: 12, offset: 6 }}
                  className="btnBox"
                >
                  <Button
                    className="submitButton"
                    type="primary"
                    htmlType="submit"
                  >
                    {translate('pos.edit')}
                  </Button>
                </Form.Item>
              </Form>
            </CardContent>
          </Card>
        </div>
      )}
      <PasswordCheckModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        setErrorPassCheck={setErrorPassCheck}
        errorPassCheck={errorPassCheck}
        userInfo={userInfo}
      />
    </>
  );
};

export default MyPage;
