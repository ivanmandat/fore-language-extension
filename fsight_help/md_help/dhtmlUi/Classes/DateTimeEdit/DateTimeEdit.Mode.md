# DateTimeEdit.Mode

DateTimeEdit.Mode
-


# DateTimeEdit.Mode


## Синтаксис


Mode: [PP.Ui.MonthCalendarMode](../../Enums/MonthCalendarMode.htm);


## Описание


Свойство Mode устанавливает
 режим отображения даты и времени.


## Комментарии


Значением свойства являются элементы перечисления [MonthCalendarMode](../../Enums/MonthCalendarMode.htm).
 По умолчанию установлено значение 0.


## Пример


Для выполнения примера подключите ссылки на библиотеку PP.js и таблицы визуальных стилей PP.css. Далее приведен javascript-код, при помощи которого на html-странице размещается компонент [DateTimeEdit](../../Components/DateTimeEdit/DateTimeEdit.htm):


<script type="text/javascript">


    DTE = new PP.Ui.DateTimeEdit({//Создаем компонент DateTimeEdit.


    ParentNode: document.getElementById("DTE1"),//Устанавливаем идентификатор, который содержится //в теге div.


    Width: 150,//Ширина компонента.


    MonthNames: ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"],//Массив названий месяцев.


    Mode: 1,//Режим отображения даты и времени.


    TextAfterHalfYear: " полугодие ",//Текст после значения полугодия.


    TextAfterMonth: " месяц ",//Текст после значения месяца.


    TextAfterQuarter: " квартал ",//Текст после значения квартала.


    TextAfterWeek: " неделя ",//Текст после значения недели.


    TextAfterYear: " год "})//Текст после значения года.


</script>


После выполнения примера на html-странице будет размещен компонент [DateTimeEdit](../../Components/DateTimeEdit/DateTimeEdit.htm), имеющий следующий вид:


![](../../Components/DateTimeEdit/DateTimeEdit3.gif)


В редакторе отображается порядковый номер недели, которая включает в себя установленную дату, и год, поскольку для свойства Mode установлено значение 1.


Месяц и год отображаются при Mode: 2:


![](../../Components/DateTimeEdit/DateTimeEdit4.gif)


Квартал и год отображаются при Mode: 3:


![](../../Components/DateTimeEdit/DateTimeEdit5.gif)


Полугодие и год отображаются при Mode: 4:


![](../../Components/DateTimeEdit/DateTimeEdit6.gif)


Год отображается при Mode: 5:


![](../../Components/DateTimeEdit/DateTimeEdit7.gif)


При установке значения 0 отображаются день, месяц и год, как показано на странице «[Пример создания компонента DateTimeEdit](../../Components/DateTimeEdit/Example_DateTimeEdit.htm)».


См. также:


[DateTimeEdit](DateTimeEdit.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
