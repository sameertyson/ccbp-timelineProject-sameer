// Write your code here

import {Component} from 'react'
import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    return (
      <div className="app-container">
        <h1>MY JOURNEY OF CCBP 4.0</h1>
        <Chrono
          theme={{
            primary: 'blue',
            secondary: 'white',
            cardBgColor: 'white',
            cardForeColor: 'violet',
            titleColor: 'blue',
          }}
          mode="VERTICAL_ALTERNATING"
          items={timelineItemsList}
          className="chrono-card-container"
          activeItemIndex={4}
          allowDynamicUpdate="true"
        >
          {timelineItemsList.map(item =>
            item.categoryId === 'PROJECT' ? (
              <ProjectTimelineCard key={item.id} projectDetails={item} />
            ) : (
              <CourseTimelineCard key={item.id} courseDetails={item} />
            ),
          )}
        </Chrono>
      </div>
    )
  }
}
export default TimelineView
