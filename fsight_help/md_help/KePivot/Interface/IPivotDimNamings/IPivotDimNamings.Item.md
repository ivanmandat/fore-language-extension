# IPivotDimNamings.Item

IPivotDimNamings.Item
-


# IPivotDimNamings.Item


## Синтаксис


Item (Index: Integer): [IPivotDimNaming](../IPivotDimNaming/IPivotDimNaming.htm);


## Параметры


Index - индекс наименования
 в коллекции.


## Описание


Свойство Item возвращает наименование
 из коллекции по заданному индексу.


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

	    Naming: IPivotDimNaming;

	    S: String;

	Begin

	    Eax := UiErAnalyzer1.ErAnalyzer;

	    Pivot := Eax.Pivot;

	    PivotDim := Pivot.Dimensions.Item(0);

	    NamS := PivotDim.Namings;

	    Naming := NamS.Item(0);

	    S := Naming.Expression.AsString;

	End Sub Button1OnClick;


После выполнения примера, в переменной «S» будет храниться первое выражение,
 определяющее наименование элементов первого измерения.


См. также:


[IPivotDimNamings](IPivotDimNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
