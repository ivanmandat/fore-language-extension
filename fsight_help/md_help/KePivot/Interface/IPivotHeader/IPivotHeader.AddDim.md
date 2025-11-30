# IPivotHeader.AddDim

IPivotHeader.AddDim
-


# IPivotHeader.AddDim


## Синтаксис


AddDim(Dim: [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm));


## Параметры


Dim - измерение, которое необходимо
 добавить в выбранную область заголовка таблицы.


## Описание


Метод AddDim осуществляет добавление
 измерения Dim в выбранный заголовок
 таблицы. Измерение добавляется в конец существующего списка измерений.


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

	    Header.AddDim(Pivot.FixedHeader.Dim(0));

	    MObj.Save;

	End Sub Main;


После выполнения примера фиксированное измерение будет добавлено в список
 измерений, расположенных по строкам. Данное измерение будет размещено
 в конце списка измерений.


См. также:


[IPivotHeader](IPivotHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
