# IDmTemplateFillDetails

IDmTemplateFillDetails
-


# IDmTemplateFillDetails


Сборка: Ms;


## Описание


Интерфейс IDmTemplateFillDetails
 предназначен для работы с базовыми параметрами методов заполнения пропусков,
 применяемых в интеллектуальном анализе данных.


## Иерархия наследования


           [IDmMethodDetails](../IDmMethodDetails/IDmMethodDetails.htm)


           [IDmAttributesDetails](../IDmAttributesDetails/IDmAttributesDetails.htm)


           [IDmTargetDetails](../IDmTargetDetails/IDmTargetDetails.htm)


           IDmTemplateFillDetails


## Комментарии


Данный интерфейс может быть приведён к одному из следующих интерфейсов:


	- [IDmBackPropagation](../IDmBackPropagation/IDmBackPropagation.htm).
	 Заполнение пропусков с помощью сети обратного распространения;


	- [IDmDecisionTree](../IDmDecisionTree/IDmDecisionTree.htm).
	 Заполнение пропусков с помощью дерева решений;


	- [IDmDiscriminantAnalysis](../IDmDiscriminantAnalysis/IDmDiscriminantAnalysis.htm).
	 Заполнение пропусков с помощью дискриминантного анализа;


	- [IDmLogisticRegression](../IDmLogisticRegression/IDmLogisticRegression.htm).
	 Заполнение пропусков с помощью логистической регрессии.


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


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [FillTarget](IDmTemplateFillDetails.FillTarget.htm)
		 Метод FillTarget
		 выполняет выгрузку результатов заполнения пропусков в источник
		 данных.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
