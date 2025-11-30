# IPivotTableHeader.GetSlotName

IPivotTableHeader.GetSlotName
-


# IPivotTableHeader.GetSlotName


## Синтаксис


GetSlotName(Dimension: Boolean; Attribute: Boolean;
 SlotNumber: Integer): String;


## Параметры


Dimension. Определение вывода
 наименования измерения;


Attribute. Определение вывода
 наименования атрибута измерения;


SlotNumber. Индекс слота в
 заголовке таблицы.


## Описание


Метод GetSlotName возвращает
 наименование слота заголовка таблицы.


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

    Dim: String;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Report := MB.ItemById("EXPRESS_SLOTS").Bind As IEaxAnalyzer;

    // Получим объект, на основе которого строится таблица данных

    Pivot := Report.Pivot;

    // Получим свойства шапки таблицы

    TableHeader := Pivot.ObtainTable.TopHeader;

    // Получим наименование измерения в
 первой строке заголовка таблицы

    Dim := TableHeader.GetSlotName(True, False, 0);

    // Сравним полученное наименование с заданным

    If Dim = "Календарь" Then

        // Выведем в консоль ключ измерения с наименованием «Календарь»

        Debug.WriteLine(TableHeader.ElementDimKey(0, 1).ToString);

        // Выведем в консоль наименование полученного измерения

        Else Debug.WriteLine(Dim);

    End If;

End Sub UserProc;


В результате выполнения примера после проверки наименования измерения
 в окно консоли будет выведен ключ календарного измерения или наименование
 измерения первой строки заголовка таблицы.


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
