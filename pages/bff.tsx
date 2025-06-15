import Head from 'next/head';
import React from 'react';
import Image from 'next/image'; // Import next/image
import { sanity } from '../src/sanity/lib/client'
import { urlFor } from '../src/sanity/lib/sanityImage'; 

// Define a type for the props if you're using TypeScript
interface BoyfriendResumePageProps {
  profileImage?: any; // Replace 'any' with your Sanity image type
  galleryImages?: any[]; // Replace 'any' with your Sanity image type
}

const BoyfriendResumePage: React.FC<BoyfriendResumePageProps> = ({ profileImage, galleryImages }) => {
  return (
    <>
      <Head>
        <title>Boyfriend Application - Tristan</title>
        <style>{`
          body {
            font-family: 'Arial', 'Helvetica', sans-serif; /* More neutral font */
            background-color: #e0f7fa; /* Light Cyan */
            color: #00796b; /* Dark Teal */
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
          }
          .container {
            background-color: #ffffff; /* White */
            padding: 30px;
            border-radius: 15px; /* Slightly less rounded */
            box-shadow: 0 0 20px rgba(0, 121, 107, 0.3); /* Dark Teal shadow */
            max-width: 800px;
            text-align: center;
            border: 3px solid #00796b; /* Solid Dark Teal border */
          }
          h1, h2, h3 {
            color: #004d40; /* Very Dark Teal */
          }
          h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            text-shadow: 1px 1px #b2dfdb; /* Light Teal shadow */
          }
          h2 {
            font-size: 1.8em;
            margin-top: 30px;
            margin-bottom: 15px;
            border-bottom: 2px solid #b2dfdb; /* Light Teal underline */
            padding-bottom: 5px;
          }
          h3 {
            font-size: 1.4em;
            margin-top: 20px;
            margin-bottom: 10px;
          }
          p, li {
            font-size: 1.1em;
            line-height: 1.6;
            color: #00796b; /* Dark Teal */
          }
          ul {
            list-style-type: '🔹 '; /* Diamond bullet points */
            padding-left: 20px;
            text-align: left;
          }
          .emoji {
            font-size: 1.2em; /* Slightly smaller emojis */
          }
          .header-emoji {
            font-size: 2.5em; /* Slightly smaller header emoji */
            display: block;
            margin-bottom: 10px;
          }
          .footer-text {
            margin-top: 40px;
            font-size: 1.2em;
            color: #004d40; /* Very Dark Teal */
            font-weight: bold;
          }
          .signature {
            margin-top: 30px;
            font-size: 1.5em;
            font-style: italic;
            color: #00796b; /* Dark Teal */
          }
          .profile-image-container {
            margin-bottom: 20px;
            border-radius: 50%;
            overflow: hidden;
            width: 150px;
            height: 150px;
            margin-left: auto;
            margin-right: auto;
            box-shadow: 0 0 15px rgba(0, 121, 107, 0.5);
            border: 3px solid #004d40;
          }
          .gallery-container {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 15px;
            margin-top: 20px;
          }
          .gallery-image-container {
            border-radius: 10px;
            overflow: hidden;
            width: 180px; /* Adjust as needed */
            height: 180px; /* Adjust as needed */
            box-shadow: 0 0 10px rgba(0, 121, 107, 0.4);
            border: 2px solid #004d40;
          }
          .gallery-image-container img {
            object-fit: cover;
            width: 100%;
            height: 100%;
          }
        `}</style>
      </Head>
      <div className="container">
        <span className="header-emoji" role="img" aria-label="letter">📨</span>
        <h1>Application – Tristan</h1>

        {profileImage && (
          <div className="profile-image-container">
            <Image
              src={urlFor(profileImage).width(300).height(300).url()}
              alt="Tristan Hill - Profile Picture"
              width={150}
              height={150}
              objectFit="cover"
            />
          </div>
        )}

        <p><strong>Position Inquired About:</strong> Boyfriend</p>
        <p><strong>Availability:</strong> Full-time, emotionally present, occasionally goofy <span className="emoji" role="img" aria-label="wink">😉</span></p>
        <p><strong>Location:</strong> Somewhere between the swimming pool, the gym, and your heart <span className="emoji" role="img" aria-label="sparkling heart">💖</span></p>

        <h2><span className="emoji" role="img" aria-label="wave">👋</span> About Me:</h2>
        <p>
          Hi, I’m Tristan — a sporty, easygoing, and slightly chaotic mix of energy and empathy.
          I coach swimmers, lift weights, row with purpose, and travel every chance I get.
          I’ve been from Japan to California, Hong Kong to Cyprus, and still believe the best
          journeys are shared with someone special (bonus points if you like snacks and sunsets <span className="emoji" role="img" aria-label="sunset">🌅</span>).
        </p>
        <p>
          I’ve got a calm head and a warm heart — I know when to listen, when to give advice,
          and when to just be your person. Whether it’s cheering you on when you need motivation
          or making you laugh when you don’t even feel like smiling, I’m your guy. <span className="emoji" role="img" aria-label="thumbs up">👍</span>
        </p>

        <h2><span className="emoji" role="img" aria-label="sparkles">✨</span> Relationship Perks:</h2>
        <ul>
          <li><span className="emoji" role="img" aria-label="swimmer">🏊‍♂️</span> Athletic & outdoorsy – competitive swimmer, gym goer, rower, adventure-ready</li>
          <li><span className="emoji" role="img" aria-label="brain">🧠</span> Thoughtful – always trying to be better, for myself and the people I care about</li>
          <li><span className="emoji" role="img" aria-label="map">🗺️</span> Well-travelled – always down for exploring new places or a quiet weekend getaway</li>
          <li><span className="emoji" role="img" aria-label="movie clapper">🎬</span> Movie-night certified – Dune is top-tier, and I will absolutely debate plot twists with you</li>
          <li><span className="emoji" role="img" aria-label="heart hands">🫶</span> Emotionally solid – calm, patient, supportive, with a soft spot for late-night chats</li>
          <li><span className="emoji" role="img" aria-label="juice box">🧃</span> Slightly sarcastic but knows when to be sweet (and means both)</li>
        </ul>

        <h2><span className="emoji" role="img" aria-label="popcorn">🍿</span> Extras:</h2>
        <ul>
          <li>10/10 back-scratcher and hug-giver <span className="emoji" role="img" aria-label="hugging face">🤗</span></li>
          <li>Fluent in sarcasm, with minor qualifications in bad dance moves</li>
          <li>Can fix tech issues and open jam jars – rare dual class</li>
          <li>Consistently chooses you in games that allow it (yes, even Overcooked)</li>
          <li>Will offer you the last fry (unless it’s curly)</li>
          <li>Can swim in open water and help carry shopping bags in one trip</li>
          <li>Won’t ghost – replies quickly and shows up when it matters</li>
          <li>Gets along with parents, friends, and possibly dogs <span className="emoji" role="img" aria-label="dog">🐕</span></li>
          <li>Big on honesty, effort, and cuddles</li>
          <li>Bonus: I’ve got a really nice smile (or so I’ve been told)</li>
        </ul>

        <h2><span className="emoji" role="img" aria-label="package">📦</span> What I Come With:</h2>
        <ul>
          <li>Emotional availability pre-installed</li>
          <li>No ex drama, shady past, or hidden playlists of sad break-up songs</li>
          <li>Regular software updates: I believe in growth, communication, and asking, "How can I be better?"</li>
          <li>Occasional bugs: might get moody when hungry, but nothing a snack can't fix</li>
        </ul>

        <h2><span className="emoji" role="img" aria-label="tools">🛠</span> Maintenance Notes:</h2>
        <ul>
          <li>Recharge with gym, swimming, or a cuddle</li>
          <li>Feed regularly (burgers, sushi, or pasta preferred)</li>
          <li>Occasionally needs to be told to slow down and just relax</li>
          <li>Thrives on affirmations, touch, and shared Spotify playlists <span className="emoji" role="img" aria-label="music notes">🎶</span></li>
        </ul>

        {galleryImages && galleryImages.length > 0 && (
          <>
            <h2><span className="emoji" role="img" aria-label="camera">📸</span> Photo Highlights:</h2>
            <div className="gallery-container">
              {galleryImages.map((image, index) => (
                <div key={index} className="gallery-image-container">
                  <Image
                    src={urlFor(image).width(360).height(360).url()}
                    alt={`Gallery image ${index + 1}`}
                    width={180}
                    height={180}
                    objectFit="cover"
                  />
                </div>
              ))}
            </div>
          </>
        )}

        <h2><span className="emoji" role="img" aria-label="speech bubble">💬</span> Testimonials:</h2>
        <p>"Makes a mean hot chocolate and even better conversation." – My Nan probably</p>
        <p>"10/10 coach and even better person." – Someone I probably helped swim faster</p>
        <p>"Didn’t expect to fall for the guy who brings snacks to movie night, but here we are." – Future you?</p>

        <h2><span className="emoji" role="img" aria-label="pen">📝</span> Why Choose Me?</h2>
        <p>
          Because I’m not here for surface-level stuff. I want the kind of relationship where we
          root for each other, have real conversations, and turn even the boring days into good
          memories. I’ll show up for you — whether it’s after a long day, during a hard time,
          or just because it’s Tuesday and you deserve flowers. <span className="emoji" role="img" aria-label="bouquet">💐</span>
        </p>

        <p><strong>Looking for:</strong> Someone kind, fun, open-minded, and ready for something with epic potential. <span className="emoji" role="img" aria-label="star-struck">🤩</span></p>
        <p><strong>Not looking for:</strong> Games (unless it’s Mario Kart, in which case, prepare to lose <span className="emoji" role="img" aria-label="nail polish">💅</span>)</p>

        <p className="footer-text">
          So… want to do life together, one laugh, gym sesh, or late-night swim at a time?
        </p>
        <p className="footer-text">
          Let’s make it something special. <span className="emoji" role="img" aria-label="star">🌟</span>
        </p>
        <p className="signature">
          – Tristan <span style={{ color: '#007bff' }}>💙</span>
        </p>
      </div>
    </>
  );
};

