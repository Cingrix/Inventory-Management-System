import { useState } from 'react';
import { Input, Button, message, Card, Row, Col, Checkbox, Switch } from 'antd';
import { StockOutlined } from '@ant-design/icons';
import axios from 'axios';
import './login.css';
// import { useNavigate } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [theme, setTheme] = useState('light');
  const [username, setUsername] = useState(localStorage.getItem('rememberedUsername') || '');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(!!localStorage.getItem('rememberedUsername'));
  const [loading, setLoading] = useState(false);
  const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

  const handleLogin = async () => {
    if (!username || !password) {
      message.error('Please enter both username and password');
      return;
    }
    setLoading(true);
    try {
      console.log("🌐 API URL:", apiUrl);
      const res = await axios.post(`${apiUrl}/api/auth/login`, { username, password });
      
      console.log("✅ Login response data:", res.data); // DEBUG
      const { token, role } = res.data;

      if (!token) {
        message.error('❌ Token not found in response');
        return;
      }

      console.log("🔐 Token being saved:", token); // DEBUG
      localStorage.setItem('token', token);
      localStorage.setItem('role', role);
      
      if (rememberMe) {
        localStorage.setItem('rememberedUsername', username);
      } else {
        localStorage.removeItem('rememberedUsername');
      }

      onLogin(role);
      message.success('Logged in successfully');
    } catch (err) {
      message.error('Login failed: ' + (err.response?.data?.message || err.message));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container" style={{
      minHeight: '100vh',
      background: theme === 'dark' ? 'linear-gradient(135deg, #1f1f1f, #2f2f2f)' : 'linear-gradient(135deg, #4fc3f7, #ffffff)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px',
    }}>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <Switch
          checked={theme === 'dark'}
          onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          checkedChildren="Dark Mode"
          unCheckedChildren="Light Mode"
        />
      </div>
      <Card
        title={
          <div style={{ textAlign: 'center' }}>
            <StockOutlined style={{ fontSize: '36px', color: theme === 'dark' ? '#1890ff' : '#096dd9' }} />
            <h2 style={{ margin: '10px 0 0', color: theme === 'dark' ? '#fff' : '#000' }}>StockFlow</h2>
          </div>
        }
        style={{
          width: '100%',
          maxWidth: '400px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          borderRadius: '8px',
          background: theme === 'dark' ? '#2f2f2f' : '#fff',
        }}
      >
        <Row gutter={[0, 16]}>
          <Col span={24}>
            <Input
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              size="large"
              style={{ borderRadius: '4px' }}
            />
          </Col>
          <Col span={24}>
            <Input.Password
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              size="large"
              iconRender={(visible) => (visible ? <span>👁️</span> : <span>👁️‍🗨️</span>)}
              style={{ borderRadius: '4px' }}
            />
          </Col>
          <Col span={24}>
            <Checkbox checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)}>
              Remember Me
            </Checkbox>
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            <Button
              type="primary"
              size="large"
              onClick={handleLogin}
              loading={loading}
              style={{
                width: '100%',
                background: '#1890ff',
                borderColor: '#1890ff',
                borderRadius: '4px',
                transition: 'all 0.3s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#096dd9')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#1890ff')}
            >
              Login
            </Button>
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            <a href="/forgot-password" style={{ color: theme === 'dark' ? '#40a9ff' : '#1890ff' }}>
              Forgot Password?
            </a>
          </Col>
          <Col span={24} style={{ textAlign: 'center' }}>
            <span style={{ color: theme === 'dark' ? '#ccc' : '#666' }}>
              Don't have an account?{' '}
              <a href="/signup" style={{ color: theme === 'dark' ? '#40a9ff' : '#1890ff' }}>
                Sign Up
              </a>
            </span>
          </Col>
          <Col span={24} style={{ textAlign: 'center', color: theme === 'dark' ? '#ccc' : '#666' }}>
            <small>Need help? Contact support@stockflow.com</small>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default Login;
