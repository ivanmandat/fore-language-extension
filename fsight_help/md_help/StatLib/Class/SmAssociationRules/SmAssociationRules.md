# SmAssociationRules

SmAssociationRules
-


# SmAssociationRules


Сборка: Stat;


## Описание


Класс SmAssociationRules предназначен
 для выполнения интеллектуального анализа данных методом «Анализ
 ассоциаций».


## Комментарии


Данный метод определяет часто встречающиеся совместно наборы элементов
 на основе анализа множества повторяющихся транзакций. Другими словами,
 целью метода является установление следующих зависимостей: если в транзакции
 встретился некоторый набор элементов X,
 то на основании этого можно сделать вывод о том, что другой набор элементов
 Y также же должен появиться в
 этой транзакции. Установление таких зависимостей дает возможность находить
 очень простые и интуитивно понятные правила.


## Свойства объекта класса, унаследованные от [ISmAssociationRules](../../Interface/ISmAssociationRules/ISmAssociationRules.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [FrequentItemset](../../Interface/ISmAssociationRules/ISmAssociationRules.FrequentItemset.htm)
		 Свойство FrequentItemset
		 возвращает указанный набор часто встречающихся элементов, полученных
		 в результате расчёта метода.


		 ![](../../Property.gif)
		 [FrequentItemsetsCount](../../Interface/ISmAssociationRules/ISmAssociationRules.FrequentItemsetsCount.htm)
		 Свойство FrequentItemsetsCount
		 возвращает количество наборов часто встречающихся элементов,
		 полученных в результате расчёта метода.


		 ![](../../Property.gif)
		 [MaximumFrequentItemsetsCount](../../Interface/ISmAssociationRules/ISmAssociationRules.MaximumFrequentItemsetsCount.htm)
		 Свойство MaximumFrequentItemsetsCount
		 определяет максимальное количество часто встречаемых наборов
		 элементов.


		 ![](../../Property.gif)
		 [MaximumFrequentItemsetSize](../../Interface/ISmAssociationRules/ISmAssociationRules.MaximumFrequentItemsetSize.htm)
		 Свойство MaximumFrequentItemsetSize
		 определяет максимальное количество элементов в часто встречаемом
		 наборе.


		 ![](../../Property.gif)
		 [MinimumConfidence](../../Interface/ISmAssociationRules/ISmAssociationRules.MinimumConfidence.htm)
		 Свойство MinimumConfidence
		 определяет минимальный уровень доверия.


		 ![](../../Property.gif)
		 [MinimumFrequentItemsetSize](../../Interface/ISmAssociationRules/ISmAssociationRules.MinimumFrequentItemsetSize.htm)
		 Свойство MinimumFrequentItemsetSize
		 определяет минимальное количество элементов в часто встречаемом
		 наборе.


		 ![](../../Property.gif)
		 [MinimumImportance](../../Interface/ISmAssociationRules/ISmAssociationRules.MinimumImportance.htm)
		 Свойство MinimumImportance
		 определяет минимальный уровень значимости.


		 ![](../../Property.gif)
		 [MinimumSupport](../../Interface/ISmAssociationRules/ISmAssociationRules.MinimumSupport.htm)
		 Свойство MinimumSupport
		 определяет минимальную поддержку.


		 ![](../../Property.gif)
		 [MissingData](../../Interface/ISmAssociationRules/ISmAssociationRules.MissingData.htm)
		 Свойство MissingData
		 определяет метод обработки пропусков, применяемый к исходным данным.


		 ![](../../Property.gif)
		 [Objects](../../Interface/ISmAssociationRules/ISmAssociationRules.Objects.htm)
		 Свойство Objects определяет
		 числовой ряд, содержащий анализируемые элементы.


		 ![](../../Property.gif)
		 [RecommendationRule](../../Interface/ISmAssociationRules/ISmAssociationRules.RecommendationRule.htm)
		 Свойство RecommendationRule
		 возвращает указанное правило, полученное в результате расчёта
		 метода.


		 ![](../../Property.gif)
		 [RecommendationRulesCount](../../Interface/ISmAssociationRules/ISmAssociationRules.RecommendationRulesCount.htm)
		 Свойство RecommendationRulesCount
		 возвращает количество правил, полученных в результате расчёта
		 метода.


		 ![](../../Property.gif)
		 [Transactions](../../Interface/ISmAssociationRules/ISmAssociationRules.Transactions.htm)
		 Свойство Transactions
		 определяет числовой ряд, содержащий анализируемые транзакции.


		 ![](../../Property.gif)
		 [UseSupportPercent](../../Interface/ISmAssociationRules/ISmAssociationRules.UseSupportPercent.htm)
		 Свойство UseSupportPercent
		 определяет, в каких единицах измерения задано значение минимальной
		 поддержки.


