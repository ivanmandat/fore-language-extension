# IABACEvaluateCallback.AttrValue

IABACEvaluateCallback.AttrValue
-


# IABACEvaluateCallback.AttrValue


## Синтаксис


AttrValue(Id: String, Var Success: Boolean): Variant;


## Параметры


Id. Идентификатор атрибута;


Success. Признак допустимого
 значения атрибута. Параметр принимает значения:


	- True. Функция возвращает
	 заданное значение запрашиваемого атрибута. Результат вычисления доступа
	 зависит от возвращаемого значения атрибута;


	- False. Результат вычисления
	 доступа при запрашиваемом значении атрибута не определен.


## Описание


Метод AttrValue возвращает значение
 атрибута.


## Комментарии


Метод задается в виде функции:


	Public Class Callback:Object, IABACEvaluateCallback

	    Public Function AttrValueRaw(Id: String; Var Result: Variant): Boolean;

	    Var

	        Success: Boolean;

	    Begin

	        If Id = "<идентификатор атрибута>" Then

	            Result := <значениеатрибута>;

	            Success := True;

	        Else

	            Success := False;

	        End If;

	        Return Success;

	    End Function AttrValueRaw;


	    Public Function AttrValue(Id: String; Var Success: Boolean): Variant;

	    Begin

	        Success := False;

	    Return Null;

	    End Function AttrValue;

	End Class Callback;


Если значение атрибута пустое и не задано в функции AttrValue,
 то вычислитель атрибутного доступа пропустит атрибут с пустым значением.
 Убедитесь, что у всех атрибутов задано значение или задайте проверку значений
 всех атрибутов в функции.


## Пример


Использование метода приведено в примере для [IABACEngine.Evaluate](../IABACEngine/IABACEngine.Evaluate.htm).


См. также:


[IABACEvaluateCallback](IABACEvaluateCallback.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
