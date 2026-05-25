import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_dashboard/setting/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_dashboard/setting/"!</div>
}
