# IPivotDimensions.Item

IPivotDimensions.Item
-


# IPivotDimensions.Item


## Синтаксис


Item(Index: Integer): [IPivotDimension](../IPivotDimension/IPivotDimension.htm);


## Параметры


Index - индекс измерения.


## Описание


Свойство Item возвращает свойства
 измерения, индекс которого передается посредством параметра Index.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором "EXPRESS_REPORT".


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Pivot: IPivot;

	    Dims: IPivotDimensions;

	    Dim: IPivotDimension;

	    DimInst: IDimInstance;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Pivot := Expr.Pivot;

	    Dims := Pivot.Dimensions;

	    For i := 0 To Dims.Count - 1 Do

	        Dim := Dims.Item(i);

	        DimInst := Dim .DimInstance;

	        Debug.WriteLine(DimInst.Name);

	        Debug.Indent;

	        For j := 0 To DimInst.Elements.Count - 1 Do

	            Debug.WriteLine(DimInst.Elements.Name(i));

	        End For;

	        Debug.Unindent;

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены все
 элементы и наименования измерений, имеющихся в источниках данных экспресс-отчета.


См. также:


[IPivotDimensions](IPivotDimensions.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
