# IPivotTableHeader.IsCombinedSlot

IPivotTableHeader.IsCombinedSlot
-


# IPivotTableHeader.IsCombinedSlot


## Синтаксис


IsCombinedSlot(SlotNumber: Integer): Boolean;


## Параметры


SlotNumber. Индекс слота в
 заголовке таблицы.


## Описание


Свойство IsCombinedSlot возвращает признак наличия нескольких измерений,
 размещенных в одну строку и столбец, в заголовке таблицы.


## Комментарии


Если в заголовке таблицы содержатся несколько наименований измерений,
 размещенных в одну строку и столбец при установленном флажке «[Все измерения](UiAnalyticalArea.chm::/TableView/Layout/Merging_Dimensions.htm)»,
 то свойство вернет значение True,
 иначе False.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета,
 содержащего таблицу данных, с идентификатором «EXPRESS_SLOTS».


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IEaxAnalyzer;

    Pivot: IPivot;

    TableHeader: IPivotTableHeader;

    Dims: String;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Report := MB.ItemById("EXP_SLOTS").Bind As IEaxAnalyzer;

    // Получим объект, на основе которого строится таблица данных

    Pivot := Report.Pivot;

    // Получим свойства заголовков столбцов таблицы

    TableHeader := Pivot.ObtainTable.TopHeader;

    // Получим заголовок первого столбца таблицы

    Dims := TableHeader.GetSlotName(True, False, 0);

    // Определим, содержит ли заголовок несколько измерений в одной строке

    If TableHeader.IsCombinedSlot(0) = True Then

        Debug.WriteLine("В заголовке первого столбца таблицы объединены измерения с наименованиями - " + Dims);

        Else Debug.WriteLine("Измерения в заголовке не объединены");

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведены
 наименования объединенных измерений или сообщение о том, что измерения
 в заголовке не объединены:


В заголовке первого столбца таблицы объединены измерения
 с наименованиями - Календарь; Типы данных


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
