import Cart from '@components/Cart';
import Sidebar from '@components/Sidebar';

function Home() {
  return (
    <Sidebar>
      <Cart includeCheckout includeProposal />
    </Sidebar>
  );
}

export default Home;