export async function getStaticProps() {
  // Example: Fetch a specific document that contains image references
  // Replace 'yourPageSpecificImagesDocumentId' with the actual ID or a query to find it.
  // Or, query for images with specific tags.
  let profileImage = null;
  let galleryImages = [];

  try {
    // Example query for a document holding references to these images
    // You'll need to create a similar structure in your Sanity studio
    const imageData = await sanity.fetch(`
      *[_type == "bffPageAssets" && identifier == "tristan-hill-bff"][0] {
        profilePicture,
        gallery[]
      }
    `);

    if (imageData) {
      profileImage = imageData.profilePicture || null;
      galleryImages = imageData.gallery || [];
    }
  } catch (error) {
    console.error("Failed to fetch images from Sanity:", error);
    // Fallback or error handling
  }

  // Fallback to placeholder images if Sanity fetch fails or returns no data
  // This is just for demonstration; remove or adjust as needed.
  if (!profileImage) {
    // Placeholder - replace with a real image URL or remove
    // profileImage = { asset: { _ref: 'image-someAssetId-png' } }; // Example Sanity-like structure
  }
  if (galleryImages.length === 0) {
    // Placeholder - replace with real image URLs or remove
    // galleryImages = [
    //   { asset: { _ref: 'image-anotherAssetId1-jpeg' } },
    //   { asset: { _ref: 'image-anotherAssetId2-jpeg' } },
    //   { asset: { _ref: 'image-anotherAssetId3-jpeg' } },
    // ];
  }

  return {
    props: {
      profileImage,
      galleryImages,
    },
    revalidate: 60, // Optional: revalidate the data every 60 seconds
  };
}

export default BoyfriendResumePage;
