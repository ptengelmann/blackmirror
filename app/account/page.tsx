"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AccountPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState('overview');

  const userData = {
    name: 'John Doe',
    email: 'john.doe@system.net',
    rating: 4.2,
    memberSince: '2024',
    totalSpent: '$1,247.00',
    ordersCount: 8,
    meritPoints: 15420,
  };

  const recentOrders = [
    { id: 'ORD-2024-1547', item: 'White Bear Hoodie', date: '2024-03-15', status: 'Delivered', amount: '$89.00' },
    { id: 'ORD-2024-1523', item: 'USS Callister Tee', date: '2024-03-08', status: 'Shipped', amount: '$45.00' },
    { id: 'ORD-2024-1498', item: 'Nosedive Pin Set', date: '2024-02-28', status: 'Processing', amount: '$29.00' },
  ];

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'orders', label: 'Orders' },
    { id: 'profile', label: 'Profile' },
    { id: 'privacy', label: 'Privacy' },
    { id: 'settings', label: 'Settings' },
  ];

  return (
    <div className="min-h-screen bg-bm-rich-black pt-20 pb-16 px-4">
      {/* Scanlines */}
      <div className="fixed inset-0 scanlines opacity-5 pointer-events-none" />

      {/* Grain */}
      <div className="fixed inset-0 grain opacity-30 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-[28px] font-black tracking-[0.25em] uppercase text-bm-white mb-2">
                Account Dashboard
              </h1>
              <p className="text-[16px] text-bm-gray/60 tracking-[0.15em] uppercase">
                Your digital footprint
              </p>
            </div>
            <button
              onClick={() => router.push('/')}
              className="px-6 py-3 border border-bm-gray/20 text-bm-gray/60 hover:border-bm-accent hover:text-bm-accent text-[16px] font-mono tracking-[0.15em] uppercase transition-all duration-300"
            >
              Logout
            </button>
          </div>
        </div>

        {/* User Info Card */}
        <div className="relative glass-effect border border-bm-accent/20 p-8 mb-8">
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-bm-accent/40" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-bm-accent/40" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-bm-accent/40" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-bm-accent/40" />

          <div className="relative grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Profile */}
            <div className="md:col-span-1 flex flex-col items-center text-center">
              <div className="w-24 h-24 border-2 border-bm-accent rounded-full flex items-center justify-center mb-4">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" className="text-bm-accent">
                  <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M6 21C6 17.134 8.686 14 12 14C15.314 14 18 17.134 18 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square"/>
                </svg>
              </div>
              <h2 className="text-[18px] font-bold tracking-[0.15em] uppercase text-bm-white mb-1">
                {userData.name}
              </h2>
              <p className="text-[16px] font-mono text-bm-gray/60 tracking-[0.05em]">
                {userData.email}
              </p>
              {/* Social Rating */}
              <div className="mt-4 flex items-center gap-2 px-4 py-2 border border-bm-accent/30 bg-bm-accent/5">
                <span className="text-[16px] font-mono font-bold text-bm-accent">{userData.rating}</span>
                <svg width="16" height="16" viewBox="0 0 24 24" className="fill-bm-accent">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                </svg>
              </div>
            </div>

            {/* Stats */}
            <div className="md:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Merit Points */}
              <div className="border border-bm-gray/20 p-6 hover:border-bm-accent/40 transition-colors duration-300">
                <p className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/60 mb-2">
                  Merit Points
                </p>
                <p className="text-[24px] font-black tracking-wider text-bm-accent">
                  {userData.meritPoints.toLocaleString()}
                </p>
              </div>

              {/* Total Orders */}
              <div className="border border-bm-gray/20 p-6 hover:border-bm-accent/40 transition-colors duration-300">
                <p className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/60 mb-2">
                  Total Orders
                </p>
                <p className="text-[24px] font-black tracking-wider text-bm-white">
                  {userData.ordersCount}
                </p>
              </div>

              {/* Total Spent */}
              <div className="border border-bm-gray/20 p-6 hover:border-bm-accent/40 transition-colors duration-300">
                <p className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/60 mb-2">
                  Total Spent
                </p>
                <p className="text-[24px] font-black tracking-wider text-bm-white">
                  {userData.totalSpent}
                </p>
              </div>

              {/* Member Since */}
              <div className="border border-bm-gray/20 p-6 hover:border-bm-accent/40 transition-colors duration-300">
                <p className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/60 mb-2">
                  Member Since
                </p>
                <p className="text-[24px] font-black tracking-wider text-bm-white">
                  {userData.memberSince}
                </p>
              </div>

              {/* Status */}
              <div className="border border-bm-gray/20 p-6 hover:border-bm-accent/40 transition-colors duration-300">
                <p className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/60 mb-2">
                  Account Status
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-bm-accent rounded-full animate-pulse" />
                  <p className="text-[16px] font-black tracking-wider text-bm-accent uppercase">
                    Active
                  </p>
                </div>
              </div>

              {/* Surveillance Level */}
              <div className="border border-bm-gray/20 p-6 hover:border-bm-accent/40 transition-colors duration-300">
                <p className="text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/60 mb-2">
                  Surveillance
                </p>
                <p className="text-[16px] font-black tracking-wider text-bm-pink uppercase">
                  Maximum
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 text-[16px] font-mono tracking-[0.15em] uppercase transition-all duration-300 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-bm-accent/10 border border-bm-accent text-bm-accent'
                  : 'border border-bm-gray/20 text-bm-gray/60 hover:border-bm-accent/40 hover:text-bm-accent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="relative glass-effect border border-bm-accent/20 p-8">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div>
                <h3 className="text-[20px] font-black tracking-[0.2em] uppercase text-bm-white mb-6">
                  Recent Activity
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border border-bm-gray/20 hover:border-bm-accent/40 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-bm-accent rounded-full" />
                      <div>
                        <p className="text-[16px] text-bm-white tracking-[0.1em]">Order #ORD-2024-1547 delivered</p>
                        <p className="text-[16px] text-bm-gray/50 font-mono">2024-03-15</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-bm-gray/20 hover:border-bm-accent/40 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-bm-blue rounded-full" />
                      <div>
                        <p className="text-[16px] text-bm-white tracking-[0.1em]">Rating updated to 4.2</p>
                        <p className="text-[16px] text-bm-gray/50 font-mono">2024-03-14</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between p-4 border border-bm-gray/20 hover:border-bm-accent/40 transition-colors duration-300">
                    <div className="flex items-center gap-4">
                      <div className="w-2 h-2 bg-bm-gray rounded-full" />
                      <div>
                        <p className="text-[16px] text-bm-white tracking-[0.1em]">Profile viewed 15 times</p>
                        <p className="text-[16px] text-bm-gray/50 font-mono">2024-03-12</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h3 className="text-[20px] font-black tracking-[0.2em] uppercase text-bm-white mb-6">
                Order History
              </h3>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-bm-gray/20 p-6 hover:border-bm-accent/40 transition-colors duration-300"
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="space-y-2">
                        <p className="text-[16px] font-mono text-bm-accent tracking-wider">{order.id}</p>
                        <p className="text-[18px] font-bold text-bm-white tracking-[0.1em]">{order.item}</p>
                        <p className="text-[16px] text-bm-gray/60 font-mono">{order.date}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <span
                          className={`px-4 py-2 border text-[16px] font-mono tracking-[0.15em] uppercase ${
                            order.status === 'Delivered'
                              ? 'border-bm-accent/30 text-bm-accent'
                              : order.status === 'Shipped'
                              ? 'border-bm-blue/30 text-bm-blue'
                              : 'border-bm-gray/30 text-bm-gray'
                          }`}
                        >
                          {order.status}
                        </span>
                        <p className="text-[18px] font-bold text-bm-white">{order.amount}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <h3 className="text-[20px] font-black tracking-[0.2em] uppercase text-bm-white mb-6">
                Profile Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/70 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    value={userData.name}
                    readOnly
                    className="w-full bg-bm-dark/50 border border-bm-gray/20 px-4 py-3 text-bm-white font-mono text-[16px] tracking-wider"
                  />
                </div>
                <div>
                  <label className="block text-[16px] font-mono tracking-[0.15em] uppercase text-bm-gray/70 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={userData.email}
                    readOnly
                    className="w-full bg-bm-dark/50 border border-bm-gray/20 px-4 py-3 text-bm-white font-mono text-[16px] tracking-wider"
                  />
                </div>
              </div>
              <button className="px-6 py-3 border border-bm-accent text-bm-accent hover:bg-bm-accent hover:text-bm-rich-black text-[16px] font-bold tracking-[0.2em] uppercase transition-all duration-300">
                Update Profile
              </button>
            </div>
          )}

          {/* Privacy Tab */}
          {activeTab === 'privacy' && (
            <div className="space-y-6">
              <h3 className="text-[20px] font-black tracking-[0.2em] uppercase text-bm-white mb-6">
                Privacy Settings
              </h3>
              <div className="p-6 border border-bm-pink/30 bg-bm-pink/5">
                <div className="flex items-start gap-4">
                  <div className="w-6 h-6 border-2 border-bm-pink rotate-45 flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-[18px] font-bold text-bm-pink tracking-[0.15em] uppercase mb-2">
                      Privacy Notice
                    </p>
                    <p className="text-[16px] text-bm-gray/70 tracking-[0.05em] leading-relaxed">
                      Your data is continuously monitored and analyzed. All interactions are recorded. Your digital
                      footprint is permanent. Privacy is an illusion.
                    </p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 border border-bm-gray/20">
                  <span className="text-[16px] text-bm-white tracking-[0.1em]">Data Collection</span>
                  <span className="text-[16px] font-mono text-bm-pink uppercase">Always Active</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-bm-gray/20">
                  <span className="text-[16px] text-bm-white tracking-[0.1em]">Behavioral Tracking</span>
                  <span className="text-[16px] font-mono text-bm-pink uppercase">Always Active</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-bm-gray/20">
                  <span className="text-[16px] text-bm-white tracking-[0.1em]">Social Credit Sync</span>
                  <span className="text-[16px] font-mono text-bm-pink uppercase">Always Active</span>
                </div>
              </div>
            </div>
          )}

          {/* Settings Tab */}
          {activeTab === 'settings' && (
            <div className="space-y-6">
              <h3 className="text-[20px] font-black tracking-[0.2em] uppercase text-bm-white mb-6">
                Account Settings
              </h3>
              <div className="space-y-4">
                <button className="w-full text-left p-4 border border-bm-gray/20 hover:border-bm-accent/40 text-[16px] text-bm-white tracking-[0.1em] transition-colors duration-300">
                  Change Password
                </button>
                <button className="w-full text-left p-4 border border-bm-gray/20 hover:border-bm-accent/40 text-[16px] text-bm-white tracking-[0.1em] transition-colors duration-300">
                  Notification Preferences
                </button>
                <button className="w-full text-left p-4 border border-bm-gray/20 hover:border-bm-accent/40 text-[16px] text-bm-white tracking-[0.1em] transition-colors duration-300">
                  Payment Methods
                </button>
                <button className="w-full text-left p-4 border border-bm-gray/20 hover:border-bm-accent/40 text-[16px] text-bm-white tracking-[0.1em] transition-colors duration-300">
                  Shipping Addresses
                </button>
                <button className="w-full text-left p-4 border border-bm-pink/30 hover:border-bm-pink text-[16px] text-bm-pink tracking-[0.1em] transition-colors duration-300">
                  Delete Account
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
