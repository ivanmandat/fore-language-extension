# IEaxDataAreaHierarchy.ElementStyle

IEaxDataAreaHierarchy.ElementStyle
-


# IEaxDataAreaHierarchy.ElementStyle


## Синтаксис


ElementStyle(Element: Variant): [IEaxDataAreaCellStyle](../IEaxDataAreaCellStyle/IEaxDataAreaCellStyle.htm);


## Параметры


Element. Идентификатор вычисляемого
 элемента.


## Описание


Свойство ElementStyle определяет
 стиль оформления ячеек элемента альтернативной иерархии.


## Комментарии


Для получения идентификатора вычисляемого элемента используйте свойство
 [IDimInstance.Id](KeDims.chm::/interface/IDimElements/IDimElements.Id.htm).


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS_REPORT. Одно из измерений должно содержать минимум
 одну альтернативную иерархию.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Hier: IEaxDataAreaHierarchy;

	    DimSel: IDimSelection;

	    DimEl: String;

	    CellStyle: IEaxDataAreaCellStyle;

	    CellFont: ITabFont;

	Begin

	    MB := MetabaseClass.Active;

	    Express := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получаем альтернативную иерархию и первый элемент

	    Hier := Express.DataArea.Hierarchies.Item(0);

	    DimSel := Hier.Selection;

	    DimSel.SelectAll;

	    DimEl := DimSel.Dimension.Elements.Id(DimSel.Element(0));

	    // Новый стиль для элемента

	    CellStyle := New EaxDataAreaCellStyle.Create;

	    // Выравнивание в заголовке элемента

	    CellStyle.Header.HorizontalAlignment := TabFormatAlignment.Center;

	    // Шрифт в области с данными по элементу

	    CellFont := CellStyle.Data.Font;

	    CellFont.Name := "Arial";

	    CellFont.Italic := TriState.OnOption;

	    CellStyle.Data.Font := CellFont;

	    // Установка нового стиля для элемента

	    Hier.ElementStyle(DimEl) := CellStyle;

	    // Обновим и сохраним изменения

	    Express.RefreshAll;

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера будет задан стиль оформления для первого элемента
 альтернативной иерархии: текст заголовка элемента будет выравниваться
 по центру; для ячеек с данными будет задан курсивный шрифт.


См. также:


[IEaxDataAreaHierarchy](IEaxDataAreaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
