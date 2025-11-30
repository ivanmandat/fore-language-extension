# IMatrixIterator.EqualTo

IMatrixIterator.EqualTo
-


# IMatrixIterator.EqualTo


## Синтаксис


EqualTo(Iterator: [IMatrixModelIterator](ForeSys.chm::/Interface/IMatrixModelIterator/IMatrixModelIterator.htm)): Boolean;


## Параметры


Iterator - итератор, с которым осуществляется сравнение текущего итератора.


## Описание


Свойство EqualTo возвращает признак сравнения текущего итератора с итератором, передаваемым посредством параметра Iterator. Сравнение допустимо для итераторов, созданных на базе одной матрицы. Если курсор в итераторах установлен на одинаковых позициях - свойство возвращает True - иначе False.


См.также:


[IMatrixIterator](IMatrixIterator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
