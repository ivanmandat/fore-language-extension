# IEaxGridHeaderSettings.Placement

IEaxGridHeaderSettings.Placement
-


# IEaxGridHeaderSettings.Placement


## Синтаксис


Placement: [EaxGridHeaderPlacement](../../Enums/EaxGridHeaderPlacement.htm);


## Описание


Свойство Placement определяет
 настройки размещения заголовка.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором EXPRESS, для которого настроен заголовок и раскрывающаяся
 иерархия.


Добавьте ссылки на системные сборки: Express, Metabase, Pivot.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Expr: IEaxAnalyzer;

	    SettBase: IDataAreaHeaderSettingsBase;

	    ViewSett: IEaxGridViewSettings;

	    Sett: IEaxGridHeaderSettings;

	Begin

	    MB := MetabaseClass.Active;

	    Expr := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    SettBase := Expr.Pivot.LeftHeader As IDataAreaHeaderSettingsBase;

	    ViewSett := Expr.Grid.ViewSettings;

	    Sett := ViewSett.GetViewSettings(SettBase) As IEaxGridHeaderSettings;

	    // Видимость пиктограмм сортировки

	    Sett.DisplaySortIcons := False;

	    // Отступ в раскрывающейся иерархии

	    Sett.HierarchyIndent := 15;

	    // Настройки размещения заголовка

	    Sett.Placement := EaxGridHeaderPlacement.Simple;

	    (Expr As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера для экспресс-отчета будут заданы следующие
 настройки:


	- пиктограммы сортировки невидимые;


	- задан отступ в раскрывающейся иерархии;


	- используется простое размещение заголовка экспресс-отчета.


См. также:


[IEaxGridHeaderSettings](IEaxGridHeaderSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
