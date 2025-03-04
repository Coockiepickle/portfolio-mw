import { useEffect, useState } from 'react';
import { Shield } from 'lucide-react';
import { cn } from '@/lib/utils';
import SkillCategory from './skills/SkillCategory';
import { getSkillCategories } from './skills/skillsData.tsx';
import useSkillAnimation from './skills/useSkillAnimation';

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);
  const skillCategories = getSkillCategories();
  const { 
    animationComplete, 
    handleCategoryMouseEnter, 
    handleCategoryMouseLeave, 
    getSkillLevel 
  } = useSkillAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById('skills');
      if (element) {
        const position = element.getBoundingClientRect();
        if (position.top < window.innerHeight * 0.75) {
          setIsVisible(true);
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="relative py-24">
      <div className="absolute inset-0 mw-grid-pattern opacity-30"></div>
      
      <div className="mw-container relative z-10">
        <div className={cn("text-center max-w-3xl mx-auto mb-16 transition-all duration-700 transform", isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8")}>
          <div className="flex flex-col items-center">
            <span className="mw-badge mb-4">
              <Shield className="w-3 h-3 mr-1" />
              CAPABILITIES
            </span>
            <h2 className="mw-section-title text-white">Skills Loadout</h2>
          </div>
          <p className="mt-4">
            My arsenal of skills, honed through years of personal, professional development
            and problem-solving.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIndex) => (
            <SkillCategory 
              key={catIndex}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              visible={isVisible}
              index={catIndex}
              animationComplete={animationComplete}
              onMouseEnter={() => handleCategoryMouseEnter(catIndex, category.skills)}
              onMouseLeave={handleCategoryMouseLeave}
              getSkillLevel={getSkillLevel}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
