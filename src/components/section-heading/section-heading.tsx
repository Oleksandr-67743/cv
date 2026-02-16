import { memo } from 'react';
import { motion } from 'motion/react';
import BlurText from '@/components/blur-text';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <div className="mb-12 md:mb-16">
      <BlurText text={title} animateBy="letters" className="text-3xl md:text-4xl lg:text-5xl font-bold" delay={30} />
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="mt-4 text-secondary text-lg max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.3 }}
        className="mt-4 h-[2px] w-20 bg-gradient-to-r from-accent-purple to-accent-cyan origin-left"
      />
    </div>
  );
};

export default memo(SectionHeading);
