# IDimensionModel.IsCalendar

IDimensionModel.IsCalendar
-


# IDimensionModel.IsCalendar


## Синтаксис


IsCalendar: Boolean;


## Описание


Свойство IsCalendar определяет,
 используется ли справочник в качестве календарного.


## Комментарии


Для того чтобы справочник мог использоваться в качестве календарного,
 в его структуре должны быть созданы атрибуты, которые выполнят функции
 следующих атрибутов календаря:


	- BLOCK_TYPE (Целый);


	- START_DATE (Дата и Время);


	- NAME (Строка);


	- ID (Строка);


	- ORDER (Целый).


Идентификаторы атрибутов могут отличаться, сопоставление осуществляется
 в коллекции [IDimAsCalendar.Attrs](../IDimAsCalendar/IDimAsCalendar.Attrs.htm).


Также в справочнике необходимо создать первичный индекс со следующим
 порядком обязательных атрибутов: первый атрибут - BLOCK_TYPE, второй атрибут
 - START_DATE, а также NAME, ID и ORDER. Данный индекс должен быть первым
 в списке индексов справочника.


## Пример


Для выполнения примера в репозитории предполагается наличие справочника
 НСИ с идентификатором CUSTOM_CALENDAR. В структуре справочника, кроме
 системных атрибутов, также созданы атрибуты с идентификаторами CUSTOM_BLOCK_TYPE,
 CUSTOM_START_DATE, CUSTOM_ID. Типы данных атрибутов соответствуют типам
 данных, которые должны иметь атрибуты календарного справочника. Также
 в структуре справочника созданы два уровня.


Подключите системные сборки Metabase и Dimensions.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Dim: IDimensionModel;

	    DimAttrs: IDimAttributes;

	    Levels: IDimLevels;

	    DimAsCln: IDimAsCalendar;

	    ClnAttrs: IDimAsCalendarAttrs;

	    ClnLevels: IDimAsCalendarLevels;

	    AttrId: String;

	    c, i: Integer;

	Begin

	    MB := MetabaseClass.Active;

	    Dim := MB.ItemById("CUSTOM_CALENDAR").Edit As IDimensionModel;

	    DimAttrs := Dim.Attributes;

	    Levels := Dim.Levels;

	    // Представление справочника как календаря

	    DimAsCln := Dim.AsCalendar;

	    // Обязательные атрибуты календаря

	    ClnAttrs := DimAsCln.Attrs;

	    c := ClnAttrs.Count;

	    // Сопоставление атрибутов календаря и текущего справочника

	    For i := 0 To c - 1 Do

	        AttrId := ClnAttrs.ItemId(i);

	        Select Case AttrId

	            Case "BLOCK_TYPE": ClnAttrs.IdAttr(AttrId) := DimAttrs.FindById("CUSTOM_BLOCK_TYPE");

	            Case "START_DATE": ClnAttrs.IdAttr(AttrId) := DimAttrs.FindById("CUSTOM_START_DATE");

	            Case "NAME": ClnAttrs.IdAttr(AttrId) := DimAttrs.FindById("NAME");

	            Case "ID": ClnAttrs.IdAttr(AttrId) := DimAttrs.FindById("CUSTOM_ID");

	            Case "ORDER": ClnAttrs.IdAttr(AttrId) := DimAttrs.FindById("ORD");

	        End Select;

	    End For;

	    // Сопоставление уровней через KeyLevel

	    ClnLevels := DimAsCln.Levels;

	    ClnLevels.KeyLevel(Levels.Item(0).Key) := DimCalendarLevel.Year;

	    ClnLevels.KeyLevel(Levels.Item(1).Key) := DimCalendarLevel.Month;

	    // или через LevelKey

	    ClnLevels.LevelKey(DimCalendarLevel.Year) := Levels.Item(0).Key;

	    ClnLevels.LevelKey(DimCalendarLevel.Month) := Levels.Item(1).Key;

	    Try

	        // Объявление справочника календарным

	        Dim.IsCalendar := True;

	        // Сохранение изменений

	        (Dim As IMetabaseObject).Save;

	    Except On e: Exception Do

	        Debug.WriteLine("Справочник не может быть сохранён как календарный.");

	        Debug.WriteLine(e.Message);

	    End Try;

	End Sub UserProc;


При выполнении примера в справочнике НСИ будут сопоставлены атрибуты
 и уровни таким образом, чтобы справочник мог использоваться в качестве
 календаря.


См. также:


[IDimensionModel](IDimensionModel.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
