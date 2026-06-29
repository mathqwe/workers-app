import { Redirect } from 'expo-router';

export default function CompanyDemoRedirect() {
  return <Redirect href={'/company/login' as never} />;
}
