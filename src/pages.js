// import Home from './pages/Home';
import Splash from './pages/Splash';
import Home from './pages/Home';
import Settings from './pages/Settings';

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
