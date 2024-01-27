'use client';
import { useState } from 'react';
import { BentoCard, Button } from '@/components/ui';
import { cn } from '@/helpers';
import { AnimatePresence, motion } from 'framer-motion';
import { RefreshCcw, Send } from 'lucide-react';

type AnalyseReportsUsableExampleFlowType = 'default' | 'analysing' | 'rendered';

export function AnalyseReportsUsableExample() {
  const [flow, setFlow] =
    useState<AnalyseReportsUsableExampleFlowType>('default');
  const [isFileSelected, setIsFileSelected] = useState<boolean>(false);
  const [buttonState, setButtonState] = useState<
    'unclicked' | 'clicked' | 'loading'
  >('unclicked');

  return (
    <BentoCard
      className={cn('h-[300px] w-[360px]')}
      headline="Automations for comparing reports"
      description="Effortless report analysis at your fingertips.">
      {flow === 'default' && (
        <div className="h-full flex flex-row items-center justify-center select-none">
          <motion.span
            className="w-full flex flex-col items-start gap-2"
            initial={{
              opacity: 0,
              y: 120,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              type: 'spring',
              bounce: 0.5,
            }}>
            {buttonState !== 'loading' && (
              <div className="files-wrapper flex flex-row items-center justify-start gap-2">
                <div className="dummy-file file-one text-xs px-3 py-1.5 rounded-full bg-white border">
                  {'📊 revenue_jan.pdf'}
                </div>
                {!isFileSelected && (
                  <Button
                    className="text-xs px-2 py-1 rounded-md font-medium transition-all"
                    onClick={() => setIsFileSelected(true)}>
                    {'+ add file'}
                  </Button>
                )}
                {isFileSelected && (
                  <motion.div
                    initial={{
                      opacity: 0,
                      x: 12,
                    }}
                    animate={{
                      opacity: 1,
                      x: -2,
                    }}
                    transition={{
                      type: 'spring',
                      bounce: 0.5,
                    }}
                    className="dummy-file file-two text-xs px-3 py-1.5 rounded-full bg-white border">
                    {'🧾 revenue_feb.pdf'}
                  </motion.div>
                )}
              </div>
            )}
            <div
              className={cn(
                'flex flex-col items-end w-full gap-2',
                buttonState === 'loading' && 'items-center w-full h-full',
              )}>
              {buttonState !== 'loading' && (
                <div className="report-analysis-input-component w-full bg-white p-3 rounded-full shadow-xl shadow-neutral-100 border border-neutral-200">
                  <p className="dummy-input-text text-sm text-neutral-500">
                    What is the revenue comparisions by month?
                  </p>
                </div>
              )}
              {isFileSelected && (
                <AnimatePresence>
                  <motion.div
                    animate={{
                      scale: buttonState === 'loading' ? 2 : 1,
                    }}>
                    <Button
                      className={cn(
                        'rounded-full',
                        buttonState !== 'unclicked' && 'p-3',
                      )}
                      variant="gloss"
                      onClick={() => {
                        if (buttonState !== 'loading') {
                          setButtonState('clicked');
                          setTimeout(() => {
                            setButtonState('loading');
                            setTimeout(() => setFlow('rendered'), 1000);
                          }, 1600);
                        }
                      }}>
                      {buttonState === 'unclicked' ? (
                        'Ask AI'
                      ) : (
                        <RefreshCcw className="w-5 h-5 animate-spin" />
                      )}
                    </Button>
                  </motion.div>
                </AnimatePresence>
              )}
            </div>
          </motion.span>
        </div>
      )}
      {flow === 'rendered' && (
        <AnalyzedAssistantScreen
          setFlow={setFlow}
          setButtonState={setButtonState}
          setIsFileSelected={setIsFileSelected}
        />
      )}
    </BentoCard>
  );
}

function AnalyzedAssistantScreen({
  setFlow,
  setButtonState,
  setIsFileSelected,
}: {
  setFlow: (flow: AnalyseReportsUsableExampleFlowType) => void;
  setButtonState: (state: 'unclicked' | 'clicked' | 'loading') => void;
  setIsFileSelected: (isSelected: boolean) => void;
}) {
  const [isMessageSent, setIsMessageSent] = useState<boolean>(false);
  const [isReplied, setIsReplied] = useState<boolean>(false);
  return (
    <div className="h-full items-center justify-center relative">
      <motion.div
        id="assistant-revenue-comparison-text-block"
        className={cn(
          'px-6 py-3 text-sm text-white w-[80%] rounded-2xl bg-gradient-to-b from-neutral-700 to-neutral-900 shadow-2xl',
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
          "Total revenue in Jan & Feb is $25,300. Feb's revenue is higher than Jan by $1,200."
        }
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
          {'Thanks, this is really helpful!'}
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
          {'Always happy to help ^^'}
        </motion.div>
      )}
      {!isReplied && (
        <motion.div className="w-full bg-white p-2 rounded-full absolute bottom-0 shadow-lg shadow-neutral-200 flex flex-row items-center justify-between border border-neutral-100">
          <span className="dummy-question-wrapper text-sm font-medium text-neutral-500 px-2">
            {!isMessageSent && 'Thanks, this is really helpful!'}
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
            className="p-3 mt-3 rounded-full absolute right-0 transition hover:brightness-100 z-20"
            onClick={() => {
              // reseting flow
              setFlow('default');
              setIsReplied(false);
              setIsMessageSent(false);
              setButtonState('unclicked');
              setIsFileSelected(false);
            }}>
            <RefreshCcw className="h-4 w-4" />
          </Button>
        </motion.div>
      )}
    </div>
  );
}
