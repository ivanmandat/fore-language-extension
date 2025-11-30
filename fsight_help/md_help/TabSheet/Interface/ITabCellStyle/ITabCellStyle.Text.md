# ITabCellStyle.Text

ITabCellStyle.Text
-


# ITabCellStyle.Text


## Синтаксис


Text: String;


## Описание


Свойство Text определяет текст
 ячейки таблицы.


## Комментарии


Если данное свойство используется для выделенного диапазона ячеек, то
 он должен содержать хотя бы одну ячейку, имеющую значение.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчета с идентификатором «REG_REPORT_TAB». Отчет содержит непустой диапазон
 ячеек «A0:I0».


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetaBase;

    RegRep: IPrxReport;

    Sheet: IPrxSheet;

    Table: IPrxTable;

    Range: ITabSheet;

    Diap: ITabRange;

    Style: ITabCellStyle;

Begin

    // Получим репозиторий

    MB := MetabaseClass.Active;

    // Получим регламентный отчет

    RegRep := MB.ItemById("REG_REPORT_TAB").Edit As IPrxReport;

    // Получим диапазон ячеек (A0:I0)

    Sheet := RegRep.Activesheet;

    Table := Sheet As IPrxTable;

    Range := Table.TabSheet;

    Diap := Range.ParseRange("A0:I0");

    // Получим стиль
 ячеек диапазона (A0:I0)

    Style := Diap.Style;

    // Зададим текст для ячеек

    Style.Text := "text";

    // Сохраним изменения

    (RegRep As IMetabaseObject).Save;

End Sub UserProc;


После выполнения примера в ячейках диапазона «A0:I0» изменится текст.


См. также:


[ITabCellStyle](ITabCellStyle.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
