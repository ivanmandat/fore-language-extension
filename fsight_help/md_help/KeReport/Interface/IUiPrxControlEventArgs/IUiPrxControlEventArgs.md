# IUiPrxControlEventArgs

IUiPrxControlEventArgs
-


# IUiPrxControlEventArgs


Сборка: Report;


## Описание


Интерфейс IUiPrxControlEventArgs
 содержит свойства аргумента события, происходящего при изменении значения
 элемента управления: [EventOnChangeControlValue](../IPrxReportUserEvents/IPrxReportUserEvents.EventOnChangeControlValue.htm).


## Иерархия наследования


           [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


           IUiPrxControlEventArgs


## Комментарии


Для работы с аргументами событий, происходящих перед удалением элемента
 управления, используйте [IUiPrxControlCancelEventArgs](../IUiPrxControlCancelEventArgs/IUiPrxControlCancelEventArgs.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Control](IUiPrxControlEventArgs.Control.htm)
		 Свойство Control возвращает
		 элемент управления регламентного отчета, который будет удалён,
		 или значение которого было изменено.


## Свойства, унаследованные от [IUiReportBaseEventArgs](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [UiRep](../IUiReportBaseEventArgs/IUiReportBaseEventArgs.UiRep.htm)
		 Свойство UiRep возвращает
		 объект, содержащий компонент UiReport,
		 сгенерировавший событие.


См. также:


[Интерфейсы сборки Report](../KeReport_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
