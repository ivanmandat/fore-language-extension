# UiReport.OnBeforeDeleteSheet

UiReport.OnBeforeDeleteSheet
-


# UiReport.OnBeforeDeleteSheet


## Синтаксис


OnBeforeDeleteSheet(Sender: Object; Args: [IUiPrxSheetCancelEventArgs](../../Interface/IUiPrxSheetCancelEventArgs/IUiPrxSheetCancelEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeDeleteSheet
 наступает до удаления листа регламентного отчёта.


## Комментарии


Используя свойство [IUiPrxSheetCancelEventArgs.Cancel](../../Interface/IUiPrxSheetCancelEventArgs/IUiPrxSheetCancelEventArgs.Cancel.htm)
 аргумента события, можно разрешить или запретить удаление листа.


См. также:


[UiReport](UiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
