# IDmAssociationRules

IDmAssociationRules
-


# IDmAssociationRules


Сборка: Ms;


## Описание


Интерфейс IDmAssociationRules
 предназначен для интеллектуального анализа данных методом «Анализ
 ассоциаций».


## Иерархия наследования


           [IDmMethodDetails](../IDmMethodDetails/IDmMethodDetails.htm)


           IDmAssociationRules


## Комментарии


Данный метод определяет часто встречающиеся совместно наборы элементов
 на основе анализа множества повторяющихся транзакций. Другими словами,
 целью метода является установление следующих зависимостей: если в транзакции
 встретился некоторый набор элементов X, то на основании этого можно сделать
 вывод о том, что другой набор элементов Y также же должен появиться в
 этой транзакции. Установление таких зависимостей даёт возможность находить
 очень простые и интуитивно понятные правила.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [MinimumConfidence](IDmAssociationRules.MinimumConfidence.htm)
		 Свойство MinimumConfidence
		 определяет минимальный уровень доверия.


		 ![](../../Property_Image.gif)
		 [MinimumFrequentItemsetSize](IDmAssociationRules.MinimumFrequentItemsetSize.htm)
		 Свойство MinimumFrequentItemsetSize
		 определяет минимальный размер набора.


		 ![](../../Property_Image.gif)
		 [MinimumSupport](IDmAssociationRules.MinimumSupport.htm)
		 Свойство MinimumSupport
		 определяет минимальную поддержку.


		 ![](../../Property_Image.gif)
		 [Objects](IDmAssociationRules.Objects.htm)
		 Свойство Objects определяет
		 индекс поля источника данных, содержащего анализируемые элементы.


		 ![](../../Property_Image.gif)
		 [Transactions](IDmAssociationRules.Transactions.htm)
		 Свойство Transactions
		 определяет индекс поля источника данных, содержащего транзакции.


		 ![](../../Property_Image.gif)
		 [UseSupportPercent](IDmAssociationRules.UseSupportPercent.htm)
		 Свойство UseSupportPercent
		 определяет единицы измерения значения минимальной поддержки.


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


См. также:


[Интерфейсы сборки Ms](../KeMs_Interface.htm) |
 Анализ «[Анализ
 ассоциаций](DataMining.chm::/Master/Methods/DataMining_AssosiationAn.htm)» | Описание [анализа ассоциаций](Lib.chm::/06_DataMining/Lib_Assosiation.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
