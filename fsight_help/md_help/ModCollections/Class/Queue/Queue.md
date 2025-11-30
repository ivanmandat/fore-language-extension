# Queue

Queue
-


# Queue


## Описание


Класс Queue реализует объект, представляющий собой очередь элементов.


## Комментарий


Принцип работы очереди - «Первый пришел - первый ушел». Элементы всегда добавляются в конец очереди. Очереди полезны для хранения данных в том порядке, в котором они были получены, для последующей последовательной обработки этих данных. Элементы всегда помещаются в конец очереди, а удаляются из ее начала. Для работы с элементами предназначены различные методы очереди: [Dequeue](../../Interface/IQueue/IQueue.Dequeue.htm), [Enqueue](../../Interface/IQueue/IQueue.Enqueue.htm), [Peek](../../Interface/IQueue/IQueue.Peek.htm). Проверить наличие элемента в очереди можно с помощью метода [Contains](../../Interface/IQueue/IQueue.Contains.htm).


## Свойства объекта класса, унаследованные от [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя свойства
		 Краткое описание


		 ![](../../Property_Image.gif)
		 [Count](../../Interface/ICollection/ICollection.Count.htm)
		 Свойство Count возвращает
		 количество элементов в массиве.


## Методы объекта класса, унаследованные от [IQueue](../../Interface/IQueue/IQueue.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [Clear](../../Interface/IQueue/IQueue.Clear.htm)
		 Метод Clear очищает
		 очередь.


		 ![](../../Sub_Image.gif)
		 [Clone](../../Interface/IQueue/IQueue.Clone.htm)
		 Метод Clone создает
		 копию очереди.


		 ![](../../Sub_Image.gif)
		 [Contains](../../Interface/IQueue/IQueue.Contains.htm)
		 Метод Contains проверяет
		 наличие в очереди элемента с заданным значением.


		 ![](../../Sub_Image.gif)
		 [Dequeue](../../Interface/IQueue/IQueue.Dequeue.htm)
		 Метод Dequeue извлекает
		 из очереди значение элемента, помещённого первым.


		 ![](../../Sub_Image.gif)
		 [Enqueue](../../Interface/IQueue/IQueue.Enqueue.htm)
		 Метод Enqueue помещает
		 элемент с указанным значением в очередь.


		 ![](../../Sub_Image.gif)
		 [Peek](../../Interface/IQueue/IQueue.Peek.htm)
		 Метод Peek извлекает
		 из очереди значение элемента без удаления элемента из очереди.


		 ![](../../Sub_Image.gif)
		 [ToArray](../../Interface/IQueue/IQueue.ToArray.htm)
		 Метод ToArray осуществляет
		 преобразование очереди в обычный массив.


## Методы объекта класса, унаследованные от [ICollection](../../Interface/ICollection/ICollection.htm)


		 Имя метода
		 Краткое описание


		 ![](../../Sub_Image.gif)
		 [CopyTo](../../Interface/ICollection/ICollection.CopyTo.htm)
		 Метод CopyTo осуществляет
		 копирование коллекции в массив.


См. также:


[Классы сборки Collections](../ModCollections_Class.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
