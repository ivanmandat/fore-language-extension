# IEaxDataAreaHierarchy.HierarchySettings

IEaxDataAreaHierarchy.HierarchySettings
-


# IEaxDataAreaHierarchy.HierarchySettings


## Синтаксис


HierarchySettings: [IEaxHierarchySettings](../IEaxHierarchySettings/IEaxHierarchySettings.htm);


## Описание


Свойство HierarchySettings
 определяет настройки альтернативной иерархии.


## Комментарии


Для создания настроек используйте класс [EaxHierarchySettings](../../Class/EaxHierarchySettings/EaxHierarchySettings.htm).


## Пример


Для выполнения примера в репозитории предполагается наличие экспресс-отчета
 с идентификатором EXPRESS_HIE, содержащего пользовательскую альтернативную
 иерархию.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Tab.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Express: IEaxAnalyzer;

	    Hier: IEaxDataAreaHierarchy;

	    HierSett: IEaxHierarchySettings;

	    DimSel: IDimSelection;

	    DimEl: String;

	    CellStyle: IEaxDataAreaCellStyle;

	Begin

	    // Получаем текущий репозиторий

	    MB := MetabaseClass.Active;

	    // Получаем экспресс-отчет

	    Express := MB.ItemById("EXPRESS_HIE").Edit As IEaxAnalyzer;

	    // Получаем альтернативную иерархию

	    Hier := Express.DataArea.Hierarchies.Item(0);

	    // Создаем настройки альтернативной иерархии

	    HierSett := New EaxHierarchySettings.Create;

	    Hier.HierarchySettings := HierSett;

	    // Изменяем выравнивание заголовка для первого элемента альтернативной иерархии

	    DimSel := Hier.Selection;

	    DimSel.SelectAll;

	    DimEl := DimSel.Dimension.Elements.Id(DimSel.Element(0));

	    CellStyle := New EaxDataAreaCellStyle.Create;

	    CellStyle.Header.HorizontalAlignment := TabFormatAlignment.Center;

	    HierSett.CellStyle(DimEl) := CellStyle;

	    // Сохраняем изменения

	    (Express As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера будет изменено оформление заголовка
 для первого элемента альтернативной иерархии.


См. также:


[IEaxDataAreaHierarchy](IEaxDataAreaHierarchy.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
