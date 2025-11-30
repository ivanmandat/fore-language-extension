# ILanerResultsBox.ChartToolbarVisible

ILanerResultsBox.ChartToolbarVisible
-


# ILanerResultsBox.ChartToolbarVisible


## Синтаксис


ChartToolbarVisible: Boolean;


## Описание


Свойство ChartToolbarVisible
 определяет, отображается ли панель инструментов для панели «Диаграмма».


## Комментарии


Допустимые значения:


	- True. Значение по умолчанию.
	 Для панели «Диаграмма» отображается
	 панель инструментов;


	- False. Для панели «Диаграмма» не отображается панель
	 инструментов, вместо неё отображается заголовок «Диаграмма».


## Пример


Для выполнения примера предполагается наличие формы, содержащей компоненты:


	- LanerBox с наименованием
	 «LanerBox1».


	- LanerResultsBox с наименованием
	 «LanerResultsBox1».


	- UiErAnalyzer с
	 наименованием «UiErAnalyzer1». Данный компонент должен содержать загруженную
	 рабочую книгу базы данных временных рядов и являться источником данных
	 для компонентов «LanerBox1» и «LanerResultsBox1».


	Sub UserProc;

	Begin

	    LanerResultsBox1.ChartToolbarVisible := False;

	End Sub UserProc;


После выполнения примера в компоненте «LanerResultsBox1» будет скрыта
 панель инструментов для панели «Диаграмма».


См. также:


[ILanerResultsBox](ILanerResultsBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
