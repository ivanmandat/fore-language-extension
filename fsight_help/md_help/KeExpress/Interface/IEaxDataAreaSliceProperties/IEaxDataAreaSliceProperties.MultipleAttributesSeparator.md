# IEaxDataAreaSliceProperties.MultipleAttributesSeparator

IEaxDataAreaSliceProperties.MultipleAttributesSeparator
-


# IEaxDataAreaSliceProperties.MultipleAttributesSeparator


## Синтаксис


MultipleAttributesSeparator:
 String;


## Описание


Свойство MultipleAttributesSeparator
 определяет символ-разделитель между наименованиями атрибутов.


## Комментарии


Свойство актуально, если свойство [IEaxDataAreaSliceProperties.MultipleAttributesEnabled](IEaxDataAreaSliceProperties.MultipleAttributesEnabled.htm)
 принимает значение True.


Разделителем может служить любой одиночный символ.


Если заданный пользователем разделитель не удовлетворяет условию, то
 используется стандартный разделитель «|».


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT. В экспресс-отчете должно быть выбрано
 несколько атрибутов измерения с идентификатором DIC_RF.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    SelSet: IDimSelectionSet;

	    DimSel: IDimSelection;

	    Attrs: IDimAttributesInstance;

	    DataArea: IEaxDataArea;

	    Areaslice: IEaxDataAreaSlice;

	    Properties: IEaxDataAreaSliceProperties;

	    GetDimAttributes, SetDimAttributes: Array Of Integer;

	    i: integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим экспресс-отчет

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим отметку, по которой строится таблица

	    SelSet := Express.Pivot.Selection;

	    DimSel := SelSet.FindById("DIC_RF");

	    // Получим коллекцию значений атрибутов справочника

	    Attrs := DimSel.Dimension.Attributes;

	    // Получим аналитическую область данных

	    DataArea := Express.DataArea;

	    // Получим срез источника данных

	    Areaslice := DataArea.Slices.Item(0);

	    // Получим свойства среза источника данных

	    Properties := Areaslice.Properties;

	    // Проверим используется ли режим отображения нескольких атрибутов справочника

	    If Properties.MultipleAttributesEnabled = False Then

	        Properties.MultipleAttributesEnabled := True;

	    End If;

	    // Уберем пробелы между наименованиями атрибутов

	    Properties.MultipleAttributesSpaced := False;

	    // Установим другой разделитель

	    Properties.MultipleAttributesSeparator := ":";

	    // Получим массив ключей атрибутов

	    SetDimAttributes := New Integer[Attrs.Count];

	    For i := 0 To Attrs.Count - 1 Do

	        SetDimAttributes[i] := Attrs.Item(i).Attribute.Key;

	    End For;

	    // Установим отметкуатрибутов измерения

	    Properties.SetDimensionNamingAttributes(Dimsel.Dimension.Key, SetDimAttributes);

	    // Получим отметку атрибутов измерения

	    GetDimAttributes := Properties.GetDimensionNamingAttributes(Dimsel.Dimension.Key);

	    // Выведем в окно консоли количество элементов в отметке

	    Debug.WriteLine("Количество элементов в отметке - " + GetDimAttributes.Length.ToString);

	    // Сохраним изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера:


	- наименования атрибутов не будут разделяться между собой пробелами
	 до и после нового разделителя «:» в дереве измерений;


	- в дереве измерений у заданного измерения будут выводиться значения
	 всех атрибутов;


	- в окно консоли выведется количество элементов в отметке.


См. также:


[IEaxDataAreaSliceProperties](IEaxDataAreaSliceProperties.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
