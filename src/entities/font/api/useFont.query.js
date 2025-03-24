import {
  useSuspenseInfiniteQuery,
  useSuspenseQueries,
  useSuspenseQuery,
} from '@tanstack/react-query'

import { instance } from '@/app/api'

export const fontQueryKeys = {
  all: ['fonts'],
  detail: (fontId) => [...fontQueryKeys.all, 'detail', fontId],
  recommendList: (fontId) => [...fontQueryKeys.all, 'recommend', fontId],
  exploreList: (sortBy, keyword) => [...fontQueryKeys.all, 'explore', sortBy, keyword],
  myCustomFontList: (keyword) => [...fontQueryKeys.all, 'my-custom-font', keyword],
  myFontRanking: () => [...fontQueryKeys.all, 'ranking'],
  popularFontList: () => [...fontQueryKeys.all, 'popular'],
}

const ENDPOINTS = {
  exploreList: (pageParam, sortBy, keyword) => {
    const baseUrl = `/fonts?page=${pageParam}&size=20`
    const searchParams = new URLSearchParams()

    if (sortBy) searchParams.append('sortBy', sortBy)
    if (keyword) searchParams.append('keyword', keyword)

    const queryString = searchParams.toString()

    return queryString ? `${baseUrl}&${queryString}` : baseUrl
  },

  myCustomFontList: (pageParam, keyword) => {
    const baseUrl = `/fonts/members?page=${pageParam}&size=20`
    const searchParams = new URLSearchParams()

    if (keyword) searchParams.append('keyword', keyword)

    const queryString = searchParams.toString()

    return queryString ? `${baseUrl}&${queryString}` : baseUrl
  },
}

export const useFetchExploreFontList = (sortBy, keyword) =>
  useSuspenseInfiniteQuery({
    queryKey: fontQueryKeys.exploreList(sortBy, keyword),
    queryFn: ({ pageParam = 0 }) => instance.get(ENDPOINTS.exploreList(pageParam, sortBy, keyword)),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.last ? undefined : allPages.length),
    gcTime: 0,
    staleTime: 0,
    select: (data) => data.pages.flatMap((arr) => arr.content) || [],
  })

export const useFetchMyCustomFontList = (keyword) =>
  useSuspenseInfiniteQuery({
    queryKey: fontQueryKeys.myCustomFontList(keyword),
    queryFn: ({ pageParam = 0 }) => instance.get(ENDPOINTS.myCustomFontList(pageParam, keyword)),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages) => (lastPage.last ? undefined : allPages.length),
    gcTime: 0,
    staleTime: 0,
    select: (data) => data.pages.flatMap((arr) => arr.content) || [],
  })

export const useFetchFontDetail = (fontId) =>
  useSuspenseQueries({
    queries: [
      {
        queryKey: fontQueryKeys.detail(fontId),
        queryFn: () => instance.get(`/fonts/${fontId}`),
      },
      {
        queryKey: fontQueryKeys.recommendList(fontId),
        queryFn: () => instance.get(`/fonts/${fontId}/others`),
      },
    ],
  })

export const useFetchMyFontRanking = () =>
  useSuspenseQuery({
    queryKey: fontQueryKeys.myFontRanking(),
    queryFn: () => instance.get('/fonts/members/popular'),
  })

export const useFetchPopularFontList = () =>
  useSuspenseQuery({
    queryKey: fontQueryKeys.popularFontList(),
    queryFn: () => instance.get('/fonts/popular'),
  })
