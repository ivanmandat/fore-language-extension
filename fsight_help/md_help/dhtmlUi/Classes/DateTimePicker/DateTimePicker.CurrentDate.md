# DateTimePicker.CurrentDate

DateTimePicker.CurrentDate
-


# DateTimePicker.CurrentDate


## Синтаксис


CurrentDate: Date


## Описание


Свойство CurrentDate устанавливает дату и время для компонента.


## Комментарии


Значение месяца задается в диапазоне от 0 до 11.


## Пример


Для выполнения примера создайте компонент [DateTimePicker](DateTimePicker.htm) (см. «[Пример создания компонента DateTimePicker](../../Components/DateTimePicker/Example_DateTimePicker.htm)»). Создадим переменную, содержащую дату и время:


var data = new Date (2011, 08, 29, 11, 0, 0, 0);


Установим эту переменную в качестве значения для свойства CurrentDate:


CurrentDate: data


После выполнения примера для установленного значения даты появится отметка во всех режимах отображения календаря. Установленная дата появится в поле ввода компонента.


См. также:


[DateTimePicker](DateTimePicker.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
