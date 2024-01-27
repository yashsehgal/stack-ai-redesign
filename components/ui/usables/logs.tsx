import { cn } from '@/helpers';
import { BentoCard } from '@/components/ui';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { AnimatePresence } from 'framer-motion';

export function LogReportsUsableExample() {
  return (
    <BentoCard
      className={cn('h-[300px] w-[600px] max-md:w-[360px]')}
      headline="Get super-powers from other apps"
      description="Collection for apps including Notion, Zapier, etc."
      stretch>
      <div className="w-full h-full flex flex-row items-center justify-center relative">
        <div className="dummy-logs-wrapper absolute w-full h-full flex flex-row items-center justify-center -bottom-16">
          <DummyLogsContainer />
        </div>
      </div>
    </BentoCard>
  );
}

type LogType = {
  date: string;
  status: string;
  input: string;
  latency: string;
};

const LogsData: LogType[] = [
  {
    date: '26, Jan',
    status: 'success',
    input: 'What is Stack AI?',
    latency: '3.2s',
  },
  {
    date: '25, Jan',
    status: 'success',
    input: "What's the time in Europe?",
    latency: '1.4s',
  },
];

function DummyLogsContainer() {
  const [logs, setLogs] = useState(LogsData);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setLogs((prevLogs) => [...getNewLogs(), ...prevLogs]);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getFormattedDate = () => {
    const date = new Date();
    date.setDate(date.getDate());
    const day = date.getDate();
    const month = getMonthName(date.getMonth());
    return `${day}, ${month}`;
  };

  const getMonthName = (month: number) => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    return monthNames[month];
  };

  const getRandomLogInput = () => {
    const logStatements = [
      'What is the progress of the report generation?',
      'How are user credentials being verified?',
      'What steps are involved in the data synchronization process?',
      'Can you provide details on how errors are being handled?',
      'Where is the application establishing the connection to the database?',
    ];
    const randomIndex = Math.floor(Math.random() * logStatements.length);
    return logStatements[randomIndex];
  };

  const getNewLogs = () => {
    const newLogs = [];
    for (let i = 0; i < 4; i++) {
      const formattedDate = getFormattedDate();
      const randomLogInput = getRandomLogInput();
      const newLog = {
        date: formattedDate,
        status: 'success',
        input: randomLogInput,
        latency: `${(Math.random() * 5).toFixed(1)}s`,
      };
      newLogs.push(newLog);
    }
    return newLogs;
  };

  useEffect(() => {
    if (logs.length > 16) {
      setLogs([LogsData[0]]);
    }
  }, [logs]);

  return (
    <>
      <div
        className={cn(
          'bg-white shadow-xl shadow-neutral-200 border border-neutral-200 w-[84%] h-[260px] rounded-lg',
        )}>
        <LogsTableHeader />
        <div className="logs-table-rows-container">
          <AnimatePresence mode="sync">
            {logs.map((log: LogType, index: number) => {
              return <LogEntry key={index} {...log} />;
            })}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}

function LogsTableHeader() {
  return (
    <div className="logs-table-header border-b border-b-neutral-200 py-2 px-4 grid grid-cols-4 gap-6 max-md:grid-cols-3">
      <motion.span
        className="text-sm text-neutral-400"
        initial={{
          opacity: 0,
          y: 6,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}>
        {'Date'}
      </motion.span>
      <motion.span
        className="text-sm text-neutral-400 max-md:hidden"
        initial={{
          opacity: 0,
          y: 6,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}>
        {'Status'}
      </motion.span>
      <motion.span
        className="text-sm text-neutral-400"
        initial={{
          opacity: 0,
          y: 6,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}>
        {'Input'}
      </motion.span>
      <motion.span
        className="text-sm text-neutral-400"
        initial={{
          opacity: 0,
          y: 6,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}>
        {'Latency'}
      </motion.span>
    </div>
  );
}

function LogEntry(log: LogType) {
  return (
    <motion.div
      className={cn(
        'border-b border-b-neutral-200 py-2 px-4 grid grid-cols-4 max-md:grid-cols-3 gap-6 items-center',
      )}
      initial={{
        opacity: 0,
        y: 6,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}>
      <motion.span className="log-date-wrapper text-sm text-neutral-500">
        {log.date}
      </motion.span>
      <motion.span className="log-status-wrapper text-xs w-fit px-2 py-1 rounded-md bg-green-100 text-green-700 border border-green-300 max-md:hidden">
        {log.status}
      </motion.span>
      <motion.span className="log-input-wrapper text-sm text-neutral-500 truncate">
        {log.input}
      </motion.span>
      <motion.span className="log-latency-wrapper text-sm text-neutral-500">
        {log.latency}
      </motion.span>
    </motion.div>
  );
}
