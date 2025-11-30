# DateTimePicker.DateTimeChange

DateTimePicker.DateTimeChange
-


# DateTimePicker.DateTimeChange


## Синтаксис


DateTimeChange: function(sender, args)


## Параметры


sender. Источник события.


args. Информация о событии.


## Описание


Событие DateTimeChange наступает при изменении даты.


## Пример


Для выполнения примера создайте компонент [DateTimePicker](../../Components/DateTimePicker/DateTimePicker.htm) (см. «[Пример создания компонента DateTimePicker](../../Components/DateTimePicker/Example_DateTimePicker.htm)») с наименованием «DTP». Добавим обработчик события DateTimeChange:


DTP.DateTimeChange.add(function (sender, args)


{


        alert("Новая дата: " + DTP.getCurrentDate());


})


После выполнения примера при изменении даты из календаря или с помощью клавиатуры будет выдаваться сообщение с информацией о установленной дате.


См. также:


[DateTimePicker](DateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
