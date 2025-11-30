# ILanerBox.Cut

ILanerBox.Cut
-


# ILanerBox.Cut


## Синтаксис


Cut(Series: [ILanerSeriesSet](Laner.chm::/Interface/ILanerSeriesSet/ILanerSeriesSet.htm));


## Параметры


Series. Набор рядов рабочей
 книги, которые необходимо вырезаны в буфер обмена.


## Описание


Метод Cut вырезает набор рядов
 рабочей книги в буфер обмена.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента LanerBox с наименованием
 «LanerBox1» и компонента UiErAnalyzer с наименованием «UiErAnalyzer1»,
 являющегося источником данных для LanerBox. В «UiErAnalyzer1» должна быть
 загружена рабочая книга базы данных временных рядов.


Пример будет выполняться при нажатии на кнопку.


	Sub Button1OnClick(Sender:Object; Args: IMouseEventArgs);

	Var

	    ErAn: IEaxAnalyzer;

	    Laner: ILaner;

	    Ser: ILanerSeries;

	    SeriesSet: ILanerSeriesSet;

	    i: Integer;

	    SelSer: ILanerSerie;

	Begin

	    ErAn := UiErAnalyzer1.ErAnalyzer;

	    Laner := ErAn.Laner;

	    Ser := Laner.Series;

	    SeriesSet := Ser.CreateSet;

	    For i := 0 To LanerBox1.SelectedSeriesCount - 1 Do

	        SelSer := LanerBox1.SelectedSeries(i);

	        SeriesSet.Add(SelSer);

	    End For;

	    LanerBox1.Cut(SeriesSet);

	    LanerBox1.Paste(0);

	End Sub Button1OnClick;


После выполнения примера выделенные ряды рабочей книги будут вырезаны,
 затем вставлены в начало таблицы данных.


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
