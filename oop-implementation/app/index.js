
 function bankAccount(userName, setBalance){
  _bankName = "Franklin International bank";

  this.userName=userName;
  this.accountBalance =setBalance;

  if(typeof(userName)!="string")
  this.userName = "Unknown";

  if(!this.accountBalance >0)
  this.accountBalance = 0
}

bankAccount.prototype.bankName = function(){return _bankName}

bankAccount.prototype.withdrawMoney = function(amount){
  if (amount<=0 | typeof(amount)!="number"){
    return "invalid input"
  }
  if(this.accountBalance  - amount >= 0){
    return this.accountBalance -=amount;
  }
  else{
    return "Insuffcient funds"
  }
}


bankAccount.prototype.depositMoney = function(amount){
  if (amount<=0 | typeof(amount)!="number"){
    return "invalid input";
  }   
  return this.accountBalance  +=amount;
}


bankAccount.prototype.checkBalance = function(){
  return ("Available balance:  " + this.accountBalance );
}

bankAccount.prototype.getLoan = function(amount){
  return "This account type does not have facility for Loan request \t Loan DENIED!!"
}



savingsAccount.prototype = new bankAccount();
savingsAccount.prototype.constructor = savingsAccount;

function savingsAccount(name, accountBalance ){
  bankAccount.call(this, name, accountBalance );
}



currentAccount.prototype = new bankAccount();
currentAccount.prototype.constructor = currentAccount;

function currentAccount(name, balance){
  bankAccount.call(this, name, balance)
  this.outstandingLoan = 0;
}

currentAccount.prototype.getLoan = function(amount){
  var _loanLimit = 1000000 //1 million
  if (amount<=0 | typeof(amount)!="number"){
    return "invalid input";
  }
  if((this.accountBalance >= (amount/2)+this.outstandingLoan) & amount<_loanLimit){
    this.accountBalance  -= amount
    this.outstandingLoan +=amount
    return {"Available balance = " :this.accountBalance , "Outstanding loan = " : this.outstandingLoan}
  }
  else{
    return "Loan of " + amount + "  denied!!  You did not meet the minimum requirement";
  }
}

currentAccount.prototype.checkBalance = function(){
  return {"Available balance = " :this.accountBalance , "Outstanding loan = " : this.outstandingLoan}
}

module.exports = {
  bankAccount : bankAccount,
  currentAccount : currentAccount,
  savingsAccount : savingsAccount
}

