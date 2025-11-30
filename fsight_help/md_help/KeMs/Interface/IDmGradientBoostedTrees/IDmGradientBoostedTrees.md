# IDmGradientBoostedTrees

IDmGradientBoostedTrees
-


# IDmGradientBoostedTrees


Сборка: Ms;


## Описание


Интерфейс IDmGradientBoostedTree
 предназначен для настройки параметров расчёта алгоритма «Градиентный
 бустинг» метода «Ансамбли деревьев
 решений» при интеллектуальном анализе данных.


## Иерархия наследования


           [IDmMethodDetails](../IDmMethodDetails/IDmMethodDetails.htm)


           [IDmAttributesDetails](../IDmAttributesDetails/IDmAttributesDetails.htm)


           [IDmTargetDetails](../IDmTargetDetails/IDmTargetDetails.htm)


           [IDmTemplateFillDetails](../IDmTemplateFillDetails/IDmTemplateFillDetails.htm)


           [IDmForestDetails](../IDmForestDetails/IDmForestDetails.htm)


           IDmGradientBoostedTrees


## Комментарии


Градиентный бустинг - алгоритм машинного обучения для решения задач
 регрессии и классификации, основанный на ансамбле деревьев решений. Алгоритм
 представляет собой поэтапную оптимизацию функции потерь путём метода градиентного
 спуска.


## Свойства


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [LearningRate](IDmGradientBoostedTrees.LearningRate.htm)


		 Свойство LearningRate
		 определяет коэффициент скорости обучения.


		 ![](../../Property_Image.gif)
		 [NumberOfIterations](IDmGradientBoostedTrees.NumberOfIterations.htm)


		 Свойство NumberOfIterations
		 определяет число итераций.


## Свойства, унаследованные от [IDmForestDetails](../IDmForestDetails/IDmForestDetails.htm)


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [TreeSizeSpecification](../IDmForestDetails/IDmForestDetails.TreeSizeSpecification.htm)


		 Свойство TreeSizeSpecification
		 возвращает спецификацию дерева.


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


[Интерфейсы
 сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
