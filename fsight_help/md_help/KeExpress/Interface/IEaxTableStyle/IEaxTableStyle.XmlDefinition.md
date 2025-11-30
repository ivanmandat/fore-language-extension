# IEaxTableStyle.XmlDefinition

IEaxTableStyle.XmlDefinition
-


# IEaxTableStyle.XmlDefinition


## Синтаксис


XmlDefinition: String;


## Описание


Свойство XmlDefinition осуществляет
 экспорт/импорт оформления таблицы экспресс-отчета в XML формате.


## Пример


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    Grid: IEaxGrid;

	    Style: IEaxTableStyle;

	    s: String;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS_REPORT").BindAs IEaxAnalyzer;

	    Grid := Expr.Grid;

	    Style := Grid.Style;

	    s := Style.XmlDefinition;

	End Sub UserProc;


После выполнения пример в переменной «s» будет содержаться оформление
 таблицы экспресс-отчета в XML формате. Идентификатор экспресс-отчета -
 EXPRESS_REPORT.


См. также:


[IEaxTableStyle](IEaxTableStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
