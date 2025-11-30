# IEaxHierarchyGroupSettings.CreateElemForEmptyAttr

IEaxHierarchyGroupSettings.CreateElemForEmptyAttr
-


# IEaxHierarchyGroupSettings.CreateElemForEmptyAttr


## Синтаксис


CreateElemForEmptyAttr: Boolean;


## Описание


Свойство CreateElemForEmptyAttr
 определяет признак создания группировочного элемента с пустым значением.


## Комментарии


Допустимые значения:


	- True. Группировочный
	 элемент с пустым значением создается;


	- False. Группировочный
	 элемент с пустым значением не создается. Значение по умолчанию.


## Пример


Для выполнения примера предполагается наличие в репозитории формы ввода
 с идентификатором DEF, содержащей табличную область с настроенной группировкой
 боковике.


Добавьте ссылки на системные сборки: Express, Metabase, Report.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    Report: IPrxReport;

	    Area: IEaxDataArea;

	    Slice: IEaxDataAreaPivotSlice;

	    Hier: IEaxHierarchiesGroupSettings;

	    HierGroup: IEaxHierarchyGroupSettings;

	Begin

	    // Получим репозиторий

	    MB := MetabaseClass.Active;

	    // Получим дочерний объект формы

	    Report := MB.ItemById("DEF").Children.Item(0).Edit As IPrxReport;

	    // Получим аналитическую область дочернего объекта

	    Area := Report.DataArea;

	    // Получим срез аналитической области данных

	    Slice := Area.Slices.Item(0) As IEaxDataAreaPivotSlice;

	    // Получаем свойства коллекции группировок

	    Hier := Slice.EaxHierarchiesGroupSettings;

	    // Получаем свойства группировки

	    HierGroup := Hier.EaxHierarhyGroupSettings(0);

	    Debug.WriteLine("Пустые группировочные элементы отображаются: " + HierGroup.CreateElemForEmptyAttr.ToString);

	End Sub UserProc;


В результате выполнения примера в окно консоли будет выведен результат
 отображения пустых группировочных элементов.


См. также:


[IEaxHierarchyGroupSettings](IEaxHierarchyGroupSettings.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
