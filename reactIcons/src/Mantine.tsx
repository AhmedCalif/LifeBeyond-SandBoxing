import { Button, MantineProvider } from '@mantine/core';
import 'normalize.css'; 

export  function Demo() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
    <div style={{ padding: '20px' }}>
      <Button variant="filled" color="blue">
        Mantine Button
      </Button>
    </div>
  </MantineProvider>
  );
}