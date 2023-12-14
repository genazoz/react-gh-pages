import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IPost} from "../index.ts";

export const postApi = createApi({
    reducerPath: 'post',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (page = 0, limit = 20) => ({
                url: `/posts`,
                params: {
                    _limit: limit,
                    _start: page * limit,
                }
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                if(!currentCache.map(item => item.id).includes(newItems[0].id)) {
                    currentCache.push(...newItems)
                }
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg
            },
        }),
        fetchPostById: build.query<IPost, number>({
            query: (id: number = 1) => ({
                url: `/posts/${id}`,
            })
        })
    })
})

export const { useFetchAllPostsQuery, useFetchPostByIdQuery } = postApi;
