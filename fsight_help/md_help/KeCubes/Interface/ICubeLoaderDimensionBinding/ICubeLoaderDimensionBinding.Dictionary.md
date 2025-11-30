# ICubeLoaderDimensionBinding.Dictionary

ICubeLoaderDimensionBinding.Dictionary
-


# ICubeLoaderDimensionBinding.Dictionary


## Синтаксис


Dictionary: [IDimensionModel](kedims.chm::/interface/idimensionmodel/idimensionmodel.htm);


## Описание


Свойство Dictionary определяет справочник репозитория, который будет использован в качестве измерения куба.


## Комментарии


Если свойство Dictionary не задано, то при выполнении метода [Load](../ICubeLoaderFromSource/ICubeLoaderFromSource.Load.htm) будет создан новый справочник, соответствующий измерению.


В качестве значения свойства можно указать следующие справочники:


-
Если настраиваются параметры привязки обычного измерения куба, то можно указать только табличный справочник НСИ.


-
Если настраиваются параметры привязки календарного измерения куба, то можно указать только календарный справочник.


Примечание. Если в свойстве Dictionary указан справочник для календарного измерения, то структура этого справочника будет изменена таким образом, чтобы остались только элементы уровня, который был указан в параметрах метода [AddCalendar](../ICubeLoaderDimensionBindings/ICubeLoaderDimensionBindings.AddCalendar.htm) либо в свойстве [CalendarLevel](ICubeLoaderDimensionBinding.CalendarLevel.htm).


## Пример


Пример использования приведен в описании свойства [ICubeLoaderFromSource.DimensionBindings](../ICubeLoaderFromSource/ICubeLoaderFromSource.DimensionBindings.htm).


См. также:


[ICubeLoaderDimensionBinding](ICubeLoaderDimensionBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
