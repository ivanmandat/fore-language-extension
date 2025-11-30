# IVZDataVisualizer.SaveStyleToXml

IVZDataVisualizer.SaveStyleToXml
-


# IVZDataVisualizer.SaveStyleToXml


## Синтаксис


SaveStyleToXml: String;


## Описание


Метод SaveStyleToXml сохраняет
 параметры стиля визуализатора в XML-формате.


## Пример


Для выполнения примера предполагается наличие в репозитории экспресс-отчёта
 с идентификатором EXP. Модуль, в котором размещается пример, должен иметь
 ссылки на системные сборки Express, Metabase, Drawing и Visualizators. Указанная
 процедура должна вызываться из точки входа Main.


До выполнения примера пузырьковое дерево выглядит так, как показано
 на странице [описания интерфейса
 IVZBubbleTree](../IVZBubbleTree/IVZBubbleTree.htm). Получим параметры стиля данного дерева в формате XML
 и изменим цвет орбит, установим измененные параметры стиля из XML:


	Sub UserProc;

	Var

	    Metabase: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    BubbleTree: IVZBubbleTree;

	    BubbleTreeStyleXML: String;

	Begin

	    // Получим текущий репозиторий

	    Metabase := MetabaseClass.Active;

	    // Получим экспресс-отчёт

	    EaxAnalyzer := Metabase.ItemById("EXP").Edit As IEaxAnalyzer;

	    // Получим пузырьковое дерево

	    BubbleTree := EaxAnalyzer.BubbleTree.BubbleTree;

	    // Получим параметры стиля пузырькового дерева в формате XML и изменим цвет орбит

	    BubbleTreeStyleXML := String.Replace(BubbleTree.SaveStyleToXml,

	        "OrbitsPen Style=""solid"" Color=""#ffe0e0e0""",

	        "OrbitsPen Style=""solid"" Color=""#ff000000""");

	    // Установим новые значения параметров стиля пузырькового дерева из XML

	    BubbleTree.LoadStyleFromXml(BubbleTreeStyleXML);

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


В результате выполнения примера был изменён цвет орбит:


![](IVZDataVisualizer_SaveStyleToXml.png)


См. также:


[IVZDataVisualizer](IVZDataVisualizer.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
