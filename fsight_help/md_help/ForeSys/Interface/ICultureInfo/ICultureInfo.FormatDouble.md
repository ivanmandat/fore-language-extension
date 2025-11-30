# ICultureInfo.FormatDouble

ICultureInfo.FormatDouble
-


# ICultureInfo.FormatDouble


## Синтаксис


FormatDouble(Value: Double): String;


## Параметры


Value. Значение, приводимое
 к строковому типу.


## Описание


Метод FormatDouble преобразует
 вещественное значение к строковому типу в соответствии с настройками региональных
 стандартов.


## Пример


	Sub UserProc;

	Var

	    CF: ICultureInfo;

	    s: String;

	Begin

	    CF := CultureInfo.Current;

	    s := CF.FormatDouble(12312300000.1123);

	End Sub UserProc;


После выполнения примера в переменной «s» будет содержаться строковое
 представление числа «12312300000.1123». Для русских настроек региональных
 стандартов будет значение «12312300000,1123».


См. также:


[ICultureInfo](ICultureInfo.htm) | [ICultureInfo.FormatDoublePrec](ICultureInfo.FormatDoublePrec.htm)
 | [ICultureInfo.FormatDoubleWithGroupingSeparator](ICultureInfo.FormatDoubleWithGroupingSeparator.htm)


		Справочная
		 система на версию 10.9
		 от 18/08/2025,
		 © ООО «ФОРСАЙТ»,
