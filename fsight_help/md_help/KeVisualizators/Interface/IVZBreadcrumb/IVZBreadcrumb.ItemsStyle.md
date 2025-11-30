# IVZBreadcrumb.ItemsStyle

IVZBreadcrumb.ItemsStyle
-


# IVZBreadcrumb.ItemsStyle


## Синтаксис


ItemsStyle: [IVZLabelStyle](../IVZLabelStyle/IVZLabelStyle.htm);


## Описание


Свойство ItemsStyle определяет
 стиль элементов цепочки навигации.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчета
 с идентификатором «EXP». Модуль, в котором размещается пример, должен
 иметь ссылки на системные сборки Express, Metabase, Drawing и Visualizators.
 Указанная процедура должна вызываться из точки входа Main.


До выполнения примера цепочка навигации плоского дерева выглядит так,
 как показано на странице [описания интерфейса
 IVZBreadcrumb](IVZBreadcrumb.htm). Изменим цвет шрифта текстовых меток цепочки навигации
 плоского дерева:


	Sub UserProc;

	Var

	    Metabase: IMetabase; // Метабаза

	    EaxAnalyzer: IEaxAnalyzer; // Экспресс-отчёт

	    TreeMap: IVZTreeMap; // Плоское дерево

	    Breadcrumb: IVZBreadcrumb; // Цепочка навигации

	    ItemsStyle: IVZLabelStyle; // Стиль текстовых меток

	Begin

	    // Получим объект метабазы

	    Metabase := MetabaseClass.Active;

	    // Получим объект экспресс-отчёта

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Получим цепочку навигации

	    Breadcrumb := TreeMap.Breadcrumb;

	    // Получим стиль текстовых меток цепочки навигации

	    ItemsStyle := Breadcrumb.ItemsStyle;

	    // Изменим цвет шрифта текстовых меток

	    ItemsStyle.FontColor := New GxColor.CreateRGB(255, 229, 180);

	    // Установим новое значение стиля

	    Breadcrumb.ItemsStyle := ItemsStyle;

	    // Сохраним экспресс-отчет

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера был изменен цвет шрифта текстовых меток цепочки навигации плоского дерева:


![](IVZBreadcrumb_ItemsStyle.png)


См. также:


[IVZBreadcrumb](IVZBreadcrumb.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
