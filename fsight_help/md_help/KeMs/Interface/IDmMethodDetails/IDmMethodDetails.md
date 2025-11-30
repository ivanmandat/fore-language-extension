# IDmMethodDetails

IDmMethodDetails
-


# IDmMethodDetails


Сборка: Ms;


## Описание


Интерфейс IDmMethodDetails используется
 для работы с базовыми настройками метода интеллектуального анализа данных.


## Иерархия наследования


           IDmMethodDetails


## Комментарии


В зависимости от значения свойства [IDmMethod.Kind](../IDmMethod/IDmMethod.Kind.htm),
 данный интерфейс может быть приведён к одному из следующих интерфейсов:


	- [IDmBackPropagation](../IDmBackPropagation/IDmBackPropagation.htm).
	 Заполнение пропусков с помощью сети обратного распространения;


	- [IDmClusteringDetails](../IDmClusteringDetails/IDmClusteringDetails.htm).
	 Общие параметры кластеризации данных;


	- [IDmDecisionTree](../IDmDecisionTree/IDmDecisionTree.htm).
	 Заполнение пропусков с помощью дерева решений;


	- [IDmDiscriminantAnalysis](../IDmDiscriminantAnalysis/IDmDiscriminantAnalysis.htm).
	 Дискриминантный анализ;


	- [IDmForecasting](../IDmForecasting/IDmForecasting.htm).
	 Прогнозирование;


	- [IDmHighlightExceptions](../IDmHighlightExceptions/IDmHighlightExceptions.htm).
	 Поиск исключений;


	- [IDmKeyInfluences](../IDmKeyInfluences/IDmKeyInfluences.htm).
	 Выявление ключевых факторов;


	- [IDmKmodesClusterAnalysis](../IDmKmodesClusterAnalysis/IDmKmodesClusterAnalysis.htm).
	 Кластеризация методом K-мод;


	- [IDmLogisticRegression](../IDmLogisticRegression/IDmLogisticRegression.htm).
	 Заполнение пропусков с помощью логистической регрессии;


	- [IDmSelfOrganizingMap](../IDmSelfOrganizingMap/IDmSelfOrganizingMap.htm).
	 Кластеризация данных с помощью самоорганизующихся карт Кохонена;


	- [IDmTemplateFillDetails](../IDmTemplateFillDetails/IDmTemplateFillDetails.htm).
	 Общие параметры методов заполнения пропусков.


## Свойства


		 Имя свойства


		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CrossValidation](IDmMethodDetails.CrossValidation.htm)
		 Свойство CrossValidation возвращает
		 настройки кросс-валидации.


		 ![](../../Property_Image.gif)
		 [DisplayName](IDmMethodDetails.DisplayName.htm)
		 Свойство DisplayName
		 возвращает наименование метода.


		 ![](../../Property_Image.gif)
		 [InputDataSource](IDmMethodDetails.InputDataSource.htm)
		 Свойство InputDataSource
		 определяет входной источник данных.


		 ![](../../Property_Image.gif)
		 [StatMethod](IDmMethodDetails.StatMethod.htm)
		 Свойство StatMethod
		 возвращает параметры статистического метода, используемого при
		 анализе.


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
