# IPivotDimNamings.Remove

IPivotDimNamings.Remove
-


# IPivotDimNamings.Remove


## Синтаксис


Remove (Index: Integer): Boolean;


## Параметры


Index - индекс наименования
 в коллекции.


## Описание


Метод Remove осуществляет удаление
 наименование из коллекции по заданному индексу и возвращает результат
 операции. True - удаление прошло
 удачно, False - удаления не произошло.


Примечание.
 В коллекции наименований всегда будет присутствовать хотя бы один элемент.
 Если после вызова метода Remove
 в коллекции не осталось элементов, то в нее будет добавлен элемент с [пустым выражением](../IPivotDimNaming/IPivotDimNaming.Expression.htm).


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

	    NamS.Remove(0);

	End Sub Button1OnClick;


После выполнения примера, первое наименование будет удалено из коллекции.


См. также:


[IPivotDimNamings](IPivotDimNamings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
