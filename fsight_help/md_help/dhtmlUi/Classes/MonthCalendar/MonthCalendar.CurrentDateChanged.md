# MonthCalendar.CurrentDateChanged

MonthCalendar.CurrentDateChanged
-


# MonthCalendar.CurrentDateChanged


## Синтаксис


CurrentDateChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие CurrentDateChanged наступает при смене текущей даты с помощью свойства [CurrentDate](../DateTimeEdit/DateTimeEdit.CurrentDate.htm).


## Пример


Для выполнения примера создайте компонент [MonthCalendar](../../Components/MonthCalendar/MonthCalendar.htm) (см. «[Пример создания компонента MonthCalendar](../../Components/MonthCalendar/Example_MonthCalendar.htm)»). Создайте переменную, содержащую дату:


var date = new Date(2000, 10, 10, 10, 0, 0, 0);


Добавим обработчик события CurrentDateChanged:


MC.CurrentDateChanged.add(function (sender, args)


{


          alert("Date was changed")


})


В консоль браузера введите:


MC.setCurrentDate(date);


Нажмите клавишу ENTER. Дата в компоненте будет изменена, будет выведено сообщение «Date was changed».


См. также:


[MonthCalendar](MonthCalendar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
