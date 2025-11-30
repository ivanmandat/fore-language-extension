# IPivotTableHeader.IsGrouppingElement

IPivotTableHeader.IsGrouppingElement
-


# IPivotTableHeader.IsGrouppingElement


## Синтаксис


IsGrouppingElement(SlotNumber: Integer; ElementNumber: Integer): Boolean;


## Параметры


SlotNumber. Индекс слота в
 заголовке таблицы;


ElementNumber. Индекс элемента
 в заголовке таблицы.


## Описание


Свойство IsGrouppingElement
 определяет, является ли элемент заголовка группировочным.


## Комментарии


Допустимые значения:


	- True. Элемент заголовка
	 является группировочным;


	- False. Элемент заголовка
	 не является группировочным.


## Пример


Для выполнения примера убедитесь, что в репозитории содержится экспресс-отчёт
 с идентификатором «EXPRESS_SLOT_ROW».


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


					Sub Main;

		Var

		    mb: IMetabase;

		    Report: IEaxAnalyzer;

		    Pivot: IPivot;

		    TableHeader: IPivotTableHeader;

		    slot,row: Integer;

		Begin

		    // Получаем текущий репозиторий

		    mb := MetabaseClass.Active;

		    // Получаем экспресс-отчет

		    Report := mb.ItemById("EXPRESS_SLOT_ROW").Bind As IEaxAnalyzer;

		    // Получаем объект, на основе которого строится таблица данных

		    Pivot := Report.Pivot;

		    // Получим свойства боковика таблицы

		    TableHeader := Pivot.ObtainTable.LeftHeader;

		    // Выведем индексы группировочных элементов

		    Debug.WriteLine("Индексы группировочных элементов:");

		    For row := 0 To TableHeader.ElementCount -1 Do

		        For slot := 0 To TableHeader.SlotCount - 1 Do

		            If TableHeader.IsGrouppingElement(slot,row) Then

		                Debug.WriteLine(row);

		            End If;

		        End For;

		    End For;

		End Sub Main;


В результате выполнения примера в окно консоли будут выведены индексы
 группировочных элементов заголовка, если такие элементы содержатся в заголовке
 таблицы.


См. также:


[IPivotTableHeader](IPivotTableHeader.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
