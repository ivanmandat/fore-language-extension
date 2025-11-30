# CubeMetaloaderImportCallback

CubeMetaloaderImportCallback
-


# CubeMetaloaderImportCallback


Сборка: Cubes;


## Описание


Класс CubeMetaloaderImportCallback
 содержит методы, реализующие события, возникающие при импорте временных
 рядов.


## Комментарии


Для использования все методы класса должны быть переопределены в пользовательском
 классе, который является наследником класса [Object](ForeSys.chm::/Class/Object/Object.htm)
 и данного класса. Созданный класс является обработчиком событий, используемым
 при импорте временных рядов и может указываться в следующих свойствах:


	- [ICubeMetaLoader.ImportCallback](../../Interface/ICubeMetaLoader/ICubeMetaLoader.ImportCallback.htm);


	- [IImportRequestInstance.ImportCallback](../../Interface/IImportRequestInstance/IImportRequestInstance.ImportCallback.htm).


## Методы объекта класса, унаследованные от [ICubeMetaloaderImportCallback](../../Interface/ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [OnAfterStartTransaction](../../Interface/ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.OnAfterStartTransaction.htm)


		 Метод OnAfterStartTransaction
		 реализует событие, возникающее после открытия транзакции.


		 ![](../../Sub_Image.gif)
		 [OnBeforeCommit](../../Interface/ICubeMetaloaderImportCallback/ICubeMetaloaderImportCallback.OnBeforeCommit.htm)


		 Метод OnBeforeCommit
		 реализует событие, возникающее до фиксации транзакции.


См. также:


[Классы
 сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
