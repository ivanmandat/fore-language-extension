# IPivotTableHeader.ContainsKey

IPivotTableHeader.ContainsKey
-


# IPivotTableHeader.ContainsKey


## Синтаксис


ContainsKey(SlotNumber: Integer; DimensionKey: Integer):
 Boolean;


## Параметры


SlotNumber. Индекс слота в
 заголовке таблицы;


DimensionKey.
 Ключ измерения, содержащегося в заголовке таблицы.


## Описание


Метод ContainsKey определяет,
 содержится ли измерение с заданным ключом в слоте заголовка таблицы.


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

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Report := MB.ItemById("EXP_SLOTS").Bind As IEaxAnalyzer;

    // Получим объект, на основе которого строится таблица данных

    Pivot := Report.Pivot;

    // Получим свойства заголовков столбцов таблицы

    TableHeader := Pivot.ObtainTable.TopHeader;

    // Проверим, содержится ли измерение с ключом "10127" в первом слоте заголовка

    If TableHeader.ContainsKey(0, 10127) = True Then

        Debug.WriteLine("Измерение с ключом 10127 содержится в заголовке таблицы");

        Else Debug.WriteLine("Измерение с ключом 10127 не содержится в заголовке таблицы");

    End If;

End Sub UserProc;


В результате выполнения примера в окно консоли будут выведено
 сообщение о том, содержится ли измерение с заданным ключом в заголовке
 таблицы.


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
