import { Hono } from 'hono'

const router = new Hono()

router.get('/', (c) => {
  return c.json([
    { id: 1, title: "Test video" }
  ])
})

export default router