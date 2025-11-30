# IVZTreeMap.LabelAutoColor

IVZTreeMap.LabelAutoColor
-


# IVZTreeMap.LabelAutoColor


## Синтаксис


LabelAutoColor: Boolean;


## Описание


Свойство LabelAutoColor определяет
 признак, отвечающий за автоматический расчет цвета шрифта подписей листов
 [плоского дерева](IVZTreeMap.htm).


## Комментарии


Если свойство имеет значение true,
 цвет шрифта подписей будет рассчитан автоматически, иначе - значение цвета
 будет взято из настроек.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Установим цвет текстовых меток элементов диаграммы из настроек:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Установим цвет текстовых меток из настроек

	    TreeMap.LabelAutoColor := False;

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера цвет текстовых меток элементов диаграммы
 был взят из настроек.


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
