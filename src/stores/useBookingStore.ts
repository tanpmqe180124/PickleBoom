import { create } from 'zustand';

export const useBookingStore = create<BookingState>((set) => ({
  selectedDate: null,
  selectedTime: null,
  duration: 60,
  fieldId: null,
  note: '',
  price: null,
  hasClickedDate: false,

  setSelectedDate: (date) => set({ selectedDate: date, hasClickedDate: true }),
  setSelectedTime: (time) => set({ selectedTime: time }),
  setDuration: (duration) => set({ duration }),
  setFieldId: (id) => set({ fieldId: id }),
  setNote: (note) => set({ note }),
  setPrice: (price) => set({ price }),
  setHasClickedDate: (value) => set({ hasClickedDate: value }),

  resetBooking: () =>
    set({
      selectedDate: null,
      selectedTime: null,
      duration: 60,
      fieldId: null,
      note: '',
      price: null,
      hasClickedDate: false,
    }),
}));
