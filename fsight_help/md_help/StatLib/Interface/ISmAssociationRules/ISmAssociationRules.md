# ISmAssociationRules

ISmAssociationRules
-


# ISmAssociationRules


Сборка: Stat;


## Описание


Интерфейс ISmAssociationRules предназначен
 для выполнения интеллектуального анализа данных методом «Анализ
 ассоциаций».


## Иерархия наследования


           [IStatMethod](../IStatMethod/IStatMethod.htm)


           ISmAssociationRules


## Комментарии


Данный метод определяет часто встречающиеся совместно наборы элементов
 на основе анализа множества повторяющихся транзакций. Другими словами,
 целью метода является установление следующих зависимостей: если в транзакции
 встретился некоторый набор элементов X,
 то на основании этого можно сделать вывод о том, что другой набор элементов
 Y также же должен появиться в
 этой транзакции. Установление таких зависимостей дает возможность находить
 очень простые и интуитивно понятные правила.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [FrequentItemset](ISmAssociationRules.FrequentItemset.htm)
		 Свойство FrequentItemset
		 возвращает указанный набор часто встречающихся элементов, полученных
		 в результате расчёта метода.


		 ![](../../Property.gif)
		 [FrequentItemsetsCount](ISmAssociationRules.FrequentItemsetsCount.htm)
		 Свойство FrequentItemsetsCount
		 возвращает количество наборов часто встречающихся элементов,
		 полученных в результате расчёта метода.


		 ![](../../Property.gif)
		 [MaximumFrequentItemsetsCount](ISmAssociationRules.MaximumFrequentItemsetsCount.htm)
		 Свойство MaximumFrequentItemsetsCount
		 определяет максимальное количество часто встречаемых наборов
		 элементов.


		 ![](../../Property.gif)
		 [MaximumFrequentItemsetSize](ISmAssociationRules.MaximumFrequentItemsetSize.htm)
		 Свойство MaximumFrequentItemsetSize
		 определяет максимальное количество элементов в часто встречаемом
		 наборе.


		 ![](../../Property.gif)
		 [MinimumConfidence](ISmAssociationRules.MinimumConfidence.htm)
		 Свойство MinimumConfidence
		 определяет минимальный уровень доверия.


		 ![](../../Property.gif)
		 [MinimumFrequentItemsetSize](ISmAssociationRules.MinimumFrequentItemsetSize.htm)
		 Свойство MinimumFrequentItemsetSize
		 определяет минимальное количество элементов в часто встречаемом
		 наборе.


		 ![](../../Property.gif)
		 [MinimumImportance](ISmAssociationRules.MinimumImportance.htm)
		 Свойство MinimumImportance
		 определяет минимальный уровень значимости.


		 ![](../../Property.gif)
		 [MinimumSupport](ISmAssociationRules.MinimumSupport.htm)
		 Свойство MinimumSupport
		 определяет минимальную поддержку.


		 ![](../../Property.gif)
		 [MissingData](ISmAssociationRules.MissingData.htm)
		 Свойство MissingData
		 определяет метод обработки пропусков, применяемый к исходным данным.


		 ![](../../Property.gif)
		 [Objects](ISmAssociationRules.Objects.htm)
		 Свойство Objects определяет
		 числовой ряд, содержащий анализируемые элементы.


		 ![](../../Property.gif)
		 [RecommendationRule](ISmAssociationRules.RecommendationRule.htm)
		 Свойство RecommendationRule
		 возвращает указанное правило, полученное в результате расчёта
		 метода.


		 ![](../../Property.gif)
		 [RecommendationRulesCount](ISmAssociationRules.RecommendationRulesCount.htm)
		 Свойство RecommendationRulesCount
		 возвращает количество правил, полученных в результате расчёта
		 метода.


		 ![](../../Property.gif)
		 [Transactions](ISmAssociationRules.Transactions.htm)
		 Свойство Transactions
		 определяет числовой ряд, содержащий анализируемые транзакции.


		 ![](../../Property.gif)
		 [UseSupportPercent](ISmAssociationRules.UseSupportPercent.htm)
		 Свойство UseSupportPercent
		 определяет, в каких единицах измерения задано значение минимальной
		 поддержки.


## Свойства, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы, унаследованные от [IStatMethod](../IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Интерфейсы сборки Stat](../Interfaces.htm)
 | Анализ «[Анализ
 ассоциаций](DataMining.chm::/Master/Methods/DataMining_AssosiationAn.htm)» | Описание [анализа ассоциаций](Lib.chm::/06_DataMining/Lib_Assosiation.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
