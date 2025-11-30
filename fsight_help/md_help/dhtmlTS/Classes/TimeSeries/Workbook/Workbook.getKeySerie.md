# Workbook.getKeySerie

Workbook.getKeySerie
-


# Workbook.getKeySerie


## Синтаксис


getKeySerie (value);


## Параметры


value. Задает значение индекса ряда.


## Описание


Метод getKeySerie возвращает ключ ряда по индексу.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	//Получаем индекс ряда
	var index = wbk.getSeries()[0].index;
	//Получаем ключ ряда по индексу
	var key = wbk.getKeySerie(index);
	alert("Ключ ряда по индексу "+index +": "+ key);

После выполнения примера на экран будет выведено сообщение, содержащее ключ ряда по заданному индексу.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
