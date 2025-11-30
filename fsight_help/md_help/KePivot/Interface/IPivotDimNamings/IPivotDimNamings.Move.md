# IPivotDimNamings.Move

IPivotDimNamings.Move
-


# IPivotDimNamings.Move


## Синтаксис


Move(IndexFrom: Integer; IndexTo: Integer);


## Параметры


IndexFrom. Индекс наименования,
 которое необходимо переместить;


IndexTo. Индекс позиции, в
 которую необходимо переместить наименование.


## Описание


Метод Move осуществляет перемещение
 наименования в коллекции.


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

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Pivot := Eax.Pivot;

	    PivotDim := Pivot.Dimensions.Item(0);

	    NamS := PivotDim.Namings;

	    NamS.Add;

	    Nams.Move(0, 1);

	End Sub Button1OnClick;


После выполнения примера, в коллекции наименований будут переставлены
 местами первые два элемента.


См. также:


[IPivotDimNamings](IPivotDimNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
