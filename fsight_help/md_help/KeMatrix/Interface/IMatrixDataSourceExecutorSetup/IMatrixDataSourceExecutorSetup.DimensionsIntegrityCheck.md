# IMatrixDataSourceExecutorSetup.DimensionsIntegrityCheck

IMatrixDataSourceExecutorSetup.DimensionsIntegrityCheck
-


# IMatrixDataSourceExecutorSetup.DimensionsIntegrityCheck


## Синтаксис


DimensionsIntegrityCheck: Boolean;


## Описание


Свойство DimensionsIntegrityCheck определяет, будет ли перед расчетом производиться проверка построения справочников, входящих в отметку.


## Комментарии


Если свойству установлено значение True, то при расчете результирующей матрицы предварительно будет осуществлена проверка построения всех справочников, входящих в отметку. Если при построении какого-либо справочника возникнет ошибка, то ошибка будет проброшена на уровень платформы.


По умолчанию свойству установлено значение False, при этом проверка справочников не осуществляется. Если при построении возникают ошибки, то справочники не будут отстроены. Отметка по таким справочникам будет недоступна.


## Пример


Пример использования данного свойства приведен в описании [IMatrixDataSourceExecutor.Execute](../IMatrixDataSourceExecutor/IMatrixDataSourceExecutor.Execute.htm).


См. также:


[IMatrixDataSourceExecutorSetup](IMatrixDataSourceExecutorSetup.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
