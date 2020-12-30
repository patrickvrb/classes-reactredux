import React from 'react';

// import { Container } from './styles';

const Sidebar = ({sidebarData}) => {
  return(
    <aside>
        {
            sidebarData.map(module => (
                <div key={module.id}>
                    <strong>{module.title}</strong>
                    <ul>
                        {
                            module.lessons.map(lesson => (
                                <li key = {lesson.id}>{lesson.title}</li>
                            ))
                        }
                    </ul>
                </div>
            ))
        }
    </aside>
  );
}

export default Sidebar;