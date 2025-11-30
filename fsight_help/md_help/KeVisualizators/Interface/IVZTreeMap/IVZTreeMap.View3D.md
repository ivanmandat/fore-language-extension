# IVZTreeMap.View3D

IVZTreeMap.View3D
-


# IVZTreeMap.View3D


## Синтаксис


View3D: Boolean;


## Описание


Свойство View3D определяет режим
 визуализации плоского дерева.


## Комментарии


Допустимые значения:


	- True. Компонент
	 будет отображаться в трехмерном режиме;


	- False. Компонент будет
	 отображаться в двумерном режиме.


## Пример


Для выполнения примера необходимо наличие формы, содержащей следующие
 компоненты:


	- EaxDocumentViewerBox
	 с идентификатором «EaxDocumentViewerBox1»;


	- UiErAnalyzer с идентификатором
	 «UiErAnalyzer1», который будет являться источником данных для «EaxDocumentViewerBox1».


Также для выполнения примера необходимо наличие экспресс-отчёта, содержащего
 плоское дерево. Экспресс-отчёт должен являться источником данных для «UiErAnalyzer1».


	Sub UserProc;

	Var

	    EaxAnalyzer: IEaxAnalyzer;

	    Treemap: IVZTreeMap;

	Begin

	    // Получим экспресс-отчёт

	    EaxAnalyzer := UiErAnalyzer1.ErAnalyzer;

	    // Получим плоское дерево

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    // Изменим режим отображения плоского дерева в 3D-режим

	    TreeMap.View3D := True;

	    Treemap.RenderMode := VisualizatorTreeMapRenderMode.RM3D;

	End Sub UserProc;


После выполнения примера изменится режим отображения плоского дерева
 из 2D в 3D.


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
