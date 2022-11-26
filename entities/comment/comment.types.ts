export interface IComment {
  validate(): boolean
}

export const COMMENTS_MAX_TITLE_LENGTH = 10
export const COMMENTS_MAX_AUTHOR_LENGTH = 10
export const COMMENTS_MAX_CONTENT_LENGTH = 255