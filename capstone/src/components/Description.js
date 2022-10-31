function Description ({name}) {
    if (name === 'perseverance') {
        return (
            <p>
                Perseverance, nicknamed Percy, is a car-sized Mars rover designed to explore the Jezero crater on Mars as part of NASA's Mars 2020 mission.
                It was manufactured by the Jet Propulsion Laboratory and launched on 30 July 2020, at 11:50 UTC.
                Confirmation that the rover successfully landed on Mars was received on 18 February 2021, at 20:55 UTC.
                It carries seven primary payload instruments, nineteen cameras, and two microphones.
                The rover's goals include identifying ancient Martian environments capable of supporting life, seeking out evidence of former microbial life existing in those environments, collecting rock and soil samples to store on the Martian surface, and testing oxygen production from the Martian atmosphere to prepare for future crewed missions.
            </p>
        )
    }
    if (name === 'opportunity') {
        return (
            <p>
                Opportunity, also known as MER-B (Mars Exploration Rover – B) or MER-1, is a robotic rover that was active on Mars from 2004 until 2018.
                Opportunity was operational on Mars for 5111 sols (14 years, 138 days). 
                Launched on July 7, 2003, as part of NASA's Mars Exploration Rover program, it landed in Meridiani Planum on January 25, 2004, three weeks after its twin, Spirit (MER-A), touched down on the other side of the planet.
                Opportunity was able to stay operational for 5111 sols after landing, maintaining its power and key systems through continual recharging of its batteries using solar power, and hibernating during events such as dust storms to save power.
                This careful operation allowed Opportunity to operate for 57 times its designed lifespan, exceeding the initial plan by 14 years, 47 days (in Earth time).
            </p>
        )
    }
    if (name === 'spirit') {
        return (
            <p>
                Spirit, also known as MER-A (Mars Exploration Rover – A) or MER-2, is a Mars robotic rover, active from 2004 to 2010. 
                Spirit was operational on Mars for 2208 sols or 3.3 Martian years (2249 days; 6 years, 77 days).
                It was one of two rovers of NASA's Mars Exploration Rover Mission managed by the Jet Propulsion Laboratory (JPL). 
                Spirit landed successfully within the impact crater Gusev on Mars at 04:35 Ground UTC on January 4, 2004, three weeks before its twin, Opportunity (MER-B), which landed on the other side of the planet.
                Its name was chosen through a NASA-sponsored student essay competition. 
                The rover got stuck in a "sand trap" in late 2009 at an angle that hampered recharging of its batteries; its last communication with Earth was on March 22, 2010.
            </p>
        )
    }
    if (name === 'curiosity') {
        return (
            <p>
                Curiosity is a car-sized Mars rover designed to explore the Gale crater on Mars as part of NASA's Mars Science Laboratory (MSL) mission. 
                Curiosity was launched from Cape Canaveral (CCAFS) on 26 November 2011, at 15:02:00 UTC and landed on Aeolis Palus inside Gale crater on Mars on 6 August 2012, 05:17:57 UTC. 
                The Bradbury Landing site was less than 2.4 km (1.5 mi) from the center of the rover's touchdown target after a 560 million km (350 million mi) journey.
                Mission goals include an investigation of the Martian climate and geology, assessment of whether the selected field site inside Gale has ever offered environmental conditions favorable for microbial life (including investigation of the role of water), and planetary habitability studies in preparation for human exploration.
            </p>
        )
    }
}

export default Description;