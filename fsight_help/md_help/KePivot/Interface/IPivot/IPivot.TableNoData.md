# IPivot.TableNoData

IPivot.TableNoData
-


# IPivot.TableNoData


## Синтаксис


TableNoData: [IPivotTable](../IPivotTable/IPivotTable.htm);


## Описание


Свойство TableNoData возвращает
 таблицу без её повторного вычисления.


## Комментарии


Свойство позволяет оптимизировать время загрузки данных при обращении
 к таблице. В отличие от метода [IPivot.ObtainTable](IPivot.ObtainTable.htm),
 свойство не приводит к повторному вычислению уже вычисленной и хранящейся
 в памяти таблицы, вследствие чего загрузка данных происходит быстрее.


Если таблица данных была изменена после вычисления, то свойство будет
 принимать значение Null.


## Пример


Для выполнения примера в репозитории необходимо наличие регламентного
 отчёта с идентификатором REGULAR_REPORT. В отчёте должна содержаться таблица
 данных, построенная на основе куба.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot, Report.


			Public Sub Check_TableNoData(Is_Edit: Boolean);

Var

    Mb: IMetabase;

    Obj: IMetabaseObjectDescriptor;

    Report: IPrxReport;

    Pivot: IPivot;

    PivotTable: IPivotTable;

    DataArea: IEaxDataArea;

    Slice: IEaxDataAreaSlices;

    SliceItem: IEaxDataAreaSlice;

    RowCount: Integer;

    ColumnCount: Integer;

Begin

    // Получим репозиторий

    Mb := MetabaseClass.Active;

    // Получим регламентный отчёт

    Obj := Mb.ItemById("REGULAR_REPORT");

    // Откроем отчёт на редактирование, если в процедуру передано значение
 True

    If Is_Edit = True Then

        Report := Obj.Edit As IPrxReport;

    Else

        // Откроем отчёт
 на просмотр

        Report := Obj.Open(Null) As IPrxReport;

    End If;

    // Получим область данных регламентного отчёта

    DataArea := Report.DataArea;

    // Получим коллекцию срезов области данных

    Slice := DataArea.Slices;

    // Выберем первый срез области данных

    SliceItem := Slice.Item(0);

    // Создадим основу для получения таблицы из среза области данных

    Pivot := (SliceItem As IEaxDataAreaPivotSlice).Pivot;

    // Получим таблицу из среза области данных

    PivotTable := Pivot.TableNoData;

    // Выведем в консоль соответствующее сообщение, если таблицу получить не удалось

    If PivotTable = Null Then

        Debug.WriteLine("Не удалось получить таблицу данных!");

    Else

        // Выведем в консоль количество строк таблицы

        RowCount := PivotTable.RowCount;

        Debug.WriteLine("Количество строк таблицы: " + RowCount.ToString);

        // Выведем в консоль количество столбцов таблицы

        ColumnCount := PivotTable.ColumnCount;

        Debug.WriteLine("Количество столбцов таблицы: " + ColumnCount.ToString);

    End If;

    Debug.WriteLine("===============================================");

End Sub Check_TableNoData;


Public Sub UserProc;

Begin

    // Выведем в консоль сообщение о получении таблицы без возможности редактирования

    Debug.WriteLine("ПОЛУЧИМ ТАБЛИЦУ БЕЗ ВОЗМОЖНОСТИ
 РЕДАКТИРОВАНИЯ");

    // Вызовем процедуру Check_TableNoData с атрибутом False

    Check_TableNoData(False);

    // Выведем в консоль сообщение о получении таблицы с возможностью
 редактирования

    Debug.WriteLine("ПОЛУЧИМ ТАБЛИЦУ С ВОЗМОЖНОСТЬЮ
 РЕДАКТИРОВАНИЯ");

    // Вызовем процедуру Check_TableNoData с атрибутом True

    Check_TableNoData(True);

End Sub UserProc;


При выполнении примера будет дважды произведена попытка открыть регламентный
 отчёт и получить из него таблицу данных: без возможности редактирования
 и с возможностью редактирования. Если таблица получена успешно, то в консоль
 будет выведена информация о количестве строк и столбцов таблицы. Если
 получить таблицу не удалось, то в консоль будет выведено соответствующее
 сообщение.


Пример вывода результата:


ПОЛУЧИМ ТАБЛИЦУ БЕЗ ВОЗМОЖНОСТИ РЕДАКТИРОВАНИЯ


Количество строк таблицы: 10


Количество столбцов таблицы: 4


===============================================


ПОЛУЧИМ ТАБЛИЦУ С ВОЗМОЖНОСТЬЮ РЕДАКТИРОВАНИЯ


Не удалось получить таблицу данных!


===============================================


См. также:


[IPivot](IPivot.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
