// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const getTags = item => {
    const {name} = item
    return <p className="tag-item">{name}</p>
  }

  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div>
      <div className="heading-duration-con">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p className="duration-title">{duration}</p>
        </div>
      </div>

      <p>{description}</p>
      <div className="tag-list-container">
        {tagsList.map(item => getTags(item))}
      </div>
    </div>
  )
}
export default CourseTimelineCard
