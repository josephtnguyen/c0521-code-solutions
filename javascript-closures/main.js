function graduate(credential) {
  return function (fullName) {
    return fullName + ', ' + credential;
  };
}

const medicalSchool = graduate('M.D.');
const lawSchool = graduate('Esq.');

const medicalName = medicalSchool('Joseph Nguyen');
const lawName = lawSchool('Joseph Nguyen');

console.log('medical name:', medicalName);
console.log('law name:', lawName);
