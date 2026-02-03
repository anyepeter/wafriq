import Navbar from '@/components/Navbar';
import MembersHero from '@/components/MembersHero';
import Affiliate from '@/components/homesections/Affiliate';
import Footer from '@/components/Footer';

export default function MembersPage() {
    return (
        <main>
            <Navbar />
            <MembersHero />
            <Affiliate />
            <Footer />
        </main>
    );
}
