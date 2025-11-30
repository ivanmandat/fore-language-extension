# IPivotTableHeader.ElementDim

IPivotTableHeader.ElementDim
-


# IPivotTableHeader.ElementDim


## Синтаксис


ElementDim(SlotNumber: Integer; ElementNumber: Integer):
 [IDimInstance](KeDims.chm::/interface/IDimInstance/IDimInstance.htm);


## Параметры


SlotNumber. Индекс слота в
 заголовке таблицы;


ElementNumber. Индекс элемента
 в заголовке таблицы.


## Описание


Свойство ElementDim возвращает данные об измерении, которое содержится
 в заголовке таблицы.


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета,
 содержащего таблицу данных, с идентификатором «EXPRESS_SLOTS».


Добавьте ссылки на системные сборки: Express, Metabase, Pivot, Dimensions.


			Sub UserProc;

Var

    MB: IMetabase;

    Report: IEaxAnalyzer;

    Pivot: IPivot;

    TableHeader: IPivotTableHeader;

    DimKey, Element: Integer;

    DimInst: IDimInstance;

Begin

    // Получим текущий репозиторий

    MB := MetabaseClass.Active;

    // Получим экспресс-отчет

    Report := MB.ItemById("EXP_SLOTS").Bind As IEaxAnalyzer;

    // Получим объект, на основе которого строится таблица данных

    Pivot := Report.Pivot;

    // Получим свойства заголовков столбцов таблицы

    TableHeader := Pivot.ObtainTable.TopHeader;

    // Получим наименование и ключ измерения во второй ячейке заголовка первого столбца

    DimInst := TableHeader.ElementDim(0, 1);

    DimKey := TableHeader.ElementDimKey(0, 1);

    Debug.WriteLine("Наименование: " + DimInst.Name + ", Ключ: " + DimKey.ToString);

    // Получим индекс элемента измерения

    Element := TableHeader.DimensionElement(DimKey, 1);

    Debug.WriteLine("Индекс: " + Element.ToString);

End Sub UserProc;


В результате выполнения примера в окно консоли будет выведено
 наименование, ключ и индекс измерения, которое содержится во второй ячейке
 заголовка первого столбца:


Наименование: Типы данных, Ключ: 10200


Индекс: 0


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
