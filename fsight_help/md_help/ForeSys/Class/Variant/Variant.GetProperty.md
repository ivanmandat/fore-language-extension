# Variant.GetProperty

Variant.GetProperty
-


# Variant.GetProperty


## Синтаксис


GetProperty(Name: String): Variant;


## Параметры


Name. Наименование свойства, значение которого
 необходимо получить.


## Описание


Метод GetProperty позволяет
 получить значение указанного свойства объекта, хранящегося в переменной.


## Пример


	Sub UserProc;

	Var

	    v: Variant;

	Begin

	    Try

	        v := Variant.GetActiveObject("Excel.Application");

	        v := v.GetProperty("Name");

	    Except

	        Debug.WriteLine("Не удалось получить наименование объекта");

	    End Try;

	End Sub UserProc;


После выполнения примера, если приложение Excel открыто, то в переменной
 «v» будет содержаться наименование этого приложения.


См. также:


[Variant](Variant.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
