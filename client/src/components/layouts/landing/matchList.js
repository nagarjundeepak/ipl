import React, {useState} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import Pagination from './paginate';
import {setMatch} from '../../../store/actions/currentMatchActions';

function MatchList({data, query, setData}) {
  const [currentPage, setCurrentPage] = useState (1);
  if (!data) {
    return (
      <div className="container mt-3">
        loading...
      </div>
    );
  }
  // change page
  const paginate = number => {
    setCurrentPage (number);
  };
  // get current posts using Array Slice property
  const indexOfLastPost = currentPage * 10;
  const indexOfFirstPage = indexOfLastPost - 10;
  let filteredposts = data.matches.filter (
    o => o.season === query.year.toString ()
  );
  if (query.venue != null && query.venue !== 'Select') {
    filteredposts = filteredposts.filter (u => u.city === query.venue);
  }
  if (query.team != null && query.team !== 'Select') {
    let res = [];
    filteredposts.map (item => {
      if (item.team1 === query.team || item.team2 === query.team) {
        res.push (item);
      }
    });
    filteredposts = res;
  }
  const posts = filteredposts.slice (indexOfFirstPage, indexOfLastPost);

  if (posts.length === 0) {
    return <div className="label text-muted">Sorry no matches available</div>;
  }

  return (
    <div className="container mt-3">
      <div className="mt-3 mb-3">
        {posts.map (post => {
          return (
            <Link to="/details" className="matchListCard" key={post.id}>
              <div
                className="card mb-3 matchCard"
                onClick={() => setData (post)}
              >
                <div className="card-body">
                  <div className="card-title">
                    {post.winner === post.team1
                      ? <b>{post.team1}</b>
                      : post.team1}
                    {' '}
                    vs
                    {' '}
                    {post.winner === post.team2
                      ? <b>{post.team2}</b>
                      : post.team2}
                  </div>
                  <div className="card-subtitle text-muted">
                    Year: {post.season} Venue: {post.venue}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <Pagination totalPosts={filteredposts.length} paginate={paginate} />
    </div>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    setData: data => {
      dispatch (setMatch (data));
    },
  };
};

export default connect (null, mapDispatchToProps) (MatchList);
