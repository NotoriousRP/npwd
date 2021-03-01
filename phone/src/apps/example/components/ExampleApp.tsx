import React, { useState } from 'react';

import { AppWrapper } from '../../../ui/components';
import { AppContent } from '../../../ui/components/AppContent';
import { useApp } from '../../../os/apps/hooks/useApps';
import { useExample } from '../hooks/useExample';
import { ExampleThemeProvider } from '../providers/ExampleThemeProvider';
import { AppTitle } from '../../../ui/components/AppTitle';
import PlayIcon from '@material-ui/icons/PlayArrow';
import StopIcon from '@material-ui/icons/Stop';
import { Button, IconButton } from '@material-ui/core';
import useSound from '../../../os/sound/hooks/useSound';

export const ExampleApp = () => {
  // calling the example hook, and we assign the value to a variable
  const exampleString = useExample();
  const example = useApp('EXAMPLE');
  const [soundName, setSound] = useState('pixel.ogg');
  const { play, playing, stop } = useSound('media/ringtones/' + soundName);
  return (
    <ExampleThemeProvider>
      <AppWrapper>
        <AppTitle app={example} />
        <AppContent>
          <h1>This is an example</h1>
          <Button color='primary'>{example.id}</Button>
          {/* Here we are using the value in a h3 tag */}
          <h3>{exampleString}</h3>
          <IconButton onClick={() => (playing ? stop() : play())}>
            {playing ? <StopIcon /> : <PlayIcon />}
          </IconButton>
          <Button onClick={() => setSound('marimba.ogg')}>
             Change sound on the fly
          </Button>
        </AppContent>
      </AppWrapper>
    </ExampleThemeProvider>
  );
};
