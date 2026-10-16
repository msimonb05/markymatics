import aseanBadge from '../assets/certifications/ai-ready-asean-logo.png';
import aseanCertificate from '../assets/certifications/ai-ready-asean-ai-fundamentals-certificate.webp';
import cyberBadge from '../assets/certifications/cisco-introduction-to-cybersecurity-badge.png';
import cyberCertificate from '../assets/certifications/cisco-introduction-to-cybersecurity-certificate.webp';
import ccnaBadge from '../assets/certifications/cisco-ccna-introduction-to-networks-badge.png';
import ccnaCertificate from '../assets/certifications/cisco-ccna-introduction-to-networks-certificate.webp';

// Newest first. Cisco descriptions and skills are the issuer's own, from Credly.
export const certifications = [
	{
		id: 'ai-fundamentals',
		name: 'AI Fundamentals',
		issuer: 'AI Ready ASEAN · ASEAN Foundation',
		issued: 'Apr 2026',
		badge: aseanBadge,
		certificate: aseanCertificate,
		description:
			'Completed all 15 AI learning modules (12 hours) of AI Ready ASEAN, an ASEAN Foundation programme supported by Google.org. The modules cover how AI works, generative AI and prompting, AI ethics, data privacy and AI safety, and building simple AI-based tools.',
		skills: ['Artificial Intelligence (AI)', 'Generative AI', 'Prompting', 'Responsible AI'],
		pdf: '/certificates/mark-simon-bringas-ai-ready-asean-ai-fundamentals.pdf',
	},
	{
		id: 'introduction-to-cybersecurity',
		name: 'Introduction to Cybersecurity',
		issuer: 'Cisco Networking Academy',
		issued: 'Feb 2025',
		badge: cyberBadge,
		certificate: cyberCertificate,
		description:
			'Cisco verifies the earner of this badge successfully completed the Introduction to Cybersecurity course. The holder of this student-level credential has introductory knowledge of cybersecurity, including the global implications of cyber threats on industries, and why cybersecurity is a growing profession. They understand vulnerabilities and threat detection and defense. They also have insight into opportunities available with pursuing cybersecurity certifications.',
		skills: ['Cyber Best Practices', 'Cybersecurity', 'Network Vulnerabilities', 'Privacy And Data Confidentiality', 'Threat Detection'],
		credly: 'https://www.credly.com/badges/99925fab-cfda-4562-a04e-d76cefb9de51',
		pdf: '/certificates/mark-simon-bringas-cisco-introduction-to-cybersecurity.pdf',
	},
	{
		id: 'ccna-introduction-to-networks',
		name: 'CCNA: Introduction to Networks',
		issuer: 'Cisco Networking Academy',
		issued: 'May 2024',
		badge: ccnaBadge,
		certificate: ccnaCertificate,
		description:
			'Cisco verifies the earner of this badge successfully completed the Introduction to Networks course and achieved this student level credential. Earner has knowledge of networking including IP addressing, how physical, data link protocols support Ethernet, can configure connectivity between switches, routers and end devices to provide access to local and remote resources. Earner participated in up to 54 labs and accumulated up to 14 hours of hands-on labs using Cisco hardware or Packet Tracer tool.',
		skills: ['Ethernet', 'IP Subnetting', 'IP connectivity', 'IP services', 'IPv4 And IPv6 Addressing', 'Network Fundamentals', 'Security Fundamentals', 'Switching'],
		credly: 'https://www.credly.com/badges/7bf23ea0-e5b1-49ab-b2a2-ed40e33a6d1a',
		pdf: '/certificates/mark-simon-bringas-cisco-ccna-introduction-to-networks.pdf',
	},
];
