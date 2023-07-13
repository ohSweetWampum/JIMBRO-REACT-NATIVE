import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const PlusRoute = () => <Text>Plus</Text>;
const JournalRoute = () => <Text>Journal</Text>;
const ClockRoute = () => <Text>Clock</Text>;
const ExerciseRoute = () => <Text>Exercise</Text>;
const HeadshotRoute = () => <Text>Headshot</Text>;

const routes = [
  { key: 'plus', icon: 'plus', title: 'Plus', color: '#3F51B5', component: PlusRoute },
  { key: 'journal', icon: 'book-open-page-variant', title: 'Journal', color: '#009688', component: JournalRoute },
  { key: 'clock', icon: 'clock-outline', title: 'Clock', color: '#795548', component: ClockRoute },
  { key: 'exercise', icon: 'run', title: 'Exercise', color: '#607D8B', component: ExerciseRoute },
  { key: 'headshot', icon: 'account', title: 'Headshot', color: '#F44336', component: HeadshotRoute },
];

const BottomNav = () => {
  const [index, setIndex] = React.useState(0);
  const [routesState] = React.useState(routes);

  const renderScene = BottomNavigation.SceneMap({
    plus: PlusRoute,
    journal: JournalRoute,
    clock: ClockRoute,
    exercise: ExerciseRoute,
    headshot: HeadshotRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes: routesState }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      renderIcon={({ route, color }) => (
        <MaterialCommunityIcons
          name={route.icon}
          size={24}
          color={color}
        />
      )}
    />
  );
};

export default BottomNav;

