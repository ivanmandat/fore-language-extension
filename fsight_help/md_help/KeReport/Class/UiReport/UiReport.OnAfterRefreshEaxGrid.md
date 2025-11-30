# UiReport.OnAfterRefreshEaxGrid

UiReport.OnAfterRefreshEaxGrid
-


# UiReport.OnAfterRefreshEaxGrid


## Синтаксис


UiReport1OnAfterRefreshEaxGrid(Sender: Object; Args:
 [IUiPrxEaxGridEventArgs](../../Interface/IUiPrxEaxGridEventArgs/IUiPrxEaxGridEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnAfterRefreshEaxGrid
 наступает после обновления аналитической области данных.


## Комментарии


Перед обновлением аналитической области данных наступает событие [UiReport.OnBeforeRefreshEaxGrid](UiReport.OnBeforeRefreshEaxGrid.htm).


## Пример


Для выполнения примера предполагается наличие формы, содержащей компонент
 UiReport с идентификатором UiReport1 и визуальный компонент, в качестве
 источника данных для которого указан компонент UiReport1. В качестве источника
 данных для компонента UiReport1 укажите регламентный отчёт, на активном
 листе которого размещена аналитическая область данных.


Пример является обработчиком события OnAfterRefreshEaxGrid для компонента
 UiReport1.


	Sub UiReport1OnAfterRefreshEaxGrid(Sender: Object; Args: IUiPrxEaxGridEventArgs);

	Begin

	    Debug.WriteLine("Была обновлена аналитическая область данных:");

	    Debug.WriteLine("со столбцами: " + Args.EaxGrid.ColumnName(0));

	    Debug.WriteLine("и строками: " + Args.EaxGrid.RowName(0));

	End Sub UiReport1OnAfterRefreshEaxGrid;


После обновления аналитической области данных будет выдано информационное
 сообщение.


См. также:


[UiReport](UiReport.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
