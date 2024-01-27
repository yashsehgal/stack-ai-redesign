'use client';
import { cn } from '@/helpers';
import { BentoCard, Button } from '@/components/ui';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { RefreshCcw, Send } from 'lucide-react';

type AnalyseWebsiteUsableExampleFlowType = 'default' | 'analysing' | 'rendered';

export function AnalyseWebsiteUsableExample() {
  const [flow, setFlow] =
    useState<AnalyseWebsiteUsableExampleFlowType>('default');

  return (
    <BentoCard
      className={cn('h-[300px] w-[360px]')}
      headline="Create assitants from websites"
      description="Scrap websites and train your assitants">
      {flow === 'rendered' ? (
        <AnalyzedAssistantScreen setFlow={setFlow} />
      ) : (
        <div className="h-full flex flex-row items-center justify-center">
          <motion.span
            initial={{
              opacity: 0,
              y: 120,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            whileTap={{
              scale: 0.9,
            }}
            transition={{
              type: 'spring',
              bounce: 0.5,
            }}>
            <Button
              variant="gloss"
              size="lg"
              className={cn(
                'rounded-full shadow-xl',
                flow === 'analysing' && 'animate-pulse',
              )}
              onClick={() => {
                setFlow('analysing');
                setTimeout(() => {
                  setFlow('rendered');
                }, 2000);
              }}>
              {flow === 'default' && 'Analyze stack-ai.com'}
              {flow === 'analysing' && 'Analyzing...'}
            </Button>
          </motion.span>
        </div>
      )}
    </BentoCard>
  );
}

function AnalyzedAssistantScreen({
  setFlow,
}: {
  setFlow: (flow: AnalyseWebsiteUsableExampleFlowType) => void;
}) {
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [isReplied, setIsReplied] = useState<boolean>(false);
  return (
    <div className="h-full items-center justify-center relative">
      <motion.div
        id="assistant-welcome-text-block"
        className={cn(
          'px-6 py-3 text-sm text-white w-[60%] rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-900  shadow-2xl',
        )}
        initial={{
          y: 120,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}>
        {'Hi! Ask me anything about Stack AI'}
      </motion.div>
      {isMessageSent && (
        <motion.div
          id="user-question-text-block"
          className={cn(
            'px-6 py-3 ml-32 mt-4 text-sm text-white w-[60%] rounded-2xl bg-gradient-to-b from-blue-400 to-blue-600 shadow-2xl',
          )}
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}>
          {'What is Stack AI?'}
        </motion.div>
      )}
      {isReplied && (
        <motion.div
          id="assistant-reply-text-block"
          className={cn(
            'px-6 py-3 mt-3 text-sm text-white w-[80%] rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-900  shadow-2xl',
          )}
          initial={{
            y: 120,
            opacity: 0,
          }}
          animate={{
            y: 0,
            opacity: 1,
          }}>
          {
            'Stack AI is the fastest way to build AI applications, automations, workflows.'
          }
        </motion.div>
      )}
      {!isReplied && (
        <motion.div className="w-full bg-white p-2 rounded-full absolute bottom-0 shadow-lg shadow-neutral-200 flex flex-row items-center justify-between border border-neutral-100">
          <span className="dummy-question-wrapper text-sm font-medium text-neutral-500 px-2">
            {!isMessageSent && 'What is Stack AI?'}
            {isMessageSent && (
              <div className="animate-pulse flex flex-row items-center gap-1">
                <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                <div className="w-2 h-2 bg-neutral-400 rounded-full" />
                <div className="w-2 h-2 bg-neutral-400 rounded-full" />
              </div>
            )}
          </span>
          <Button
            className="rounded-full p-2"
            variant="gloss"
            onClick={() => {
              setIsMessageSent(true);
              setTimeout(() => setIsReplied(true), 1500);
            }}>
            <Send className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
      {isReplied && (
        <motion.div>
          <Button
            className="p-3 mt-3 rounded-full absolute right-0 transition hover:brightness-100"
            onClick={() => {
              // reseting flow
              setFlow('default');
              setIsReplied(false);
              setIsMessageSent(false);
            }}>
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
