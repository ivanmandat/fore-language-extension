# IValueConverter.Convert

IValueConverter.Convert
-


# IValueConverter.Convert


## Синтаксис


Convert(Value: Variant): Variant;


## Параметры


Value. Преобразуемое значение.


## Описание


Метод Convert преобразует
 указанное значение.


## Комментарии


Тип значения, полученного в результате преобразования необходимо определить
 в свойстве [IValueConverter.DataType](IValueConverter.DataType.htm).


## Пример


Приведен пример пользовательского класса, выполняющего округление вещественных
 значений.


Добавьте ссылки на системные сборки: Cubes, Dal, MathFin.


	// Класс, выполняющий преобразование значений

	Class Converter: Object, IValueConverter

	    // Функция преобразования значений

	    Public Function Convert(Value: Variant): Variant;

	    Begin

	        // Выполняем округление значения

	        Return Math.Round(Value As Double,2);

	    End Function Convert;

	    // Возвращаем тип преобразованных значений

	    Public Function get_DataType: DbDataType;

	    Begin

	        Return dbDataType.Float;

	    End Function get_DataType;

	    // Функция для проверки возможности преобразования значения

	    Public Function TryConvert(Value: Variant; Var Result: Variant): Boolean;

	    Begin

	        Try

	            // Если преобразование возможно, то функция вернёт значение True

	            Result := Convert(Value);

	            Return True;

	        Except

	        End Try;

	        // Если преобразование невозможно, то функция вернёт значение False

	        Return False;

	    End Function TryConvert;

	End Class Converter;


См. также:


[IValueConverter](IValueConverter.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
