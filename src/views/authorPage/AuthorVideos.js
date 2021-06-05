
import React,{useState} from 'react'
import { AuthorVideoContainer,AuthorVideoWrap } from './AuthorPageElements'
import AuthImg from '../../assets/images/Naren/auth-img.png';
import { Link } from 'react-router-dom';
import Pagination from './pagination';

export default function AuthorVideos() {
    const [posts, setPosts] = useState([
        {
          userId: 1,
          id: 1,
          image: AuthImg,
          VideoTitle: "An interview with Sandro Loren",
        },
        {
            userId: 1,
            id: 1,
            image: AuthImg,
            VideoTitle: "An interview with Sandro Loren",
        },
        {
            userId: 1,
            id: 1,
            image: AuthImg,
            VideoTitle: "An interview with Sandro Loren",
        },
        {
            userId: 1,
            id: 1,
            image: AuthImg,
            VideoTitle: "An interview with Sandro Loren",
        },
        {
            userId: 1,
            id: 1,
            image: AuthImg,
            VideoTitle: "An interview with Sandro Loren",
        },
        {
            userId: 1,
            id: 1,
            image: AuthImg,
            VideoTitle: "An interview with Sandro Loren",
        },
      ]);
      const [showPerPage, setShowPerPage] = useState(6);
      const [pagination, setPagination] = useState({
        start: 0,
        end: showPerPage,
      });
    
      const onPaginationChange = (start, end) => {
        setPagination({ start: start, end: end });
      };

    return (
        <div>
            <AuthorVideoWrap>
                <AuthorVideoContainer>
                {posts.slice(pagination.start, pagination.end).map((post) => (
                  <div className="videoTile">
                    <img width="100" src={post.image} alt="video-image" />
                    <span id="box"></span>
                  </div>))}
                </AuthorVideoContainer>
            </AuthorVideoWrap>
            <Pagination
               showPerPage={showPerPage}
               onPaginationChange={onPaginationChange}
              total={posts.length}
             />
        </div>
    )
}
