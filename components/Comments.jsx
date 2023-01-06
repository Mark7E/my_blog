import React, { useEffect, useState } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';

import { getComments } from '../services';

const Comments = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => {
      setComments(result);
    });
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <div className="bg-white shadow-lg rounded-lg p-8 pb-12 mb-8">
          <h3 className="text-xl mb-8 font-semibold border-b pb-4 text-right">
            التعليقات
            {' '}
            {comments.length}
          </h3>
          {comments.map((comment, index) => (
            <div key={index} className="border-b border-gray-100 mb-4 pb-4 text-right">
              <p className="mb-4">
                {/* {moment(comment.createdAt).format('MMM DD, YYYY')}
                {' '}
                في */}
                {' '}
                <span className="font-semibold">{comment.name}</span>
              </p>
              <p className="whitespace-pre-line text-gray-600 w-full text-right">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Comments;