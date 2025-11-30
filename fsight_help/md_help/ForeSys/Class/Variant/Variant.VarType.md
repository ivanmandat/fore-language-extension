# Variant.VarType

Variant.VarType
-


# Variant.VarType


## Синтаксис


VarType: [ForeVariantType](../../Enums/ForeVariantType.htm);


## Описание


Свойство VarType возвращает
 тип данных, к которому принадлежит значение переменной.


## Пример


	Sub UserProc;

	Var

	    v: Variant;

	Begin

	    v := "Строка";

	    Debug.WriteLine(v.VarType);

	End Sub UserProc;


После выполнения примера в окно консоли выводится сообщение, содержащее
 тип, к которому принадлежит значение переменной «v».


См. также:


[Variant](Variant.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
