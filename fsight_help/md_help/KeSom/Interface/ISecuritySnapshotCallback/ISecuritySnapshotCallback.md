# ISecuritySnapshotCallback

ISecuritySnapshotCallback
-


# ISecuritySnapshotCallback


Сборка: Metabase;


## Описание


Интерфейс ISecuritySnapshotCallback
 содержит методы, реализующие события, возникающие при восстановлении настроек
 политики безопасности из резервной копии.


## Иерархия наследования


           ISecuritySnapshotCallback


## Комментарии


Для сохранения резервной копии политики безопасности и восстановления
 настроек из неё используйте интерфейс [ISecuritySnapshot](../ISecuritySnapshot/ISecuritySnapshot.htm).


Для получения лога применения контура политики безопасности используйте
 интерфейс [ISecuritySnapshotLog](../ISecuritySnapshotLog/ISecuritySnapshotLog.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnOperation](ISecuritySnapshotCallback.OnOperation.htm)
		 Метод OnOperation реализует
		 событие, происходящее во время применения политики безопасности.


		 ![](../../Sub_Image.gif)
		 [OnSubjectApply](ISecuritySnapshotCallback.OnSubjectApply.htm)
		 Метод OnSubjectApply
		 реализует событие, происходящее в процессе восстановления пользователей/групп.


См. также:


[Интерфейсы сборки Metabase](../KeSom_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
