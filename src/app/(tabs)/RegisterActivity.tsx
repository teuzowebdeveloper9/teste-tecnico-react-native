import { NavigationProvider } from '@/src/contexts/NavigationContext';
import GenericActivitys from '@/src/components/GenericActivitys';
import FormToCreateActivity from '@/src/components/FormToCreateActivity';


export default function RegisterActivity() {
  

  

  return (
    <NavigationProvider>
        <GenericActivitys />
        <FormToCreateActivity />
    </NavigationProvider>
  );
}
