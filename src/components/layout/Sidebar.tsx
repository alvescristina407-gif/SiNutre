//import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { NAV_ITEMS } from '@/constants/navigation';
import { SidebarBrand } from './SidebarBrand';
import { SidebarItem } from './SidebarItem';

interface SidebarProps {
  drawerId: string;
}

export function Sidebar({ drawerId }: SidebarProps) {
  // const [activeId, setActiveId] = useState<string>('home');
  const expanded = true;

  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
  localStorage.removeItem('sinutre.token');
  window.location.href = '/login';
}

  return (
    <aside className="drawer-side z-50">
      <label
        htmlFor={drawerId}
        aria-label="Fechar menu"
        className="drawer-overlay"
      />

      <div
        className={`bg-base-100 flex flex-col min-h-full border-r border-base-200 shadow-sm transition-all duration-300 ${
          expanded ? 'w-64 items-start' : 'w-20 items-center'
        }`}
      >
        <SidebarBrand expanded={expanded} />

        <ul className="menu w-full grow pt-4 gap-2">
          {NAV_ITEMS.map(item => (
            <SidebarItem
              key={item.id}
              label={item.label}
              Icon={item.Icon}
              to={item.to}
              expanded={expanded}
            />
          ))}
        </ul>

        <div className="w-full p-4">
          <button
  onClick={handleLogout}
  className="btn w-full text-white border-0"
style={{ backgroundColor: '#C85C5C' }}
>
  Sair
</button>
</div>
      </div>
    </aside>
  );
}
