# ISequenceInstance

ISequenceInstance
-


# ISequenceInstance


Сборка: Db;


## Описание


Интерфейс ISequenceInstance содержит свойства и методы для работы с последовательностью.


## Иерархия наследования


           [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm)


           ISequenceInstance


## Комментарии


Последовательность используется для генерации ряда чисел. Последнее сгенерированное число сохраняется в СУБД, дальнейшее обращение позволяет получить последующие числа.


## Свойства, унаследованные от [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm)


 Имя свойства
 Краткое описание


 ![](../../Property_Image.gif)

[Database](../ISQLCommandInstance/ISQLCommandInstance.Database.htm)

 Свойство Database возвращает объект, позволяющий получить доступ к объектам, хранящимся в базе данных.


## Методы


 Имя метода
 Краткое описание


 ![](../../Sub_Image.gif)

[Next](ISequenceInstance.Next.htm)

 Метод Next генерирует следующее число последовательности.


## Методы, унаследованные от [ISQLCommandInstance](../ISQLCommandInstance/ISQLCommandInstance.htm)


 Имя метода
 Краткое описание


 ![](../../Sub_Image.gif)

[Execute](../ISQLCommandInstance/ISQLCommandInstance.Execute.htm)

 Метод Execute запускает команду СУБД на выполнение и возвращает количество обработанных записей.


См. также:


[Интерфейсы сборки Db](../KeDb_Interface.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
