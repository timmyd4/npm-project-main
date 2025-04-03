import lodash from 'lodash';
import chalk from 'chalk';

const array = [1,2,3,4,5,6,7,7,8,4,4,6,7,8,9,4,2,2,4,5];
const uniqueNums = lodash.uniq(array);

console.log(chalk.green(uniqueNums));

console.log(chalk.cyan("Hello, with chalk!"));