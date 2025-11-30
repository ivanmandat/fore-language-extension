# ICubeMetaUpdateCallback

ICubeMetaUpdateCallback
-


# ICubeMetaUpdateCallback


Сборка: Cubes;


## Описание


Интерфейс ICubeMetaUpdateCallback
 предназначен для работы с событиями, которые происходят при транзакциях
 во время копирования базы данных временных рядов.


## Иерархия наследования


           ICubeMetaUpdateCallback


## Комментарии


Интерфейс должен быть переопределен в пользовательском классе.


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterStartTransaction](ICubeMetaUpdateCallback.OnAfterStartTransaction.htm)


		 Метод OnAfterStartTransaction
		 реализует событие, возникающее при открытии транзакции и ревизии.


		 ![](../../Sub_Image.gif)
		 [OnBeforeCommit](ICubeMetaUpdateCallback.OnBeforeCommit.htm)


		 Метод OnBeforeCommit
		 реализует событие, возникающее перед закрытием транзакции и копирования.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
