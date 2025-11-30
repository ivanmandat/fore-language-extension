# IEaxDrillSettings.OpenObjectContext

IEaxDrillSettings.OpenObjectContext
-


# IEaxDrillSettings.OpenObjectContext


## Синтаксис


OpenObjectContext: [IEaxOpenObjectContext](../IEaxOpenObjectContext/IEaxOpenObjectContext.htm);


## Описание


Свойство OpenObjectContext возвращает
 настройки, передаваемые в открываемый объект.


## Комментарии


Актуально, если открываемым объектом является регламентный отчёт.


Для использования передаваемых настроек в отчёте должен быть создан
 параметр с идентификатором REPORT_OPEN_CONTEXT. В данный параметр будут
 переданы настройки, заданные в свойстве OpenObjectContext,
 в формате XML. Если передаются [пользовательские
 настройки](../IEaxOpenObjectContext/IEaxOpenObjectContext.ExternalXML.htm), то они могут быть обработаны в прикладном макросе открываемого
 отчёта.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXPRESS_REPORT и регламентного отчёта с идентификатором
 REPORT.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Report, Tab, Xml.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Eax: IEaxAnalyzer;

	    PivSlice: IEaxDataAreaPivotSlice;

	    Pivot: IPivot;

	    HeadSets: IDataAreaHeaderSettingsBase;

	    Grid: IEaxGrid;

	    DimSettings: IEaxGridDimensionSettings;

	    PivotDims: IPivotDimension;

	    DimModel: IDimensionModel;

	    DimIndex: IDimIndex;

	    Attributes: IDimAttributesInstance;

	    Attribute: IDimAttribute;

	    Drill: IEaxDrillSettings;

	    OpenContext: IEaxOpenObjectContext;

	    XMLDoc: IXMLDOMDocument;

	    XMLElem: IXMLDOMElement;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчет

	    Eax := MB.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим срез данных в качестве области данных таблицы отчета

	    PivSlice := Eax.DataArea.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Получим таблицу данных

	    Pivot := PivSlice.Pivot;

	    // Получим измерение

	    PivotDims := Pivot.Dimensions.Item(1);

	    // Получим структуру измерения

	    DimModel := PivotDims.DimInstance.Dimension;

	    // Получим структуру указанного индекса измерения

	    DimIndex := DimModel.Indexes.Item(0);

	    // Получим коллекцию атрибутов измерения

	    Attributes := PivotDims.DimInstance.Attributes;

	    // Получим структуру указанного атрибута

	    Attribute := Attributes.Item(0).Attribute;

	    // Получим настройки заголовка аналитической области данных

	    HeadSets := PivotDims As IDataAreaHeaderSettingsBase;

	    // Включим настройки расшифровки для указанного представления

	    Grid := (PivSlice As IEaxDataAreaSlice).Views.Item(0) As IEaxGrid;

	    Grid.ViewSettings.HyperlinkAsText := False;

	    DimSettings := Grid.ViewSettings.GetViewSettings(HeadSets) As IEaxGridDimensionSettings;

	    If Not DimSettings.IsDrilled Then

	        DimSettings.Drilled := TriState.OnOption;

	    End If;

	    // Получим настройки расшифровки

	    Drill := DimSettings.Drill;

	    // Укажем лист

	    Drill.SheetKey := Eax.Sheets.Item(0).Key;

	    // Укажем измерение

	    Drill.Dimension := PivotDims;

	    // Установим способ изменения отметки - замена

	    Drill.Mode := EaxDataDrillMode.Replace;

	    // Установим индекс для поиска элементов

	    Drill.DimensionIndex := DimIndex;

	    // Установим атрибут поиска в индексе

	    Drill.DimensionAttribute := Attribute;

	    // При щелчке по гиперссылке будет открыт регламентный отчёт

	    Drill.ActionType := TabHyperlinkActionType.OpenObject;

	    Drill.Action := "REPORT";

	    OpenContext := Drill.OpenObjectContext;

	    OpenContext.ActiveSheetKey := 2;

	    OpenContext.EnableUserData := True;

	    XMLDoc := New FreeThreadedDOMDocument60.Create;

	    XMLElem := XMLDoc.createElement("Root");

	    XMLDoc.appendChild(XMLElem);

	    OpenContext.ExternalXML := XMLDoc.documentElement;

	    // Сохраним настройки

	    OpenContext.SaveToXml(XMLElem);

	    XMLDoc.save("D:\OpenObjectContext.xml");

	    Eax.RefreshAll;

	    (Eax As IMetabaseObject).Save;

	End Sub UserProc;


При выполнении примера для измерения экспресс-отчёта будет настроена
 расшифровка. При щелчке по элементам будет открываться регламентный отчёт
 с позиционированием на второй странице. Также в отчёт будут передаваться
 пользовательские данные, которые могут быть обработаны в пользовательском
 макросе. Настройки, передаваемые в открываемый объект, будут сохранены
 в XML-файл.


См. также:


[IEaxDrillSettings](IEaxDrillSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
