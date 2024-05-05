import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import {satisfies} from "next/dist/lib/semver-noop";
import React from "react";

type Repo = {
    name: string
    stargazers_count: number
}

export const getServerSideProps = (async () => {
    // Fetch data from external API
    const res = await fetch('http://localhost:4000/tracks/getAllOzon')
    const repo: [] = await res.json()

    const cska = await fetch('http://localhost:4000/tracks/getAllCSKA')
    const repo1: [] = await cska.json()

    const zenit = await fetch('http://localhost:4000/tracks/getAllZenit')
    const repo3 = await zenit.json()
    //const repo: Repo = await res.json()
    // Pass data to the page via props
    return { props: { repo, repo1, repo3  } }
}) satisfies GetServerSideProps<{ repo: [], repo1:[], repo3:[] }>

export default function Page({
                                 repo, repo1,repo3
                             }: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (



        <main>
            {repo.map(({domain, id, login, password, isActive}) => (
                <tr>
                    <th scope="row">
                        <div className="d-flex align-items-center">
                            {id}
                        </div>
                    </th>

                    <td>{domain}</td>
                    <td>{login}</td>
                    <td>{password}</td>


                    <td>
                    </td>
                </tr>
            ))}

            {repo1.map(({domain, id, login, password, isActive}) => (
                <tr>
                    <th scope="row">
                        <div className="d-flex align-items-center">
                            {id}
                        </div>
                    </th>

                    <td>{domain}</td>
                    <td>{login}</td>
                    <td>{password}</td>


                    <td>
                    </td>
                </tr>
            ))}

            {repo3.map(({domain, id, login, password, isActive}) => (
                <tr>
                    <th scope="row">
                        <div className="d-flex align-items-center">
                            {id}
                        </div>
                    </th>

                    <td>{domain}</td>
                    <td>{login}</td>
                    <td>{password}</td>


                    <td>
                    </td>
                </tr>
            ))}
        </main>
    )
}
