# ICubeLoaderDimensionBinding.CalendarLevel

ICubeLoaderDimensionBinding.CalendarLevel
-


# ICubeLoaderDimensionBinding.CalendarLevel


## Синтаксис


CalendarLevel: [DimCalendarLevel](kedims.chm::/enums/dimcalendarlevel.htm);


## Описание


Свойство CalendarLevel определяет уровень календарного измерения, для которого настраивается привязка.


## Комментарии


Свойство CalendarLevel актуально, если текущие параметры привязки соответствуют календарному измерению. Свойство вернет тот уровень календаря, который был указан в методе [AddCalendar](../ICubeLoaderDimensionBindings/ICubeLoaderDimensionBindings.AddCalendar.htm). Если параметры привязки были сформированы путем вызова метода [Init](../ICubeLoaderFromSource/ICubeLoaderFromSource.Init.htm), то для календарных измерений будут сформированы привязки с дневной динамикой. Используя свойство CalendarLevel можно установить необходимую динамику.


Примечание. Если в параметрах привязки в свойстве [Dictionary](ICubeLoaderDimensionBinding.Dictionary.htm) указан существующий календарный справочник, то его структура будет изменена таким образом, чтобы остались только элементы уровня CalendarLevel.


## Пример


Пример использования приведен в описании метода [ICubeLoaderFromSource.Load](../ICubeLoaderFromSource/ICubeLoaderFromSource.Load.htm).


См. также:


[ICubeLoaderDimensionBinding](ICubeLoaderDimensionBinding.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
