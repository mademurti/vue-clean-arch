import { Comment } from './comment'

describe('>>> Comment', () => {
  describe('>> validate', () => {
    it('should fail validation if title is empty', () => {
      const entity = new Comment({
        title: ''
      })

      expect(entity.validate()).toBeFalsy()
    })
  
})