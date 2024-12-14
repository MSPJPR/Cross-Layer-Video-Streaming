const video = document.getElementById("video");
const bandwidthDisplay = document.getElementById("bandwidth");
const latencyDisplay = document.getElementById("latency");
const qualityDisplay = document.getElementById("quality");
const notification = document.getElementById("notification");

// Chart.js instances
const bandwidthCtx = document.getElementById('bandwidthChart').getContext('2d');
const latencyCtx = document.getElementById('latencyChart').getContext('2d');

const bandwidthChart = new Chart(bandwidthCtx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Bandwidth (Mbps)',
      data: [],
      borderColor: '#007BFF',
      backgroundColor: 'rgba(0, 123, 255, 0.2)',
      fill: true
    }]
  }
});

const latencyChart = new Chart(latencyCtx, {
  type: 'line',
  data: {
    labels: [],
    datasets: [{
      label: 'Latency (ms)',
      data: [],
      borderColor: '#28A745',
      backgroundColor: 'rgba(40, 167, 69, 0.2)',
      fill: true
    }]
  }
});

// Function to simulate bandwidth measurement
async function measureBandwidth() {
  const imageUrl = "https://via.placeholder.com/1000x1000";
  const startTime = Date.now();
  try {
    await fetch(imageUrl, { cache: "no-store" });
    const endTime = Date.now();
    const duration = (endTime - startTime) / 1000; // in seconds
    const fileSize = 1000 * 1000 * 8; // 1 MB in bits
    const bandwidth = (fileSize / duration / 1024 / 1024).toFixed(2); // Mbps
    bandwidthDisplay.textContent = `${bandwidth} Mbps`;

    updateChart(bandwidthChart, bandwidth);
    adjustVideoQuality(bandwidth);
  } catch (error) {
    bandwidthDisplay.textContent = "Error";
    showNotification("Bandwidth check failed.");
  }
}

// Function to measure latency
async function measureLatency() {
  const url = "https://www.google.com";
  const startTime = Date.now();
  try {
    await fetch(url, { cache: "no-store", mode: "no-cors" });
    const endTime = Date.now();
    const latency = endTime - startTime;
    latencyDisplay.textContent = `${latency} ms`;

    updateChart(latencyChart, latency);
  } catch (error) {
    latencyDisplay.textContent = "Error";
    showNotification("Latency check failed.");
  }
}

// Function to adjust video quality based on bandwidth
function adjustVideoQuality(bandwidth) {
  if (bandwidth > 3) {
    video.src = "https://www.w3schools.com/html/mov_bbb.mp4";
    qualityDisplay.textContent = "High (720p)";
  } else if (bandwidth > 1) {
    video.src = "https://www.w3schools.com/html/mov_bbb_480.mp4";
    qualityDisplay.textContent = "Medium (480p)";
  } else {
    video.src = "https://www.w3schools.com/html/mov_bbb_240.mp4";
    qualityDisplay.textContent = "Low (240p)";
    showNotification("Low bandwidth detected. Video quality set to Low.");
  }
}

// Function to update charts
function updateChart(chart, value) {
  const now = new Date().toLocaleTimeString();
  chart.data.labels.push(now);
  chart.data.datasets[0].data.push(value);
  if (chart.data.labels.length > 10) {
    chart.data.labels.shift();
    chart.data.datasets[0].data.shift();
  }
  chart.update();
}

// Function to show notifications
function showNotification(message) {
  notification.textContent = message;
  notification.classList.remove('hidden');
  setTimeout(() => {
    notification.classList.add('hidden');
  }, 5000);
}

// Periodically check network stats
setInterval(() => {
  measureBandwidth();
  measureLatency();
}, 5000);

// Initial check
measureBandwidth();
measureLatency();
