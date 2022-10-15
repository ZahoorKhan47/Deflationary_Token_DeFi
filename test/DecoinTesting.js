const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Decoin", function () {
  beforeEach(async function () {
    [owner, signer2] = await ethers.getSigners();

    Decoin = await ethers.getContractFactory("Decoin", owner);

    decoin = await Decoin.deploy();
  });

  describe("transfer", function () {
    it("Transfer tokens, reduces supply and wallet balances", async function () {
      let ownerBalance;
      let signer2Balance;
      let totalSupply;

      totalSupply = await decoin.totalSupply();
      ownerBalance = await decoin.balanceOf(owner.address);

      expect(totalSupply).to.equal(ethers.utils.parseEther('10'));
      expect(ownerBalance).to.equal(ethers.utils.parseEther('10'));

      await decoin
        .connect(owner)
        .transfer(signer2.address, ethers.utils.parseEther('5'));
    

      totalSupply = await decoin.totalSupply();
      ownerBalance = await decoin.balanceOf(owner.address);
      signer2Balance = await decoin.balanceOf(signer2.address);
      



      expect(totalSupply).to.equal(ethers.utils.parseEther( String(10 - (5*0.5))));
      expect(ownerBalance).to.equal(ethers.utils.parseEther('5'));
      expect(signer2Balance).to.equal(ethers.utils.parseEther('2.5'));

    });
  });
});
