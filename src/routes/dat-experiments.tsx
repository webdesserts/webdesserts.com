import * as React from 'react'
import { PageComponentProps } from '../page'
import { CardList } from '../common/cards'

let experiments = [{
  title: `WebTerm`,
  url: `https://github.com/webdesserts/webterm`,
  description: `An attempt to continue Paul Frazee's efforts to build a terminal for the web.`
}, {
  title: `Worst Counter`,
  url: `dat://1df2e5d1631e1047cc4a70d3df56ca306805fa2d852aaf4d62ae19065635ecef/`,
  description: `This app writes to a single file as fast as it can. Basically made it to try to break things`
}]

export function DatExperiments(props: PageComponentProps) {
  return (
    <article>
      <CardList cards={experiments} />
    </article>
  )
}




