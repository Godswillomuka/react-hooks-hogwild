import React from 'react';
import PropTypes from 'prop-types';
import styles from './HogList.module.css';
import HogTile from '../HogTile/HogTile'

const HogList = () => (
  <div className={styles.HogList}>
    HogList Component
    <HogTile/>
  </div>
);

HogList.propTypes = {};

HogList.defaultProps = {};

export default HogList;
