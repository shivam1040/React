import {Fragment} from 'react'
import Link from 'next/link'

function News(){
    return <Fragment>
                <h1>News</h1>
                <ul>
                    <li>
                        <Link href="/news/nextjs"></Link>
                    </li>
                    <li>Else</li>
                </ul>
            </Fragment>
}

export default News