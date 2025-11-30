# IPrxTableIslandField.FieldName

IPrxTableIslandField.FieldName
-


# IPrxTableIslandField.FieldName


## Синтаксис


FieldName: String;


## Описание


Свойство FieldName определяет
 привязку ячейки к полю реляционного источника.


## Пример


Для выполнения примера добавьте ссылки на системные сборки Report, Metabase
 и Tab. Для примера необходимо наличие в репозитории регламентного отчета
 с идентификатором RR с добавленной в источники данных таблицей. У таблицы
 должны присутствовать поля «ID» и «NAME».


			Sub UserProc;

Var

    Report: IPrxReport;

    MB: IMetabase;

    TI: IPrxTableIsland;

    Range: ITabRange;

    Layout: IPrxTableIslandLayout;

    Row: IPrxTableIslandLayoutRow;

    Cell: IPrxTableIslandLayoutCell;

Begin

    MB := MetabaseClass.Active;

    Report := MB.ItemById("RR").Edit As IPrxReport;

    TI := Report.TableIslands.Add;

    TI := TI.Edit;

    TI.Source := Report.TableSources.Item(0);

    TI.Sheet := Report.Sheets.Item(0);

    Range := (TI.Sheet As IPrxTable).TabSheet.Cell(10, 1);

    TI.Range := Range;

    Layout := TI.Layout;

    Row := Layout.Add;

    Cell := Row.Add;

    Cell.Field.FieldName := "ID";

    Cell.Field.Caption := "ID";

    Cell := Row.Add;

    Cell.Field.FieldName := "NAME";

    Cell.Field.Caption := "NAME";

    Cell := Row.Add;

    Cell.Field.Expression.AsString := "NAME + ID";

    Cell.Field.Caption := "More";

    TI.Save;

    Report.Recalc;

    (Report As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера будет создана реляционная область данных и
 заданы параметры размещения. Реляционная область будет размещена в диапазоне
 ячеек, начиная с ячейки (10,1).
 Область будет содержать 3 столбца:


	- «ID» с привязкой к полю «ID» источника;


	- «NAME» с привязкой к полю «NAME» источника;


	- «More» с привязкой к полям «ID» и «NAME» источника (с помощью
	 формулы).


См. также:


[IPrxTableIslandField](IPrxTableIslandField.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
