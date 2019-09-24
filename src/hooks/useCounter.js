import { computed } from '@vue/composition-api';
import store from '../store/store';

export default function useCounter() {
  const count = computed(() => store.getters.number);

  const incrementCount = () => store.dispatch("INCREMENT_COUNT");
  const decrementCount = () => store.dispatch("DECREMENT_COUNT");

  return {
    count,
    incrementCount,
    decrementCount
  };
}