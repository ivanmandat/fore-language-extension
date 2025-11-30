# Array.ToSimpleArray

Array.ToSimpleArray
-


# Array.ToSimpleArray


## Синтаксис


ToSimpleArray(Type: [ForeVariantType](../../Enums/ForeVariantType.htm)):
 Variant;


## Параметры


Type. Тип данных, который будет
 иметь новый массив.


## Описание


Метод ToSimpleArray формирует
 новый массив путём преобразования исходного массива с типом Variant к
 массиву, имеющему простой тип данных.


## Комментарии


Для корректного выполнения метода значения, хранящиеся в текущем массиве,
 должны иметь сопоставимый тип данных, к которому осуществляется преобразование.


## Пример


			Sub UserProc;

Var

    arrV1: Array[3] Of Variant = [1.0, 2.0, 3.0];

    arrD: Array Of Double;

    arrV2: Array[2, 2] Of Variant = [["AA", "AB"], ["BA", "BB"]];

    arrS: Array Of String;

Begin

    // Преобразование массива типа Variant к массиву с типом Double

    arrD := (arrV1.ToSimpleArray(ForeVariantType.Double)) As Array Of Double;

    Debug.WriteLine(arrD.Length);

    // Преобразование массива типа Variant к массиву с типом String

    arrS := (arrV2.ToSimpleArray(ForeVariantType.String)) As Array Of String;

    Debug.WriteLine(arrS.Length);

End Sub UserProc;


При выполнении примера осуществляется преобразование двух массивов с
 типом Variant в массивы с типами Double и String. Размеры результирующих
 массивов будут выведены в консоль среды разработки.


См. также:


[Array](Array.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
