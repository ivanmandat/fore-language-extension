# MonthCalendar.getCurrentDay

MonthCalendar.getCurrentDay
-


# MonthCalendar.getCurrentDay


## Синтаксис


getCurrentDay();


## Описание


Метод getCurrentDay возвращает значение дня.


## Пример


Для выполнения примера добавьте ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим компонент [DateTimeEdit](../../Components/DateTimeEdit/DateTimeEdit.htm), значением которого являются текущие дата и время.


MC = new PP.Ui.MonthCalendar({//Создаем экземпляр компонента DateTimeEdit.


    ParentNode: document.getElementById("DTE1"),


    Width: 150,})


console.log("День: " + MC.getCurrentDay() +//Возвращается текущее значение дня;


", " + "неделя: " + MC.getCurrentWeek() +//текущее значение недели;


", " + "месяц: " + MC.getCurrentMonth() +//текущее значение месяца;


", " + "квартал: " + MC.getCurrentQuarter() +//текущее значение квартала;


", " + "полугодие: " + MC.getCurrentHalfYear() +//текущее значение полугодия;


", " + "год: " + MC.getCurrentYear() +//текущее значение года;


", " + "час: " + MC.getCurrentHour() +//текущее значение часа;


", " + "минута: " + MC.getCurrentMinute())//текущее значение минуты.


После выполнения примера в веб-консоль браузера будет выведены значения текущих даты и времени:


День: 30, неделя: 34, месяц: 7, квартал: 2, полугодие: 1, год: 2011, час: 9, минута: 55


Примечание. Значение месяца устанавливается и возвращается в диапазоне от 0 до 11.


См. также:


[MonthCalendar](MonthCalendar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
