module.exports = {
  apps : [{
    name: 'hr-management-frontend',
    script: 'server.js',
    instances: 'max', // Or a specific number like 2
    exec_mode: 'cluster',
    watch: false, // Set to false in production
    env: {
      NODE_ENV: 'production',
      PORT: 3000, // Ensure this matches your server.js port
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000,
    },
    // PM2 specific options
    max_memory_restart: '1G',
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true,
    // Auto restart options
    autorestart: true,
    max_restarts: 10,
    min_uptime: '10s',
    // Health monitoring
    health_check_grace_period: 3000,
    health_check_fatal_exceptions: true,
  }],
};