# ISecuritySnapshotCallback.OnOperation

ISecuritySnapshotCallback.OnOperation
-


# ISecuritySnapshotCallback.OnOperation


## Синтаксис


		OnOperation(ApplyOperation: [SnapshotApplyOperationType](../../Enums/SnapshotApplyOperationType.htm);
		 Var State: Integer);


## Параметры


ApplyOperation. Тип операции,
 производимой при применении политики безопасности;


State. Состояние.


## Описание


Метод OnOperation реализует
 событие, происходящее во время применения политики безопасности.


## Пример


Использование метода приведено в примере для [ISecuritySnapshot.ApplyFromFile](../ISecuritySnapshot/ISecuritySnapshot.ApplyFromFile.htm).


См. также:


[ISecuritySnapshotCallback](ISecuritySnapshotCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
