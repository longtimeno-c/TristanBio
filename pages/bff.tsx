import Head from 'next/head';
import React, { useState } from 'react';
import { sanity } from '../src/sanity/lib/client'
import { urlFor } from '../src/sanity/lib/sanityImage'; 

// Define a type for the props if you're using TypeScript
interface BoyfriendResumePageProps {
  profileImage?: any; // Replace 'any' with your Sanity image type
  galleryImages?: any[]; // Replace 'any' with your Sanity image type
}

const BoyfriendResumePage: React.FC<BoyfriendResumePageProps> = ({ profileImage, galleryImages }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [showAllGalleryImages, setShowAllGalleryImages] = useState(false);
  const [responderName, setResponderName] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState('');

  const initialImageCount = 3;

  const openImageModal = (imageUrl: string) => setSelectedImage(imageUrl);
  const closeImageModal = () => setSelectedImage(null);
  const toggleShowAllGalleryImages = () => setShowAllGalleryImages(!showAllGalleryImages);

  const displayedGalleryImages = showAllGalleryImages ? galleryImages : galleryImages?.slice(0, initialImageCount);

  const handleDecision = async (decision: 'approved' | 'denied') => {
    if (!responderName.trim()) {
      setSubmissionStatus('error');
      setSubmissionMessage('Please enter your name before submitting.');
      return;
    }
    setSubmissionStatus('submitting');
    setSubmissionMessage('');
    try {
      await sanity.create({
        _type: 'bffResponse',
        name: responderName.trim(),
        decision: decision,
        submittedAt: new Date().toISOString(),
        applicant: 'tristan-hill-bff', // Make sure this matches an identifier if you have multiple BFF pages
      });
      setSubmissionStatus('success');
      setSubmissionMessage(`Thank you, ${responderName.trim()}! Your decision has been recorded.`);
      setResponderName(''); // Clear name after successful submission
    } catch (error) {
      console.error('Failed to submit decision to Sanity:', error);
      setSubmissionStatus('error');
      setSubmissionMessage('Sorry, there was an error submitting your decision. Please try again.');
    }
  };

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
            cursor: pointer;
          }
          .show-more-less-button {
            background-color: #00796b; /* Dark Teal */
            color: white;
            border: none;
            padding: 8px 15px;
            border-radius: 5px;
            cursor: pointer;
            font-size: 0.9em;
            margin-top: 15px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .show-more-less-button:hover {
            background-color: #004d40; /* Very Dark Teal */
          }
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.75);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1000;
          }
          .modal-content {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            position: relative;
            max-width: 90vw;
            max-height: 90vh;
          }
          .modal-image {
            max-width: 100%;
            max-height: 80vh;
            display: block;
            margin: 0 auto;
          }
          .modal-close-button {
            position: absolute;
            top: 10px;
            right: 10px;
            background: #ff6b6b;
            color: white;
            border: none;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            font-size: 20px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .decision-section {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 2px solid #b2dfdb; /* Light Teal separator */
          }
          .decision-section h2 {
            margin-bottom: 20px;
          }
          .name-input {
            padding: 10px;
            border: 2px solid #00796b; /* Dark Teal border */
            border-radius: 5px;
            font-size: 1em;
            margin-bottom: 20px;
            width: calc(100% - 24px); /* Adjust for padding and border */
            max-width: 400px;
            display: block;
            margin-left: auto;
            margin-right: auto;
          }
          .decision-buttons button {
            background-color: #00796b; /* Dark Teal */
            color: white;
            border: none;
            padding: 12px 25px;
            border-radius: 8px;
            cursor: pointer;
            font-size: 1.1em;
            font-weight: bold;
            margin: 0 10px;
            transition: background-color 0.3s ease;
          }
          .decision-buttons button.approve:hover {
            background-color: #004d40; /* Very Dark Teal for approve hover */
          }
          .decision-buttons button.deny {
            background-color: #d32f2f; /* Red for deny */
          }
          .decision-buttons button.deny:hover {
            background-color: #b71c1c; /* Darker Red for deny hover */
          }
          .submission-message {
            margin-top: 20px;
            font-size: 1em;
          }
          .submission-message.success {
            color: #004d40; /* Very Dark Teal for success */
          }
          .submission-message.error {
            color: #d32f2f; /* Red for error */
          }
        `}</style>
      </Head>
      <div className="container">
        <span className="header-emoji" role="img" aria-label="letter">📨</span>
        <h1>Boyfriend Application</h1>

        {profileImage && (
          <div className="profile-image-container">
            <img
              src={urlFor(profileImage).width(150).height(150).url()}
              alt="Tristan - Profile Picture"
              style={{ objectFit: 'cover', width: '100%', height: '100%' }}
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
          <li>10/10 back-scratcher and hug-giver</li>
          <li>Fluent in sarcasm, with minor qualifications in bad dance moves</li>
          <li>Will offer you the last chip with my fish and chips</li>
          <li>Will help carry shopping bags in one trip</li>
          <li>Won’t ghost – replies embarassingly quickly (although can end up spending hours offline working) and shows up when it matters</li>
          <li>Gets along with parents, friends, and dogs <span className="emoji" role="img" aria-label="dog">🐕</span></li>
          <li>Big on honesty, effort, and cuddles</li>
          <li>Bonus: I’ve got a really nice smile (or so I’ve been told)</li>
        </ul>

        <h2><span className="emoji" role="img" aria-label="package">📦</span> What I Come With:</h2>
        <ul>
          <li>Emotional availability pre-installed</li>
          <li>No ex drama, shady past, or hidden playlists of sad break-up songs</li>
          <li>Regular software updates: I believe in growth, communication, and asking, "How can we be better?"</li>
          <li>Occasional bugs: might get moody when hungry, but nothing a good snack can't fix</li>
        </ul>

        <h2><span className="emoji" role="img" aria-label="tools">🛠</span> Maintenance Notes:</h2>
        <ul>
          <li>Recharge with gym, swimming, or a hot cuddle</li>
          <li>Feed regularly (burgers, sushi, or pasta preferred)</li>
          <li>Occasionally needs to be told to slow down and just relax</li>
          <li>Thrives on affirmations, touch, and shared Spotify playlists <span className="emoji" role="img" aria-label="music notes">🎶</span></li>
        </ul>

        {galleryImages && galleryImages.length > 0 && (
          <>
            <h2><span className="emoji" role="img" aria-label="camera">📸</span> Photo Highlights:</h2>
            <div className="gallery-container">
              {displayedGalleryImages && displayedGalleryImages.map((image, index) => (
                <div 
                  key={index} 
                  className="gallery-image-container"
                  onClick={() => openImageModal(urlFor(image).url())}
                >
                  <img
                    src={urlFor(image).width(180).height(180).url()}
                    alt={`Gallery image ${index + 1}`}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                  />
                </div>
              ))}
            </div>
            {galleryImages.length > initialImageCount && (
              <button onClick={toggleShowAllGalleryImages} className="show-more-less-button">
                {showAllGalleryImages ? 'Show Less' : `Show More (${galleryImages.length - initialImageCount} more)`}
              </button>
            )}
          </>
        )}

        {selectedImage && (
          <div className="modal-overlay" onClick={closeImageModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close-button" onClick={closeImageModal}>&times;</button>
              <img src={selectedImage} alt="Enlarged gallery view" className="modal-image" />
            </div>
          </div>
        )}

        <h2><span className="emoji" role="img" aria-label="speech bubble">💬</span> Testimonials:</h2>
        <p>"Makes a mean hot chocolate and even better conversation." – My Nan probably</p>
        <p>"Such a great guy" - My English teacher I suppose</p>
        <p>"Didn’t expect to fall for the guy who brings snacks to movie night, but here we are." – Future you?</p>

        <h2><span className="emoji" role="img" aria-label="pen">📝</span> Why Choose Me?</h2>
        <p>
          Because I’m not here for surface-level stuff. I want the kind of relationship where we
          root for each other, have real conversations, and turn even the boring days into good
          memories. I’ll show up for you — whether it’s after a long day, during a hard time,
          or just because it’s Tuesday and you deserve flowers. <span className="emoji" role="img" aria-label="bouquet">💐</span>
        </p>

        <p><strong>Looking for:</strong> Someone kind, fun, open-minded, and laid back. <span className="emoji" role="img" aria-label="star-struck">🤩</span></p>
        <p><strong>Not looking for:</strong> Games (unless it’s Mario Kart, in which case, prepare to lose <span className="emoji" role="img" aria-label="nail polish">💅</span>)</p>

        <p className="footer-text">
          So… what did you think? is there potential here? <span className="emoji" role="img" aria-label="thinking">🤔</span>
        </p>
        <p className="footer-text">
          Your future boyfriend...
        </p>
        <p className="signature">
          – Tristan
        </p>

        {/* Decision Section */}
        <div className="decision-section">
          <h2><span className="emoji" role="img" aria-label="ballot box">🗳️</span> Your Verdict:</h2>
          {submissionStatus !== 'success' && (
            <>
              <input 
                type="text"
                placeholder="Your Name"
                className="name-input"
                value={responderName}
                onChange={(e) => setResponderName(e.target.value)}
                disabled={submissionStatus === 'submitting'}
              />
              <div className="decision-buttons">
                <button 
                  onClick={() => handleDecision('approved')} 
                  disabled={submissionStatus === 'submitting' || !responderName.trim()}
                  className="approve"
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 'Approve'}
                </button>
                <button 
                  onClick={() => handleDecision('denied')} 
                  disabled={submissionStatus === 'submitting' || !responderName.trim()}
                  className="deny"
                >
                  {submissionStatus === 'submitting' ? 'Submitting...' : 'Deny'}
                </button>
              </div>
            </>
          )}
          {submissionMessage && (
            <p className={`submission-message ${submissionStatus}`}>{submissionMessage}</p>
          )}
        </div>
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
        gallery
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
