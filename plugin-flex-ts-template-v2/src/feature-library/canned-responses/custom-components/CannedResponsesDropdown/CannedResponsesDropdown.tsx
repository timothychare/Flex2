import React, { useState, useEffect } from 'react';
import { Actions, ITask, useFlexSelector, TaskHelper } from '@twilio/flex-ui';
import { Box } from '@twilio-paste/core/box';
import { Tooltip } from '@twilio-paste/tooltip';
import { Menu, MenuButton, MenuItem, MenuGroup, useMenuState } from '@twilio-paste/core/menu';
import { SkeletonLoader } from '@twilio-paste/core/skeleton-loader';
import { ChatIcon } from '@twilio-paste/icons/esm/ChatIcon';
import { ErrorIcon } from '@twilio-paste/icons/esm/ErrorIcon';
import { Button } from '@twilio-paste/button';

import { CannedResponse, CannedResponseCategories, ResponseCategory } from '../../types/CannedResponses';
import CannedResponsesService from '../../utils/CannedResponsesService';

interface CannedResponsesDropdownProps {
  task: ITask;
}

const CannedResponsesDropdown: React.FunctionComponent<CannedResponsesDropdownProps> = ({ task }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [responseCategories, setResponseCategories] = useState<undefined | CannedResponseCategories>(undefined);
  const conversationSid = task.attributes.conversationSid ?? task.attributes.channelSid;
  const inputState = useFlexSelector((state) => state.flex.chat.conversationInput[conversationSid]?.inputText);

  const menu = useMenuState({
    placement: 'top-start',
    wrap: 'horizontal',
  });

  const onClickInsert = (text: string) => {
    if (!conversationSid) return;
    let currentInput = inputState;
    if (currentInput.length > 0 && currentInput.charAt(currentInput.length - 1) !== ' ') {
      currentInput += ' ';
    }
    Actions.invokeAction('SetInputText', {
      body: currentInput + text,
      conversationSid,
    });
  };

  useEffect(() => {
    async function getResponses() {
      try {
        const responses = await CannedResponsesService.fetchCannedResponses();
        setResponseCategories(responses.data);
        setIsLoading(false);
      } catch (e) {
        setIsLoading(false);
        setError(true);
      }
    }

    getResponses();
  }, []);

  return (
    <Box>
      {isLoading && <SkeletonLoader />}
      {Boolean(responseCategories) && !isLoading && (
        <>
          <MenuButton {...menu} variant={'primary_icon'} disabled={TaskHelper.isInWrapupMode(task)}>
            <ChatIcon decorative />
          </MenuButton>
          <Menu {...menu} aria-label="canned-responses" element="CANNED_RESPONSES_MENU">
            {responseCategories?.categories.map((category: ResponseCategory) => (
              <div key={category.section}>
                <MenuGroup {...menu} label={category.section}>
                  {category.responses.map((response: CannedResponse) => (
                    <MenuItem
                      {...menu}
                      key={response.text}
                      onClick={() => {
                        onClickInsert(response.text);
                        menu.hide();
                      }}
                    >
                      {response.text}
                    </MenuItem>
                  ))}
                </MenuGroup>
              </div>
            ))}
          </Menu>
        </>
      )}
      {error && (
        <Tooltip text="There was an error fetching responses. Please reload the page.">
          <Button variant={'destructive_icon'}>
            <ErrorIcon decorative />
          </Button>
        </Tooltip>
      )}
    </Box>
  );
};

export default CannedResponsesDropdown;
