export default function json2html(data) {
  // Extract all unique keys for the table headers
  const headers = Array.from(new Set(data.flatMap(Object.keys)));

  // Build HTML table string
  let html = `<table data-user="kamranimaz.professional@gmail.com"><thead><tr>`;
  headers.forEach(header => html += `<th>${header}</th>`);
  html += `</tr></thead><tbody>`;

  // Populate table rows
  data.forEach(row => {
    html += `<tr>`;
    headers.forEach(header => html += `<td>${row[header] || ""}</td>`);
    html += `</tr>`;
  });
  html += `</tbody></table>`;

  return html;
}
