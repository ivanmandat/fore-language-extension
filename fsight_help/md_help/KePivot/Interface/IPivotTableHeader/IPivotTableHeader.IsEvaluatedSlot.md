# IPivotTableHeader.IsEvaluatedSlot

IPivotTableHeader.IsEvaluatedSlot
-


# IPivotTableHeader.IsEvaluatedSlot


## Синтаксис


IsEvaluatedSlot: Boolean;


## Описание


Свойство IsEvaluatedSlot
 возвращает признак того является ли элемент заголовка вычисляемым столбцом/строкой.


## Комментарии


Допустимые значения:


	- True. Элемент заголовка
	 является вычисляемым столбцом/строкой;


	- False. Элемент заголовка
	 не является вычисляемым столбцом/строкой.


Значения в ячейках вычисляемых столбцов и строк рассчитываются по формуле,
 состоящей из атрибутов измерения таблицы.


Примечание.
 Большое количество вычисляемых строк и столбцов может привести к снижению
 производительности таблицы из-за расчета формул вычисляемых строк и столбцов.


Для получения коллекции вычисляемых столбцов/строк используйте свойство
 [IPivotHeader.EvaluatedSlots](../IPivotHeader/IPivotHeader.EvaluatedSlots.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором «EXPRESS_SLOTS». Данный отчет должен содержать таблицу
 данных.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    mb: IMetabase;

    Report: IEaxAnalyzer;

    Pivot: IPivot;

    TableHeader: IPivotTableHeader;

    i: Integer;

Begin

    // Получаем текущий репозиторий

    mb := MetabaseClass.Active;

    // Получаем экспресс-отчет

    Report := mb.ItemById("EXPRESS_SLOTS").Bind As IEaxAnalyzer;

    // Получаем объект, на основе которого строится таблица данных

    Pivot := Report.Pivot;

    // Получим свойства боковика таблицы

    TableHeader := Pivot.ObtainTable.LeftHeader;

    // Выведем индексы вычисляемых столбцов в боковике таблицы

    Debug.WriteLine("Индексы вычисляемых столбцов в боковике таблицы");

    For i := 0 To TableHeader.SlotCount - 1 Do

        If TableHeader.IsEvaluatedSlot(i) Then

            Debug.WriteLine(i);

        End If;

    End For;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены индексы
 вычисляемых столбцов в боковике таблицы.


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
