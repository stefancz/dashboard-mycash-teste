import { Avatar } from '@/components/ui'

interface UserProfileProps {
  name: string
  email: string
  avatar?: string
  collapsed?: boolean
}

export function UserProfile({
  name,
  email,
  avatar,
  collapsed = false,
}: UserProfileProps) {
  return (
    <div className={`
      flex items-center gap-3 px-4 py-3 border-t border-gray-200
      ${collapsed ? 'justify-center' : ''}
    `}>
      <Avatar src={avatar} name={name} size="sm" />
      {!collapsed && (
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-gray-900 truncate">
            {name}
          </p>
          <p className="text-xs text-gray-500 truncate">
            {email}
          </p>
        </div>
      )}
    </div>
  )
}
