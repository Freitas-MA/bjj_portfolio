import { motion } from 'framer-motion';
import type { Data } from '../types/data';

interface ScheduleProps {
  data: Data['pages']['schedule'];
}

export default function Schedule({ data }: ScheduleProps) {
  return (
    <div className="min-h-screen py-24">
      <div className="container">
        <motion.h1 
          className="text-5xl text-center mb-16"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          Horários
        </motion.h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="py-4 px-6 text-left">Dia</th>
                  <th className="py-4 px-6 text-left">Horário</th>
                  <th className="py-4 px-6 text-left">Aula</th>
                </tr>
              </thead>
              <tbody>
                {data.classes.map((classItem, index) => (
                  <motion.tr
                    key={classItem.id}
                    className="border-b border-gray-200"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <td className="py-4 px-6">{classItem.day}</td>
                    <td className="py-4 px-6">{classItem.time}</td>
                    <td className="py-4 px-6">{classItem.class}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}