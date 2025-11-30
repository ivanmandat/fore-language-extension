# ITsCalculationContext

ITsCalculationContext
-


# ITsCalculationContext


Сборка: Transform;


## Описание


Интерфейс ITsCalculationContext
 предназначен для работы с контекстом пользовательского метода расчета.


## Иерархия наследования


           ITsCalculationContext


## Комментарии


Контекст пользовательского метода работы можно получить непосредственно
 в пользовательском методе, используя статические свойства класса [TsCalculation](../../Class/TsCalculation/TsCalculation.htm).


Используя данный интерфейс можно выводить пользователю сообщения, предупреждения
 и ошибки, возникшие при расчёте метода.


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [CalculationDirection](ITsCalculationContext.CalculationDirection.htm)


		 Свойство CalculationDirection
		 возвращает направление поточечного режима расчёта.


		 ![](../../Property_Image.gif)
		 [CalculationType](ITsCalculationContext.CalculationType.htm)


		 Свойство CalculationType
		 возвращает режим расчета пользовательского метода.


		 ![](../../Property_Image.gif)
		 [CalendarSettings](ITsCalculationContext.CalendarSettings.htm)


		 Свойство CalendarSettings
		 возвращает параметры календарного уровня для контекста пользовательского
		 метода расчёта.


		 ![](../../Property_Image.gif)
		 [Levels](ITsCalculationContext.Levels.htm)


		 Свойство Levels возвращает
		 набор календарных динамик, доступных для расчёта пользовательского
		 метода.


		 ![](../../Property_Image.gif)
		 [ParamValues](ITsCalculationContext.ParamValues.htm)


		 Свойство ParamValues
		 возвращает коллекцию значений параметров, доступных в пользовательском
		 методе расчета.


		 ![](../../Property_Image.gif)
		 [ParentObject](ITsCalculationContext.ParentObject.htm)


		 Свойство ParentObject
		 возвращает родительский объект контекста пользовательского метода
		 расчета.


		 ![](../../Property_Image.gif)
		 [Tag](ITsCalculationContext.Tag.htm)


		 Свойство Tag предназначено
		 для хранения пользовательской информации о контексте.


		 ![](../../Property_Image.gif)
		 [UserData](ITsCalculationContext.UserData.htm)


		 Свойство UserData возвращает
		 пользовательские данные, связанные с методом расчёта.


		 ![](../../Property_Image.gif)
		 [VariableMatrix](ITsCalculationContext.VariableMatrix.htm)


		 Свойство VariableMatrix
		 возвращает доступ к указанному источнику данных.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CreateTimeSeries](ITsCalculationContext.CreateTimeSeries.htm)


		 Метод CreateTimeSeries
		 создает ряд для расчета пользовательского метода.


		 ![](../../Sub_Image.gif)
		 [RaiseError](ITsCalculationContext.RaiseError.htm)


		 Метод RaiseError генерирует
		 ошибку пользовательского метода.


		 ![](../../Sub_Image.gif)
		 [RaiseMessage](ITsCalculationContext.RaiseMessage.htm)


		 Метод RaiseMessage
		 генерирует сообщение пользовательского метода.


		 ![](../../Sub_Image.gif)
		 [RaiseWarning](ITsCalculationContext.RaiseWarning.htm)


		 Метод RaiseWarning
		 генерирует предупреждение пользовательского метода.


См. также:


[Интерфейсы
 сборки Transform](../KeTransform_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
