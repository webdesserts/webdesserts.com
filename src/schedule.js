import * as React from 'react'
import styled from 'styled-components';
import { createElement as html } from 'react'

let Wrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  position: absolute;
  bottom: 4px;
  left: 32px;
  width: calc(100vw - 64px);
  & > * + * {
    margin-left: 4px;
  }
`

let Slot = styled.div`
  background-color: ${(props) => props.active ? 'var(--lite-1)' : 'var(--lite)'};
  height: 4px;
  width: calc(${(props) => props.hours} / 24 * 100%);
  flex-shrink: 1;
`

let Title = styled.div`
  position: absolute;
  top: -24px;
  font-size: var(--fs-1);
  color: var(--lite-1);
  width: 100%;
  text-align: left;
`

export class Schedule extends React.Component {
  constructor(props) {
    super(props)
    this.schedule = {
      local: [
        { hours: 5.5, active: false, name: 'sleep'   },
        { hours: 0.5, active: false, name: 'wake up' },
        { hours: 0.5, active: false, name: 'workout' },
        { hours: 0.5, active: false, name: 'shower'  },
        { hours: 0.5, active: false, name: 'eat'     },
        { hours: 0.5, active: false, name: 'beaker'  },
        { hours: 9.0, active: false, name: 'work'    },
        { hours: 1.0, active: false, name: 'breath'  },
        { hours: 2.0, active: false, name: 'beaker'  },
        { hours: 1.0, active: false, name: 'dinner'  },
        { hours: 0.5, active: false, name: 'sleepy'  },
        { hours: 2.5, active: false, name: 'sleep'   },
      ],
      remote: [
        { hours: 5.5, active: false, name: 'sleep'   },
        { hours: 0.5, active: false, name: 'wake up' },
        { hours: 0.5, active: false, name: 'shower'  },
        { hours: 0.5, active: false, name: 'eat'     },
        { hours: 1.0, active: false, name: 'drive'   },
        { hours: 8.0, active: false, name: 'work'    },
        { hours: 1.0, active: false, name: 'drive'   },
        { hours: 1.0, active: false, name: 'breath'  },
        { hours: 2.0, active: false, name: 'whatever'},
        { hours: 1.0, active: false, name: 'dinner'  },
        { hours: 0.5, active: false, name: 'sleepy'  },
        { hours: 2.5, active: false, name: 'sleep'   },
      ],
      weekend: [
        { hours: 24, active: false, name: 'whatever' },
      ]
    }
  }

  componentDidMount() { this.tick() }
  componentDidUpdate() { this.tick() }

  // update every 30 minutes
  tick() {
    let now = new Date(Date.now())
    let remaining = (30 - (now.getMinutes() % 30)) * 60 * 1000
    window.setTimeout(() => {
      this.forceUpdate();
    }, remaining)
  }

  getTodaysSchedule(now) {
    switch (now.getDay()) {
      case 1:
      case 3:
      case 5: return this.schedule.local
      case 2:
      case 4: return this.schedule.remote
      default: return this.schedule.weekend
    }
  }

  render() {
    let now = new Date(Date.now())
    let hour = now.getHours()
    let minutes = now.getMinutes()
    hour += Math.floor(minutes / 15) * .25

    let slots = this.getTodaysSchedule(now)

    let total = 0;
    let active_slot = slots[0].name

    for (let slot of slots) {
      if (total < hour) {
        slot.active = true;
        active_slot = slot.name
      }
      total += slot.hours
    }

    return html(Wrapper, null, [
      html(Title, null, [ active_slot ]),
      slots.map((props) => html(Slot, props))
    ])
  }
}