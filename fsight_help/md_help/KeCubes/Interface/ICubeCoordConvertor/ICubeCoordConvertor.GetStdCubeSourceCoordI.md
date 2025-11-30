# ICubeCoordConvertor.GetStdCubeSourceCoordI

ICubeCoordConvertor.GetStdCubeSourceCoordI
-


# ICubeCoordConvertor.GetStdCubeSourceCoordI


## Синтаксис


GetStdCubeSourceCoordI(Coord: Array; Var SourceCoord:
 Array): Integer;


## Параметры


Coord. Массив, содержащий ключи
 элементов измерений, формирующих координату в исходном кубе.


SourceCoord. Массив, в который
 будут помещены ключи элементов измерений, формирующих координату в кубе-источнике.


## Описание


Метод GetStdCubeSourceCoordI
 вычисляет координату в кубе-источнике в соответствии с переданной координатой
 в исходном кубе.


## Комментарии


Отличием метода GetStdCubeSourceCoordI
 от метода [GetStdCubeSourceCoord](ICubeCoordConvertor.GetStdCubeSourceCoord.htm)
 является его внутренняя реализация, в которой оптимизирована работа с
 типами данными.


При выполнении метода осуществляется вычисление координаты в кубе-источнике
 с учётом настроек фиксации измерений в текущем кубе. Полученная координата
 будет помещена в массив SourceCoord.
 Результатом выполнения метода будет ключ куба-источника в репозитории.


См. также:


[ICubeCoordConvertor](ICubeCoordConvertor.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
