# IPivotDimension.DimInstance

IPivotDimension.DimInstance
-


# IPivotDimension.DimInstance


## Синтаксис


DimInstance: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Описание


Свойство DimInstance возвращает
 данные измерения, индекс которого передается посредством параметра Index.


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


[IPivotDimension](IPivotDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
