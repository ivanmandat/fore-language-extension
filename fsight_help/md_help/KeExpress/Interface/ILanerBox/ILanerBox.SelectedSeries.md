# ILanerBox.SelectedSeries

ILanerBox.SelectedSeries
-


# ILanerBox.SelectedSeries


## Синтаксис


SelectedSeries(Index: Integer): [ILanerSerie](Laner.chm::/Interface/ILanerSerie/ILanerSerie.htm);


## Параметры


Index. Индекс выделенного ряда.


## Описание


Свойство SelectedSeries возвращает
 указанный ряд, выделенный в компоненте.


## Комментарии


Количество рядов, выделенных в LanerBox возвращает свойство [ILanerBox.SelectedSeriesCount](ILanerBox.SelectedSeriesCount.htm).
 Значение параметра Index не может
 быть больше значения данного свойства.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с идентификатором «Button1», компонента LanerBox с идентификатором
 «LanerBox1» и компонента UiErAnalyzer, являющегося источником данных для
 LanerBox. В UiErAnalyzer должна быть загружена рабочая книга базы данных временных рядов. Также
 на форме присутствует компонент Memo с идентификатором «Memo1».


Описанная процедура должна быть назначена обработчиком события OnClick
 для кнопки. Пример выполняется при нажатии кнопки.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    SeriesCount: Integer;

	    i: Integer;

	    Serie: ILanerSerie;

	Begin

	    SeriesCount := LanerBox1.SelectedSeriesCount;

	    For i := 0 To SeriesCount - 1 Do

	        Serie := LanerBox1.SelectedSeries(i);

	        Memo1.Lines.Add(Serie.Name);

	    End For;

	End Sub Button1OnClick;


После выполнения примера в компонент Memo будут выведены наименования
 рядов, выделенных в LanerBox.


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
