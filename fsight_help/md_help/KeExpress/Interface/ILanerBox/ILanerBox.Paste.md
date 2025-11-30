# ILanerBox.Paste

ILanerBox.Paste
-


# ILanerBox.Paste


## Синтаксис


Paste(StartIndex: Integer; [Parent: [ILanerGroupSerie](Laner.chm::/Interface/ILanerGroupSerie/ILanerGroupSerie.htm)
 = Null]);


## Параметры


StartIndex. Позиция, в которую
 будет вставлен набор рядов;


Parent. Родительская группа
 рядов. Необязательный параметр.


## Описание


Метод Paste вставляет набор
 рядов в рабочую книгу из буфера обмена.


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

	    LanerBox1.Copy(SeriesSet);

	    LanerBox1.Paste(0);

	End Sub Button1OnClick;


После выполнения примера выделенные ряды рабочей книги будут скопированы,
 затем вставлены в начало таблицы данных.


См. также:


[ILanerBox](ILanerBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
