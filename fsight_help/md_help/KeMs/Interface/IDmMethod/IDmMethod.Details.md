# IDmMethod.Details

IDmMethod.Details
-


# IDmMethod.Details


## Синтаксис


		Details: [IDmMethodDetails](../IDmMethodDetails/IDmMethodDetails.htm);


## Описание


Свойство Details возвращает
 специфические настройки метода интеллектуального анализа данных.


## Комментарии


В зависимости от значения свойства [IDmMethod.Kind](IDmMethod.Kind.htm),
 данное свойство может быть приведено к одному из следующих интерфейсов:


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
	 Кластеризация методом «K-мод»;


	- [IDmLogisticRegression](../IDmLogisticRegression/IDmLogisticRegression.htm).
	 Заполнение пропусков с помощью логистической регрессии;


	- [IDmSelfOrganizingMap](../IDmSelfOrganizingMap/IDmSelfOrganizingMap.htm).
	 Кластеризация данных с помощью самоорганизующихся карт Кохонена;


	- [IDmTemplateFillDetails](../IDmTemplateFillDetails/IDmTemplateFillDetails.htm).
	 Общие параметры методов заполнения пропусков.


## Пример


Использование свойства приведено в примере для [IDmMethod.Execute](IDmMethod.Execute.htm).


См. также:


[IDmMethod](IDmMethod.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
