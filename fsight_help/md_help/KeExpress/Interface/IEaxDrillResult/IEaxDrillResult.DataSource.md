# IEaxDrillResult.DataSource

IEaxDrillResult.DataSource
-


# IEaxDrillResult.DataSource


## Синтаксис


DataSource: [IEaxDataSource](../IEaxDataSource/IEaxDataSource.htm);


## Описание


Свойство DataSource возвращает
 источник данных, из которого берутся данные для ячейки.


## Комментарии


Свойство актуальное, если в экспресс-отчете присутствует более одного
 источника данных. Если экспресс-отчет создан на базе одного источника,
 то данное свойство возвращает значение Null. В этом случае источник данных
 можно получить в свойстве [IPivot.DataSource](KePivot.chm::/Interface/IPivot/IPivot.DataSource.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчета с идентификатором
 EXPRESS_REPORT и содержащего более одного источника данных.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    CellRes: IEaxDrillCellResult;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").Bind As IEaxAnalyzer;

	    CellRes := Expr.DrillCell(85,2);

	    If Expr.DataSources.Count <> 0 Then

	        s := CellRes.DataSource.VirtualCubeSource.Cube.Name;

	    End If;

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться наименование
 куба, являющегося источником данных для ячейки "С85" таблицы
 экспресс-отчета.


См. также:


[IEaxDrillResult](IEaxDrillResult.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
