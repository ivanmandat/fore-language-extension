# IMsMetaModelVisualController.Workbook

IMsMetaModelVisualController.Workbook
-


# IMsMetaModelVisualController.Workbook


## Синтаксис


Workbook(WorkbookType: [MsWorkbookType](../../Enums/MsWorkbookType.htm)):
 [IMetabaseObject](KeSom.chm::/Interface/IMetabaseObject/IMetabaseObject.htm);


## Параметры


WorkbookType. Тип данных в
 рабочей книге.


## Описание


Свойство Workbook возвращает
 внутреннюю рабочую книгу с указанными данными.


## Комментарии


Для заполнения внутренней рабочей книги данными используйте следующие
 методы:


	- [IMsMetaModelVisualController.FillChain](IMsMetaModelVisualController.FillChain.htm).
	 Данные цепочки расчета. Параметр WorkbookType
	 должен принимать значение [MsWorkbookType.Chain](../../Enums/MsWorkbookType.htm);


	- [IMsMetaModelVisualController.FillWithModel](IMsMetaModelVisualController.FillWithModel.htm).
	 Данные модели. Параметр WorkbookType
	 должен принимать значение [MsWorkbookType.Variable](../../Enums/MsWorkbookType.htm);


	- [IMsMetaModelVisualController.FillWithTargetConstraints](IMsMetaModelVisualController.FillWithTargetConstraints.htm).
	 Данные ограничений целевой функции. Параметр WorkbookType
	 должен принимать значение [MsWorkbookType.TargetConstraints](../../Enums/MsWorkbookType.htm);


	- [IMsMetaModelVisualController.FillWithTargetProblem](IMsMetaModelVisualController.FillWithTargetProblem.htm).
	 Данные целевой функции. Параметр WorkbookType
	 должен принимать значение [MsWorkbookType.TargetProblem](../../Enums/MsWorkbookType.htm);


	- [IMsMetaModelVisualController.FillWithVariables](IMsMetaModelVisualController.FillWithVariables.htm).
	 Данные указанных переменных. Параметр WorkbookType
	 должен принимать значение [MsWorkbookType.Variable](../../Enums/MsWorkbookType.htm).


## Пример


Использование свойства приведено в примере для [IMsMetaModelVisualController.FillWithTargetProblem](IMsMetaModelVisualController.FillWithTargetProblem.htm).


См. также:


[IMsMetaModelVisualController](IMsMetaModelVisualController.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
