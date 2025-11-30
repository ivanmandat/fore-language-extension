# Workbook.removeSelectedSeries

Workbook.removeSelectedSeries
-


# Workbook.removeSelectedSeries


## Синтаксис


removeSelectedSeries (value);


## Параметры


value. Задает ряд или массив рядов.


## Описание


Метод removeSelectedSeries удаляет строку таблицы из массива выделенных.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	metabase.EndRequest.add(function (){
	setTimeout(function() {
	var source = workbookBox.getSource().getActiveSheet();//возвращаем экземпляр класса PP.TS.Workbook
	//Получаем выделенные ряды
	var selSeries = source.getSelectedSeries();
	alert("Id выделенного ряда: " + source.getSelectedSeries()[0].id);
	//Удаляем ряды из массива выделенных
	source.removeSelectedSeries(selSeries);
	if(source.getSelectedSeries().length)
	alert("Id выделенного ряда: " + source.getSelectedSeries()[0].id);
	else
	alert("В данной рабочей книге нет выделенных рядов")
	},1000);
	});

После выполнения примера будет выведено сообщение, содержащее идентификатор выделенного ряда. Если в рабочей книге нет выделенного ряда, будет выведено сообщение: «В данной рабочей книге нет выделенных рядов».


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
