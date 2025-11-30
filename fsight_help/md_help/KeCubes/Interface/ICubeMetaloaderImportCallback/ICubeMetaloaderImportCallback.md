# ICubeMetaloaderImportCallback

ICubeMetaloaderImportCallback
-


# ICubeMetaloaderImportCallback


Сборка: Cubes;


## Описание


Интерфейс ICubeMetaloaderImportCallback
 содержит методы, реализующие события, возникающие при импорте временных
 рядов.


## Иерархия наследования


           ICubeMetaloaderImportCallback


## Комментарии


Для использования все методы интерфейса должны быть переопределены в
 пользовательском классе, который является наследником класса [Object](ForeSys.chm::/Class/Object/Object.htm)
 и данного интерфейса. Созданный класс является обработчиком событий, используемым
 при импорте временных рядов и может указываться в следующих свойствах:


	- [ICubeMetaLoader.ImportCallback](../ICubeMetaLoader/ICubeMetaLoader.ImportCallback.htm);


	- [IImportRequestInstance.ImportCallback](../IImportRequestInstance/IImportRequestInstance.ImportCallback.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterStartTransaction](ICubeMetaloaderImportCallback.OnAfterStartTransaction.htm)


		 Метод OnAfterStartTransaction
		 реализует событие, возникающее после открытия транзакции.


		 ![](../../Sub_Image.gif)
		 [OnBeforeCommit](ICubeMetaloaderImportCallback.OnBeforeCommit.htm)


		 Метод OnBeforeCommit
		 реализует событие, возникающее до фиксации транзакции.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
