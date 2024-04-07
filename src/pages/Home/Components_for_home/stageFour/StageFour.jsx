// Importing necessary libraries and components
import { useState } from "react";
import ClassKeyCompetencies from "./components/ClassKeyCompetencies";
import ClassLearningPathways from "./components/ClassLearningPathways";
import ClassDigitalTechnologies from "./components/ClassDigitalTechnologies";
import ClassIr40 from "./components/ClassIr40";
import styles from './StageFour.module.css';

export default function StageFour() {
    // Mapping of components
    const components = {
        learningPathways: <ClassLearningPathways />,
        digitalTechnologies: <ClassDigitalTechnologies />,
        keyCompetencies: <ClassKeyCompetencies />,
        iR4_0: <ClassIr40 />
    };

    // State // identifiers
    const [displayedContent, setDisplayedContent] = useState({name: 'learningPathways', component: components['learningPathways']});

    // Handlers // Switch functions // This function set are for the buttons and the 'hidden content radio button
    function handleContentClick (event) {
        console.log (event.target.value)
        const name = event.target.id;
        setDisplayedContent({name: name, component: components[name]});
    }

    return (
        <>
            <div>
                {/* Navigation Bar */}
                
                <div className={styles.topLevel_nav_bar}>
                    <button id = 'learningPathways' onClick={handleContentClick} className={`${styles.buttons} ${displayedContent.name === 'learningPathways' ? styles.toggle : ''}`}>Learning Pathways</button>
                    <button id = 'digitalTechnologies' onClick={handleContentClick} className={`${styles.buttons} ${displayedContent.name === 'digitalTechnologies' ? styles.toggle : ''}`}>Digital Technologies</button>
                    <button id = 'keyCompetencies' onClick={handleContentClick} className={`${styles.buttons} ${displayedContent.name === 'keyCompetencies' ? styles.toggle: ''}`}>Key Competencies</button>
                    <button id = 'iR4_0' onClick={handleContentClick} className={`${styles.buttons} ${displayedContent.name === 'iR4_0' ? styles.toggle : ''}`}>IR 4.0</button>
                </div>

                {/* Container with contents */}

                <div className={styles.flex_box_container}>
                    <div className={styles.flex_box_container_margins}>
                        <div>{displayedContent.component}</div>        
                    </div>

                {/* Hidden container */}
                    <div className={styles.hidden_content_container}>
                        <div className={styles.hiddenRadio}>
                        {/* Learning Pathways */}
                        <input style={{marginRight: '10px'}} type="radio" id="learningPathways" name="content" value="learningPathways" onChange={handleContentClick} checked={displayedContent.name === 'learningPathways'} />

                        {/* Radio for Digital Technologies */}
                        <input style={{marginRight: '10px'}} type="radio" id="digitalTechnologies" name="content" value="digitalTechnologies" onChange={handleContentClick} checked={displayedContent.name === 'digitalTechnologies'} />

                        {/* Radio for Key Competencies */}
                        <input style={{marginRight: '10px'}} type="radio" id="keyCompetencies" name="content" value="keyCompetencies" onChange={handleContentClick} checked={displayedContent.name === 'keyCompetencies'} />

                        {/* Radio for IR 4.0 */}
                        <input style={{marginRight: '10px'}} type="radio" id="iR4_0" name="content" value="iR4_0" onChange={handleContentClick} checked={displayedContent.name === 'iR4_0'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}