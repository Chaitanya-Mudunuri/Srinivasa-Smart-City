"use client";

import React, { useState } from "react";
import { Calculator, TrendingUp, IndianRupee, ShieldAlert } from "lucide-react";

export default function ToolsPage() {
  // EMI Calculator State
  const [loanAmount, setLoanAmount] = useState<number>(1500000);
  const [interestRate, setInterestRate] = useState<number>(8.5);
  const [loanTenure, setLoanTenure] = useState<number>(10); // years

  // Returns Calculator State
  const [plotPrice, setPlotPrice] = useState<number>(1000000);
  const [holdingYears, setHoldingYears] = useState<number>(5);
  const [expectedCagr, setExpectedCagr] = useState<number>(12); // % per year

  // EMI Calculations
  const monthlyInterestRate = interestRate / 12 / 100;
  const totalMonths = loanTenure * 12;
  const emi = (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, totalMonths)) /
              (Math.pow(1 + monthlyInterestRate, totalMonths) - 1);
  const totalPayment = isNaN(emi) ? 0 : emi * totalMonths;
  const totalInterest = isNaN(emi) ? 0 : totalPayment - loanAmount;

  // Returns Calculations
  const futureValue = plotPrice * Math.pow(1 + expectedCagr / 100, holdingYears);
  const estimatedGain = futureValue - plotPrice;

  return (
    <div className="bg-slate-950 text-slate-100 py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="text-amber-400 font-semibold text-sm tracking-widest uppercase mb-3 block">Financial Planning Tools</span>
        <h1 className="text-3xl sm:text-5xl font-outfit font-extrabold text-white mb-4">
          EMI & Land Appreciation Calculators
        </h1>
        <p className="text-slate-400 text-base sm:text-lg">
          Estimate your monthly loan installments or project future land value appreciation in Jaggampeta's high-growth corridor.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* EMI Calculator */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Calculator className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-outfit font-bold text-white">Plot Loan EMI Calculator</h2>
              <span className="text-xs text-slate-400">Estimate monthly installments for plot purchase</span>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Loan Amount</span>
                <span className="font-mono text-amber-400 font-bold">₹{loanAmount.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="200000"
                max="10000000"
                step="100000"
                value={loanAmount}
                onChange={(e) => setLoanAmount(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Interest Rate (% p.a.)</span>
                <span className="font-mono text-amber-400 font-bold">{interestRate}%</span>
              </div>
              <input
                type="range"
                min="6"
                max="18"
                step="0.5"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Loan Tenure (Years)</span>
                <span className="font-mono text-amber-400 font-bold">{loanTenure} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(Number(e.target.value))}
                className="w-full accent-amber-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Monthly EMI</span>
              <span className="text-2xl font-outfit font-extrabold text-amber-400">
                ₹{isNaN(emi) ? "0" : Math.round(emi).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-slate-800 pt-3">
              <span className="text-slate-400">Total Interest Payable</span>
              <span className="font-mono text-slate-200">₹{Math.round(totalInterest).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-slate-800 pt-3">
              <span className="text-slate-400">Total Payment (Principal + Interest)</span>
              <span className="font-mono text-slate-200">₹{Math.round(totalPayment).toLocaleString("en-IN")}</span>
            </div>
          </div>
        </div>

        {/* Returns Estimator */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-outfit font-bold text-white">Land Appreciation Estimator</h2>
              <span className="text-xs text-slate-400">Project potential future value based on CAGR</span>
            </div>
          </div>

          <div className="space-y-6 mb-8">
            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Initial Plot Investment</span>
                <span className="font-mono text-emerald-400 font-bold">₹{plotPrice.toLocaleString("en-IN")}</span>
              </div>
              <input
                type="range"
                min="500000"
                max="10000000"
                step="250000"
                value={plotPrice}
                onChange={(e) => setPlotPrice(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Holding Period (Years)</span>
                <span className="font-mono text-emerald-400 font-bold">{holdingYears} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="15"
                step="1"
                value={holdingYears}
                onChange={(e) => setHoldingYears(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-slate-300">Expected Annual Growth (CAGR)</span>
                <span className="font-mono text-emerald-400 font-bold">{expectedCagr}%</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={expectedCagr}
                onChange={(e) => setExpectedCagr(Number(e.target.value))}
                className="w-full accent-emerald-500 bg-slate-800 h-2 rounded-lg cursor-pointer"
              />
            </div>
          </div>

          <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-sm text-slate-400">Estimated Future Value</span>
              <span className="text-2xl font-outfit font-extrabold text-emerald-400">
                ₹{Math.round(futureValue).toLocaleString("en-IN")}
              </span>
            </div>
            <div className="flex justify-between items-center text-xs border-t border-slate-800 pt-3">
              <span className="text-slate-400">Estimated Capital Gain</span>
              <span className="font-mono text-emerald-300 font-bold">+₹{Math.round(estimatedGain).toLocaleString("en-IN")}</span>
            </div>
            <div className="flex items-start gap-2 text-[11px] text-slate-500 border-t border-slate-800 pt-3">
              <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Disclaimer: This calculator is for illustrative planning purposes only. Real estate appreciation varies based on local market dynamics and infrastructure development.</span>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
