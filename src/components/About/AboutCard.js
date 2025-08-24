import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Leandro De Assis </span>
            from <span className="purple"> Florida.</span>
            <br />
            I work as a Senior Full Stack Developer & Product Manager at Image Access, where I’ve led projects in web development, product launches, and team management.
            <br />
            I hold a Bachelor’s degree in Computer Science from Florida Atlantic University, and over the years I’ve specialized in building scalable applications with React, Node.js, TypeScript, and Python while also working with tools like GoHighLevel, Zapier, and n8n to automate workflows.
            Mesra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Leandro De Assis</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
