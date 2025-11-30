# UiReport.OnBeforeRefreshEaxGrid

UiReport.OnBeforeRefreshEaxGrid
-


# UiReport.OnBeforeRefreshEaxGrid


## Синтаксис


UiReport1OnBeforeRefreshEaxGrid(Sender: Object;
 Args: [IUiPrxEaxGridEventArgs](../../Interface/IUiPrxEaxGridEventArgs/IUiPrxEaxGridEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeRefreshEaxGrid
 наступает перед обновлением аналитической области данных.


## Комментарии


После обновления аналитической области данных наступает событие [UiReport.OnAfterRefreshEaxGrid](UiReport.OnAfterRefreshEaxGrid.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 UiReport с идентификатором UiReport1 и визуальный компонент, в качестве
 источника данных для которого указан компонент UiReport1. В качестве источника
 данных для компонента UiReport1 укажите регламентный отчет, на активном
 листе которого размещена аналитическая область данных.


Пример является обработчиком события OnBeforeRefreshEaxGrid для компонента
 UiReport1.


	Sub UiReport1OnBeforeRefreshEaxGrid(Sender: Object; Args: IUiPrxEaxGridCancelEventArgs);

	Begin

	    Debug.WriteLine("Будет обновлена аналитическая область данных:");

	    Debug.WriteLine("со столбцами: " + Args.EaxGrid.ColumnName(0));

	    Debug.WriteLine("и строками: " + Args.EaxGrid.RowName(0));

	End Sub UiReport1OnBeforeRefreshEaxGrid;


Перед обновлением аналитической области данных будет выдано информационное
 сообщение.


См. также:


[UiReport](UiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
