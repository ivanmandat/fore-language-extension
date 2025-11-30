# IUndoRedo

IUndoRedo
-


# IUndoRedo


Сборка: System;


## Описание


Интерфейс IUndoRedo предназначен
 для работы со стеком изменений (отмены/повтора).


## Комментарии


Стек изменений используется при работе с различными объектами репозитория.
 Получить доступ к параметрам стека изменений можно используя одно из следующих
 свойств:


	- [IAdhocReport.UndoRedo](KeAdhoc.chm::/Interface/IAdhocReport/IAdhocReport.UndoRedo.htm);


	- [IChart.UndoRedo](Chart.chm::/Interface/IChart/IChart.UndoRedo.htm);


	- [IChartExternLegend.UndoRedo](Chart.chm::/Interface/IChartExternLegend/IChartExternLegend.UndoRedo.htm);


	- [IPrxReport.UndoRedo](KeReport.chm::/Interface/IPrxReport/IPrxReport.UndoRedo.htm);


	- [IPrxChart.UndoRedo](KeReport.chm::/Interface/IPrxChart/IPrxChart.UndoRedo.htm);


	- [IPrxChartLegend.UndoRedo](KeReport.chm::/Interface/IPrxChartLegend/IPrxChartLegend.UndoRedo.htm);


	- [IPrxFlowDocument.UndoRedo](KeReport.chm::/Interface/IPrxFlowDocument/IPrxFlowDocument.UndoRedo.htm);


	- [ITabSheet.UndoRedo](TabSheet.chm::/Interface/ITabSheet/ITabSheet.UndoRedo.htm);


	- [IMap.UndoRedo](Map.chm::/Interface/IMap/IMap.UndoRedo.htm).


## Свойства


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Enabled](IUndoRedo.Enabled.htm)
		 Свойство Enabled определяет
		 доступность стека изменений (отмены/повтора) для пользователя.


		 ![](../../Property_Image.gif)
		 [Limit](IUndoRedo.Limit.htm)
		 Свойство Limit определяет
		 максимальное количество действий, которые могут быть расположены
		 в стеке изменений.


		 ![](../../Property_Image.gif)
		 [RedoCount](IUndoRedo.RedoCount.htm)
		 Свойство RedoCount
		 возвращает количество действий, которые хранятся в стеке повтора.


		 ![](../../Property_Image.gif)
		 [RedoState](IUndoRedo.RedoState.htm)
		 Свойство RedoState
		 возвращает состояние действия в стеке повтора, передаваемое посредством
		 входного параметра.


		 ![](../../Property_Image.gif)
		 [Storage](IUndoRedo.Storage.htm)
		 Свойство Storage возвращает
		 хранилище сводной информации стека изменений.


		 ![](../../Property_Image.gif)
		 [UndoCount](IUndoRedo.UndoCount.htm)
		 Свойство UndoCount
		 возвращает количество действий, которые хранятся в стеке отмены.


		 ![](../../Property_Image.gif)
		 [UndoState](IUndoRedo.UndoState.htm)
		 Свойство UndoState
		 возвращает состояние действия в стеке отмены, передаваемое посредством
		 входного параметра.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Flush](IUndoRedo.Flush.htm)
		 Метод Flush очищает
		 стек отмены/повтора.


		 ![](../../Sub_Image.gif)
		 [Redo](IUndoRedo.Redo.htm)
		 Метод Redo повторяет
		 заданное количество отмененных действий.


		 ![](../../Sub_Image.gif)
		 [Undo](IUndoRedo.Undo.htm)
		 Метод Undo отменяет
		 заданное количество совершенных действий.


См. также:


[Интерфейсы
 сборки System](../System_interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
