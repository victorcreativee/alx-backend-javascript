// Interfaces with brand properties for MajorCredits and MinorCredits
interface MajorCredits {
    credits: number;
    brand: 'major';
  }
  
  interface MinorCredits {
    credits: number;
    brand: 'minor';
  }
  
  // Function to sum MajorCredits values
  function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'major' };
  }
  
  // Function to sum MinorCredits values
  function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    const totalCredits = subject1.credits + subject2.credits;
    return { credits: totalCredits, brand: 'minor' };
  }
  
  // Example usage
  
  const majorSubject1: MajorCredits = { credits: 3, brand: 'major' };
  const majorSubject2: MajorCredits = { credits: 4, brand: 'major' };
  
  const minorSubject1: MinorCredits = { credits: 2, brand: 'minor' };
  const minorSubject2: MinorCredits = { credits: 3, brand: 'minor' };
  
  const totalMajorCredits = sumMajorCredits(majorSubject1, majorSubject2);
  const totalMinorCredits = sumMinorCredits(minorSubject1, minorSubject2);
  
  console.log(`Total Major Credits: ${totalMajorCredits.credits}`);
  console.log(`Total Minor Credits: ${totalMinorCredits.credits}`); 
  