module.exports = {
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                net: false,
                tls: false,
                dns: false,
                fs: false,
                child_process: false,
                module: false
            };
        }
        return config;
    },
    // ...existing config...
};
