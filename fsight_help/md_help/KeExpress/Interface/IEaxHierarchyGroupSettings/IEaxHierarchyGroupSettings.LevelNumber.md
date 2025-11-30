# IEaxHierarchyGroupSettings.LevelNumber

IEaxHierarchyGroupSettings.LevelNumber
-


# IEaxHierarchyGroupSettings.LevelNumber


## Синтаксис


LevelNumber: Integer;


## Описание


Свойство LevelNumber определяет
 номер уровня измерения, для элементов которого будет включена группировка.


## Комментарии


Нумерация уровней начинается с единицы. По умолчанию свойству установлено
 значение «0», при этом группируются все элементы измерения.


Если уровень задан, то группируются элементы только этого уровня. Элементы
 вышестоящих уровней будут формировать родительские элементы с сохранением
 всей иерархии. Дочерние элементы относительно элементов заданного уровня
 также сохранят свою иерархию.


## Пример


Для выполнения примера предполагается наличие в репозитории регламентного
 отчёта с идентификатором REPORT. В отчёт добавлен источник, на базе которого
 построена аналитическая область данных. Измерение в боковике области данных
 имеет в своей структуре несколько уровней и атрибут с идентификатором
 GROUP.


Добавьте ссылки на системные сборки: Dimensions, Express, Metabase,
 Pivot, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Area: IEaxDataArea;

	    Slice: IEaxDataAreaPivotSlice;

	    Dim: IDimInstance;

	    Hier: IEaxHierarchiesGroupSettings;

	    HierGroup: IEaxHierarchyGroupSettings;

	    Arr: Array Of Integer;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим регламентный отчёт

	    Report := MB.ItemById("REPORT").Edit As IPrxReport;

	    // Получим аналитическую область данных

	    Area := Report.DataArea;

	    // Получим срез аналитической области данных

	    Slice := Area.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    Dim := Slice.Pivot.LeftHeader.Dim(0);

	    // Получим свойства коллекции группировок

	    Hier := Slice.EaxHierarchiesGroupSettings;

	    // Получаем свойства группировки

	    HierGroup := Hier.EaxHierarhyGroupSettings(Dim.Key);

	    // Изменение настроек

	    Arr := New Integer[1];

	    Arr[0] := Dim.Dimension.Attributes.FindById("GROUP").Key;

	    HierGroup.Attributes := Arr;

	    HierGroup.LevelNumber := 2;

	    // Применение изменений и сохранение

	    Report.Recalc;

	    Report.MetabaseObject.Save;

	End Sub UserProc;


При выполнении примера будет настроена группировка элементов для измерения,
 находящегося в боковике области данных. Элементы первого уровня будут
 сгруппированы по значениям указанного атрибута.


См. также:


[IEaxHierarchyGroupSettings](IEaxHierarchyGroupSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
