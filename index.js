import setupApp from './src/app';

const port = process.env.PORT || 3000;

setupApp().listen(port, () => console.log(`ON PORT ${port}`))