import { motion } from 'framer-motion';
import type { Data } from '../types/data';

interface PrivacyPolicyProps {
  data: Data['pages']['privacyPolicy'];
}

export default function PrivacyPolicy({ data }: PrivacyPolicyProps) {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h1 className="text-5xl text-center mb-16">Política de Privacidade</h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <p className="text-gray-600 leading-relaxed">{data.content}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}