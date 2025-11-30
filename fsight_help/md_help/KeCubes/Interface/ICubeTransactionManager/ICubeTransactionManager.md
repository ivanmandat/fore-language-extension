# ICubeTransactionManager

ICubeTransactionManager
-


# ICubeTransactionManager


Сборка: Cubes;


## Описание


Интерфейс ICubeTransactionManager
 предназначен для управления транзакциями при работе с многомерными источниками
 данных.


## Иерархия наследования


ICubeTransactionManager


## Комментарии


Интерфейс является аналогом интерфейса [IConnectionTransaction](KeSom.chm::/Interface/IConnectionTransaction/IConnectionTransaction.htm),
 но оптимизирован для управления транзакциями при работе с многомерными
 источниками данных, а также при работе со справочниками НСИ. Все следующие
 операции с источниками выполняются внутри внешних транзакций:


	- Добавление, изменение и удаление значений;


	- Сохранение изменений, включая вариант с использованием временных
	 таблиц.


Операции при работе со справочниками НСИ:


	- Выполнение схем экспорта/импорта;


	- Сохранение элементов в обновление;


	- Построение экземпляра справочника;


	- Поиск элементов.


Для начала работы с менеджером транзакций создайте экземпляр класса
 [CubeTransactionManager](../../Class/CubeTransactionManager/CubeTransactionManager.htm). В менеджер
 будет передана информация об уже существующих транзакциях с сервером СУБД.
 Если транзакция существует, то новая не создаётся, иначе будет создана
 новая транзакция. Для сохранения изменений, внесенных в рамках транзакции,
 вызовите метод [Commit](ICubeTransactionManager.Commit.htm);
 для отката изменений - метод [Rollback](ICubeTransactionManager.Rollback.htm).


Для использования менеджера в качестве обработчика операций при сохранении
 данных в куб передайте полученный экземпляр класса [CubeTransactionManager](../../Class/CubeTransactionManager/CubeTransactionManager.htm)
 в метод [ICubeInstanceStorage.SaveMatrixT](../ICubeInstanceStorage/ICubeInstanceStorage.SaveMatrixT.htm).


## Методы


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Commit](ICubeTransactionManager.Commit.htm)
		 Метод Commit сохраняет
		 все изменения на сервере СУБД и завершает транзакцию.


		 ![](../../Sub_Image.gif)
		 [Rollback](ICubeTransactionManager.Rollback.htm)
		 Метод Rollback отменяет
		 все изменения и завершает транзакцию.


См. также:


[Интерфейсы
 сборки Cubes](../KeCubes_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
