import {memo, useState} from 'react';
import cls from './Sidebar.module.scss';
import classNames from 'classnames';
import {Button} from 'shared/ui/Button/Button';
import {Link} from 'react-router-dom';

const Sidebar = memo(() => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div data-testid="Sidebar" className={classNames(cls.Sidebar, {[cls.SidebarCollapsed]: collapsed}, )}>
      <div className={cls.SidebarItem}>
        {collapsed ? <Link to={'/about'}>SD1</Link>: 'Sidebar item 1'}
      </div>
      <div className={cls.SidebarItem}>
        {collapsed ? <Link to={'/posts'}>SD1</Link> : 'Sidebar item 2'}
      </div>
      <div className={cls.SidebarItem}>
        {collapsed ? 'SD3' : 'Sidebar item 3'}
      </div>
      <Button className={cls.SidebarButton} data-testid="Sidebar-toggle" onClick={() => setCollapsed(prev => !prev)}>
        {collapsed ? '>' : '<'}
      </Button>
    </div>
  );
});

Sidebar.displayName = 'Sidebar';
export {Sidebar};