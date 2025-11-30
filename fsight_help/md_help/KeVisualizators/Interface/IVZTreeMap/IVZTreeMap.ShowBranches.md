# IVZTreeMap.ShowBranches

IVZTreeMap.ShowBranches
-


# IVZTreeMap.ShowBranches


## Синтаксис


ShowBranches: Boolean;


## Описание


Свойство ShowBranches определяет,
 будут ли на [плоском дереве](IVZTreeMap.htm) отображаться родительские
 элементы измерения объектов наблюдения.


## Комментарии


Если свойство имеет значение true,
 то корневые элементы измерения объектов наблюдения отобразятся на плоском
 дереве, иначе – на плоском дереве отобразятся только отмеченные дочерние
 элементы.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Отключим отображение родительских элементов на плоском дереве:


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

	    // Отключим отображение родительских элементов

	    TreeMap.ShowBranches := False;

	    // Обновим плоское дерево и сохраним экспресс-отчёт

	    EaxAnalyzer.TreeMap.Refresh;

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате на плоском дереве отключено отображение родительских элементов.


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
