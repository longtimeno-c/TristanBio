import { NextApiRequest, NextApiResponse } from 'next';
import { renderToBuffer } from '@react-pdf/renderer';
import { CVDocument } from '@/components/CVDocument';
import React from 'react';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'GET') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    // Generate PDF using the component
    const element = React.createElement(CVDocument);
    const pdfBuffer = await renderToBuffer(element);

    // Set response headers
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="TristanHill_CV.pdf"');

    // Send the PDF
    res.send(pdfBuffer);
  } catch (error) {
    console.error('Error generating PDF:', error);
    res.status(500).json({ message: 'Error generating PDF' });
  }
}