## Свойства объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property.gif)
		 [DisplayName](../../Interface/IStatMethod/IStatMethod.DisplayName.htm)
		 Свойство DisplayName
		 возвращает внешнее наименование метода.


		 ![](../../Property.gif)
		 [ErrorByStatus](../../Interface/IStatMethod/IStatMethod.ErrorByStatus.htm)
		 Свойство ErrorByStatus
		 возвращает сообщение об ошибке по ее номеру.


		 ![](../../Property.gif)
		 [Errors](../../Interface/IStatMethod/IStatMethod.Errors.htm)
		 Свойство Errors возвращает
		 сообщение обо всех ошибках и предупреждениях.


		 ![](../../Property.gif)
		 [Name](../../Interface/IStatMethod/IStatMethod.Name.htm)
		 Свойство Name возвращает
		 внутреннее наименование метода.


		 ![](../../Property.gif)
		 [PerformanceTime](../../Interface/IStatMethod/IStatMethod.PerformanceTime.htm)
		 Свойство PerformanceTime
		 возвращает время выполнения метода.


		 ![](../../Property.gif)
		 [Status](../../Interface/IStatMethod/IStatMethod.Status.htm)
		 Свойство Status возвращает
		 статус выполнения метода.


		 ![](../../Property.gif)
		 [SupportsR](../../Interface/IStatMethod/IStatMethod.SupportsR.htm)
		 Свойство SupportsR
		 возвращает признак поддержки расчета статистического метода через
		 пакет R.


		 ![](../../Property.gif)
		 [UseR](../../Interface/IStatMethod/IStatMethod.UseR.htm)
		 Свойство UseR определяет,
		 будет ли расчет статистического метода производиться через
		 пакет R.


		 ![](../../Property.gif)
		 [WarningByStatus](../../Interface/IStatMethod/IStatMethod.WarningByStatus.htm)
		 Свойство WarningByStatus
		 возвращает текст предупреждения по его номеру.


		 ![](../../Property.gif)
		 [Warnings](../../Interface/IStatMethod/IStatMethod.Warnings.htm)
		 Свойство Warnings возвращает предупреждения, возникшие при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsCount](../../Interface/IStatMethod/IStatMethod.WarningsCount.htm)
		 Свойство WarningsCount
		 возвращает число предупреждений, возникших при расчёте метода.


		 ![](../../Property.gif)
		 [WarningsNumbers](../../Interface/IStatMethod/IStatMethod.WarningsNumbers.htm)
		 Свойство WarningsNumbers возвращает номера предупреждений, возникших при расчёте метода.


## Методы объекта класса, унаследованные от [IStatMethod](../../Interface/IStatMethod/IStatMethod.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub.gif)
		 [Clone](../../Interface/IStatMethod/IStatMethod.Clone.htm)
		 Метод Clone клонирует
		 объект статистического метода.


		 ![](../../Sub.gif)
		 [Execute](../../Interface/IStatMethod/IStatMethod.Execute.htm)
		 Метод Execute осуществляет
		 выполнение статистического метода.


		 ![](../../Sub.gif)
		 [LoadFromXML](../../Interface/IStatMethod/IStatMethod.LoadFromXML.htm)
		 Метод LoadFromXML осуществляет
		 загрузку настроек статистического метода из XML-кода.


		 ![](../../Sub.gif)
		 [SaveToXML](../../Interface/IStatMethod/IStatMethod.SaveToXML.htm)
		 Метод SaveToXML осуществляет
		 выгрузку настроек статистического метода в XML-код.


См. также:


[Классы
 сборки Stat](../StatClass.htm)


		Справочная
		 система на версию ERROR: Variable (Version_lts) is undefined.
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
