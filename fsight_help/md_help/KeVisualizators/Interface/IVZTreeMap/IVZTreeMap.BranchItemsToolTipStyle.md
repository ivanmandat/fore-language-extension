# IVZTreeMap.BranchItemsToolTipStyle

IVZTreeMap.BranchItemsToolTipStyle
-


# IVZTreeMap.BranchItemsToolTipStyle


## Синтаксис


BranchItemsToolTipStyle: [IVZToolTipStyle](../IVZToolTipStyle/IVZToolTipStyle.htm);


## Описание


Свойство BranchItemsToolTipStyle
 определяет стиль всплывающих подсказок ветвей [плоского
 дерева](IVZTreeMap.htm).


## Комментарии


Всплывающая подсказка ветви плоского дерева может выглядеть следующим
 образом:


![](TreeMap_BranchItemsToolTipStyle1.png)


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Drawing, Express, Metabase и Visualizators.
 Указанная процедура должна вызываться из точки входа Main.


Изменим фон всплывающих подсказок ветвей плоского дерева, выведем длительность
 анимации и количество цветов в палитре компонента:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	    BranchItemsToolTipStyle: IVZToolTipStyle;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Изменим фон всплывающих подсказок ветвей плоского дерева

	    BranchItemsToolTipStyle := TreeMap.BranchItemsToolTipStyle;

	    BranchItemsToolTipStyle.Background := New GxSolidBrush.Create(New GxColor.CreateRGB(250,220,220));

	    BranchItemsTooltipStyle.NoDataText := "данные отсутствуют";

	    // Выведем длительность анимации

	    Debug.WriteLine("Длительность анимации: " + TreeMap.AnimationTime.ToString);

	    // Выведем количество цветов в палитре

	    Debug.WriteLine("Количество цветов в палитре: " +

	        TreeMap.Palette.BackgroundArray.Count.ToString);

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера был изменён фон всплывающих подсказок
 ветвей плоского дерева:


![](TreeMap_BranchItemsToolTipStyle2.png)


Также в консоли среды разработки была выведена длительность анимации
 плоского дерева и количество цветов в палитре:


Длительность анимации: 1.5


Количество цветов в палитре: 36


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
