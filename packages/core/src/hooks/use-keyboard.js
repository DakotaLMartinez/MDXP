import {useEffect} from 'react';
import {useSetRoot} from './use-root.js';
import {
  next,
  nextSlide,
  previous,
  previousSlide,
  setMode,
} from '../util/navigation.js';


const keys = {
  right: 39,
  left: 37,
  up: 38,
  down: 40,
  space: 32,
  p: 80,
  o: 79,
  g: 71,
  esc: 27,
  pageUp: 33,
  pageDown: 34,
}


/**
 * Use Keyboard
 * This hook enables the use of the keyboard to navigate the slide deck.
 *
 * @param   {DOM element} target
 *          DOM element to attach the eventListener
 * @param   {object} deck 
 *          Deck context
 * @param   {newState => void} setDeck
 *          Deck context setter
 * @return  {void}
 */
const useKeyboard = (target, deck, setDeck) => {
  const [root, setRoot] = useSetRoot();
  
  const handleKeyboard = (e) => {
    const { metaKey, ctrlKey, shiftKey, altKey } = e;
    if (metaKey || ctrlKey) return

    switch (e.keyCode) {
      case keys.left:
      case keys.up:
      case keys.pageUp:
        if (shiftKey) {
          previousSlide(root, deck, setDeck);
        }
        else {
          previous(root, deck, setDeck);
        }
        break;

      case keys.right:
      case keys.down:
      case keys.pageDown:
        if (shiftKey) {
          nextSlide(root, deck, setDeck);
        }
        else {
          next(root, deck, setDeck);
        }
        break;

      case keys.space:
        if (shiftKey) {
          previous(root, deck, setDeck);
        }
        else {
          next(root, deck, setDeck);
        }
        break;
    }
  };

  useEffect(() => {
    const currentTarget = (target && target.hasOwnProperty("current")) ? target.current : target;
    if (currentTarget)
      currentTarget.addEventListener('keydown', handleKeyboard);

    return () => {
      if (currentTarget)
        currentTarget.removeEventListener('keydown', handleKeyboard);
    }
  }, [root, deck]);
}
export default useKeyboard;