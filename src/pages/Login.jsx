import { Button, Form, Input } from 'antd';
import Style from "../styles/Login.module.css";
const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const Login =()=>
{
    return(
      <div className={`${Style.main}`}>
      <div className={`${Style.container}`}>
       <p  className={`${Style.title}`}> ONESHIELD GRAND </p>
        <Form
    className={`${Style.form}`}
    name="basic"
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
   
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input 
      className={`${Style.forminput}`}/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Input.Password 
      className={`${Style.forminput}`}/>
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button 
        className={`${Style.formbutton}`} 
        type="primary" 
        htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
  </div>
    );
}

export default Login;