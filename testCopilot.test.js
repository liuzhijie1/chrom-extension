function testCalculateDaysBetween() {
  // Test case 1: Same date
  const result1 = calculateDaysBetween('2022-01-01', '2022-01-01');
  console.log(result1); // Expected output: 0

  // Test case 2: Different dates
  const result2 = calculateDaysBetween('2022-01-01', '2022-01-05');
  console.log(result2); // Expected output: 4

  // Test case 3: Negative difference
  const result3 = calculateDaysBetween('2022-01-05', '2022-01-01');
  console.log(result3); // Expected output: 4
}

testCalculateDaysBetween();