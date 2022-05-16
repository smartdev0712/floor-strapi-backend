module.exports = ({ env }) => ({
    // ...
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_NAME'),
          api_key: env('CLOUDINARY_KEY'),
          api_secret: env('CLOUDINARY_SECRET'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    seo: {
      enabled: true,
    },
    "measurement-protocol": {
      config: {
        apiSecret: env('API_SECRET'),
        measurementId: env('MEASUREMENT_ID'),
        useValidationServer: false,
      }
    },
    // ...
  });