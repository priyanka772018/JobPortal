import React from 'react';

const Vacancies = () => (
  <div>
    <h2>Current Vacancies</h2>
    <table>
      <thead>
        <tr>
          <th>Post & Category-wise Break Up of Vacancies</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Name of the Post</th>
          <th>Vacancies</th>
          <th>UR</th>
          <th>EWS</th>
          <th>SC</th>
          <th>ST</th>
          <th>OBC(NCL)</th>
          <th>Total</th>
        </tr>
        <tr>
          <td>Assistant Grade-1 (HR)</td>
          <td>Current</td>
          <td>13</td>
          <td>2</td>
          <td>02</td>
          <td>03</td>
          <td>09</td>
          <td>29</td>
        </tr>
        <tr>
          <td>Assistant Grade-1 (F&A)</td>
          <td>Current</td>
          <td>08</td>
          <td>01</td>
          <td>02</td>
          <td>01</td>
          <td>05</td>
          <td>17</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Vacancies;
