# IModelBox.ResultsViewSelectionSet

IModelBox.ResultsViewSelectionSet
-


# IModelBox.ResultsViewSelectionSet


## Синтаксис


ResultsViewSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство ResultsViewSelectionSet
 определяет отметку элементов в сквозных измерениях моделируемой переменной.


## Комментарии


Измерение является сквозным, если для всех элементов используется один
 метод расчёта, то есть установлен флажок «[Использовать
 одну спецификацию](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/uimodelling_model_3.htm)».


Для изменения отметки элементов в сквозных измерениях с помощью пользовательского
 интерфейса используйте панель «[Просмотр
 результатов](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/uimodelling_model_view.htm)».


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенными на ней:


	- компонентом ModelBox
	 с идентификатором ModelBox1;


	- компонентом UiModel
	 с идентификатором UiModel11. Компонент UiModel11 является источником
	 данных для ModelBox1 и содержит загруженную модель. Данная модель
	 должна иметь дополнительные сквозные измерения.


Добавьте ссылки на системные сборки: Dimensions.


			Sub UserProcSel;

Var

    DimSel: IDimSelection;

Begin

    // Получаем отметку в первом сквозном измерении

    DimSel := ModelBox1.ResultsViewSelectionSet.Item(0);

    // Сбрасываем текущую отметку

    DimSel.DeselectAll;

    // Выделяем первый элемент

    DimSel.SelectElement(0, False);

    // Сохраняем изменения

    ModelBox1.SaveObject;

End Sub UserProcSel;


В результате выполнения примера расчёт модели будет выполняться по первому
 элементу в первом в сквозном измерении.


См. также:


[IModelBox](IModelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
