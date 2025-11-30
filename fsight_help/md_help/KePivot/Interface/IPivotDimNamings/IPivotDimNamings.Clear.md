# IPivotDimNamings.Clear

IPivotDimNamings.Clear
-


# IPivotDimNamings.Clear


## Синтаксис


Clear;


## Описание


Метод Clear осуществляет очистку
 коллекции наименований.


Примечание.
 В коллекции наименований всегда будет присутствовать хотя бы один элемент.
 После вызова метода Clear, в коллекцию
 будет добавлен новый элемент с [пустым
 выражением](../IPivotDimNaming/IPivotDimNaming.Expression.htm).


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

	    NamS.Clear;

	End Sub Button1OnClick;


После выполнения примера, коллекция наименований будет очищена.


См. также:


[IPivotDimNamings](IPivotDimNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
