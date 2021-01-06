import React from 'react';
import {
  connect
} from 'react-redux'
// import { Container } from './styles';

const Video = ({ activeLesson, activeModule }) => {
  return <div>
    <strong>Módulo {activeModule.title}</strong>
    <span>Lesson {activeLesson.title}</span>
    </div>
};

export default connect(state => ({
  activeLesson: state.activeLesson,
  activeModule: state.activeModule
}))(Video);