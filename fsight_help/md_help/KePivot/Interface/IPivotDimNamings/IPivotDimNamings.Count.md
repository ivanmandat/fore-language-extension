# IPivotDimNamings.Count

IPivotDimNamings.Count
-


# IPivotDimNamings.Count


## Синтаксис


Count: Integer;


## Описание


Свойство Count возвращает количество
 наименований в коллекции.


## Пример


Для выполнения примера предполагается наличие формы, расположенной на
 ней кнопки с наименованием «Button1», компонента TabSheetBox и компонента
 UiErAnalyzer с наименованием «UiErAnalyzer1», являющегося источником данных.


	Sub Button1OnClick(Sender: Object; Args: IMouseEventArgs);

	Var

	    Eax: IEaxAnalyzer;

	    Pivot: IPivot;

	    PivotDim: IPivotDimension;

	    NamS: IPivotDimNamings;

	    S: Integer;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Pivot := Eax.Pivot;

	    PivotDim := Pivot.Dimensions.Item(0);

	    NamS := PivotDim.Namings;

	    S := NamS.Count;

	End Sub Button1OnClick;


После выполнения примера, в переменной «S» будет храниться количество
 элементов в коллекции наименований.


См. также:


[IPivotDimNamings](IPivotDimNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
