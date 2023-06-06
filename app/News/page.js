import Image from 'next/image';
import styles from './page.module.scss';

export default function NewsPage() {
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
        <Image src="/Berge.jpg" alt="showing desert" fill />
      </div>
      <main>
        <div className={styles.h1}> Newsletter</div>
        <div className={styles.text}>
          <section>
            <div>
              <p>
                Source Hello Outdoor Enthusiasts! Welcome to WildGear, your
                go-to destination for premium outdoor gear and apparel. We're
                thrilled to have you as part of our community of adventure
                seekers and nature enthusiasts. With the arrival of each season,
                we strive to bring you the latest and greatest in outdoor
                wearables to enhance your outdoor experiences. Why choose
                WildGear? Quality that Endures: We handpick our products from
                reputable brands known for their exceptional quality and
                durability. Each item is rigorously tested to withstand the
                rigors of the great outdoors, ensuring your gear remains
                reliable for every adventure. Functionality meets Style: We
                believe that practicality should never compromise style. Our
                collection combines functionality with contemporary designs,
                keeping you comfortable and looking great on your outdoor
                escapades. Expertise and Guidance: Our team of outdoor
                enthusiasts is here to help. Whether you need advice on
                selecting the right hiking boots or recommendations for the
                perfect waterproof jacket, we're dedicated to providing you with
                personalized assistance to meet your specific needs. Sustainable
                Adventure: We are committed to promoting sustainable practices
                and products. By choosing WildGear, you're supporting brands
                that prioritize environmentally friendly materials and
                manufacturing processes, reducing our impact on the planet. What
                can you expect from our newsletter? Exclusive Offers: Stay tuned
                for special discounts, seasonal sales, and limited-time
                promotions. Subscribers are the first to know about our exciting
                deals. New Arrivals: Be the first to explore our latest
                additions to the WildGear collection. From cutting-edge outdoor
                technology to innovative apparel, we're always on the lookout
                for gear that pushes boundaries. Expert Tips and Guides:
                Discover valuable insights and practical advice from seasoned
                outdoor enthusiasts. Our articles and guides cover everything
                from hiking tips to camping hacks, ensuring you're well-prepared
                for your outdoor adventures. Community Stories: We love hearing
                about your outdoor experiences. Share your stories, photos, and
                reviews with us, and we might feature you in our newsletter or
                social media channels. Let's inspire and motivate each other to
                explore the wild. Join the WildGear Community! Subscribe to our
                newsletter and become part of our growing community of outdoor
                enthusiasts. Don't miss out on the latest gear, exclusive
                offers, and informative content. Simply visit our website and
                enter your email in the subscription box at the bottom of the
                page. Get ready to embrace the wild with WildGear! Happy Trails,
                The WildGear Team{' '}
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
