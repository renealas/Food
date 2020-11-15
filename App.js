import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import SearchScreen from './src/screens/SearchScreen'
import ResultsScreen from './src/screens/ResultsShowScreen'

const navigator = createStackNavigator({
Search: SearchScreen,
ResultsShow: ResultsScreen,
}, 
{
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Busqueda de Comida'
  }
});

export default createAppContainer(navigator);