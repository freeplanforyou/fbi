'use client';

import Navbar from '@/components/ui/Navbar';
import { 
  BarChart3, Users, Activity, TrendingUp, 
  DollarSign, Globe, Zap, Shield 
} from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: Users, label: 'Total Users', value: '24,521', change: '+12%', color: 'text-purple' },
  { icon: Activity, label: 'Active Now', value: '1,423', change: '+8%', color: 'text-green' },
  { icon: DollarSign, label: 'Revenue', value: '$48,250', change: '+23%', color: 'text-purple' },
  { icon: Globe, label: 'Countries', value: '152', change: '+4%', color: 'text-green' },
];

const recentActivity = [
  { user: 'Sarah Chen', action: 'deployed a new project', time: '2 min ago' },
  { user: 'Alex Rivera', action: 'updated API settings', time: '15 min ago' },
  { user: 'Maria Kim', action: 'invited team member', time: '1 hour ago' },
  { user: 'John Doe', action: 'created new database', time: '3 hours ago' },
  { user: 'Emily Davis', action: 'ran analytics report', time: '5 hours ago' },
];

const chartData = [
  { month: 'Jan', value: 65 },
  { month: 'Feb', value: 78 },
  { month: 'Mar', value: 82 },
  { month: 'Apr', value: 91 },
  { month: 'May', value: 95 },
];

export default function DashboardPage() {
  return (
    <main className="relative overflow-x-hidden bg-[#0F172A] min-h-screen">
      <Navbar />
      
      <section className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-12">
          <div>
            <h1 className="text-3xl font-bold mb-2">Welcome back, Alex</h1>
            <p className="text-gray-400">Here is what is happening with your projects.</p>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <button className="px-4 py-2 glass-effect rounded-full text-sm hover:bg-white/10 transition-all">
              Export
            </button>
            <button className="px-4 py-2 bg-gradient-to-r from-purple to-green rounded-full text-sm font-medium hover:purple-glow transition-all">
              New Project
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="flex items-center justify-between mb-4">
                <stat.icon className={`w-8 h-8 ${stat.color}`} />
                <span className="text-green text-sm font-medium">{stat.change}</span>
              </div>
              <div className="text-3xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Chart & Activity */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Chart */}
          <div className="md:col-span-2 glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Performance Overview</h3>
            <div className="flex items-end gap-2 h-48">
              {chartData.map((bar) => (
                <div key={bar.month} className="flex-1 flex flex-col items-center gap-2">
                  <div
                    className="w-full bg-gradient-to-t from-purple to-green rounded-t-lg transition-all hover:opacity-80"
                    style={{ height: `${bar.value}%` }}
                  />
                  <span className="text-xs text-gray-400">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-6">Recent Activity</h3>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.user} className="flex items-start gap-3 pb-4 border-b border-white/5 last:border-0 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple to-green flex items-center justify-center text-xs font-bold flex-shrink-0">
                    {activity.user.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="text-sm">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-gray-400">{activity.action}</span>
                    </p>
                    <span className="text-xs text-gray-500">{activity.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { icon: Zap, title: 'Deploy', desc: 'Push to production' },
            { icon: Shield, title: 'Security', desc: 'Run security scan' },
            { icon: TrendingUp, title: 'Analytics', desc: 'View full reports' },
          ].map((action) => (
            <div key={action.title} className="glass-card p-6 group cursor-pointer hover:border-purple-500/30 transition-all">
              <action.icon className="w-8 h-8 text-purple mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="font-semibold mb-1">{action.title}</h4>
              <p className="text-gray-400 text-sm">{action.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
