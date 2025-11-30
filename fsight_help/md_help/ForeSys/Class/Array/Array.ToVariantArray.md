# Array.ToVariantArray

Array.ToVariantArray
-


# Array.ToVariantArray


## Синтаксис


ToVariantArray: Array;


## Описание


Метод ToVariantArray формирует
 новый массив путём преобразования исходного массива к массиву с типом
 Variant.


## Пример


			Sub UserProc;

Var

    arrD: Array[3] Of Double = [1.0, 2.0, 3.0];

    arrS: Array[2, 2] Of String = [["AA", "AB"], ["BA", "BB"]];

    arrV1, arrV2: Array Of Variant;

Begin

    arrV1 := arrD.ToVariantArray;

    arrV2 := arrS.ToVariantArray;

    Debug.WriteLine(arrV1.Length);

    Debug.WriteLine(arrV2.Length);

End Sub UserProc;


При выполнении примера осуществляется преобразование двух массивов с
 типами Double и String в массивы с типом Variant. Размеры результирующих
 массивов будут выведены в консоль среды разработки.


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
