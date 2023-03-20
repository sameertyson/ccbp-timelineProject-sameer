// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    categoryId,
    title,
    projectTitle,
    tagsList,
    description,
    imageUrl,
    duration,
    projectUrl,
  } = projectDetails
  console.log(projectDetails)
  return (
    <div className="project-time-line-card-container">
      <img src={imageUrl} alt={categoryId} className="projectImg" />
      <div className="heading-duration-con">
        <h1>{projectTitle}</h1>
        <div className="duration-container">
          <AiFillCalendar />
          <p className="duration-title">{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <a href={projectUrl} className="visit-title">
        Visit
      </a>
    </div>
  )
}
export default ProjectTimelineCard
