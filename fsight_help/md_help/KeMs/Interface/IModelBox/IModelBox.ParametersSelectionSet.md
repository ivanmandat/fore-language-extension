# IModelBox.ParametersSelectionSet

IModelBox.ParametersSelectionSet
-


# IModelBox.ParametersSelectionSet


## Синтаксис


ParametersSelectionSet: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm);


## Описание


Свойство ParametersSelectionSet
 определяет отметку элементов в свободных измерениях моделируемой переменной.


## Комментарии


Измерение является свободным, если для каждого элемента используется
 свой метод расчёта, то есть снят флажок «[Использовать одну спецификацию](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/uimodelling_model_3.htm)».


Для изменения отметки элементов в свободных измерениях с помощью пользовательского
 интерфейса используйте панель «[Параметры](UiModelling.chm::/2_Container_of_Modeling/2_3_Work_object/2_3_2_Model/Standart_Model/uimodelling_model_3.htm)».


## Пример


Для выполнения примера в репозитории предполагается наличие формы с
 расположенными на ней:


	- компонентом ModelBox
	 с идентификатором ModelBox1;


	- компонентом UiModel
	 с идентификатором UiModel11. Компонент UiModel11 является источником
	 данных для ModelBox1 и содержит загруженную модель. Данная модель
	 должна иметь дополнительные свободные измерения.


Добавьте ссылки на системные сборки: Dimensions.


			Sub UserParam;

Var

    DimSel: IDimSelection;

Begin

    // Получаем отметку в первом свободном измерении

    DimSel := ModelBox1.ParametersSelectionSet.Item(0);

    // Сбрасываем текущую отметку

    DimSel.DeselectAll;

    // Выделяем первый элемент

    DimSel.SelectElement(0, False);

    // Сохраняем изменения

    ModelBox1.SaveObject;

End Sub UserParam;


В результате выполнения примера для модели будет отображён метод расчёта,
 заданный для первого элемента свободного измерения.


См. также:


[IModelBox](IModelBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
