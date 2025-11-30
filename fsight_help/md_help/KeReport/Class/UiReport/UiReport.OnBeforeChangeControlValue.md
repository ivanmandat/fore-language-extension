# UiReport.OnBeforeChangeControlValue

UiReport.OnBeforeChangeControlValue
-


# UiReport.OnBeforeChangeControlValue


## Синтаксис


OnBeforeChangeControlValue(Sender: Object; Args:
 [IUiPrxControlCancelEventArgs](../../Interface/IUiPrxControlCancelEventArgs/IUiPrxControlCancelEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeChangeControlValue
 наступает до изменения значения элемента управления регламентного отчёта.


## Комментарии


Используя свойство [IUiPrxControlCancelEventArgs.Cancel](../../Interface/IUiPrxControlCancelEventArgs/IUiPrxControlCancelEventArgs.Cancel.htm)
 аргумента события, можно разрешить или запретить изменение значения элемента
 управления.


См. также:


[UiReport](UiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
