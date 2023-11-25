module.exports = {
    // ... other webpack configuration ...
  
    module: {
      rules: [
        {
          test: /\.json$/,
          loader: 'json-loader',
          type: 'javascript/auto',
        },
        // ... other rules ...
      ],
    },
  
    // ... other webpack configuration ...
  };
  