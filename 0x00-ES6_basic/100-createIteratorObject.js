export default function createIteratorObject(report) {
  const emps = [];
  // eslint-disable
	for (const dep of Object.keys(report.allEmployees)) {
  // eslint-disable
		for (const emp of report.allEmployees[dep]) {
      emps.push(emp);
    }
  }

  return emps;
}
