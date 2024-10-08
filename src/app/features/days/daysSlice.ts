import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface Day {
  name: string;
  isOpened: boolean;
  exercises: string[];
}

export interface DaysState {
  days: Day[];
}

const initialState: DaysState = {
  days: [
    {
      name: "C00",
      isOpened: false,
      exercises: [
        "ft_putchar",
        "ft_print_alphabet",
        "ft_print_reverse_alphabet",
        "ft_print_numbers",
        "ft_is_negative",
        "ft_print_comb",
        "ft_print_comb2",
        "ft_putnbr",
        "ft_print_combn",
      ],
    },
    {
      name: "C01",
      isOpened: false,
      exercises: [
        "ft_ft",
        "ft_ultimate_ft",
        "ft_swap",
        "ft_div_mod",
        "ft_ultimate_div_mod",
        "ft_putstr",
        "ft_strlen",
        "ft_rev_int_tab",
        "ft_sort_int_tab",
      ],
    },
    {
      name: "C02",
      isOpened: false,
      exercises: [
        "ft_strcpy",
        "ft_strncpy",
        "ft_str_is_alpha",
        "ft_str_is_numeric",
        "ft_str_is_lowercase",
        "ft_str_is_uppercase",
        "ft_str_is_printable",
        "ft_strupcase",
        "ft_strlowcase",
        "ft_strcapitalize",
        "ft_strlcpy",
        "ft_putstr_non_printable",
        "ft_print_memory",
      ],
    },
    {
      name: "C03",
      isOpened: false,
      exercises: [
        "ft_strcmp",
        "ft_strncmp",
        "ft_strcat",
        "ft_strncat",
        "ft_strstr",
        "ft_strlcat",
      ],
    },
    {
      name: "C04",
      isOpened: false,
      exercises: [
        "ft_strlen",
        "ft_putstr",
        "ft_putnbr",
        "ft_atoi",
        "ft_putnber_base",
        "ft_atoibase",
      ],
    },
    {
      name: "C05",
      isOpened: false,
      exercises: [
        "ft_iterative_factorial",
        "ft_recursive_factorial",
        "ft_iterative_power",
        "ft_recursive_power",
        "ft_fibonacci",
        "ft_sqrt",
        "ft_is_prime",
        "ft_find_next_prime",
        "The Ten Queens",
      ],
    },
    {
      name: "C06",
      isOpened: false,
      exercises: [
        "ft_print_program_name",
        "ft_print_params",
        "ft_rev_params",
        "ft_sort_params",
      ],
    },
    {
      name: "C07",
      isOpened: false,
      exercises: [
        "ft_strdup",
        "ft_range",
        "ft_ultimate_range",
        "ft_strjoin",
        "ft_convert_base",
        "ft_split",
      ],
    },
    {
      name: "C08",
      isOpened: false,
      exercises: [
        "ft.h",
        "ft_boolean.h",
        "ft_abs.h",
        "ft_point.h",
        "ft_strv_to_tab",
        "ft_show_tab",
      ],
    },
    {
      name: "C09",
      isOpened: false,
      exercises: ["libft", "Makefile", "ft_split"],
    },
  ],
};

/*
 *
 * choseDay: function get triggered when a user chose a day
 * choseDay:
 *  - sets all state isOpen attribute to false
 *  - sets chosen day's isOpen to true
 *
 */
export const daysSlice = createSlice({
  name: "daysSlice",
  initialState,
  reducers: {
    choseDay: (state: DaysState, action: PayloadAction<string>) => {
      const { payload } = action;
      const { days } = state;

      const newDays = days.map((day) => {
        if (day.name === payload) return { ...day, isOpened: true };
        else return { ...day, isOpened: false };
      });

      return { ...state, days: newDays };
    },
  },
});

export const { choseDay } = daysSlice.actions;

export default daysSlice.reducer;
