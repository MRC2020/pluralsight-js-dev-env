import './index.css';
import numeral from 'numeral';
import Chalk from 'chalk';

const courseValue = numeral(1000).format('$0,0.00');

/* eslint-disable no-console */

console.log(Chalk.blue(`I would pay ${courseValue} for this awesome course!`));