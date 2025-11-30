# IPivotDimNamings.Add

IPivotDimNamings.Add
-


# IPivotDimNamings.Add


## Синтаксис


Add: [IPivotDimNaming](../IPivotDimNaming/IPivotDimNaming.htm);


## Описание


Метод Add осуществляет добавление
 наименования в коллекцию.


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

	    NamS.Add;

	End Sub Button1OnClick;


После выполнения примера, в коллекцию будет добавлено новое наименование.


См. также:


[IPivotDimNamings](IPivotDimNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
