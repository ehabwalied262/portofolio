import { create } from 'zustand';

type State = {
  isChecked: boolean;
};

type Actions = {
  toggleDarkMode: () => void;
};

const useStore = create<State & Actions>((set, get) => ({
    isChecked: (typeof localStorage !== 'undefined' && localStorage.getItem('isDarkMode') === 'true'),
  
    toggleDarkMode: () => {
      const checked = !get().isChecked;
      set({ isChecked: checked });
  
      if (typeof localStorage !== 'undefined') {
        document.body.style.setProperty('--background-color', checked ? 'var(--dark-background-color)' : 'var(--light-background-color)');
        document.body.style.setProperty('--text-color', checked ? 'var(--dark-text-color)' : 'var(--light-text-color)');
  
        localStorage.setItem('isDarkMode', String(checked));
      }
    },
  }));

export default useStore;