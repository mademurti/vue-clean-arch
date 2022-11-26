import { Comment } from './comment'
import { mockCommentsData } from './comment.mock'

describe('>>> Comment', () => {
  it('should instantiate id only if it was provided', () => {
    const entity1 = new Comment({
      ...mockCommentsData()[0],
      id: 1
    })

    expect(entity1.id).toBe(1)

    const entity2 = new Comment({
      ...mockCommentsData()[0],
      id: undefined
    })

    expect(entity2.id).toBeUndefined()
  })
})