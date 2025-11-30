# IVZTimeLine.Inverse

IVZTimeLine.Inverse
-


# IVZTimeLine.Inverse


## Синтаксис


Inverse: Boolean;


## Описание


Свойство Inverse определяет,
 отображается ли временная шкала в прямом или реверсивном виде.


## Комментарии


Если свойство имеет значение true,
 то временная шкала отображается в реверсивном виде, от более позднего
 периода к раннему, иначе – временная шкала отображается в прямом виде,
 от раннего периода к позднему.


Примечание.
 Реверсивный вид временной шкалы не влияет на расположение данных в таблице
 отчета.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Зададим реверсивную временную шкалу для плоского дерева:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	    TimeLine: IVZTimeLine;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Получим временную шкалу плоского дерева

	    TimeLine := TreeMap.TimeLine;

	    // Зададим реверсивную временную шкалу

	    TimeLine.Inverse := True;

	    // Обновим плоское дерево и сохраним экспресс-отчёт

	    EaxAnalyzer.TreeMap.Refresh;

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера временная шкала плоского дерева отобразится
 в реверсивном виде.


![](Inverse_Timeline.png)


См. также:


[IVZTimeLine](IVZTimeLine.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
