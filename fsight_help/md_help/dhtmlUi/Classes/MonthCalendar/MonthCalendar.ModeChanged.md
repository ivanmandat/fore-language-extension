# MonthCalendar.ModeChanged

MonthCalendar.ModeChanged
-


# MonthCalendar.ModeChanged


## Синтаксис


ModeChanged: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие ModeChanged наступает при смене режима отображения календаря.


## Пример


Для выполнения примера создайте компонент [MonthCalendar](../../Components/MonthCalendar/MonthCalendar.htm) (см. «[Пример создания компонента MonthCalendar](../../Components/MonthCalendar/Example_MonthCalendar.htm)»). Добавим обработчик события ModeChanged:


MC.ModeChanged.add(function (sender, args)


{


      alert("Mode was changed")


})


После выполнения примера при смене режима отображения календаря будет выдаваться сообщение «Mode was changed».


См. также:


[MonthCalendar](MonthCalendar.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
