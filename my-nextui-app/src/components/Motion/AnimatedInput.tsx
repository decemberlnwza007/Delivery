import React, { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@nextui-org/react';

interface AnimatedInputProps {
    type?: string;
    label: string;
    value?: string;
    placeholder?: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const AnimatedInput = forwardRef<HTMLInputElement, AnimatedInputProps>(
    ({ type, value, placeholder, onChange }, ref) => {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ marginBottom: '20px', position: 'relative' }}
            >
                <Input
                    fullWidth
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    ref={ref}
                    />
            </motion.div>
        );
    }
);

export default AnimatedInput;
