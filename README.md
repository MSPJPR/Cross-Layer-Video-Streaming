# Cross-Layer-Video-Streaming
Project Overview: Cross-Layer Video Streaming Platform

website link:https://roaring-platypus-96ddc5.netlify.app/

Objective

This project aims to create a cross-layer optimized video streaming platform that dynamically adjusts video quality based on real-time network conditions such as bandwidth and latency. The solution emphasizes Quality of Service (QoS) to enhance user experience, making it an excellent demonstration of cross-layer design principles in networking.


---

Key Features

1. Dynamic Video Quality Adjustment

The video quality (High, Medium, Low) adjusts based on available bandwidth:

High Quality: For bandwidth > 6 Mbps

Medium Quality: For bandwidth between 3–6 Mbps

Low Quality: For bandwidth < 3 Mbps




2. Real-Time Network Monitoring

Bandwidth and latency are simulated in real-time and displayed to the user.

Updated every 3 seconds to reflect dynamic changes in the network.



3. Interactive Graphs

Real-time line charts for both bandwidth and latency using the Chart.js library.

Provides a visual representation of the network conditions over time.



4. User Notifications

Notifications inform users when video quality changes based on current network conditions.



5. Responsive Design

The layout adapts to different screen sizes, making it mobile-friendly and suitable for various devices.





---

Files Structure

1. index.html

Structure and layout of the web interface.



2. style.css

Styling for the layout, including the video player, stats display, and graphs.



3. script.js

Logic for monitoring bandwidth and latency, updating video quality, and rendering charts.





---

Technologies Used

HTML5: Markup structure for the web interface.

CSS3: Styling for an interactive and responsive design.

JavaScript: Core logic for monitoring and adapting network parameters.

Chart.js: For real-time graph plotting.



---


This project highlights real-world cross-layer optimization concepts and demonstrates how adaptive techniques can enhance multimedia transmission over fluctuating network conditions.

