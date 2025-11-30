# ISecuritySnapshotCallback.OnSubjectApply

ISecuritySnapshotCallback.OnSubjectApply
-


# ISecuritySnapshotCallback.OnSubjectApply


## Синтаксис


		OnSubjectApply(ApplyState: [ApplyStateType](../../Enums/ApplyStateType.htm);
		 Subject: [ISecuritySubject](../ISecuritySubject/ISecuritySubject.htm);
		 Var State: Integer);


## Параметры


ApplyState. Тип восстановления
 субъекта безопасности;


Subject. Субъект безопасности;


State. Состояние.


## Описание


Метод OnSubjectApply реализует
 событие, происходящее в процессе восстановления пользователей/групп.


## Пример


Использование метода приведено в примере для [ISecuritySnapshot.ApplyFromFile](../ISecuritySnapshot/ISecuritySnapshot.ApplyFromFile.htm).


См. также:


[ISecuritySnapshotCallback](ISecuritySnapshotCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
