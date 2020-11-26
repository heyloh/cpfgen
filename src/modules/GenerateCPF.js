import ValidaCPF from './ValidaCPF';

export default class GenerateCPF {
  handleGenerateRandom(min = 100000000, max = 999999999) {
    return String(Math.floor(Math.random() * (max - min) + min));
  }

  formatCPF(cpf) {
    return(
      cpf.slice(0,3) + '.' +
      cpf.slice(3,6) + '.' +
      cpf.slice(6,9) + '-' +
      cpf.slice(9,11)
    );
  }

  generateNewCPF() {
    const cpfWithNoDigit = this.handleGenerateRandom();
    const digit1 = ValidaCPF.geraDigito(cpfWithNoDigit);
    const digit2 = ValidaCPF.geraDigito(cpfWithNoDigit + digit1);
    const newCPF = cpfWithNoDigit + digit1 + digit2;
    return this.formatCPF(newCPF);
  }
}