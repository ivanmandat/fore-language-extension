# ILanerSeries.MoveTo

ILanerSeries.MoveTo
-


# ILanerSeries.MoveTo


## Синтаксис


MoveTo(FromIndex: Integer; ToIndex: Integer);


## Параметры


FromIndex. Индекс позиции ряда,
 который необходимо переместить;


ToIndex. Индекс позиции, в
 которую необходимо переместить ряд.


## Описание


Метод MoveTo осуществляет перемещение
 рядов в коллекции по индексам.


## Комментарии


Значения FromIndex, ToIndex
 должны быть неотрицательными и меньше значения [ILanerSerieList.Count](../ILanerSerieList/ILanerSerieList.Count.htm).


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

	    Analyzer: IEaxAnalyzer;

	    Laner: Ilaner;

	    Series: ILanerSeries;

	Begin

	    Analyzer := UiErAnalyzer1.ErAnalyzer;

	    Laner := Analyzer.Laner;

	    Series := Laner.Series;

	    Series.MoveTo(Series.Count - 1, 0);

	End Sub Button1OnClick;


После выполнения примера последний ряд рабочей книги будет перемещен
 в её начало.


См. также:


[ILanerSeries](ILanerSeries.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
