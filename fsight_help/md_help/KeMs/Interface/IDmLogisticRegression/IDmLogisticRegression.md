# IDmLogisticRegression

IDmLogisticRegression
-


# IDmLogisticRegression


Сборка: Ms;


## Описание


Интерфейс IDmLogisticRegression
 предназначен для заполнения пропусков в данных с помощью логистической
 регрессии.


## Иерархия наследования


           [IDmMethodDetails](../IDmMethodDetails/IDmMethodDetails.htm)


           [IDmAttributesDetails](../IDmAttributesDetails/IDmAttributesDetails.htm)


           [IDmTargetDetails](../IDmTargetDetails/IDmTargetDetails.htm)


           [IDmTemplateFillDetails](../IDmTemplateFillDetails/IDmTemplateFillDetails.htm)


           IDmLogisticRegression


## Комментарии


Метод применяется, если требуется предсказать вероятность наступления
 некоего события на основе ряда признаков. Например, если требуется предсказать
 наличие заболевания у пациента на основе пола и возраста. Объект для анализа
 должен содержать бинарные данные.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Threshold](IDmLogisticRegression.Threshold.htm)
		 Свойство Threshold
		 определяет пороговое значение.


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


[Интерфейсы сборки Ms](../KeMs_Interface.htm) |
 [Логистическая
 регрессия](Lib.chm::/06_DataMining/Lib_LogisticRegr.htm) | [Заполнение
 по шаблону](DataMining.chm::/Master/Methods/DataMining_PatternSubst.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
