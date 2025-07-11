interface BookingState {
  selectedDate: Date | null;
  selectedTime: string | null;
  duration: number;
  fieldId: string | null;
  note: string;
  price: number | null;
  hasClickedDate: boolean;

  // Setters
  setSelectedDate: (date: Date | null) => void;
  setSelectedTime: (time: string | null) => void;
  setDuration: (duration: number) => void;
  setFieldId: (id: string | null) => void;
  setNote: (note: string) => void;
  setPrice: (price: number | null) => void;
  setHasClickedDate: (value: boolean) => void;

  resetBooking: () => void;
}
