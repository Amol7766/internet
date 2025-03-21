document.getElementById('startBtn').addEventListener('click', startSpeedTest);

async function startSpeedTest() {
    document.getElementById('loading').style.display = 'block';
    document.getElementById('results').style.display = 'none';

    // Create a new Speedtest instance
    const speedTest = new Speedtest();

    // Start the speed test
    try {
        const result = await speedTest.getSpeed();

        // Extract download and upload speeds
        const downloadSpeed = (result.download / 1e6).toFixed(2);  // Convert to Mbps
        const uploadSpeed = (result.upload / 1e6).toFixed(2);  // Convert to Mbps
        const ping = result.ping;

        // Display results
        document.getElementById('downloadSpeed').textContent = downloadSpeed;
        document.getElementById('uploadSpeed').textContent = uploadSpeed;
        document.getElementById('ping').textContent = ping;

        // Hide loading and show results
        document.getElementById('loading').style.display = 'none';
        document.getElementById('results').style.display = 'block';

    } catch (error) {
        console.error('Error testing speed:', error);
        alert('Speed test failed. Please try again.');
        document.getElementById('loading').style.display = 'none';
    }
}
