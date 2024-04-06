import { Header } from './components/header';
import { AttendeeList } from './components/attendee-list';
import { Footer } from './components/footer';

export function App() {
  return (
    <div className='flex flex-col gap-5 max-w-[1216px] mx-auto py-5'>
      <Header />

      <AttendeeList />

      <Footer />
    </div>
  );
}
