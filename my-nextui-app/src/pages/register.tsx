import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@nextui-org/react';
import '@/styles/swiper.css'
import { motion } from 'framer-motion';
import Loading from '@/components/Loading';

const RegisterForm: React.FC = () => {
    const { register, handleSubmit } = useForm();
    const [step, setStep] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    if (loading) {
        return <Loading />;
    }

    const onSubmit = (data: any) => {
        console.log(data);
    };

    const nextStep = () => setStep((prev) => prev + 1);
    const prevStep = () => setStep((prev) => prev - 1);

    return (
        <div className="swiper-container">
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
                <h2 className="text-2xl font-bold mb-4 text-center">ลงทะเบียน</h2>
                <form onSubmit={handleSubmit(step === 2 ? onSubmit : nextStep)} className="space-y-4">
                    {step === 0 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ชื่อ</label>
                                <input
                                    type="text"
                                    placeholder="ชื่อ"
                                    {...register('name', { required: true })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">อีเมลล์</label>
                                <input
                                    type="email"
                                    placeholder="อีเมล์"
                                    {...register('email', { required: true })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <Button type="submit" color="primary" fullWidth>ถัดไป</Button>
                        </>
                    )}

                    {step === 1 && (
                        <>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ชื่อผู้ใช้</label>
                                <input
                                    type="text"
                                    placeholder="ชื่อผู้ใช้"
                                    {...register('username', { required: true })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">รหัสผ่าน</label>
                                <input
                                    type="password"
                                    placeholder="รหัสผ่าน"
                                    {...register('password', { required: true })}
                                    className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
                                />
                            </div>
                            <Button type="submit" color="primary" fullWidth>ถัดไป</Button>
                            <button type="button" onClick={prevStep} className="text-blue-600 hover:underline">กลับ</button>
                        </>
                    )}

                    {step === 2 && (
                        <div>
                            <h2 className="text-lg font-semibold mb-2">ยืนยันข้อมูล</h2>
                            <p>โปรดตรวจสอบข้อมูลของคุณก่อนส่ง</p>
                            <Button onClick={handleSubmit(onSubmit)} color="primary" fullWidth>ส่งข้อมูล</Button>
                            <button type="button" onClick={prevStep} className="text-blue-600 hover:underline">กลับ</button>
                        </div>
                    )}
                </form>

            </motion.div>
        </div>

    );
};

export default RegisterForm;
