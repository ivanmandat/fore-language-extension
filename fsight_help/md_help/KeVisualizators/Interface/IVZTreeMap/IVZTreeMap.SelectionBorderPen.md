# IVZTreeMap.SelectionBorderPen

IVZTreeMap.SelectionBorderPen
-


# IVZTreeMap.SelectionBorderPen


## Синтаксис


SelectionBorderPen: IGxPenBase;


## Описание


Свойство SelectionBorderPen
 определяет параметры рамки выделения.


## Комментарии


Для определения, используется ли щелчок кнопкой мыши для выделения родительских
 элементов, используйте свойство [IVZTreeMap.UseSelectOnClick](IVZTreeMap.UseSelectOnClick.htm).


## Пример


Для выполнения примера предполагается наличие экспресс-отчёта с идентификатором
 EXPRESS. В экспресс-отчёте настроено отображение плоского дерева.


Добавьте ссылки на системные сборки: Drawing, Express, Metabase, Visualizators.


	Sub UserProc;

	Var

	    MB: IMetabase;

	    EaxAnalyzer: IEaxAnalyzer;

	    TreeMap: IVZTreeMap;

	Begin

	    MB := MetabaseClass.Active;

	    EaxAnalyzer := MB.ItemById("EXPRESS").Edit As IEaxAnalyzer;

	    TreeMap := EaxAnalyzer.TreeMap.TreeMap;

	    TreeMap.UseSelectOnClick := True;

	    // Установим параметры рамки выделения

	    TreeMap.SelectionBorderPen.Color := New GxColor.CreateRGB(65, 105, 225);

	    // Сохраним экспресс-отчёт

	    (EaxAnalyzer As IMetabaseObject).Save;

	End Sub UserProc;


После выполнения примера при нажатии на плоское дерево будет выделена
 рамка заданным цветом.


См. также:


[IVZTreeMap](IVZTreeMap.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
