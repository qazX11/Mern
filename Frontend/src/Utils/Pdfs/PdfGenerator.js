import jsPDF from 'jspdf';
import 'jspdf-autotable';

class PdfGenerator {
  static generatePdf = (data, title, headers) => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text(title, doc.internal.pageSize.getWidth() / 2, 10, { align: 'center' });

    doc.setFontSize(14);
    doc.text(`Number of Vehicles: ${data.length}`, 10, 20);

    const generatedDate = new Date().toLocaleDateString();
    const generatedTime = new Date().toLocaleTimeString();
    doc.text(`Generated on: ${generatedDate} at ${generatedTime}`, 10, 30);

    doc.autoTable({
      head: [headers],
      body: data.map((item) => [
        item.name,
        item.email,
        item.type,
        item.number,
        item.front,
        item.rear,
        item.brand,
        new Date(item.serviceDate).toLocaleDateString(),
        item.fuel,
        item.milage,
        item.manufacture,
      ]),
      startY: 40,
    });

    doc.save(`${title}.pdf`);
  };
}

export default PdfGenerator;
