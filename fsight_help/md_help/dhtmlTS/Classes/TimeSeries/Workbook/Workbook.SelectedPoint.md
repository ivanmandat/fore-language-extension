# Workbook.SelectedPoint

Workbook.SelectedPoint
-


# Workbook.SelectedPoint


## Синтаксис


SelectedPoint: Object;


## Описание


Свойство SelectedPoint устанавливает информацию о координатах выделенной точки.


## Комментарии


Нумерация строк начинается с 0, столбцов - с -1.


## Пример


Для выполнения примера предполагается наличие на странице компонента [WorkbookBox](../../../Components/TimeSeries/WorkbookBox/WorkbookBox.htm) с наименованием «workbookBox» (см. «[Пример создания компонента WorkbookBox](../../../Components/TimeSeries/WorkbookBox/Component_WorkbookBox.htm)»), также необходимо в обработчике события открытия документа добавить следующий код:


	//Добавим обработчик  к событию окончания соединения с метабазой
	metabase.EndRequest.add(function (){
		var selectedPoint = wbk.getSelectedPoint();
		var messageString = "Координаты выделенной ячейки: ";
		messageString += "\n";
		messageString += "Строка: " + selectedPoint['row'] + "\n";
		messageString += "Столбец: " + selectedPoint['column'];
		alert(messageString);
	});

После выполнения примера при выделении ячейки таблицы рабочей книги будет выведено сообщение о координатах ячейки.


См. также:


[Workbook](Workbook.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
