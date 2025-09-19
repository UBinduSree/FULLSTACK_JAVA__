import React from "react";

function About({darkMode}) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6",color: darkMode ? "#ddd" : "#333" }} >
      <h1 style={{ color: "#34495e", textAlign:"center" }}>About SRIT</h1>

      <p>
        <strong>Srinivasa Ramanujan Institute of Technology (SRIT)</strong> is a 
        premier engineering institution dedicated to academic excellence, 
        research, and innovation. Named after the legendary mathematician 
        <em> Srinivasa Ramanujan</em>, the college inspires students to achieve 
        brilliance in both technical and personal growth.
      </p>

      <h2 style={{ color: "#34495e" }}>🎓 Academic Excellence</h2>
      <p>
        SRIT offers diverse <strong>undergraduate</strong> and 
        <strong> postgraduate</strong> programs in engineering and technology. 
        With experienced faculty and modern teaching methodologies, the 
        institution ensures that students are industry-ready.
      </p>

      <h2 style={{ color: "#34495e" }}>🏛️ Campus & Facilities</h2>
      <p>
        The campus provides state-of-the-art laboratories, a digital library, 
        innovation hubs, and collaborative learning spaces. Students also 
        benefit from a dynamic environment that balances academics with 
        cultural, sports, and extracurricular activities.
      </p>

      <h2 style={{ color: "#34495e" }}>🚀 Innovation & Entrepreneurship</h2>
      <p>
        SRIT encourages students to explore research and entrepreneurship 
        opportunities. Through workshops, hackathons, and incubation support, 
        the college nurtures future innovators and problem solvers.
      </p>

      <h2 style={{ color: "#34495e" }}>🌍 Community & Values</h2>
      <p>
        Beyond academics, SRIT emphasizes <strong>social responsibility</strong> 
        and community service. The institution instills values of leadership, 
        teamwork, and ethical responsibility, ensuring students contribute 
        positively to society.
      </p>

      <h3 style={{ textAlign: "center", marginTop: "30px", color: "#27ae60" }}>
        ✨ SRIT – Shaping Engineers, Innovators, and Leaders of Tomorrow ✨
      </h3>
    </div>
  );
}

export default About;
