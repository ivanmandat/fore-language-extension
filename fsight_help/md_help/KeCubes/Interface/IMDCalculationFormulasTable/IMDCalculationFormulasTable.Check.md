# IMDCalculationFormulasTable.Check

IMDCalculationFormulasTable.Check
-


# IMDCalculationFormulasTable.Check


## Синтаксис


Check([Table: [ITable](KeDb.chm::/Interface/ITable/ITable.htm)
 = Null]);


## Параметры


Table. Необязательный параметр,
 определяющий таблицу, которую необходимо проверить на пригодность использования
 в качестве таблицы формул многомерного расчета на сервере БД.


## Описание


Метод Check осуществляет проверку
 таблицы на пригодность использования в качестве таблицы формул.


## Пример


Для выполнения примера предполагается наличие в репозитории многомерного
 расчета на сервере БД с идентификатором MDCALC_1.


			Sub UserProc;

Var

    MB: IMetabase;

    MObj: IMetabaseObject;

    MDCalc: IMDCalculation;

    Slice: IMDCalculationSlice;

    FormulasTable: IMDCalculationFormulasTable;

    TableForFormulas: ITable;

Begin

    MB := MetabaseClass.Active;

    MObj := MB.ItemById("MDCALC_1").Edit;

    MDCalc := MObj As IMDCalculation;

    Slice := MDCalc.Sources.Item(0).Slices.Item(0);

    Slice.FixType := MDCalculationSliceFixType.Fixed;

    Slice.Fixed.Mapping := MDCalc.Destination.Slices.Item(0);

    // Получаем таблицу формул

    FormulasTable := MDCalc.FormulasTable;

    Try

        // Проверяем

        FormulasTable.Check;

    Except

        // Если неподходит - создаем новую

        TableForFormulas := FormulasTable.Create;

        FormulasTable.Attach(TableForFormulas);

    End Try;

    MObj.Save;

End Sub UserProc;


После выполнения примера будет изменена структура первого источника
 данных многомерного расчета на сервере БД. Будет зафиксировано первое
 измерение источника данных, после чего осуществляется проверка пригодности
 текущей таблицы формул. Если таблица непригодна для дальнейшего использования,
 то будет создана новая таблица.


См. также:


[IMDCalculationFormulasTable](IMDCalculationFormulasTable.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
