# ITabRange.DistinctCells

ITabRange.DistinctCells
-


# ITabRange.DistinctCells


## Синтаксис


DistinctCells([WithHidden: Boolean = True]): [ITabRange](ITabRange.htm);


## Параметры


WithHidden. Необязательный
 параметр, определяющий, будут ли в диапазон включаться скрытые столбцы/строки
 таблицы. По умолчанию имеет значение True,
 при этом скрытые столбцы/строки включаются в диапазон. Если параметру
 WithHidden установлено значение
 False, то из диапазона исключаются
 невидимые области.


## Описание


Свойство DistinctCells возвращает
 составной диапазон, не содержащий пересекающихся частей.


## Пример


			Sub UserProc(TSheet: ITabSheet);

Var


    TRange1, TRange2, TRange3: ITabRange;

Begin

    //Получение составного диапазона

    TRange1 := TSheet.ParseRange("A0:D2;B1:E3;D3:E5");

    //Получение составного диапазона, состоящего из непересекающихся областей

    TRange2 := TRange1.DistinctCells;

    //Скрытие столбца

    TSheet.Column(2).Hidden := TriState.OnOption;

    //Получение нового составного диапазона, состоящего из непересекающихся областей

    //с учетом скрытых областей

    TRange3 := TRange1.DistinctCells(False);

End Sub UserProc;


При выполнении примера для таблицы будут получены три различных составных
 диапазона. Диапазон «TRange1» будет получен путем преобразования указанного
 адреса. Диапазон «TRange2» является составным диапазоном, состоящим из
 непересекающихся частей (Адрес диапазона: A0:D0;A1:E2;B3:E3;D4:E5). Диапазон
 «TRange3» является составным диапазоном, состоящим из непересекающихся
 частей, которые получены с учетом скрытых областей (Адрес диапазона: A0:B2;B3;D0;D1:E5).


См. также:


[ITabRange](ITabRange.htm) | [ITabRange.Part](ITabRange.Part.htm) | [ITabRange.PartCount](ITabRange.PartCount.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
