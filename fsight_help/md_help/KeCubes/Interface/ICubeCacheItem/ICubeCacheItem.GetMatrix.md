# ICubeCacheItem.GetMatrix

ICubeCacheItem.GetMatrix
-


# ICubeCacheItem.GetMatrix


## Синтаксис


GetMatrix: [IMatrix](KeMatrix.chm::/Interface/IMatrix/IMatrix.htm);


## Описание


Метод GetMatrix возвращает матрицу
 с данными, сохранёнными в текущем экземпляре кеша.


## Комментарии


Перед получением матрицы предварительно требуется загрузить её в память
 компьютера с помощью метода [ICubeCacheItem.LoadMatrix](ICubeCacheItem.LoadMatrix.htm).
 Для проверки, загружена ли матрица в память, можно использовать свойство
 [ICubeCacheItem.Loaded](ICubeCacheItem.Loaded.htm).


## Пример


Использование метода приведено в примере для метода [ICubeCacheItem.GetCubeInstance](ICubeCacheItem.GetCubeInstance.htm).


См. также:


[ICubeCacheItem](ICubeCacheItem.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
