# IMsProblemCalculationCallback.OnSaveData

IMsProblemCalculationCallback.OnSaveData
-


# IMsProblemCalculationCallback.OnSaveData


## Синтаксис


		OnSaveData(Stub: [IVariableStub](KeCubes.chm::/Interface/IVariableStub/IVariableStub.htm);
		 Matrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);
		 ValueFlag: Integer; AuditRecordKey: Variant);


## Параметры


Stub. Источник, в который сохранены
 данные.


Matrix. Матрица с сохраняемыми
 значениями.


ValueFlag. Флаг изменившихся
 значений, по которому осуществлялось сохранение.


AuditRecordKey. Уникальный
 ключ записи о сохранении данных в протоколе доступа.


## Описание


Метод OnSaveData реализует событие,
 происходящее после сохранения данных.


## Комментарии


В параметрах Stub,
 Matrix и ValueFlag будет
 доступна информация о сохраняемых данных. Также во время сохранения
 данных в протокол доступа будет добавлена соответствующая запись. Уникальный
 ключ этой записи будет доступен в параметре AuditRecordKey.


## Пример


Пример использования приведён в описании [IMsProblemCalculationCallback.OnBeforeSaveData](IMsProblemCalculationCallback.OnBeforeSaveData.htm).


См. также:


[IMsProblemCalculationCallback](IMsProblemCalculationCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
