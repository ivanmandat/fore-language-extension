# IMetabaseCache.SharedValue

IMetabaseCache.SharedValue
-


# IMetabaseCache.SharedValue


## Синтаксис


SharedValue(Id: String): Variant;


## Параметры


Id. Идентификатор глобальной
 переменной.


## Описание


Свойство SharedValue возвращает
 текущее значение глобальной переменной.


## Пример


Для выполнения примера предполагается наличие созданной в настройках
 репозитория глобальной переменной GLOBAL_INT. Переменная имеет целочисленный
 тип данных.


			Sub UserProc;

Var

    MB: IMetabase;

    sValue: Integer;

Begin

    MB := MetabaseClass.Active;

    sValue := Mb.Cache.SharedValue("GLOBAL_INT") As Integer;

    Debug.WriteLine(sValue);

End Sub UserProc;


После выполнения примера в окно консоли будет выведено текущее значение
 указанной глобальной переменной.


См. также:


[IMetabaseCache](IMetabaseCache.htm) | [ISharedParams](KeFore.chm::/Interface/ISharedParams/ISharedParams.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
