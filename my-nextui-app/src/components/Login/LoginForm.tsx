import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import AnimatedInput from '../Motion/AnimatedInput';
import { Link } from 'react-router-dom';

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ email, password });
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
        margin: '0 auto',
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
        <p>ยังไม่มีบัญชีใช่หรือไม่ ? <b><Link to={"/register"} style={{ color: '#006FEE'}}>สมัครเลย</Link></b></p>
      </form>
    </motion.div>
  );
};

export default LoginForm;
