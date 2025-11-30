# IVZTreeMap.HeatMap

IVZTreeMap.HeatMap
-


# IVZTreeMap.HeatMap


## Синтаксис


HeatMap: Boolean;


## Описание


Свойство HeatMap определяет
 возможность размещения корневых и дочерних элементов [плоского
 дерева](IVZTreeMap.htm) на одном уровне.


## Комментарии


Если свойство имеет значение true,
 то корневые и дочерние элементы плоского дерева отобразятся на одном уровне,
 иначе – корневые элементы будут расположены над дочерними элементами дерева.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Установим расположение корневых и дочерних элементов на одном уровне:


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

	    // Установим расположение корневых и дочерних элементов на одном уровне

	    TreeMap.HeatMap := True;

	    //Обновим плоское дерево и сохраним экспресс-отчёт

	    EaxAnalyzer.TreeMap.Refresh;

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера корневые и дочерние элементы плоского
 дерева будут размещены на одном уровне.


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
