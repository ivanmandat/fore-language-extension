# IDmDecisionTree

IDmDecisionTree
-


# IDmDecisionTree


Сборка: Ms;


## Описание


Интерфейс IDmDecisionTree предназначен
 для заполнения пропусков в данных с помощью дерева решений.


## Иерархия наследования


           [IDmMethodDetails](../IDmMethodDetails/IDmMethodDetails.htm)


           [IDmAttributesDetails](../IDmAttributesDetails/IDmAttributesDetails.htm)


           [IDmTargetDetails](../IDmTargetDetails/IDmTargetDetails.htm)


           [IDmTemplateFillDetails](../IDmTemplateFillDetails/IDmTemplateFillDetails.htm)


           IDmDecisionTree


## Комментарии


Метод на основе данных выстраивает иерархическое дерево правил, где
 каждому объекту соответствует единственный узел, дающий решение. Под правилом
 понимается логическая конструкция, представленная в виде «если … то …».
 Метод работает на категориальных значениях.


## Свойства, унаследованные от [IDmTargetDetails](../IDmTargetDetails/IDmTargetDetails.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Target](../IDmTargetDetails/IDmTargetDetails.Target.htm)
		 Свойство Target
		 определяет индекс поля источника данных, содержащего анализируемую
		 информацию.


## Свойства, унаследованные от [IDmAttributesDetails](../IDmAttributesDetails/IDmAttributesDetails.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Attributes](../IDmAttributesDetails/IDmAttributesDetails.Attributes.htm)
		 Свойство Attributes
		 определяет индексы полей источника данных, содержащего факторы
		 для анализа.


## Свойства, унаследованные от [IDmMethodDetails](../IDmMethodDetails/IDmMethodDetails.htm)


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CrossValidation](../IDmMethodDetails/IDmMethodDetails.CrossValidation.htm)
		 Свойство CrossValidation возвращает
		 настройки кросс-валидации.


		 ![](../../Property_Image.gif)
		 [DisplayName](../IDmMethodDetails/IDmMethodDetails.DisplayName.htm)
		 Свойство DisplayName
		 возвращает наименование метода.


		 ![](../../Property_Image.gif)
		 [InputDataSource](../IDmMethodDetails/IDmMethodDetails.InputDataSource.htm)
		 Свойство InputDataSource
		 определяет входной источник данных.


		 ![](../../Property_Image.gif)
		 [StatMethod](../IDmMethodDetails/IDmMethodDetails.StatMethod.htm)
		 Свойство StatMethod
		 возвращает параметры статистического метода, используемого при
		 анализе.


## Методы, унаследованные от [IDmTemplateFillDetails](../IDmTemplateFillDetails/IDmTemplateFillDetails.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FillTarget](../IDmTemplateFillDetails/IDmTemplateFillDetails.FillTarget.htm)
		 Метод FillTarget
		 выполняет выгрузку результатов заполнения пропусков в источник
		 данных.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)
 | [Дерево
 решений](Lib.chm::/06_DataMining/Lib_DecisionTree.htm)
 | [Заполнение
 по шаблону](DataMining.chm::/Master/Methods/DataMining_PatternSubst.htm) | [ISmDecisionTree](StatLib.chm::/Interface/ISmDecisionTree/ISmDecisionTree.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
