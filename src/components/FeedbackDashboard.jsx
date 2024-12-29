
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Table, TableBody, TableHead } from '@mui/material';

const FeedbackDashboard = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const fetchFeedbacks = async () => {
    const { data } = await axios.get('http://localhost:4000/feed/get');
    setFeedbacks(data);
  };

  const deleteFeedback = async (id) => {
    await axios.delete('http://localhost:4000/feed/delete/:id');
    fetchFeedbacks();
  };

  return (
    <div className="container">
      <h1>Feedback Dashboard</h1>
      <Table className="table">
        <TableHead>
          <tr>
            <th>CourseID</th>
            <th>CourseName</th>
            <th>CourseDuration</th>
            <th>Rating</th>
          </tr>
        </TableHead>
        <TableBody>
          {feedbacks.map(feedback => (
            <tr key={feedback._id}>
              <td>{feedback.CourseID}</td>
              <td>{feedback.CourseName}</td>
              <td>{feedback.CourseDuration}</td>
              <td>{feedback. OverallFeedback}</td>

              <td>
                <Button className="btn btn-warning">Update</Button>
                <Button className="btn btn-danger" onClick={() => deleteFeedback(feedback._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default FeedbackDashboard;