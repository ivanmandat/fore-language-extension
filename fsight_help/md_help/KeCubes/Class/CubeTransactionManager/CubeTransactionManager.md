# CubeTransactionManager

CubeTransactionManager
-


# CubeTransactionManager


Сборка: Cubes;


## Описание


Класс CubeTransactionManager
 реализует менеджер транзакций, используемый при работе с многомерными
 источниками данных.


## Комментарии


Объект, реализующий менеджер, используется в методе [ICubeInstanceStorage.SaveMatrixT](../../Interface/ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixT.htm).


## Методы объекта класса, унаследованные от [ICubeTransactionManager](../../Interface/ICubeTransactionManager/ICubeTransactionManager.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Commit](../../Interface/ICubeTransactionManager/ICubeTransactionManager.Commit.htm)
		 Метод Commit сохраняет
		 все изменения на сервере СУБД и завершает транзакцию.


		 ![](../../Sub_Image.gif)
		 [Rollback](../../Interface/ICubeTransactionManager/ICubeTransactionManager.Rollback.htm)
		 Метод Rollback отменяет
		 все изменения и завершает транзакцию.


См. также:


[Классы
 сборки Cubes](../KeCubes_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
