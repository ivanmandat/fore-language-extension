# Workbook.getSerie

Workbook.getSerie
-


# Workbook.getSerie


## Синтаксис


getSerie (key);


## Параметры


key. Задает ключ ряда.


## Описание


Метод getSerie возвращает ряд из кеша загруженных рядов по ключу.


## Пример


Для выполнения предполагается наличие на странице компонента WorkbookBox с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»). Вернем идентификатор выделенного ряда по его ключу, запустив в консоли браузера следующий код:


	var source = workbookBox.getSource().getActiveSheet();//возвращаем экземпляр класса PP.TS.Workbook
	var serie = source.getSerie(source.getSelectedSeries()[0].k)//получаем первый выделенный ряд по ключу
	alert("Идентификатор выделенного ряда "+ serie.id)//выводим на экран идентификатор выделенного ряда

После выполнения примера на экране будет выведено сообщение, содержащее идентификатор первого выделенного ряда.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
