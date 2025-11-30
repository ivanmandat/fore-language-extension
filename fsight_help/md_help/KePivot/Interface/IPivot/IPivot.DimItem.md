# IPivot.DimItem

IPivot.DimItem
-


# IPivot.DimItem


## Синтаксис


DimItem(Index: Integer): [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


Index - индекс измерения.


## Описание


Свойство DimItem возвращает
 данные измерения источника данных.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Pivot: IPivot;

	    DimInst: IDimInstance;

	    i, j: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    Pivot := Expr.Pivot;

	    For i := 0 To Pivot.DimCount - 1 Do

	        DimInst := Pivot.DimItem(i);

	        Debug.WriteLine(DimInst.Name);

	        Debug.Indent;

	        For j := 0 To DimInst.Elements.Count - 1 Do

	            Debug.WriteLine(DimInst.Elements.Name(j));

	        End For;

	        Debug.Unindent;

	    End For;

	End Sub UserProc;


После выполнения примера в консоль среды разработки будут выведены наименование
 и все элементы измерений, имеющихся в источниках данных экспресс-отчёта.


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
