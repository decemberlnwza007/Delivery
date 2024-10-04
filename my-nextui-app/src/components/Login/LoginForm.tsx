import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import AnimatedInput from '../Motion/AnimatedInput';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

import '@/styles/main.css';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login Successfully');
    } catch (error) {
      console.error('Error logging in: ', error);
    }
  };

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      console.log('Google Login Successful');
      navigate('/Home')
    } catch (error) {
      console.error('Error logging in with Google: ', error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5 }}
      style={{
        maxWidth: '500px',
        width: '100%',
        padding: '40px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        backgroundColor: '#fff',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>เข้าสู่ระบบ</h2>
      <form onSubmit={handleSubmit}>
        <AnimatedInput
          label='อีเมลล์'
          type="email"
          placeholder='อีเมลล์'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <AnimatedInput
          label='รหัสผ่าน'
          type="password"
          value={password}
          placeholder='รหัสผ่าน'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button type="submit" color='primary' fullWidth>
          เข้าสู่ระบบ
        </Button>
        <br />
        <br />
        <Button onClick={handleGoogleSignIn} color="success" fullWidth>
          ล็อกอินด้วย Google
        </Button>
        <br />
        <br />
        <p>ยังไม่มีบัญชีใช่หรือไม่ ? <b><Link to={"/register"} style={{ color: '#006FEE'}}>สมัครเลย</Link></b></p>
      </form>
    </motion.div>
  );
};

export default LoginForm;
