import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const filePath = './data.json';
const git = simpleGit();

// Helper function to generate an array of dates between a start and end date
const getDateRange = (startDate, endDate) => {
  const start = moment(startDate);
  const end = moment(endDate);
  const dates = [];

  while (start.isSameOrBefore(end)) {
    dates.push(start.format()); // Add each date to the array
    start.add(1, 'd'); // Increment by one day
  }

  return dates;
};

// Generate dates for Oct 2-4 and Sep 4-29
const octDates = getDateRange('2023-10-02', '2023-10-04');
const sepDates = getDateRange('2023-09-04', '2023-09-29');

// Combine all dates
const allDates = [...octDates, ...sepDates];

async function commitOnDates() {
  for (const dateStr of allDates) {
    const DATE = moment(dateStr).format(); // Format each date

    // Add data to JSON file with the current date
    const data = { date: DATE };
    await jsonfile.writeFile(filePath, data);

    // Add and commit for the specific date
    await git.add([filePath]);
    await git.commit(`update`, { '--date': DATE }); // Set commit date and message
  }

  // Push all the commits after the loop
  await git.push();
}

commitOnDates().then(() => {
  console.log('All commits pushed on specified dates.');
});
