 <span
                key={index}
                onClick={() => setActiveSection(section.key as ServiceKey)}
                className={` text-sm cursor-pointer pb-[5px] relative transition-colors duration-300 
                    font-semibold whitespace-nowrap md:text-base md:font-bold 
                    hover:text-[#56DDA7] hover:after:bg-[#56DDA7] 
                    ${
                      activeSection === section.key
                        ? 'text-[#56DDA7] after:content-[""] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[2px] after:bg-[#56DDA7]'
                        : 'text-gray-500'
                    }`}
              >
                {section.label}
              </span>