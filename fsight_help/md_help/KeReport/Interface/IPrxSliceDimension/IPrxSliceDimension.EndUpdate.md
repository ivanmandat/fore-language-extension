# IPrxSliceDimension.EndUpdate

IPrxSliceDimension.EndUpdate
-


# IPrxSliceDimension.EndUpdate


## Синтаксис


EndUpdate;


## Описание


Метод EndUpdate обновляет зависимые
 измерения при изменении отметки управляющего измерения.


## Комментарии


Метод используется для регламентного отчёта, где источником данных является
 [куб](UiNavObj.chm::/Cube/UiMd_Cube_Type.htm)
 с [управляющими
 измерениями](UiNavObj.chm::/Cube/CreateCube/Master_Standart/UiMd_Cube_CreateCube_Master_Standart_managed_dim.htm).


Метод EndUpdate применятся совместно
 с методом [BeginUpdate](IPrxSliceDimension.BeginUpdate.htm):


	- при вызове метода
	 [BeginUpdate](IPrxSliceDimension.BeginUpdate.htm)
	 блокируется обновление зависимых измерений;


	- после вызова метода EndUpdate обновляются зависимые
	 измерения.


## Пример


Пример использования приведен на странице описания метода [BeginUpdate](IPrxSliceDimension.BeginUpdate.htm).


См. также:


[IPrxSliceDimension](IPrxSliceDimension.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
