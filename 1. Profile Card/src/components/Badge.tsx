import { getBadges } from './Data.tsx'
import './Badge.scss'

const Badge = () => {
  const badgeData = getBadges()

  return (
    <>
      <div className='badgeContainer'>
        {badgeData.map((badge) => {
          return (
            <div key={badge.id}>
              <div
                className='badgeStyle'
                style={{ backgroundColor: badge.backgroundColor }}
              >
                {badge.title}
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Badge
