# DateTimePicker.MonthNames

DateTimePicker.MonthNames
-


# DateTimePicker.MonthNames


## Синтаксис


MonthNames: Array


## Описание


Свойство MonthNames задаёт массив с наименованиями месяцев, которые отображаются в поле ввода редактора в режиме месяцев.


## Пример


Для выполнения примера создайте компонент [DateTimePicker](../../Components/DateTimePicker/DateTimePicker.htm) (см. «[Пример создания компонента DateTimePicker](../../Components/DateTimePicker/Example_DateTimePicker.htm)») с наименованием «DTP». Чтобы изменить названия месяцев в поле ввода используйте свойство MonthNames:


DTP.setMonthNames(["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"])


Задать значение свойства через JSON-объект можно следующим образом:


DateTimeEdit: {MonthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"]}


См. также:


[DateTimePicker](DateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
