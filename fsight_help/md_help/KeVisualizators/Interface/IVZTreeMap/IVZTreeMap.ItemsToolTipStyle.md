# IVZTreeMap.ItemsToolTipStyle

IVZTreeMap.ItemsToolTipStyle
-


# IVZTreeMap.ItemsToolTipStyle


## Синтаксис


ItemsToolTipStyle: [IVZToolTipStyle](../IVZToolTipStyle/IVZToolTipStyle.htm);


## Описание


Свойство ItemsToolTipStyle определяет
 стиль всплывающих подсказок листьев [плоского
 дерева](IVZTreeMap.htm).


## Комментарии


Всплывающая подсказка листа плоского дерева может выглядеть следующим
 образом:


![](IVZTreeMap_ItemsToolTipStyle1.png)


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


Изменим текст, отображаемый при отсутствии данных, установим режим отображения
 всплывающих подсказок элементов плоского дерева по щелчку мыши:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	    ItemsToolTipStyle: IVZToolTipStyle;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Получим объект стиля текстовых меток

	    ItemsToolTipStyle := TreeMap.ItemsToolTipStyle;

	    // Установим текст, отображаемый при отсутствии данных

	    ItemsToolTipStyle.NoDataText := "Данные отсутствуют";

	    // Установим режим отображения всплывающих подсказок

	    ItemsToolTipStyle.HoverMode := VisualizatorHoverMode.Click;

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера был изменен текст всплывающей подсказки,
 отображаемый при отсутствии данных. Всплывающая подсказка теперь отображается
 при нажатии на элемент плоского дерева:


![](IVZTreeMap_ItemsToolTipStyle2.png)


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
