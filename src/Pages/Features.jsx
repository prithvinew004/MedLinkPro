import React from 'react'
import si from '../assets/si.svg'
import optimise from '../assets/optimise.svg'
import edata from '../assets/edata.svg'
import drivendata from '../assets/drivendata.svg'
import rc from '../assets/rc.svg'
import oe from '../assets/oe.svg'


function Features() {
  return (
    <>
    <div className="bg-[#EBEBEB] m-4 px-2 rounded-2xl overflow-hidden">
      <div id="features" className="mx-auto max-w-6xl">
        <h2 className="text-center font-display lg:text-7xl text-3xl font-bold  text-slate-900 md:text-4xl pt-8">
          Features
        </h2>
        <ul className="mt-12 pb-6 grid grid-cols-1 gap-6 text-center text-slate-700 md:grid-cols-3">
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src={si} alt="" className="mx-auto h-16 w-16" />
            <h3 className="my-3 font-display font-medium">Streamlined Integration</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Facilitates seamless information exchange among doctors, pharmacies, and labs, reducing miscommunication and enhancing collaboration.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src={optimise } alt="" className="mx-auto h-16 w-16" />
            <h3 className="my-3 font-display font-medium">Enhanced Data Access</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Centralizes patient and operational data, making it easily accessible for healthcare professionals, which improves decision-making, response times.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <img src={edata} alt="" className="mx-auto h-16 w-16" />
            <h3 className="my-3 font-display font-medium">Data-Driven Insights</h3>
            <p className="mt-1.5 text-sm leading-6 text-secondary-500">
            Provides analytics and reporting tools that help healthcare organizations identify trends, improve processes, and optimize resource allocation.
            </p>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/pricing" className="group">
              <img src={drivendata} alt="" className="mx-auto h-16 w-16" />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Optimized Stock</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Enables pharmacies to manage stock levels and prescriptions effectively, minimizing errors and ensuring medication availability.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/templates" className="group">
              <img src={rc} alt="" className="mx-auto h-16 w-16" />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">
              Regulatory Compliance
              </h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Assists healthcare providers in meeting industry standards and regulatory requirements by maintaining accurate records and secure data management.
              </p>
            </a>
          </li>
          <li className="rounded-xl bg-white px-6 py-8 shadow-sm">
            <a href="/download" className="group">
              <img src={oe} alt="" className="mx-auto h-16 w-16" />
              <h3 className="my-3 font-display font-medium group-hover:text-primary-500">Operational Efficiency</h3>
              <p className="mt-1.5 text-sm leading-6 text-secondary-500">
              Automates administrative tasks and workflows, allowing healthcare providers to focus more on patient care and less on paperwork.
              </p>
            </a>
          </li>
        </ul>
      </div>
    </div>
    </>
  )
}

export default Features