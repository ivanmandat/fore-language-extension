# Projection.setModelMatrix

Projection.setModelMatrix
-


# Projection.setModelMatrix


## Синтаксис


setModelMatrix(value: PP.Matrix4);


## Параметры


value. Матрица 4x4.


## Описание


Метод setModelMatrix устанавливает
 модельно-видовую матрицу.


## Пример


Для выполнения примера необходимо наличие в теге <head> html-страницы
 ссылок на файлы сценариев PP.js и PP.GraphicsBase.js. Создаем объект класса
 для работы с трехмерной проекцией и устанавливаем ему новую модельно-видовую
 матрицу:


// Создаем объект класса для работы с трехмерной проекцией
var projection = new PP.Projection();
// Устанавливаем новую модельно-видовую матрицу
var matix = new PP.Matrix4([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
projection.setModelMatrix(matix);
// Получаем модельно-видовую матрицу
console.log("Модельно-видовая матрица: ");
console.log(projection.getModelMatrix().getData());
В результате в консоль будет выведена модельно-видовая матрица:


Модельно-видовая матрица:


[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
 15, 16]


См. также:


[Projection](Projection.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
