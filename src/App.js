import * as React from 'react';
import {
  Topbar,
  DropdownMenuComplex,
} from '@qunhe/tools-ui-pro';
import { HelpIcon } from '@qunhe/tools-ui-icons';
import { Button, Icon, Menu } from '@qunhe/tools-ui';

function MenuDemo() {
  return (
    <Menu size="middle">
      <Menu.SubMenu title="sub menu 1">
        <Menu.Item>1</Menu.Item>
        <Menu.Item>2</Menu.Item>
        <Menu.SubMenu title="sub menu 1-3">
          <Menu.Item>1</Menu.Item>
          <Menu.Item>2</Menu.Item>
        </Menu.SubMenu>
      </Menu.SubMenu>
      <Menu.Item>3</Menu.Item>
      <Menu.ItemGroup>
        <Menu.Item>4</Menu.Item>
        <Menu.Item>5</Menu.Item>
        <Menu.SubMenu title="sub menu 6">
          <Menu.Item>1</Menu.Item>
          <Menu.Item>2</Menu.Item>
        </Menu.SubMenu>
      </Menu.ItemGroup>
    </Menu>
  );
}
class DemoLayout extends React.Component {
  render() {
    return (
      <div style={{ width: '100%' }}>
        <div style={{ width: '100%' }}>{this.props.children}</div>
      </div>
    );
  }
}


function App() {
  return (
    <>
      <IconItemDemo />
    </>
  );
}
export default App;

