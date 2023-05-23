import Image from 'next/image';
import styles from './page.module.scss';

export default function AboutPage() {
  return (
    <>
      <div
        style={{
          zIndex: '-1',
          position: 'fixed',
          width: '100vw',
          height: '100vh',
        }}
      >
        <Image src="/rock.jpg" alt="mountainview" layout="fill" />
      </div>
      <main>
        <div className={styles.section}>
          <p>
            Welcome to WildGear, your ultimate destination for premium outdoor
            wearables.
          </p>
          Welcome to WildGear, your ultimate destination for premium outdoor
          wearables. At WildGear, we are passionate about equipping outdoor
          enthusiasts like you with the gear you need to fully embrace and
          explore the wonders of nature. Whether you're an avid hiker, a camping
          enthusiast, or simply love spending time in the great outdoors, we've
          got you covered. Our mission is to provide high-quality outdoor
          apparel and gear that combines functionality, durability, and style.
          We understand the importance of reliable equipment that can withstand
          the elements, allowing you to focus on what matters most - your
          outdoor adventures. What sets us apart is our commitment to quality.
          We carefully curate our collection from reputable brands known for
          their exceptional craftsmanship and attention to detail. Each product
          we offer undergoes rigorous testing to ensure it meets our high
          standards, so you can trust that you're getting gear that will go the
          distance. At WildGear, we believe in the power of nature to inspire,
          rejuvenate, and challenge us. We're here to support you on your
          journey, whether you're embarking on a thrilling hike, conquering a
          new summit, or simply taking a peaceful stroll through the woods.
          We're more than just an online store. We're a community of outdoor
          enthusiasts, passionate about sharing our knowledge, experiences, and
          love for the wild. We're dedicated to providing exceptional customer
          service and personalized assistance to help you find the perfect gear
          for your unique needs. Join us on this adventure. Explore our
          collection, immerse yourself in the beauty of the outdoors, and let
          WildGear be your trusted companion on every step of your journey.
          Embrace the wild with WildGear.
        </div>
      </main>
    </>
  );
}
