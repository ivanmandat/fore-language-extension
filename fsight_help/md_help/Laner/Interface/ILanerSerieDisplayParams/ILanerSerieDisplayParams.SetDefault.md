# ILanerSerieDisplayParams.SetDefault

ILanerSerieDisplayParams.SetDefault
-


# ILanerSerieDisplayParams.SetDefault


## Синтаксис


SetDefault;


## Описание


Метод SetDefault сбрасывает
 все дополнительные параметры отображения данных ряда.


## Пример


Для выполнения примера предполагается наличие на форме компонентов Button,
 LanerBox, UiErAnalyzer с наименованиями Button1, LanerBox1 и UiErAnalyzer1
 соответственно. UiErAnalyzer1 является источником данных для LanerBox1.
 В UiErAnalyzer1 должна быть загружена рабочая книга базы данных временных
 рядов.


Пример является обработчиком события OnClick для компонента Button1.


Добавьте ссылки на системные сборки: Express, ExtCtrls, Forms, Laner,
 Tab.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    i: Integer;

	    Serie: ILanerSerie;

	    DisplayParams: ILanerSerieDisplayParams;

	Begin

	    For i := 0 To LanerBox1.SelectedSeriesCount - 1 Do

	        Serie := LanerBox1.SelectedSeries(i);

	        DisplayParams := Serie.DisplayParams;

	        DisplayParams.SetDefault;

	    End For;

	    LanerBox1.ExecuteOperation(LanerBoxOperation.Refresh);

	End Sub Button1OnClick;


После выполнения примера для всех рядов , выделенных в компоненте LanerBox,
 будет установлено отображение исходных значений.


См. также:


[ILanerSerieDisplayParams](ILanerSerieDisplayParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
