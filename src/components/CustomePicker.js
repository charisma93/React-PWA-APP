import DateIOAdapter from "@mui/lab/AdapterMoment";

export default function CustomDateAdapter(options) {
  const adapter = new DateIOAdapter(options);

  const constructDayObject = (day) => ({ charAt: () => day });

  return {
    ...adapter,

    getWeekdays() {
      // Feel free to replace this with your custom value
      // e.g const customWeekdays = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
      const customWeekdays = adapter.getWeekdays();

      return customWeekdays.map((day) => constructDayObject(day));
    }
  };
}
