# Workbook.getLoadedChildrenCount

Workbook.getLoadedChildrenCount
-


# Workbook.getLoadedChildrenCount


## Синтаксис


getLoadedChildrenCount (value);


## Параметры


value. Задает родительский ряд.


## Описание


Метод getLoadedChildrenCount определяет количество загруженных дочерних рядов для указанного ряда.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	var source = workbookBox.getSource().getActiveSheet();//возвращаем экземпляр класса PP.TS.Workbook
	//Получаем ряд
	var serie =  source.getSeries()[2];
	//Получаем  количество загруженных дочерних рядов для указанного ряда
	var loadedCount = source.getLoadedChildrenCount(serie);
	alert("Количество загруженных дочерних рядов у ряда с id = " + serie.id + " составляет " + loadedCount + " ряда");

После выполнения примера на html-странице будет выведено сообщение, содержащее идентификатор ряда с индексом 2 и количество загруженных у него дочерних рядов.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