function IconItemDemo() {
  const helper = [
    <Topbar.MenuItem key={1} title={'功能名'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />,
    <Topbar.MenuItem key={2} title={'功能名'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />,
    <Topbar.MenuItem key={3} title={'功能名'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />,
  ];

  const option = [
    {
      icon: <Icon symbol="favorite" />,
      key: '1',
      title: '复制',
      shortCutText: '⌘C',
      splitLine: true,
    },
    {
      key: '2',
      title: '粘贴/剪切',
      children: [
        {
          key: '2-1',
          title: '粘贴',
        },
        {
          icon: <Icon symbol="delete" />,
          key: '2-2',
          title: '剪切',
        },
      ],
    },
    {
      icon: <Icon symbol="edit" />,
      key: '3',
      title: '日期',
      disabled: true,
    },
  ];

  const contentItems = [
    <DropdownMenuComplex.Group key="g1" groupName="IconItem">
      <DropdownMenuComplex.IconItem
        {...{
          key: '2',
          icon: <Icon symbol="mirror" />,
          title: '正常',
          mode: 'normal',
          shortCutText: '⌘C',
          labelText: 'label',
          onClick: (e, activce, iconMode) => {
            console.log(e, activce, iconMode);
          },
          disabled: false,
          tooltipPlacement: 'top',
          showTipIcon: true,
          renderTipsMode: 'tooltip',
          renderTipsToTooltipOptions: { title: 'tooltip' },
        }}
      />
      <DropdownMenuComplex.IconItem
        {...{
          icon: <Icon symbol="move" />,
          activeIcon: <Icon symbol="copy" />,
          activeTitle: '失活',
          title: '激活',
          mode: 'active',
          labelText: 'label',
          // tslint:disable-next-line: jsx-no-lambda
          onClick: (e, activce, iconMode) => {
            // tslint:disable-next-line: no-console
            console.log(e, activce, iconMode);
          },
          disabled: false,
          tooltipPlacement: 'top',
          defaultActive: true,
          showTipIcon: true,
          renderTipsMode: 'popover',
          renderTipsToPopoverOptions: {
            placement: 'right',
            content: <div style={{ padding: '12px' }}>我是 popover</div>,
          },
        }}
      />
    </DropdownMenuComplex.Group>,
    <DropdownMenuComplex.Group key="g2" groupName="DropdownItem">
      <DropdownMenuComplex.DropdownIconItem
        {...{
          options: option,
          icon: <Icon symbol="delete" />,
          title: '功能标题',
          disabled: false,
          shortCutText: '⌘C',
          labelText: 'label',
          showTipIcon: true,
          renderTipsMode: 'popover',
          renderTipsToPopoverOptions: {
            placement: 'right',
            content: <div style={{ padding: '12px' }}>我是 popover</div>,
          },
          onSelect: (_e, fullPath, fullOptionsItems) => {
            console.log(fullPath, fullOptionsItems);
          },
          onClose: () => {
            console.log('close');
          },
        }}
      />
      <DropdownMenuComplex.DropdownIconItem
        {...{
          icon: <Icon symbol="edit" />,
          title: '功能标题',
          showTipIcon: true,
          renderTipsMode: 'tooltip',
          renderTipsToTooltipOptions: { title: 'tooltip' },
          disabled: false,
          options: option,
          onSelect: (_e, fullPath, fullOptionsItems) => {
            console.log(fullPath, fullOptionsItems);
          },
          onClose: () => {
            console.log('close');
          },
        }}
      />
    </DropdownMenuComplex.Group>,
    <DropdownMenuComplex.Group key="g4" groupName={'onlyOne'}>
      <DropdownMenuComplex.IconItem
        {...{
          icon: <Icon symbol="mirror" />,
          title: '正常',
          mode: 'normal',
          shortCutText: '⌘C',
          labelText: 'label',
          onClick: (e, activce, iconMode) => {
            console.log(e, activce, iconMode);
          },
          disabled: false,
          tooltipPlacement: 'top',
          showTipIcon: true,
          renderTipsMode: 'tooltip',
          renderTipsToTooltipOptions: { title: 'tooltip' },
        }}
      />
    </DropdownMenuComplex.Group>,
  ];

  const [show, setShow] = React.useState(false);

  return (
    <DemoLayout>
      <Topbar
        fixedContent={
          <Topbar.Fixed
            type="avatar"
            avatar="//qhstaticssl.kujiale.com/newt/101714/image/jpeg/1623728863473/3B2644766EE9B148DB2D7A162EE7438B.jpg"
            avatarPopup={<MenuDemo />}
            onAvatarClick={() => {
              console.log('click');
            }}
            avatarBadgeOptions={{}}
          />
        }
        envTitle={
          <Topbar.MainEnvTitle
            version="5.0"
            logoSrc="//qhstaticssl.kujiale.com/newt/102417/image/svgxml/1625121864526/B642EC343E611507A6A7793AECB89612.svg"
          />
        }
        helperFunctions={helper}
      >
        <Topbar.MenuItem
          autoHideOnMenuItemClick
          key={'1'}
          shortCutText={'Ctrl+c'}
          icon={<HelpIcon />}
          title={'多个功能'}
          showBadge
          badgeOptions={{ text: 'New' }}
          popupMenuConfig={{
            contentItems,
          }}
          onClick={() => {
            // tslint:disable-next-line: no-console
            console.log('click');
          }}
        />
        <Topbar.MenuItem
          key={'2'}
          shortCutText={'Ctrl+c'}
          icon={<HelpIcon />}
          title={'多个功能'}
          popupMode="side"
          popupMenuConfig={{
            contentItems,
          }}
          onClick={() => {
            // tslint:disable-next-line: no-console
            console.log('click');
          }}
        />
        <Topbar.MenuItem
          key={'3'}
          shortCutText={'Ctrl+c'}
          icon={<HelpIcon />}
          title={'多个功能'}
          showBadge
          badgeOptions={{ text: 'New' }}
          popupContent={<MenuDemo />}
          onClick={() => {
            // tslint:disable-next-line: no-console
            console.log('click');
          }}
        />
        <Topbar.MenuItem
          key={'4'}
          shortCutText={'Ctrl+c'}
          icon={<HelpIcon />}
          title={'多个功能'}
          showBadge
          popupMode={'side'}
          badgeOptions={{ text: 'New' }}
          popupContent={<MenuDemo />}
          onClick={() => {
            // tslint:disable-next-line: no-console
            console.log('click');
          }}
        />
        <Topbar.SplitLine />
        <Topbar.MenuItem
          key={'5'}
          icon={<HelpIcon />}
          title={'卡片'}
          showBadge
          badgeOptions={{ text: 'New' }}
          onClick={() => {
            console.log('click');
          }}
          popoverOptions={{
            placement: 'bottom',
            content: <div style={{ padding: '12px' }}>i am popover content</div>,
          }}
        />
        <Topbar.MenuItem key={'6'} title={'功能名啥事'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />
        <Topbar.MenuItem
          disabled
          key={'7'}
          title={'功能名功能名功能名功能名功能名'}
          shortCutText={'Ctrl+c'}
          icon={<HelpIcon />}
        />
        <Topbar.MenuItem key={'8'} title={'功能名'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />
        <Topbar.MenuItem key={'9'} disabled title={'功能名'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />
        <Topbar.MenuItem
          disabled
          key={'99'}
          title={'功能名'}
          shortCutText={'Ctrl+c'}
          showBadge
          icon={<HelpIcon />}
        />
        <Topbar.SplitLine />
        <Topbar.MenuItem key={'10'} title={'功能名'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />
        {show && <Topbar.MenuItem title={'新增'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />}
        {show && <Topbar.MenuItem key={'12'} title={'新增'} shortCutText={'Ctrl+c'} icon={<HelpIcon />} />}
      </Topbar>
      <Button
        onClick={() => {
          setShow(!show);
        }}
      >
        add item
      </Button>
    </DemoLayout>
  );
}
