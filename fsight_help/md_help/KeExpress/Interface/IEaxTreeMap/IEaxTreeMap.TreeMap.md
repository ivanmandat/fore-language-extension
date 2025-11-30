# IEaxTreeMap.TreeMap

IEaxTreeMap.TreeMap
-


# IEaxTreeMap.TreeMap


## Синтаксис


TreeMap: [IVZTreeMap](KeVisualizators.chm::/Interface/IVZTreeMap/IVZTreeMap.htm);


## Описание


Свойство TreeMap возвращает
 объект, содержащий параметры отображения плоского дерева в экспресс-отчете.


## Комментарии


[Плоское
 дерево](UiVisualizators.chm::/TreeMap/TreeMap.htm) - это способ отображения иерархических
 данных в виде набора вложенных прямоугольников. Каждой ветке иерархии
 соответствует прямоугольник, который состоит из меньших прямоугольников,
 являющихся подветками. Площадь каждого прямоугольника пропорциональна
 значению соответствующего элемента иерархии. Цвет прямоугольника также
 определяется значением элемента иерархии.


## Пример


Для выполнения примера в репозитории необходимо наличие экспресс-отчета
 с идентификатором EXPRESS_REPORT, в котором содержится плоское дерево.


Добавьте ссылки на системные сборки: Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TM: IEaxTreeMap;

	    TreeM: IVZTreeMap;

	Begin

	    // Получим репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXPRESS_REPORT").Edit As IEaxAnalyzer;

	    // Получим плоское дерево из экспресс-отчета

	    TM := EaxAnalyzer.TreeMap;

	    // Получим плоское дерево в качестве визуализатора

	    TreeM := TM.TreeMap;

	    // Включим режим трехмерного отображения

	    TreeM.View3D := True;

	    TreeM.RenderMode := VisualizatorTreeMapRenderMode.RM3D;

	    TM.Refresh;

	    // Сохраним изменения

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера плоское дерево будет отображаться в трехмерном
 режиме.


См. также:


[IEaxTreeMap](IEaxTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
