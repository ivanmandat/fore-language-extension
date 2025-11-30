# ITabRange.Value

ITabRange.Value
-


# ITabRange.Value


## Синтаксис


Value: Variant;


## Описание


Свойство Value определяет значение
 диапазона ячеек.


## Комментарии


При изменении значения диапазона также будет изменен [текст](ITabRange.Text.htm).
 Если для диапазона задается форматированный текст, то в свойстве Value можно получить его фактическое
 строковое представление без учёта форматирования.


Значение свойства Value ячейки,
 для которой определен редактор, перед установкой проверяется на соответствие
 типу данных редактора. Значение, которое не соответствует типу данных
 редактора, не устанавливается. Редактор определяется свойством [ITabCellStyle.Binding](../ITabCellStyle/ITabCellStyle.Binding.htm).


## Пример


Для выполнения примера в репозитории требуется наличие регламентного
 отчета с идентификатором REG_REP.


Добавьте ссылки на системные сборки: Metabase, Report, Tab.


			Sub UserProc;

Var

    MB: IMetabase;

    Regrep: IPrxReport;

    Sheet: IPrxSheet;

    Table: IPrxTable;

    Tsheet: ITabSheet;

    Column: ITabRange;

    i: Integer = 0;

Begin

    // Получаем текущий репозиторий

    MB := MetabaseClass.Active;

    // Получаем регламентный отчет

    Regrep := MB.ItemById("REG_REP").Edit As IPrxReport;

    // Получаем таблицу листа регламентного отчета

    Sheet := Regrep.Activesheet;

    Table := Sheet As IPrxTable;

    TSheet := Table.TabSheet;

    // Заполняем данными диапазон ячеек (A0:J9)

    While (i <= 9) Do

        Column := Tsheet.Cells(0, i, 9, i);

        i := i + 1;

        Column.Value := i;

    End While;

    (Regrep As IMetabaseObject).Save;

End Sub UserProc;


В результате выполнения примера ячейки диапазона (A0:J9) будут заполнены
 числами от 1 до 10.


См. также:


[ITabRange](ITabRange.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
