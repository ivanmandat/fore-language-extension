# EtlBox.OnBeforeMoveCP

EtlBox.OnBeforeMoveCP
-


# EtlBox.OnBeforeMoveCP


## Синтаксис


OnBeforeMoveCP(Sender: Object; Args: [IEtlMoveCPEventArgs](../../Interface/IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.htm));


## Параметры


Sender. Параметр, возвращающий
 компонент, сгенерировавший событие;


Args. Параметр, позволяющий
 определить параметры события.


## Описание


Событие OnBeforeMoveCP наступает
 перед перемещением точки соединения линии.


## Комментарии


Перемещение точки соединения можно отменить с помощью свойства [IEtlMoveCPEventArgs.Cancel](../../Interface/IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.Cancel.htm).


## Пример


Использование события приведено в примере для [IEtlMoveCPEventArgs.CPIndex](../../Interface/IEtlMoveCPEventArgs/IEtlMoveCPEventArgs.CPIndex.htm).


См. также:


[EtlBox](EtlBox.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
