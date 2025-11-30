# IInMemManager.PrepareMatrixPartial

IInMemManager.PrepareMatrixPartial
-


# IInMemManager.PrepareMatrixPartial


## Синтаксис


PrepareMatrixPartial(Dest: [ICubeInstanceDestination](../ICubeInstanceDestination/ICubeInstanceDestination.htm);
 Selection: [IDimSelectionSet](KeDims.chm::/interface/IDimSelectionSet/IDimSelectionSet.htm)):
 [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Параметры


Dest.
 Отстроенный вариант отображения куба.


Selection. Отметка, в соответствии
 с которой будет построена кешируемая матрица с данными.


## Описание


Метод PrepareMatrixPartial для
 указанного варианта отображения куба в соответствии с заданной отметкой
 отстраивает матрицу, которая будет сохранена в кеш.


## Комментарии


Метод позволяет произвести частичное кеширование данных куба. При дальнейшей
 работе, если в кеше не будут найдены данные по требуемой отметке, то они
 будут извлечены из источника данных. В виду особенностей реализации метод
 возвращает пустую матрицу, структура которой соответствует структуре источника
 данных.


## Пример


Пример использования приведён в описании метода [IInMemManager.GetMatrix](IInMemManager.GetMatrix.htm).


См. также:


[IInMemManager](IInMemManager.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
