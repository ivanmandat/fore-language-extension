# IDimSelection.SelectLevel

IDimSelection.SelectLevel
-


# IDimSelection.SelectLevel


## Синтаксис


SelectLevel(Element: Integer);


## Параметры


Element. Уровень измерения.


## Описание


Метод SelectLevel добавляет
 уровень измерения в отметку.


## Комментарии


Для работы со свойствами уровня измерения используйте интерфейс [IDimLevelInstance](../IDimLevelInstance/IDimLevelInstance.htm).


## Пример


Для выполнения примера в репозитории необходимо наличие справочника.


Разместите на форме компоненты [UiDimension](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/UiDimension.htm),
 [DimensionTree](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionTree.htm),
 [DimensionCombo](UiDevEnv.chm::/02_Components_constructor_forms/03_Components_of_the_access_to_data/DimensionCombo.htm)
 с наименованиями «UiDimension1», «DimensionTree1» и «DimensionCombo1»
 соответственно.


Задайте дополнительные свойства:


	- для компонента UiDimension
	 задайте справочник свойству Object;


	- для компонентов DimensionTree
	 и DimensionCombo установите
	 свойству Dimension значение
	 «UiDimension1».


Добавьте ссылки на системные сборки: Dimensions, ExtCtrls, Forms.


Пример является обработчиком события «OnCreate» для формы.


			Sub IDIMSELECTION_SELECTLEVEL_OnCreate(Sender: Object; Args: IEventArgs);

Begin

    // Добавим второй уровень измерения в отметку

    DimensionTree1.Selection.SelectLevel(1);

End Sub IDIMSELECTION_SELECTLEVEL_OnCreate;


В результате выполнения примера на форме будет отмечен второй уровень
 измерения.


См. также:


[IDimSelection](IDimSelection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
