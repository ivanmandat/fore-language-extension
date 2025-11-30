# IValidationFilter.GetComponentsByFactor

IValidationFilter.GetComponentsByFactor
-


# IValidationFilter.GetComponentsByFactor


## Синтаксис


GetComponentsByFactor(FactorKey: Integer; Date: DateTime; UseDate:Boolean): Array;


## Параметры


FactorKey. Ключ показателя;


Date. Календарная точка, для которой необходимо получить компоненты;


UseDate. Определяет, получать ли компоненты только для точки, заданной параметром Date.


## Описание


Метод GetComponentsByFactor возвращает массив рядов-компонентов, для которых был сделан расчет валидации для указанного показателя.


## Комментарии


GetComponentsByFactor не возвращает пользовательские компоненты, задаваемые в свойстве [IValidationFilter.UserComponents](IValidationFilter.UserComponents.htm).


Каждый элемент массива реализован интерфейсом [IValidationComponent](../IValidationComponent/IValidationComponent.htm). Если валидация не содержит компонентов (например, [MissingData](../../Enums/ValidationDetailsKind.htm)), то массив будет пустым.


Параметр UseDate, используется только для валидации [СomponentMismatch](../../Enums/ValidationDetailsKind.htm).


[Типы валидаций](../../Enums/ValidationDetailsKind.htm), которые не содержат компонентов: MissingData, MissingMetaData, Level, GrowthRate, StatisticalOutliers.


[Типы валидаций](../../Enums/ValidationDetailsKind.htm), для которых есть всегда один компонент: Trend, RevisionComparison, CrossFrequency, Correlation.


Число компонентов для прочих типов валидаций может варьироваться.


## Пример


Использование свойства приведено в примере для [IValidationComponent.Factor](../IValidationComponent/IValidationComponent.Factor.htm).


См. также:


[IValidationFilter](IValidationFilter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
