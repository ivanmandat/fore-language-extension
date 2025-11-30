# DateTimePicker.TextChange

DateTimePicker.TextChange
-


# DateTimePicker.TextChange


## Синтаксис


TextChange: function (sender, args)


## Параметры


sender. Источник события;


args. Информация о событии.


## Описание


Событие TextChange наступает при изменении значения в поле ввода.


## Пример


Для выполнения примера создайте компонент [DateTimePicker](../../Components/DateTimePicker/DateTimePicker.htm) (см. «[Пример создания компонента DateTimePicker](../../Components/DateTimePicker/Example_DateTimePicker.htm)») с наименованием «DTP». Добавим обработчик события TextChange:


DTP.TextChange.add(function (sender, args)


{


      alert("Old Date: " + args.OldValue + " New Date: " + args.NewValue)


})


После выполнения примера при изменении значение в поле ввода будет выдаваться сообщение с информацией о предшествующей и установленной дате.


См. также:


[DateTimePicker](DateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
