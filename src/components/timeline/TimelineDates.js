import React, { Component } from 'react'
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineOppositeContent, TimelineSeparator } from '@mui/lab';

export class TimelineDates extends Component {
  render() {
    return (
      <div>
        <Timeline>
          <TimelineItem>
            <TimelineOppositeContent className='timeline-year-container'>
              <p className='timeline-year'>1972</p>
            </TimelineOppositeContent>
            <TimelineSeparator className='timeline-separator-start timeline-separator'>
              <TimelineDot className='black no-box-shadow' />
              <TimelineConnector className='black timeline-first-and-last-separator' />
            </TimelineSeparator>
            <TimelineContent className='timeline-story-container'>
              <div className='section'>
                I started my career as a house painter on August 4, 1972 under the employ of a German master painter, Hermann Brummer. I was 18 years of age.
                Hermann was an independent painting contractor in the city of Penticton, British Columbia.
                For five years, Hermann and his son, Gerry, gave me an apprenticeship in the painting trade. It was an extensive and diverse experience for which I have always been grateful.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent className='timeline-year-container'>
              <p className='timeline-year'>1977</p>
            </TimelineOppositeContent>
            <TimelineSeparator className='timeline-separator'>
              <TimelineConnector className='black' />
              <TimelineDot className='black no-box-shadow' />
              <TimelineConnector className='black' />
            </TimelineSeparator>
            <TimelineContent className='timeline-story-container'>
              <div className='section'>
                I had a solid set of painting skills and decided to move to Edmonton, Alberta where I had family.
                I registered the name, "Reliable Painter," in Edmonton on November 25, 1977 and began finding clients and building a reputation for dependability and quality workmanship.
                When I found clients I made certain that they were always completely satisfied.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent className='timeline-year-container'>
              <p className='timeline-year'>1988</p>
            </TimelineOppositeContent>
            <TimelineSeparator className='timeline-separator'>
              <TimelineConnector className='black' />
              <TimelineDot className='black no-box-shadow' />
              <TimelineConnector className='black' />
            </TimelineSeparator>
            <TimelineContent className='timeline-story-container'>
              <div className='section'>
                I took on my first full time painter, so I changed the name of my company to "Reliable Painters," which it has remained to this day.
                Although I have had wonderful people in my employ over the years, it's been my choice—in the past 20 years—to work alone.
              </div>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent className='timeline-year-container'>
              <p className='timeline-year'>2024</p>
            </TimelineOppositeContent>
            <TimelineSeparator className='timeline-separator'>
              <TimelineConnector className='black timeline-first-and-last-separator' />
              <TimelineDot className='black no-box-shadow' />
            </TimelineSeparator>
            <TimelineContent className='timeline-story-container'>
              <div className='section'>
                The 50+ years since I first picked up a paint brush have flown by.
                Reliable Painters is a name that is trusted by home owners in Edmonton and the surrounding area.
                In over 50 years of continuous business, there has never been a complaint to the Better Business Bureau in regards to my services.
              </div>
            </TimelineContent>
          </TimelineItem>

        </Timeline>
      </div>
    )
  }
}

export default TimelineDates