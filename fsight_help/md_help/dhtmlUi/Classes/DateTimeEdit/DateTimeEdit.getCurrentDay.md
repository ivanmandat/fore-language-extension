# DateTimeEdit.getCurrentDay

DateTimeEdit.getCurrentDay
-


# DateTimeEdit.getCurrentDay


## Синтаксис


getCurrentDay();


## Описание


Метод getCurrentDay возвращает значение дня.


## Пример


Для выполнения примера добавьте ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Создадим компонент [DateTimeEdit](../../Components/DateTimeEdit/DateTimeEdit.htm), значением которого являются текущие дата и время.


<script type="text/javascript">


DTE = new PP.Ui.DateTimeEdit({//Создаем экземпляр компонента DateTimeEdit.


    ParentNode: document.getElementById("DTE1"),


    Width: 150,})


console.log("День: " + DTE.getCurrentDay() +//Возвращается текущее значение дня;


", " + "неделя: " + DTE.getCurrentWeek() +//текущее значение недели;


", " + "месяц: " + DTE.getCurrentMonth() +//текущее значение месяца;


", " + "квартал: " + DTE.getCurrentQuarter() +//текущее значение квартала;


", " + "полугодие: " + DTE.getCurrentHalfYear() +//текущее значение полугодия;


", " + "год: " + DTE.getCurrentYear() +//текущее значение года;


", " + "час: " + DTE.getCurrentHour() +//текущее значение часа;


", " + "минута: " + DTE.getCurrentMinute())//текущее значение минуты.


</script>


После выполнения примера в веб-консоль браузера будет выведены значения текущих даты и времени:


День: 30, неделя: 34, месяц: 7, квартал: 2, полугодие: 1, год: 2011, час: 9, минута: 55


Примечание. Значение месяца устанавливается и возвращается в диапазоне от 0 до 11.


См. также:


[DateTimeEdit](DateTimeEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
