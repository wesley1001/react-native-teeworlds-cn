// import Home from './pages/Home';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Themes from './pages/Settings/Themes';

exports.Splash = {
  component: Splash,
};

exports.Home = {
  component: Home,
  params: {
    title: '首页',
  }
};

exports.Settings = {
  component: Settings,
  params: {
    title: '设置',
  }
};

exports.Settings.Themes = {
  component: Themes,
  params: {
    title: '主题配色',
  }
}
