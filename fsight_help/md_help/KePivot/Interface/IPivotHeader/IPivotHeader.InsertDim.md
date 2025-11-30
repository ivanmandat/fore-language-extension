# IPivotHeader.InsertDim

IPivotHeader.InsertDim
-


# IPivotHeader.InsertDim


## Синтаксис


InsertDim(InsertedDim: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);
 Dim: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);
 pos: [PivotDimPosition](../../Enums/PivotDimPosition.htm));


## Параметры


InsertedDim. Измерение, которое
 необходимо вставить в выбранный заголовок таблицы;


Dim. Измерение, относительно
 которого будет вставляться измерение InsertedDim;


pos. Позиция, относительно
 измерения Dim, в которую будет
 вставлено измерение.


## Описание


Метод InsertDim осуществляет
 вставку измерения InsertedDim
 в выбранный заголовок таблицы. Вставка осуществляется в указанную позицию,
 относительно измерения Dim.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором "EXPRESS_REPORT". В списке измерений имеется
 хотя бы одно фиксированное измерение и одно, расположенное по строкам.


	Sub Main;

	Var

	    MB: IMetabase;

	    MObj: IMetabaseObject;

	    Expr: IEaxAnalyzer;

	    Pivot: IPivot;

	    Header: IPivotHeader;

	Begin

	    MB := MetabaseClass.Active;

	    MObj := MB.ItemById("EXPRESS_REPORT").Edit;

	    Expr := MObj As IEaxAnalyzer;

	    Pivot := Expr.Pivot;

	    Header := Pivot.LeftHeader;

	    Header.InsertDim(Pivot.FixedHeader.Dim(0), Header.Dim(0), PivotDimPosition.After);

	    MObj.Save;

	End Sub Main;


После выполнения примера фиксированное измерение будет перемещено в
 список измерений, расположенных по строкам. Данное измерение будет размещено
 после первого измерения, расположенного по строкам.


См. также:


[IPivotHeader](IPivotHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
